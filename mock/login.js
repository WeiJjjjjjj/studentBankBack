export default {
    'POST /api/login/userlogin': (req, res) => {
        const {username, password} = req.body
        if(username == 'admin' && password == 'admin'){
            res.send({
                flag : 1,
                msg: '登录成功'
            })
        }else{
            res.send({
                flag : 2,
                msg: '登录失败'
            })
        }
    }
}