// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

const express = require('express');

const app = express();
let countRequest = 0;

function countRequestMiddleware(req, res, next){
    countRequest++;
    next();
}

app.use(countRequestMiddleware);

app.get('/user', function(req, res){
    res.json({
        request : countRequest
    });
});

app.get('/login', function(req, res){
    res.json({
        request : countRequest
    });
});

app.get('/register', function(req, res){
    res.json({
        request : countRequest
    });
});

app.listen(3000);

