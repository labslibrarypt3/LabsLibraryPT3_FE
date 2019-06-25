const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const { ChatGrant} = AccessToken;

const chatToken = (identity, config) => {
const chatGrant = new ChatGrant({
    serviceSid: config.twilio.chatService
});
const token = new AccessToken(
    config.twilio.accountSid,
    config.twilio.apiKey,
    config.twilio.apiSecret
);
token.addGrant(chatGrant);
token.identity = identity;
return token;
};

module.exports = { chatToken };