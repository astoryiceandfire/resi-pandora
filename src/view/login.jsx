import React from 'react';
import APIS from 'src/api.js'


class  person extends React.Component {
    componentDidMount() {
   
       this.getToken()
       // 17666116547
     
  }
  getToken(){ 
   let userhead  = { 
              token:'',
              mobile:'17616973375',
              sblx:1,
              secretKey:'',
              deviceid:1,
              sdktoken:'44399595-aaf7-4a8e-abb5-cced914b8bad',
              mid:'',
              userid:'',
            }
            
          
          localStorage.setItem('userhead',JSON.stringify(userhead)) 
         

           this.tokenLogin()

      }
    appStart(){
          let vm = this,
          option = {};
          let userhead = localStorage.getItem('userhead') || {}
            userhead = JSON.parse(userhead)
          option.deviceid =userhead.deviceid||1
          option.sblx=userhead.sblx||1
          option.mid=userhead.mid||" "
          APIS.ApiappStart(option).then((res)=>{})

      }
      tokenLogin() {
         this.appStart()
         const {history} = this.props
         console.log(this.props)
          APIS.ApiTokenLogin({}).then((res)=>{
              if(res.data.retcode == 1) {
                  let data = res.data.data
                  let userhead = localStorage.getItem('userhead') || {}
                  userhead = JSON.parse(userhead)
                  userhead.mid = data.mid
                  userhead.token = data.token
                  userhead.mobile = data.mobile
                  userhead.userid = data.userId
                  userhead.nickName = data.nickName
                  userhead.name = data.name
                  localStorage.setItem('userhead',JSON.stringify(userhead))
                  history.replace('/person/center') 

              }
          }).catch((res)=>{})
      }
    componentWillReceiveProps(nextProps) {
    
    }
    
      render() {
        // const { ...resetProps } = this.props;
      
        return (
          <div>login</div>
         
         )
      }

}
export default person;

