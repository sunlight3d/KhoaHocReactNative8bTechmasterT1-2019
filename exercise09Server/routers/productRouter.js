/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Routers for "Product" collection
 */
const express = require('express')
const router = express.Router()
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
    let {title, content} = req.body
    //Client phải gửi tokenKey
    let tokenKey = req.headers['x-access-token']
    try {
        let newProduct = await insertProduct(title, content, tokenKey)
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
    let tokenKey = req.headers['x-access-token']
    try {    	
    	let product = await updateProduct(id, updatedProduct,tokenKey)
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
module.exports = router