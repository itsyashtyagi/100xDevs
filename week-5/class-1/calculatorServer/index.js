const express = require('express');

const app = express();

app.get('/sum', function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.status(200).json({
        "sum" : sum
    });
});

// dynamic route
app.get('/add/:a/:b', function(req, res) {
    const a = req.params.a;
    const b = req.params.b;

    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.status(200).json({
        "sum" : sum
    });
});

app.get('/mutilpy', function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    const mutiply = a * b;
    res.status(200).json({
        multipy : mutiply
    });
});

app.get('/divide', function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    const divide = a / b;
    res.status(200).json({
        divide : divide
    });
});

app.get('/substract', function(req, res){
    const a = req.query.a;
    const b = req.query.b;

    const substract = a - b;

    res.status(200).json({
        substract : substract
    });

});

app.listen(3000);
