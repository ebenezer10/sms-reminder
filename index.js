require('dotenv').config();
const moment = require('moment');
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
})

let date;
let lastWeek = 0;
setInterval(function () {
    date = new Date();
    if(date.getDay() == process.env.DAY_NUMBER && date.getUTCHours() == process.env.HOUR && date.getUTCMinutes() == process.env.MINUTES){
        if(lastWeek != moment().format('W')){
            sendMessage();
        }
    }
}, 5000);

function sendMessage(){
    vonage.message.sendSms(process.env.FROM, process.env.TO, process.env.TEXT, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                lastWeek = moment().format('W')
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}