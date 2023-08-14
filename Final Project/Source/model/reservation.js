const db = require('../dbConnector');

class Reservation {
    constructor(resId, resDateTime, noOfPerson, cusName, cusEmail, cusPhone) {
        this.resId = resId;
        this.resDateTime = resDateTime;
        this.noOfPerson = noOfPerson;
        this.cusName = cusName;
        this.cusEmail = cusEmail;
        this.cusPhone = cusPhone;
    }

    static addReservation(reservation) {
        return new Promise((resolve, reject) => {
            const resObj = {
                resDateTime: new Date(),
                noOfPerson: reservation.noOfPerson,
                cusName: reservation.cusName,
                cusEmail: reservation.cusEmail,
                cusPhone: reservation.cusPhone
            };
            let QUERY = 'INSERT INTO reservation(' +
                'resDateTime, ' +
                'noOfPerson, ' +
                'cusName, ' +
                'cusEmail, ' +
                'cusPhone)' +
                'VALUES (?)';
            db.query(QUERY, [resObj]).then(rows => {
                // do something with the result
            }).catch(err => {
                throw new Error(err.message);
            });

        });

    }
}

module.exports = Reservation;