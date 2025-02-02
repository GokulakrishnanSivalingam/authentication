const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
const port = 5172;


const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb://localhost:27017/test");
connect.then(() => {
    console.log("login connected")
})

const userschema = new mongoose.Schema({
    email: String,
    password: String

});
const collection = new mongoose.model("log", userschema);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.post("/", async(req, res) => {
    const datas = {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    };

    try {

        const userdata = await collection.insertMany(datas);
        console.log(userdata);
        res.status(200).json()


    } catch (error) {
        res.status(500).send("Server Error");
    }
});

const connects = mongoose.connect("mongodb://localhost:27017/test");
connects.then(() => {
    console.log("login connected")
})

const userschemass = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },

});
const collectionss = new mongoose.model("register", userschemass);
app.post("/register", async(req, res) => {
    const datass = {

        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    };

    try {
        const userdatass = await collectionss.insertMany(datass);
        console.log(userdatass);
        res.status(200).json(userdatass);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});


app.listen(port, () => {
    console.log(`server is running at ${port}`)
});