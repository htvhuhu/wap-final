// Sample data for the menu.ejs template
let dishesSampleData = [
    {
        id: 1,
        name: "Pho",
        description: "A Vietnamese soup consisting of broth, rice noodles, and meat.",
        price: 10.99,
        category: "Main Course",
        ingredients: "Rice noodles, beef, onions, ginger, coriander...",
        image_url: "./images/pho.jpg"
    },
    {
        id: 2,
        name: "Banh Mi",
        description: "A Vietnamese sandwich that consists of a French baguette filled with a variety of ingredients.",
        price: 5.99,
        category: "Snack",
        ingredients: "Baguette, pork, pickled vegetables, pâté, cilantro...",
        image_url: "./images/banhmi.jpg"
    },
    // ... more dishes ...
];

// Sample data for the order.ejs template
let orderModel = {
    id: 100,
    user_name: "John Doe",
    shipment_info: "123 Pho Street, Hanoi, Vietnam",
    status: "pending",
    orderItems: [
        {
            id: 1,
            dish: dishesSampleData[0],  // Reference to the Pho dish
            quantity: 5
        },
        {
            id: 2,
            dish: dishesSampleData[1],  // Reference to the Banh Mi dish
            quantity: 7
        }
    ],
};

module.exports = orderModel;