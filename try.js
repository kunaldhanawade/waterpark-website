console.log('Hello World');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/waterpark');
    console.log('mongo db connected');
}

const bookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    date: String,
    adults: Number,
    children: Number,
    roomType: String,
    rooms: Number,
    rawAmount: Number,
    promo: String,
    amount: Number
});

const Book = mongoose.model('bookingDetail', bookingSchema);

var data = new Book({
    firstName: 'Komal',
    lastName: 'Dhanawade',
    email: 'komal@gmail.com',
    phone: 9082229389,
    date: 07 - 11 - 2021,
    adults: 5,
    children: 0,
    roomType: 'Locker',
    rooms: 1,
    rawAmount: 5100,
    promo: 'null',
    amount: 5100
});

// data.save().then(()=>{
//     console.log('data save in db')
// }).catch(()=>{
//     console.log('kuch tog gadbad h daya')
// })

// Book.find().then((result)=>{
//     console.log('data fetched from db')
//     console.log(result.pop());
// }).catch(()=>{
//     console.log('kuch tog gadbad h daya')
// })

// 616aa7c644b37a9b912903b3
Book.findByIdAndDelete().then(() => {
    console.log('database madhla data delete zala re')
}).catch(() => {
    console.log('database madhla data delete nhi zala, bagha ata kaay karaycha te')
})



// const transpoter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'kunaldhanawade7@gmail.com',
//         pass: 'manishard7.'
//     }
// })
// const mailOptions = {
//     from: 'kunaldhanawade7@gmail.com',
//     to: result.email,
//     subject: `AquaLand Booking Details of ${result.firstName} ${req.lastName}`,
//     text: `Your Booking No. is ${result.srno} and total amount is ${result.amount}`
// }
// transpoter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log('Email Nhi gela re');
//     }
//     else {
//         console.log('Email gele re baba: ' + info.response);
//     }
// })




// mysql database
// const mysql = require('mysql')

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'waterpark'
// })

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// let sql = 'SELECT * FROM bookingdetails';

// db.query = (sql, (err, result, fields) => {
//     if (err) {
//         console.log("hee dokyala taaap aahe")
//     }
//     console.log('zala baba ekdacha'+result);
// })