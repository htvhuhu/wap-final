const ejs = require('ejs');
const nodemailer = require('nodemailer');
const db = require('../dbConnector');


module.exports.showMenu = (req, res, next) => {    
    (async () => {
        try {            
            let menu = await db.query('SELECT * FROM category');
            let dishes = await db.query('SELECT * FROM dish');  
            let orderItems = req.session.orderItems ?? [];  
            console.log(orderItems);       
            res.render('menu', {objCategories:menu, objDish:dishes, orderItems:orderItems});            
        } catch (error) {
            console.error(error);
        } finally {
        }
    })();  
    
}

module.exports.loadFoodDetail = (req, res, next) => {    
    res.render('dish');     
}

module.exports.loadFoodByCategoryId = (req, res, next) => {    
    (async () => {
        try {            
            let query = 'SELECT * FROM dish ';
            if (req.params.id != '0')
                query = query + ' WHERE catId=' + req.params.id;

            let dishes = await db.query(query);          
            res.render("menuPartial", {objDish:dishes})          
        } catch (error) {
            console.error(error);
        } finally {
        }
    })();  
}

