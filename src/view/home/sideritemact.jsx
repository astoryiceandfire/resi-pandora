import React from 'react';
import  'view/home/style/sideritemact.less';
import {Flex,List,Card} from 'antd-mobile';
import { withRouter } from 'react-router'
import { hsdateUtil} from 'src/utils/index'
const Item = List.Item;
const exchangetexts = ['未兑换','待确认地址','未发货','已发货','已签收']
const ShopRenderFooter = ({item})=>{
  return ( <Flex justify='between' className='record-shop-renderfooter'>
      <Flex.Item>兑换码:{item.code}</Flex.Item>
      <Flex.Item></Flex.Item>
    </Flex>)
}

const ShopRenderHeader =withRouter((props)=>{
  const {item,history} = props
  let path = {
     pathname:'/person/cofirmAwardInfo',
     state:{id:item.id}
  }
 
  let handleClick = ()=>{
    history.push(path)
   
  }

  return ( <div className='record-shop-imgwrap'>
       <Item extra={exchangetexts[item.exchangeState]}>{hsdateUtil(item.exchangeTime)}</Item>
     <div className='img-wrap' onClick={handleClick}>
              <img
                src={item.cover}
                alt="icon" />
            </div>
            </div>)
})



class Sideritem extends React.Component {
  
     constructor(props) {
        super(props);
         this.state = {
           item:[],
        };
  }

    componentDidMount() {
      let {item,slidecount} = this.props

     
     this.trueTosiderItems(item)
    }
    trueTosiderItems(items){

    }
    componentWillReceiveProps(nextProps) {
       let {item} = this.props
       if (item!==this.state.item) {
         this.trueTosiderItems(item)
       }
     
    }
     render() {
       let {slidecount,item} = this.props
       slidecount =100/slidecount
       console.log(item,'item')
        return (
            <div style={{width:`${slidecount}%`,height:'100%'}} className='record-slideitem'>
            <List    renderHeader={() => <ShopRenderHeader item={item}/>}
                      renderFooter={() =><ShopRenderFooter item={item}/>}>
              <Item>
              <div style={{ padding: 0}}>{item.title}</div>
               <div style={{ padding: 0}}>{item.subhead}</div>
              </Item>
             
            </List>
            </div>
          )
      }
  }

export default Sideritem;