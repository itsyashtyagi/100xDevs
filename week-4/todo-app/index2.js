// Basics of Middlewares

const express = require('express');

const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "You are not of the age yet"
        });
    }
}

app.use(isOldEnoughMiddleware); // for the entire app ( Order matters in this )

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
    res.status(201).json({
        msg: "You have booked the ride 2 successfully"
    });
})

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    res.status(201).json({
        msg: "You have booked the ride 1 successfully"
    });
})

app.listen(3000);
