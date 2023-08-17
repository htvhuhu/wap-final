const ejs = require('ejs');
const nodemailer = require('nodemailer');
const db = require('../dbConnector');
const menuModel = require('../model/menu');

module.exports.showMenu = async (req, res, next) => {
    try {
        let menu = await menuModel.getCatagories();
        let dishes = await menuModel.getDishes();
        let orderItems = req.session.orderItems ?? [];
        res.render('menu', { objCategories: menu, objDish: dishes, orderItems: orderItems });
    }
    catch (error) {
        throw error;
    }
}

module.exports.loadDishDetail = async (req, res, next) => {
    var id = req.params.id;
    try {
        let arrDish =  await menuModel.getDishById(id);
        let dish = arrDish[0];

        let reviews = await menuModel.getReviews(id);

        let objingredient = [];

        if (dish.ingredients != null)
            objingredient = dish.ingredients.split(',')

        let nutrition = await menuModel.getNutritions(id);

        let orderItems = req.session.orderItems ?? [];

        res.render("dish", { objDish: dish, ingredients: objingredient, objReview: reviews, objNutrition: nutrition, orderItems: orderItems });

    } catch (error) {
        throw error;
    }
}

module.exports.loadDishByCategoryId = async (req, res, next) => {
    try {
        let dishes;
        if (req.params.id != '0')
            dishes = await menuModel.getDishByCatagory(req.params.id);
        else
            dishes = await menuModel.getDishes();

        let orderItems = req.session.orderItems ?? [];
        res.render("partials/_dishList", { objDish: dishes, orderItems: orderItems })

    } catch (error) {
        throw error;
    }
}

module.exports.addComment = async (req, res, next) => {
    try {
        let objComment = {};
        objComment.dishId = req.body.dishId;
        objComment.name = req.body.name;
        objComment.comment = req.body.comment;

        await menuModel.addComment(objComment);

        let reviews = await menuModel.getReviews(req.body.dishId);

        res.render("partials/_menuComment", { objReview: reviews })

    } catch (error) {
        throw error;
    }
}