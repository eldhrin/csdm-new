var express = require('express');
var router = express.Router();
var ping = require ('ping');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var msg = '';
var test = 'test';
var pinged = require('./../ping.js');

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
    if(err) throw err;
    var dbo = db.db("csdm");
    console.log("Connected to DB");
});

var N533 = ['rg-n533a-01','rg-n533-a01','rg-n533-a02','rg-n533-a03','rg-n533-a04','rg-n533-a05','rg-n533-a06','rg-n533-a07','rg-n533-a08',
            'rg-n533-b01','rg-n533-b02','rg-n533-b03','rg-n533-b04','rg-n533-b05','rg-n533-b06','rg-n533-b07','rg-n533-n08',
            'rg-n533-c01','rg-n533-c02','rg-n533-c03','rg-n533-c04',
            'rg-n533-d01','rg-n533-d02','rg-n533-d03','rg-n533-d04',
            'rg-n533-e01','rg-n533-e02','rg-n533-e03','rg-n533-e04','rg-n533-e05','rg-n533-e06','rg-n533-e07','rg-n533-e08',
            'rg-n533-f01','rg-n533-f02','rg-n533-f03','rg-n533-f04','rg-n533-f05','rg-n533-f06','rg-n533-f07','rg-n533-f08',
            'rg-n533-g01','rg-n533-g02','rg-n533-g03','rg-n533-g04','rg-n533-g05','rg-n533-g06','rg-n533-g07','rg-n533-g08',
            'rg-n533-h01','rg-n533-h02','rg-n533-h03','rg-n533-h04','rg-n533-h05',
            'rg-n533-i01','rg-n533-i02','rg-n533-i03','rg-n533-i04','rg-n533-i05','rg-n533-i06','rg-n533-i07',
            'rg-n533-j01','rg-n533-j02','rg-n533-j03','rg-n533-j04','rg-n533-j05',
            'rg-n533-k01','rg-n533-k02','rg-n533-k03',
            'rg-n533-l01','rg-n533-l02','rg-n533-l03','rg-n533-l04','rg-n533-l05','rg-n533-l06','rg-n533-l07','rg-n533-l08',
            'rg-n533-m01','rg-n533-m02','rg-n533-m03','rg-n533-m04','rg-n533-m05','rg-n533-m06','rg-n533-m07','rg-n533-m08',
            'rg-n533-n01','rg-n533-n02','rg-n533-n03','rg-n533-n04','rg-n533-n05',
            'rg-n533-o01','rg-n533-o02','rg-n533-o03','rg-n533-o04','rg-n533-o05',
            'rg-n533-p01','rg-n533-p02','rg-n533-p03','rg-n533-p04','rg-n533-p05','rg-n533-p06','rg-n533-p07','rg-n533-p08',
            'rg-n533-q01','rg-n533-q02','rg-n533-q03','rg-n533-q04','rg-n533-q05','rg-n533-q06','rg-n533-q07','rg-n533-q08',
            'rg-n533-r01','rg-n533-r02','rg-n533-r03','rg-n533-r04','rg-n533-r05',
            'rg-n533-pod'];
var N530 = ['rg-n530-a01','rg-n530-a02','rg-n530-a03','rg-n530-a04','rg-n530-a05','rg-n530-a06','rg-n530-a07','rg-n530-a08','rg-n530-a09','rg-n530-a10','rg-n530-a11','rg-n530-a12',
            'rg-n530-b01','rg-n530-b02','rg-n530-b03','rg-n530-b04','rg-n530-b05','rg-n530-b06','rg-n530-b07','rg-n530-b08','rg-n530-b09','rg-n530-b10','rg-n530-b11','rg-n530-b12',
            'rg-n530-c01','rg-n530-c02','rg-n530-c03','rg-n530-c04','rg-n530-c05','rg-n530-c06','rg-n530-c07','rg-n530-c08','rg-n530-c09','rg-n530-c10','rg-n530-c11','rg-n530-c12',
            'rg-n530-d01','rg-n530-d02','rg-n530-d03','rg-n530-d04','rg-n530-d05','rg-n530-d06','rg-n530-d07','rg-n530-d08',
            'rg-n530-e01','rg-n530-e02','rg-n530-e03','rg-n530-e04','rg-n530-e05','rg-n530-e06','rg-n530-e07','rg-n530-e08',
            'rg-n530-pod'];
var N528N529 =['rg-n529-a01','rg-n529-a02','rg-n529-a03','rg-n529-a04','rg-n529-a05','rg-n529-a06',
            'rg-n529-b01','rg-n529-b02','rg-n529-b03','rg-n529-b04','rg-n529-b05','rg-n529-b06','rg-n529-b07','rg-n529-b08','rg-n529-b09','rg-n529-b10','rg-n529-b11','rg-n529-b12',
            'rg-n529-c01','rg-n529-c02','rg-n529-c03','rg-n529-c04','rg-n529-c05','rg-n529-c06','rg-n529-c07','rg-n529-c08','rg-n529-c09','rg-n529-c10','rg-n529-c11','rg-n529-c12',
            'rg-n529-pod',
            'rg-n528-a01','rg-n528-a02','rg-n528-a03','rg-n528-a04','rg-n528-a05','rg-n528-a06',
            'rg-n528-b01','rg-n528-b02','rg-n528-b03','rg-n528-b04','rg-n528-b05','rg-n528-b06','rg-n528-b07','rg-n528-b08','rg-n528-b09','rg-n528-b10','rg-n528-b11','rg-n528-b12',
            'rg-n528-c01','rg-n528-c02','rg-n528-c03','rg-n528-c04','rg-n528-c05','rg-n528-c06','rg-n528-c07','rg-n528-c08','rg-n528-c09','rg-n528-c10','rg-n528-c12','rg-n528-c12',
            'rg-n528-pod'];
var N527 = ['rg-n527-a01','rg-n527-a02','rg-n527-a03','rg-n527-a04','rg-n527-a05',
            'rg-n527-b01','rg-n527-b02','rg-n527-b03','rg-n527-b04',
            'rg-n527-c01','rg-n527-c02','rg-n527-c03','rg-n527-c04','rg-n527-c05',
            'rg-n527-d01','rg-n527-d02','rg-n527-d03','rg-n527-d04',
            'rg-n527-e01','rg-n527-e02','rg-n527-e03','rg-n527-e04','rg-n527-e05',
            'rg-n527-f01','rg-n527-f02','rg-n527-f03',
            'rg-n527-g01','rg-n527-g02','rg-n527-g03','rg-n527-g04','rg-n527-g05',
            'rg-n527-pod'];
var N523 = ['rg-n523-01','rg-n523-02','rg-n523-03','rg-n523-04','rg-n523-05','rg-n523-06','rg-n523-07','rg-n523-08','rg-n523-09','rg-n523-10','rg-n523-11','rg-n523-12',
            'rg-n523-13','rg-n523-14','rg-n523-15','rg-n523-16','rg-n523-17','rg-n523-18','rg-n523-19','rg-n523-20','rg-n523-21','rg-n523-22','rg-n523-23','rg-n523-24',
            'rg-n523-pod'];
var N519 = ['rg-n519-01','rg-n519-02','rg-n519-03','rg-n519-04','rg-n519-05','rg-n519-06','rg-n519-07','rg-n519-08'];
var N424 = ['rg-n424-01','rg-n424-02','rg-n424-03','rg-n424-04','rg-n424-05','rg-n424-06','rg-n424-07','rg-n424-08','rg-n424-09','rg-n424-10','rg-n424-11','rg-n424-12',
            'rg-n424-13','rg-n424-14','rg-n424-15','rg-n424-16','rg-n424-17','rg-n424-18','rg-n424-19','rg-n424-20','rg-n424-21','rg-n424-22','rg-n424-23','rg-n424-24',
            'rg-n424-pod'];
var N427 = ['rg-n427-01','rg-n427-02', 'rg-n427-03', 'rg-n427-pod', 'rg-n427-z1'];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSDM' });
});

router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    if (name === 'N533') {
        name = N533;
    }
    if (name === 'N530') {
        name = N530;
    }
    if (name === 'N528-529') {
        name = N528N529;
    }
    if (name === 'N527') {
        name = N527;
    }
    if (name === 'N523') {
        name = N523;
    }
    if (name === 'N519') {
        name = N519;
    }
    if (name === 'N424') {
        name = N424;
    }
    if (name === 'N427') {
        name = N427;
    }


    name.forEach(function (host){
        ping.sys.probe(host, function (isAlive) {
            msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            console.log(msg);
        });
    });

    // var query = {rid: name};
    // MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("csdm");
    //     console.log("Connected to DB");
    //     dbo.collection("csdm").find(query).toArray(function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });

        res.render('room', {title: req.params.name, p:msg});


});

module.exports = router;