const path = require('path')

let counter = 0;
let name = '';
let skill = '';

module.exports.showExamPage = (req, res, next) => {
    counter++;
    res.sendFile(path.join(__dirname, '../exam.html'));
}

module.exports.handlePost = (req, res, next) => {
    name = req.body.name;
    skill = req.body.skill;
    res.redirect('/preview');
}

function showPreview(req, res, next) {
    let html = '<div>User clicked: '+ counter + '</div>' +
    '<div>Name: '+ name + '</div>' +
    '<div>Skill: '+ skill + '</div>'
res.send(html);
}

module.exports.showPreview = showPreview;

// module.exports.showPreview = (req, res, next) => {
//     let html = '<div>User clicked: '+ counter + '</div>' +
//                 '<div>Name: '+ name + '</div>' +
//                 '<div>Skill: '+ skill + '</div>'
//     res.send(html);
    
// }
