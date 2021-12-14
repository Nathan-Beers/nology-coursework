const moment = require('moment');

const aDay = new Date();
const niceDay = moment(aDay).format('dddd, MMMM Do YYYY, h:mm:ss a');
console.log(niceDay);

