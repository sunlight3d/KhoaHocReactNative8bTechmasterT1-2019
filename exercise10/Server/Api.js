// let SERVER_NAME = 'Nguyens-MBP'
// let SERVER_NAME = '192.168.1.136'
let SERVER_NAME = '192.168.1.133'
//Lay ten may tinh tu terminal:
//hostname
// let SERVER_NAME = 'NguyeniMac'

let PORT = 3000
export const URL_PRODUCT_LIST = `http://${SERVER_NAME}:${PORT}/products/queryProducts`
export const URL_INSERT_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/insertProduct`
export const URL_UPDATE_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/updateProduct`
export const URL_DELETE_PRODUCT = `http://${SERVER_NAME}:${PORT}/products/deleteroduct`
