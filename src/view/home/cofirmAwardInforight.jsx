import React from 'react';
import { List ,Flex,Button} from 'antd-mobile';


const Item = List.Item
const Brief = Item.Brief;
class  CofirmAwardIndoright extends React.Component {
  ensureClick = ()=>{

  }
  choseOtherAdress = ()=>{

  }
    
    
      render() {
        // const { ...resetProps } = this.props;
      
        return (
          <div className='cofirmaward-right'>
           <List renderHeader={() => ( <Item className="confirm-right-item2"  extra={ <span>待确认地址</span>} >订单流程</Item>)}  className="">
              <Item thumb={<i className={'iconfont icon-yuandian'} style={false?{color:"red"}:{}}/>} className="confirm-right-itemline" > <div>获得奖品</div></Item>
              <Item thumb={<i className={'iconfont icon-yuandian'} style={false?{color:"red"}:{}}/>} className="confirm-right-itemline" >确认收货地址</Item>
              <Item thumb={<i className={'iconfont icon-yuandian'} style={false?{color:"red"}:{}} />} className="confirm-right-itemline" >奖品派发</Item>
              <Item thumb={<i className={'iconfont icon-yuandian'} style={false?{color:"red"}:{}}/>} className="confirm-right-itemline" >确认收货</Item>
          
            </List>
             <List renderHeader={() => ( <Item className="confirm-right-item2"> 地址信息</Item>)}  className="">
              <Item className="confirm-right-itemline"  extra={ <div>电话:15690868587</div>  } >收货人:王思聪</Item>
              <Item className="confirm-right-itemline"  multipleLine>  收货地址 <Brief>广东省深圳市南山区</Brief></Item>
              <Item className="confirm-right-itemline-button" >
                <Button type="primary" size="small" inline onClick={this.ensureClick}>确认地址</Button>
                <Button type="primary" size="small" inline onClick={this.choseOtherAdress}>选择其他地址</Button>
              </Item>
            
          
            </List>
          </div>
         
         )
      }

}
export default CofirmAwardIndoright;

