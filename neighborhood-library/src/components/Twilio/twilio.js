const express = require("express");
const cors = require("cors");
const twilio = require("twilio")


const accountsID = "AC477f4a00aae340ebc455921f41903627";
const authToken = "63ca807b60b0a14d9ecfa1a9793531d0";
const client = new twilio(accountsID, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+18188624741' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(3000, () => console.log("Running on Port 4000"))