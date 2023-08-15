const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'restaurant',
    connectTimeout: 60000
};

const emailConfig = {
    service: 'gmail',
    auth: {
        user: '111d00111@mail.cjcu.edu.tw',
        pass: 'HuanHuan'
    }
};

const emailOptions = {
    from: '111d00111@mail.cjcu.edu.tw',
    to: '', // setup later
    subject: '', // setup later
    html: '' // setup later
};

module.exports = {dbConfig, emailConfig, emailOptions};