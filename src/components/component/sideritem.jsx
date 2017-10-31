import React from 'react';
import  'src/components/css/sideritem.less';
import {Flex,List,Card} from 'antd-mobile';
import { withRouter } from 'react-router'
const Item = List.Item;

const ShopRenderFooter = ({item})=>{
  return ( <Flex justify='between' className='shop-renderfooter'>
      <Flex.Item>{item.price}通币</Flex.Item>
      <Flex.Item>已售{item.solecount}</Flex.Item>
    </Flex>)
}

const ShopRenderHeader =withRouter((props)=>{
  const {item,history} = props
  let path = {
     pathname:'/mall/shopDetails',
     state:{id:item.id,shopid:item.shopid}
  }
 
  let handleClick = ()=>{
    history.push(path)
   
  }

  return ( <div className='shop-imgwrap'>
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
        return (
            <div style={{width:`${slidecount}%`,height:'100%'}} className='shoping-slideitem'>
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