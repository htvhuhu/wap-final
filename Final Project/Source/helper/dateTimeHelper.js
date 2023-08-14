class DateTimeHelper {
  constructor() { }
  static formatDate(date, format) {
    if (format === undefined) {
      return date.toISOString().slice(0, 19).replace('T', ' ');
    }
    const map = {
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      dd: ("0" + date.getDate()).slice(-2),
      yyyy: date.getFullYear(),
      yy: ("" + date.getFullYear()).slice(-2),
      hh: ("0" + date.getHours()).slice(-2),
      mm: ("0" + date.getMinutes()).slice(-2),
      ss: ("0" + date.getSeconds()).slice(-2),
      SSS: ("00" + date.getMilliseconds()).slice(-3),
    };
    return format.replace(
      /MM|dd|yyyy|yy|hh|mm|ss|SSS/gi,
      (matched) => map[matched]
    );
  }

  // date: MM/DD/YYYY
  // time: HH:mm
  static createDate(date, time) {
    let dateArr = date.split('/');
    let timeArr = time.split(':');
    console.log(dateArr, timeArr);
    let newDate = new Date(dateArr[2], parseInt(dateArr[0])-1, dateArr[1], timeArr[0], timeArr[1], 0);
    return this.formatDate(newDate, 'yyyy-MM-dd hh:mm:ss');
  }
}

// // Example usage:
// const now = new Date();
// console.log(formatDate(now, "yyyy-MM-dd hh:mm:ss")); // e.g., "2023-08-10 14:25:30"
// console.log(formatDate(now, "MM/dd/yyyy")); // e.g., "08/10/2023"
// console.log(formatDate(now, "hh:mm:ss.SSS")); // e.g., "14:25:30.123"

module.exports = DateTimeHelper;
