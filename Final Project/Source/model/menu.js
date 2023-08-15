const db = require('../dbConnector');

module.exports = class OrderItem{

    static  getCatagories()
    {
        let menu =  db.query('SELECT * FROM category');
        return menu;
    }

    static getDishById(dishId)
    {
        const query = "SELECT * FROM dish WHERE dishId =  " + dishId;
        let dish =  db.query(query);
        return dish;
    }

    static getDishes()
    {
        const query = "SELECT * FROM dish ";
        return db.query(query);
       
    }

    static getDishByCatagory(catId)
    {
        const query = "SELECT * FROM dish WHERE catId= " + catId;
        return  db.query(query);
        
    }

    static addComment(objComment)
    {
        console.log('insert COmment');
        console.log(objComment);
        let query = `INSERT INTO review(dishId, revName, revDetail) VALUES('${objComment.dishId}','${objComment.name}','${objComment.comment}')`
        db.query(query);          

    }

    static getReviews(dishId)
    {
        let query = 'SELECT * FROM review WHERE dishId=' + dishId;  
        return db.query(query);
    }

    static getNutritions(dishId)
    {
        let query = 'SELECT * FROM nutrition WHERE dishId=' + dishId;  
        return db.query(query);
    }

}