/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "Product" collection
 */
const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')//fs = file system
const promisify = require('util').promisify //Thư viện này có sẵn trong Nodejs
const readdir = promisify(fs.readdir) //Hàm này lấy các file/folder trong thư mục
const lstat = promisify(fs.lstat) //lstat = "list status"

const { 	
    insertProduct,
    queryProducts,
    getDetailProduct,
    updateProduct,
    deleteProduct,
} = require('../database/models/Product')
router.use((req, res, next) => {
    console.log('Time: ', Date.now()) //Time log
    next()
})
router.post('/insertProduct', async (req, res) =>{
    let {name, description, imageURL} = req.body
    //Client phải gửi tokenKey
    let tokenKey = req.headers['x-access-token']
    try {
        let newProduct = await insertProduct(name, description, imageURL)
        res.json({
            result: 'ok',
            message: 'Thêm mới Product thành công',
            data: newProduct
        })
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể thêm mới Product.Lỗi : ${error}`
        })
	}
})
//VD1: http://127.0.0.1:3000/blogposts/queryProducts?text=kinh nghiệm
//VD2: http://127.0.0.1:3000/blogposts/queryProducts?text=xe
router.get('/queryProducts', async (req, res) =>{	
	let {text} = req.query
    try {    	
        let products = await queryProducts(text)
        res.json({
            result: 'ok',
            message: 'Query thành công danh sách Product',
            data: products
        })
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể lấy được danh sách products.Lỗi : ${error}`
        })
	}
})
//VD1: http://127.0.0.1:3000/blogposts/queryProductsByDateRange?
//from=01-11-2018&to=05-11-2018
router.get('/queryProductsByDateRange', async (req, res) =>{	
	let {from, to} = req.query	
    try {    	
        let products = await queryProductsByDateRange(from, to)
	  	res.json({
	  		result: 'ok',
	  		message: 'Query thành công danh sách Product',
	  		data: products
	  	})	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể lấy được danh sách products.Lỗi : ${error}`
        })
	}
})
router.get('/getDetailProduct', async (req, res) =>{		
	let {id} = req.query	
    try {    	    
        let product = await getDetailProduct(id)
	  	res.json({
	  		result: 'ok',
	  		message: 'Query thành công chi tiết Product',
	  		data: product
	  	})		
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Ko lấy được thông tin chi tiết Product. Error: ${error}`
        })
	}
})
//PUT method => để update data
router.put('/updateProduct', async (req, res) =>{			
    let {id} = req.body
    let updatedProduct = req.body
    try {    	
    	let product = await updateProduct(id, updatedProduct)
        res.json({
            result: 'ok',
            message: 'Update thành công 1 Product',
            data: product
        })	
    } catch(error) {
		res.json({
            result: 'failed',
            message: `Ko update được Product. Error: ${error}`
        })
	}
})
router.delete('/deleteProduct', async (req, res) =>{		
	let {id} = req.body	
	let tokenKey = req.headers['x-access-token']	
    try {    	
        await deleteProduct(id, tokenKey)
        res.json({
            result: 'ok',
            message: 'Xoá thành công 1 Product',	  		
        })	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Ko xoá được Product. Error: ${error}`
        })
	}
})
//Upload multiple files
router.post('/uploads', async (req, res) => {
    //Dữ liệu files đc lưu tại : req.files    
    try {
        if(!req.files) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }        
        const keys = Object.keys(req.files)
        if (keys.length === 0) {
            res.json({
                result: "failed",
                message: "Cannot find files to upload"
            })
            return
        }
        keys.forEach( async (key) => {            
            const fileName = `${Math.random().toString(36)}`
            const fileObject = await req.files[key]
            const fileExtension = fileObject.name.split('.').pop()
            const destination = `${path.join(__dirname, '..')}/uploads/${fileName}.${fileExtension}`
            let error = await fileObject.mv(destination) //mv = move 
            if (error) {
                res.json({
                    result: "failed",
                    message: `Cannot upload files. Error: ${error}`
                })
                return
            }
            //Kiểm tra file cuối cùng trong list ?
            if (key === keys[keys.length - 1]) {
                res.json({
                    result: "ok",
                    message: `Upload files successfully`,
                    imageURL: `${fileName}.${fileExtension}`
                })
            }
        })
    } catch(error) {
        res.json({
            result: "failed",
            message: `Cannot upload files. Error: ${error}`
        })
    }
})
router.get('/getImage', async (req, res) =>{        
    let {fileName} = req.query   
    const destination = `${path.join(__dirname, '..')}/uploads/${fileName}`
    debugger;
    try {           
        fs.readFile(destination, function(err, data) {
            if (err) throw err; // Fail if the file can't be read.
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data); // Send the file data to the browser.
        });
    } catch(error) {
        res.json({
            result: 'failed',
            message: `Ko lấy được thông tin chi tiết Product. Error: ${error}`
        })
    }
})
module.exports = router