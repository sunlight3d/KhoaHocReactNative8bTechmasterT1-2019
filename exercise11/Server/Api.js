let SERVER_NAME = '10.0.12.217'
// let SERVER_NAME = 'NguyeniMac'
// let SERVER_NAME = '192.168.1.34'

let PORT = 3000
export const URL_PRODUCT_LIST = `http://${SERVER_NAME}:${PORT}/products/queryProducts`
export const URL_INSERT_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/insertProduct`
export const URL_UPDATE_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/updateProduct`
export const URL_DELETE_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/deleteroduct`

export const URL_UPLOAD_IMAGE = `http://${SERVER_NAME}:${PORT}/products/uploads`
export const URL_IMAGE_URL = `http://${SERVER_NAME}:${PORT}/products/getImage?fileName=`

