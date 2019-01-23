/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Viết api đăng nhập user với mật khẩu được mã hoá
 Cần cài một số thư viện sau:
 npm install -g mongoose
 npm install -i express
 npm install -i body-parser
 */
const express = require('express')
const app = express()
const { PORT } = require('./helpers/utility')
//Nhúng middleware body-parser vào Express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Tuỳ biến Router
const productRouter  = require('./routers/productRouter')

app.use('/users', usersRouter)
app.use('/blogposts', productRouter)
//Start server
app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}!`)
})