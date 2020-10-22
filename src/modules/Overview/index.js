export { default } from './Overview';
// let mysql = require('mysql');
// const events = require('events');

// let express = require('express')


// let app = express();
// let bodyParser = require('body-parser');

// let mysql_cred = require('/home/gb/conf/cred-res-base-v2D-dev/nvd-vuln-parser.json');

// var em = new events.EventEmitter();
// //console.log(mysql_cred)
// devops_db_user = mysql_cred['rw']['username']
// devops_db_pass = mysql_cred['rw']['password']
// devops_db_host = mysql_cred['rw']['url']
// devops_db_host = devops_db_host.split(':')
// url = devops_db_host[0]
// app.use(bodyParser.json());
// //console.log(url)
// app.use(bodyParser.urlencoded({ extended: true }));

// //console.log(devops_db_pass)
// //Database credentials
// var database_con = function () {
//   let connection = mysql.createConnection({
//     host: url,
//     user: devops_db_user,
//     password: devops_db_pass,
//     database: 'application_discovery',
//     connect_timeout: 100000
//   });
//   return connection;
// }

// //Database Connection check
// var database_con_chk = function (connection) {

//   connection.connect(function (err) {
//     if (err) {
//       return console.error('Connection Failed: ' + err.message);
//     }
//     else {
//       console.log('Database Connected');
//     }
//   });
// }

// //POST data function


// var postData = function () {
//   app.post('/postData', (req, res) => {

//     try {
//       console.log('Request Postdata Api')
//       packageData = []
//       let arrData = [];
//       //global.validation_data = []
//       let data = req.body;
//       console.log(data);


//       console.log('Ip address', data['host_ip'])
//       console.log('Packages ', data['packages'])
//       ip_address = data['host_ip']
//       pkg_data_list = data['packages']
//       var current_date = new Date()
//       console.log(current_date)

//       all_data_string = ""

//       for (a = 0; a < pkg_data_list.length; a++) {
//         element = pkg_data_list[a]
//         all_data_string += "('" + ip_address + "','" + element[0] + "','" + element[1] + "', now()),"
//       }
//       all_data_string = all_data_string.substring(0, all_data_string.length - 1)




//       pkg_data_string = ""
//       for (a = 0; a < pkg_data_list.length; a++) {
//         element = pkg_data_list[a]
//         pkg_data_string += "('" + element[0] + "','" + element[1] + "'),"
//       }
//       pkg_data_string = pkg_data_string.substring(0, pkg_data_string.length - 1)
//       console.log("Converted String..", pkg_data_string)

//       let sqlQuery = 'INSERT IGNORE INTO application_details(application,version )  VALUES ' + pkg_data_string;  // SQL Query to insert data into Table
//       console.log("SQL Insert Statement: ", sqlQuery)
//       let allsqlQuery = 'insert into all_application (host_IP, packages, version,updated_time) values' + all_data_string + ' ON DUPLICATE KEY update updated_time=if(version != values(version), now(), updated_time), version=if(version != values(version), values(version), version)'
//       connection.query(sqlQuery, (err, results, fields) => {
//         if (err) {
//           console.log('Print error _::', err)
//           return console.error(err.message);
//         }
//         //Get number of inserted rows
//         console.log('Row inserted:' + results.affectedRows);
//         res.status(200).json({ message: "Successfully submitted message" })
//       });
//       connection.query(allsqlQuery, (err, results, fields) => {
//         if (err) {
//           console.log('Print error _::', err)
//           return console.error(err.message);
//         }


//         //Get number of inserted rows
//         console.log('Row inserted:' + results.affectedRows);
//       });
//     } catch (error) {
//       throw error
//     }
//   });
// }





// //GET data function

// var getData = function () {
//   app.get('/getData', (req, res) => {

//     console.log('Request GetData Api')

//     connection.query("SELECT * FROM PackageDetail", function (err, result, fields) {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log("Get Data from Database ====>", result);
//     });
//   })
// }

// //Process Starts

// var connection = database_con()
// database_con_chk(connection)
// postData()
// getData()
// //Subscribe for Connection Lost Event
// em.on('reConnect', () => {
//   database_con_chk(connection);
// });
// connection.on('error', () => {
//   console.log('error', error);

// });
// app.listen(8081, () => console.log('Running on Port 8080'))
