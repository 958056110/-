var express = require('express');
var router = express.Router();
var {
    find
} = require('../libs/db')
// 导出token的方法
const {formatData,token} = require('../utils')
router.get('/login', async function (req, res, next){
    // 判断用户账户用户密码存在不存在
    let {phoneNum,password} = req.query;
    // console.log(req.query)
    let result = await find('users', {
        phoneNum,password
    }    
)
    // console.log(result)
    if(result.length>0){
        let Athorization = token.create(phoneNum);
        res.send(formatData({data:Athorization}))
    }else{
        res.send(formatData({code:250}))
    }
    // 判断手机号存在不存在
  

});

module.exports=router