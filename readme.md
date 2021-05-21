# Sms-reminder
## A node script to send sms on specific date and time

This script let you send a text message(sms) to your mobile phone for reminding purpose. To install, clone the project and install dependancies with :
> npm install

### Required environnement variables are :

**FROM** : The message sender name.

**TO** : The receiver's phonenumber.

**TEXT** : The message text.

**DAY_NUMBER** : The day number

**HOUR** : Hour

**MINUTES** : Minutes

The sms api service used is **Vonage** known also as **Nexmo**. To be able to send sms you must create a Vonage account and specify some specific environnement variables.

**API_KEY** : Your Vonage API_KEY

**API_SECRET** : Your Vonage API_SECRET
