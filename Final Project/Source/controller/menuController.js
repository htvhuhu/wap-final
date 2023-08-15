const ejs = require('ejs');
const nodemailer = require('nodemailer');
const connection = require('../dbConnector');
const dbHelper = require('../helper/dbHelper'); 


module.exports.showMenu = async (req, res, next) => {       
        try {            
            let menu = await dbHelper.queryDatabase('SELECT * FROM category');
            let dishes = await dbHelper.queryDatabase('SELECT * FROM dish');          
            res.render('menu', {objCategories:menu, objDish:dishes});            
        } catch (error) {
            console.error(error);
        } finally {
           
        } 
   
}

module.exports.loadDishDetail = async  (req, res, next) => {    
    var id = req.params.id;
       
        try {            
            let query = 'SELECT * FROM dish WHERE dishId=' + id;            

            let arrDish = await dbHelper.queryDatabase(query); 
            let dish = arrDish[0];
            query = 'SELECT * FROM review WHERE dishId=' + id;  
            let reviews = await dbHelper.queryDatabase(query);           
                
            res.render("dish", {objDish:dish, ingredients:dish.ingredients.split(','), objReview:reviews }) ;            
        } catch (error) {
            console.error(error);
        } finally {
           
        }      
       
}

module.exports.loadDishByCategoryId = async (req, res, next) => {     
        try {            
            let query = 'SELECT * FROM dish ';
            if (req.params.id != '0')
                query = query + ' WHERE catId=' + req.params.id;

            let dishes = await dbHelper.queryDatabase(query);          
            res.render("partials/_dishList", {objDish:dishes})          
        } catch (error) {
            console.error(error);
        } finally {
           
        }    
}

module.exports.addComment = async (req, res, next) => {    
        try {       
            let query = `INSERT INTO review(dishId, revName, revDetail) VALUES('${req.body.dishId}','${req.body.name}','${req.body.comment}')`
            dbHelper.queryDatabase(query);    

            query = 'SELECT * FROM review WHERE dishId=' + req.body.dishId;  
            let reviews = await dbHelper.queryDatabase(query);
            res.render("partials/_menuComment", {objReview:reviews})              
        } catch (error) {
            console.error(error);
        } finally {
           
        }    
}