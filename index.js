const moment = require('moment');
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "25d0e530",
    apiSecret: "NgVz3mtXfuu0HBl3"
})

const FROM = "SELF REMINDER"
const TO = "22892251620"
const TEXT = 'A text message sent using the Vonage SMS API'

const DAY_NUMBER = 5;
const HOUR = 19;
const MINUTES = 05;

let date;
let lastWeek = 0;
setInterval(function () {
    date = new Date();
    if(date.getDay() == DAY_NUMBER && date.getUTCHours() == HOUR && date.getUTCMinutes() == MINUTES){
        if(lastWeek != moment().format('W')){
            sendMessage();
        }
    }
}, 5000);

function sendMessage(){
    vonage.message.sendSms(FROM, TO, TEXT, (err, responseData) => {
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