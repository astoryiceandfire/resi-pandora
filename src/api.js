
import axios from 'axios'
var querystring = require('querystring');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//POST传参序列化
axios.defaults.timeout = 5000;
axios.interceptors.request.use(function(config){ 
   let userhead = localStorage.getItem('userhead') || {}
    userhead = JSON.parse(userhead)

                  config.headers['mid'] =userhead.mid
                  config.headers['token'] = userhead.token
                  config.headers['userid'] = userhead.userid
                  config.emulateJSON = true
                  config.headers['sblx'] = userhead.sblx
                  config.headers['sdkToken'] = userhead.sdktoken
                  config.headers['deviceid']= userhead.deviceid
                  config.headers['mobile']= userhead.mobile
                  config.headers['secretKey']= userhead.secretKey
               

      config.data = querystring.stringify(config.data)
     return config;
   },function(error){
   
     return Promise.reject(error);
   });

axios.interceptors.response.use(function (response) {

    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
const API_URL = '/TitanMall'

let API_IP = ''
  if (process.env.NODE_ENV =='development') {
           API_IP  = 'http://10.1.1.209:8180'  
           
       }
// IP 为了查看图片
export const IP               =  `${API_IP}`
 const APIKEYS ={
  ApiSortGoods: `${API_URL}/inter/shop/querySortGoods.do`,
  ApiTokenLogin:`${API_URL}/inter/member/tokenLogin.do`,
  ApiappStart:`${API_URL}/appStart.do`,
  //商城-查询商城商品详情
  ApiGoosdInfo:`${API_URL}/inter/shop/queryGoosdInfo.do`,
  ApiMcommentPage:`${API_URL}/inter/shop/queryMcommentPage.do`,
  Apisingledata :`${API_URL}/inter/member/queryMemberInfo.do`,
  ApiqueryExchange :`${API_URL}/inter/game/queryExchange.do`,
  ApiqueryExchangeInfo:`${API_URL}/inter/game/queryExchangeInfo.do`,//查询兑换详情
  ApiHotActivity :`${API_URL}/inter/activity/queryHotActivity.do`,//查询热门活动
  ApiIshopList : `${API_URL}/inter/shop/queryIshopList.do`,//幸运抢购/限时抢购
  ApiAuctionList : `${API_URL}/inter/auction/queryAuctionList.do`,//低价竞拍
  ApiIshopInfo  : `${API_URL}/inter/shop/queryIshopInfo.do`,//幸运抢购 限时抢购
  ApiAllCoterie  : `${API_URL}/inter/community/queryAllCoterie.do`,//用户社区获得banner
  ApiAdvertList  : `${API_URL}/inter/community/queryAdvertList.do`,//用户社区获得公告
  ApiPostList    :  `${API_URL}/inter/community/queryPostList.do`,//用户社区查询主帖,右侧展示
  ApiAdvertList  : `${API_URL}/queryAdvertList.do`,//用户社区最新公告


 }


const  APIS = {}
Object.keys(APIKEYS).forEach((key)=>{
    APIS[key] = function(option){ 
      return axios.post(APIKEYS[key],option).catch(function(error){    
      })
    }
})


export default APIS


