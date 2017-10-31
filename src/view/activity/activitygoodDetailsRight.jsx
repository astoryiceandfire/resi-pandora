import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Tabs,Flex,Button,Icon} from 'antd-mobile';
import APIS from 'src/api.js'
const tabs = [
  { title: '商品详情' },
  { title: '累积评价' },
 
];


class  shopDetailsRight extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        comments:[]
      };
    }

   componentDidMount() {
    const {shopid} = this.props
     let option = {
        id:shopid,
       page:1,
       row:99
     };
       APIS.ApiMcommentPage(option).then((res)=>{
         if (res.data.retcode==1) {
               // this.setState({
               //    shopinfo: res.data
               //  });
          
         }
       })
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
    
      render() {
        const { shopdata, } = this.props;
      
        return (
           <div  className='activity-good-details-right'>
             <Flex className='details-tabs'>
                  <Flex.Item><Button inline className='add-shopcar'><i style={{fontSize:'0.5rem'}} className={'iconfont icon-add'}/>添加购物车</Button></Flex.Item>
                  <Flex.Item><Button inline className='add-shopcar'><i style={{fontSize:'0.5rem'}} className={'iconfont icon-add'}/>添加购物车</Button></Flex.Item>
                  <Flex.Item><Button inline className='add-shopcar'><i style={{fontSize:'0.5rem'}} className={'iconfont icon-add'}/>添加购物车</Button></Flex.Item> 
              </Flex>
            
             
           </div>
         
         )
      }

}
export default withRouter(shopDetailsRight);

