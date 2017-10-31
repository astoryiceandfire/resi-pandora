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
           <div  className='shop-details-right'>
             <Tabs tabs={tabs}
                  initialPage={1}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', backgroundColor: '#fff' }}>
                  {shopdata.data&&shopdata.data.content?shopdata.data.content.split('<body>')[1].split('</body>')[0]:'暂无无详情'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', backgroundColor: '#fff' }}>
                    {(this.state.comments.length==0)?'暂无评论':('sss')}
                  </div>
                
                </Tabs>
               <div> 
               <Flex>
                  <Flex.Item><Button inline className='add-shopcar'><i style={{fontSize:'0.5rem'}} className={'iconfont icon-add'}/>添加购物车</Button></Flex.Item>
                  <Flex.Item style={{textAlign:"right",marginRight:'0.2rem'}}><Button type="primary" style={{width:'2rem'}} inline >立即购买</Button></Flex.Item>
                </Flex>
          </div> 
           </div>
         
         )
      }

}
export default withRouter(shopDetailsRight);

