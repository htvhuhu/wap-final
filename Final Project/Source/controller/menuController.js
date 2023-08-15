const ejs = require('ejs');
const nodemailer = require('nodemailer');
const db = require('../dbConnector');


module.exports.showMenu = async (req, res, next) => {   
        try {            
            let menu = await db.query('SELECT * FROM category');
            let dishes = await db.query('SELECT * FROM dish');  
            let orderItems = req.session.orderItems ?? [];  
            console.log(orderItems);       
            res.render('menu', {objCategories:menu, objDish:dishes, orderItems:orderItems});            
        } 
        catch (error) 
        {
            throw error;
        } 
        finally 
        {
        }     
    
}

module.exports.loadDishDetail = async  (req, res, next) => {    
        var id = req.params.id;
       
        try {            
            let query = 'SELECT * FROM dish WHERE dishId=' + id;            

            let arrDish = await db.query(query); 
            let dish = arrDish[0];

            query = 'SELECT * FROM review WHERE dishId=' + id;  
            let reviews = await db.query(query);  

            let objingredient = [];
            
            if (dish.ingredients != null)
                objingredient = dish.ingredients.split(',')
                
            res.render("dish", {objDish:dish, ingredients:objingredient, objReview:reviews }) ;      

        } catch (error) {
            throw error;
        } 
        finally
        {
           
        }      
       
}

module.exports.loadDishByCategoryId = async (req, res, next) => {   
        try {            
            let query = 'SELECT * FROM dish ';
            if (req.params.id != '0')
                query = query + ' WHERE catId=' + req.params.id;

            let dishes = await db.query(query);          
            res.render("partials/_dishList", {objDish:dishes})  

        } catch (error) {
            throw error;
        } 
        finally 
        {
        }   
}

module.exports.addComment = async (req, res, next) => {    
    try {       
        let query = `INSERT INTO review(dishId, revName, revDetail) VALUES('${req.body.dishId}','${req.body.name}','${req.body.comment}')`
        db.query(query);    

        query = 'SELECT * FROM review WHERE dishId=' + req.body.dishId;  
        let reviews = await db.query(query);

        res.render("partials/_menuComment", {objReview:reviews})       

    } catch (error)
    {
        throw error;
    } 
    finally 
    {
       
    }    
}