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
//Upload files
const fileUpload = require('express-fileupload')
app.use(fileUpload({
    limits: { fileSize: 0.5 * 1024 * 1024 },  //Maximum = 0.5 MB  
}))
//Tuỳ biến Router
const productRouter  = require('./routers/productRouter')

app.use('/products', productRouter)
//Start server
app.listen(PORT, () => {
    console.log(`Server app listening on port ${PORT}!`)
})