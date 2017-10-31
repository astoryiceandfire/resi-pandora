import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Grid,WingBlank,Flex,List, TextareaItem,Button} from 'antd-mobile';
import APIS from 'src/api.js'


const Item = List.Item;
const Brief = Item.Brief;
const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

class left extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        userinfo:{

        }
      };
    }
   componentDidMount() {
    let option = {};
    APIS.Apisingledata(option).then((res)=>{
       if (res.data.retcode==1) {

           this.setState({
              userinfo: res.data.data
            });
         }
    })
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
  exhandeleClick = ()=>{
    console.log('exhandeleClick')
  }
  render (){ 
    const {userinfo} =  this.state

    return ( <div> <List renderHeader={() => ''}>
             <Item
                
                  thumb={(userinfo.portrait)?userinfo.portrait:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"}
                 
                  onClick={() => {}}
                >
                  {userinfo.nickname} <Brief>LV1</Brief>
                </Item>
              </List>
               <List renderHeader={() => ''} className="my-list">
                  <Item  multipleLine>
                    余额(通币) <Brief>{userinfo.integral}</Brief>
                  </Item>
                
                 
                </List>
                <List className='shopingCar' renderHeader={() =>  <Item
                  arrow="horizontal"
                 extra="全部订单"
                  onClick={() => {}}
                >
                  我的订单 
                </Item>} >
               
               <Grid data={data} />
              </List>
              <List className="my-list">
  
                <Item extra={<Button type="primary" inline onClick={this.exhandeleClick}>兑换通币</Button>}  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                  100钻石=1通币 <Brief>当前钻石:626钻石</Brief>
                </Item>
              </List>

              </div>)
  }
}

export default left;

