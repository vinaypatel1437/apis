const PORT = process.env.PORT || 8080;
const express = require("express")
const cors = require('cors')
const app = express();
const all = require('./data/all.js');
const keto = require('./data/keto.js');
const vegan = require('./data/vegan.js');
const dash = require('./data/dash.js');
const medit = require('./data/medit.js');
const paleo = require('./data/paleo.js');

app.use(cors())
app.use(express.json())


app.get('/food/all', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: all,
        });
    })
});
app.get('/food/keto', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: keto,
        });
    })
});
app.get('/food/dash', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: dash,
        });
    })
});
app.get('/food/medit', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: medit,
        });
    })
});
app.get('/food/paleo', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: paleo,
        });
    })
});
app.get('/food/vegan', (req, res) => {
    setTimeout(() => {
        res.json({
            message: "Data Success",
            method: req.method,
            url: req.url,
            data: vegan,
        });
    })
});
app.listen(PORT, () => {
    console.log("running on Port 3001")
})