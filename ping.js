// /**
//  * Created by fl8328 on 31/10/2018.
//  */
var ping = require('ping');
var N533 = ['rg-n425-sfb'];
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

var msg = '';

N533.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N530.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N528N529.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N527.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N523.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N519.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N424.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
    });
});
N427.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        msg= isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead' ;
    });
});

exports.msg = msg;
