const connection = require('../helper/dbHelper');

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
            const QUERY = 'INSERT INTO reservation(' +
                                'resDateTime, ' +
                                'noOfPerson, ' +
                                'cusName, ' +
                                'cusEmail, ' +
                                'cusPhone)' +
                            'VALUES ?';
            connection.query(QUERY, [resObj], (result, err) => {
                if (err) {
                    throw new Error('Internal Server Error');
                }
            });
            resolve(result);
        });
        
    }
}

module.exports = Reservation;