const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'loginpage.html'))
});
app.listen(5000, () => {
    console.log("server is running at")
})