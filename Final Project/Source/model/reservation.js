const db = require('../dbConnector');
const DateTimeHelper =  require("../helper/dateTimeHelper");

class Reservation {
    constructor(resDateTime, noOfPerson, cusName, cusEmail, cusPhone) {
        this.resDateTime = resDateTime;
        this.noOfPerson = noOfPerson;
        this.cusName = cusName;
        this.cusEmail = cusEmail;
        this.cusPhone = cusPhone;
    }

    static addReservation(reservation) {
        return new Promise((resolve, reject) => {
            const newRes = new Reservation(
                DateTimeHelper.createDate(reservation.resDate, reservation.resTime), 
                reservation.noOfPerson,
                reservation.cusName,
                reservation.cusEmail,
                reservation.cusPhone
        );
            let QUERY = 'INSERT INTO reservation SET ? ';
            db.query(QUERY, newRes).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Reservation;