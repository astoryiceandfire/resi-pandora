import React from 'react';
import {Flex,Button,List,Card} from 'antd-mobile';
import { withRouter } from 'react-router'
import { hsdateUtil} from 'src/utils/index'
import CountdownTimer from 'src/components/component/countdown'
import  'view/activity/style/sideritemact.less';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import noLimit from 'src/image/img/ic_act_no_limit.png'
const Item = List.Item;
const Brief = Item.Brief;
const ShopRenderFooter = ({item,type,noallow})=>{
  return ( <Flex justify='center' className='activity-shop-renderfooter'>
      <Button disabled = {noallow} className='join-button' type="primary">立即参与</Button>
    </Flex>)
}

const ShopRenderHeader =withRouter((props)=>{
  const {item,history,type} = props
  let path = {
     pathname:'/activity/activitygoodDetails',
     state:{id:item.id,type}
  }
 
  let handleClick = ()=>{
    history.push(path)
   
  }

  return ( <div className='activity-shop-imgwrap'>
       <Item>
            <div className='periods'>第{item.periods||item.period}期</div></Item>
            <div className='img-wrap' onClick={handleClick}>
              <img src={item.cover} alt="icon" />
            </div>
            {(type!==2&&item.limitmember!==0)?
             <div className="limitmember"> 每人限购{item.limitmember}次</div>:''
           }
           
            </div>)
})



class Sideritem extends React.Component {
  
     constructor(props) {
        super(props);
         let {item,slidecount,type} = this.props
         this.state = {
           initialTimeRemaining:item.limitstart*1000||item.starttime*1000||item.limitend*1000||item.endtime*1000,//倒计时剩余
           islimitbegin:item.limitstart||item.starttime,//开始倒计时
           islimitend:item.limitstart!=0||type!=0,
           isRuchBuy :item.limitstart===0&&type===0,//幸运抢购
        };
  }

    componentDidMount() {
      let {item,slidecount,type} = this.props
    
    }
  
    completeCountCallback = ()=>{
     this.setState({
      islimitbegin:false,
     })
    }
    componentWillReceiveProps(nextProps) {
       let {item} = this.props
       if (item!==this.state.item) {
        
       }
     
    }
     render() {
       let {slidecount,item,type} = this.props
       slidecount =100/slidecount


        return (
            <div style={{width:`${slidecount}%`,height:'100%'}} className='activity-slideitem'>
            <List    renderHeader={() => <ShopRenderHeader type={type} item={item}/>}
                      renderFooter={() =><ShopRenderFooter type={type} noallow = {this.state.islimitbegin} item={item}/>}>
              <Item>
              <div style={{ padding: '0.2rem 0px'}}>{item.title}</div>
              </Item>
              <Item className='ready-star'>  
              <Flex className='activity-count'>
                  <Flex.Item> 推荐参与度 <Brief><Rater interactive={false} total={5} rating={item.rating} /></Brief></Flex.Item>
                  <Flex.Item>{ this.state.islimitbegin ?'开始倒计时':this.state.islimitend?'截止倒计时':''}
                  {this.state.isRuchBuy ? <img src={noLimit}/> : <Brief><CountdownTimer completeCallback={this.completeCountCallback} initialTimeRemaining={this.state.initialTimeRemaining}></CountdownTimer></Brief>}
                  </Flex.Item>
                  <Flex.Item> <div>参与人次 <Brief>{type===2? item.joinedmember : (item.joinedmember + '/' + item.totalmember)}</Brief></div></Flex.Item>
              </Flex>
              
              

               </Item>

            </List>
            </div>
          )
      }
  }

export default Sideritem;