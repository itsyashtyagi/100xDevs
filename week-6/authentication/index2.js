const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomyashtyagi";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)){
        res.status(403).json({
            message : "Your is already registered"
        })
    } else {
        users.push({
            username : username,
            password : password
        })
    
        res.status(201).json({
            message : "You are signed in"
        })
    }
});

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET); // convert there username over to a jwt

        // user.token = token;
        res.status(200).json({
            bearerToken : token  
        });
    } else {
        res.status(403).json({
            message : "The username or password was invalid"
        })
    }
});


app.get("/me", function(req, res){
    const token = req.headers.authorization; // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;

    const user = users.find(u => u.username === username);

    if(user){
        res.status(200).json({
            username : username,
            password : user.password
        })
    } else {
        res.status(403).json({
            message : "Invalid token"
        })
    }
});

app.listen(3000); // The https server is listening on port 3000