import React, { Component } from 'react';
import { List} from 'antd-mobile';
import { withRouter } from 'react-router'


const Item = List.Item;

class right  extends React.Component{
  handleClick= ()=>{
      const {history} = this.props
      history.push('/person/activityNotes') 
  }
  render (){
    return (  <div> <List renderHeader={() => ''} className="my-list">
                 
                  <Item arrow="horizontal" onClick={() => {}}>中奖记录</Item>
                  <Item arrow="horizontal" onClick={() => {}}>活动记录</Item>
                  <Item arrow="horizontal" onClick={this.handleClick}>实物兑换记录</Item>
                   <Item arrow="horizontal" onClick={() => {}}>通币兑换记录</Item>
                  <Item arrow="horizontal" onClick={() => {}}>我的收藏</Item>
                  <Item arrow="horizontal" onClick={() => {}}>收货地址</Item>
                  <Item arrow="horizontal" onClick={() => {}}>订单明细</Item>
                  <Item arrow="horizontal" onClick={() => {}}>常见问题</Item>
                
                  
                </List></div>)
  }
}
export default withRouter(right);

