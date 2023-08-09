const path = require('path');

let users = []; // [{username:'a', age:30}, {username:'b', age:31}]
let body;
exports.showIndexPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../html', 'index.html'));
};

exports.handlePost = (req, res, next) => {
    body = req.body;
    console.log(body);
    // check if user is existed
    let idx = users.findIndex(user => user.username == req.body.username);
    if (idx<0) {
        let newUser = {};
        newUser.username = req.body.username;
        newUser.age = req.body.age;
        users.push(newUser);
        res.redirect('/user/preview');
    } else {
        res.redirect('/admin');
    }
};

exports.showPreview = (req, res, next) => {
    let printUsers = '<table>'+
                    '<tr><th>Username</th><th>Age</th></tr>';
    for (let user of users) {
        printUsers += '<tr><td>' + user.username + '</td><td>'+ user.age +'</td></tr>';
    }
    printUsers += '</table>';
    res.send(printUsers);
}