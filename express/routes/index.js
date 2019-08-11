var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
// var url = requ

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});
let{
  find,
  updata,
  delect,
  add,
}=require('../libs/db')

/* GET home page. */
router.get('/datalist', async function(req, res, next) {
 // 全局添加
 let data = await find('eyeconlist');
//  console.log(data)
 res.send(data)
});
router.get('/classifylist', async function(req, res, next) {
  // 全局添加
 console.log(111)
  let data = await find('fenleilist');
  // console.log(data)
  res.send(data)
 });
 router.get('/liebiaoyelist', async function(req, res, next) {
  // 全局添加
 console.log(111)
  let data = await find('liebiaolist');
  // console.log(data)
  res.send(data)
 });
//  火热拼购
router.get('/huorelist', async function(req, res, next) {
  // 全局添加
//  console.log(111)
  let data = await find('hotshoplist');
  // console.log(data)
  res.send(data)
 });
 //限时优惠
 router.get('/xianshilist', async function(req, res, next) {
  // 全局添加
//  console.log(111)
  let data = await find('xianshilist');
  // console.log(data)
  res.send(data)
 });
 router.post('/detail',async function(req, res, next){ 
  //  console.log(1112)  
  let {
      id
    } = req.body;
    // console.log(req.body);
    // let data = await find('liebiaolist');
    // console.log(data)

    let data = await find('liebiaolist')
    // console.log(data)
    res.send(data);//字符串
 })
 //更新
 router.post('/cart',async function(req, res, next){
  //  console.log('req',req.query)
  let{username,id}=req.body;
  // console.log(req.body)
  // console.log(username,id)
    let result = await find('cart',
      {username,id}    
  )
    // console.log(Object.keys(result).length)
    if(Object.keys(result).length==1){
      // console.log(666)
     let data = await updata('cart',req.body
    )
    }else{
      result = await add("cart",req.body)
      res.send(result)
    }
 })
 //购物车的渲染
 router.get('/shopcar',async function(req, res, next){
   console.log('req',req.query)
  let{username}=req.query;
  // console.log(username)
  // console.log(username,id)
    let result = await find('cart',
      {username}    
  )
    //  console.log(result)
     res.send(result)
 })
 //购物车的删除
 router.get('/delcar',async function(req,res,next){
       console.log('req',req.query)
       let delresult = await delect('cart',req.query)
       console.log(delresult)
       res.send('success')
 })


console.log('server run start')
module.exports = router;
