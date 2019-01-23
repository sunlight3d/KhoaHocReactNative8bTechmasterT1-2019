/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File script này chứa hàm "phong" 1 user thành "admin"
 Hàm này sẽ ko được viết thành api, phải chạy bằng terminal
 */
const {mongoose} = require('../database/database')
const {User} = require('../database/models/User')
const makeUserBecomeAdmin = async (userId) => {
    try {
        //Tìm user với id = userId và update trường "permission"
        let user = await User.findById(userId)
        if(!user) {
            console.log(`Không tìm thấy user với id=${userId}`)
            return
        }
        user.permission = 2 //permission = 2 => admin
        user.isBanned = 0
        user.active = 1
        await user.save()
        console.log(`Đã "phong" admin cho user: ${userId}`)
    } catch (error) {
        console.log(`Ko thể update được user với userId=${userId}`)
    }
}
//Phong admin
makeUserBecomeAdmin('5be417778937fc045d33b1b5')