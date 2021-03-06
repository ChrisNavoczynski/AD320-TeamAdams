const mongoose = require("mongoose");
require("dotenv").config({ path: `${__dirname}/../.env` });

const messagesData = require("./messages");

const Messages = require("../models/messages");

messagesData.messagesList.forEach((message) => {
    Messages.create(message).catch((err) => console.log(err));
});

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const uri = `mongodb+srv://${user}:${password}@projectapp.7ulwe.mongodb.net/local_library?retryWrites=true&w=majority`;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log("Connected successfully"); },
        (err) => { console.log(`Connection failed with ${err}`); },
    );

setTimeout(() => mongoose.connection.close(), 2000);
