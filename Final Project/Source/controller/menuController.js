const ejs = require('ejs');
const nodemailer = require('nodemailer');
const connection = require('../dbConnector');
const dbHelper = require('../helper/dbHelper'); 


module.exports.showMenu = (req, res, next) => {    
    (async () => {
        try {            
            let menu = await dbHelper.queryDatabase('SELECT * FROM category');
            let dishes = await dbHelper.queryDatabase('SELECT * FROM dish');          
            res.render('menu', {objCategories:menu, objDish:dishes});            
        } catch (error) {
            console.error(error);
        } finally {
           
        }
    })();  
    
}

module.exports.loadFoodDetail = (req, res, next) => {    
    res.render('foodDetail');     
}

module.exports.loadFoodByCategoryId = (req, res, next) => {    
    (async () => {
        try {            
            let query = 'SELECT * FROM dish ';
            if (req.params.id != '0')
                query = query + ' WHERE catId=' + req.params.id;

            let dishes = await dbHelper.queryDatabase(query);          
            res.render("menuPartial", {objDish:dishes})          
        } catch (error) {
            console.error(error);
        } finally {
           
        }
    })();  
}

