const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "YashTyagiRandom";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)){
        res.status(403).json({
            message : "Already had a user with this username"
        })
    }
    else {
        users.push({
            username : username,
            password : password
        })

        res.status(201).json({
            message : "New user created successfully"
        })
    }
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.status(200).json({
            accessToken : token
        });
    } else {
        res.status(404).json({
            maessage : "Invalid username or password"
        })
    }
})

function auth(req, res,next){
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;

    if(username){
        req.user = username;
        next();
    } else {
        res.status(404).json({
            message : "Invalid token"
        })
    }
}

app.get("/me", auth, function(req, res){
    const requestUser = req.user;

    const user = users.find(u => u.username === requestUser);

    res.status(200).json({
        username : user.username,
        password : user.password
    })
})

app.listen(3000);
