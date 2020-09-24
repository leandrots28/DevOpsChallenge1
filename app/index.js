const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
        host:'servicename1.namespace1.svc.cluster.local:8088',
        user:'root',
        password:'P@s$W0rd',
        database:'DBNAME1'
});

app.get('/', function(req, res) {
        connection.query('SELECT description from TABLENAME1 WHERE id = 1;', function(error,results){
                if (error) {
                        throw error
                };
                res.send(results);
        });
});

app.listen(8088, '0.0.0.0', function() {
        console.log('Listening on port 8088');
})