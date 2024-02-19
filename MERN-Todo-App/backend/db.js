const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://user:test1234@cluster0.uzuwe3z.mongodb.net/'

const connectToMongo =()=> mongoose.connect(mongoURI).then(()=>
console.log("Database is connected"));

module.exports=connectToMongo;
