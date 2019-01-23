/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa các Models, Schemas, hàm kết nối CSDL MongoDB
 */
const mongoose = require('mongoose')
//Kết nối CSDL MongoDB
const connectDatabase = async () => {
    try {
        let uri = 'mongodb://hoangnd:123456@127.0.0.1:27018/mongoDatabase'
        let options = {
            connectTimeoutMS: 10000,// 10 giây
			useNewUrlParser: true,
			useCreateIndex: true,
        }
        await mongoose.connect(uri, options)
        console.log('Connect Mongo Database successfully')
    } catch(error) {
        console.log(`Cannot connect Mongo. Error: ${error}`)
    }
}
connectDatabase()
module.exports = {
    mongoose
}