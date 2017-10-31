import React from 'react';
import { withRouter } from 'react-router'
import { List ,Flex} from 'antd-mobile';

const Item = List.Item;


const ShopRenderFooter = ({item})=>{
  return ( <Flex justify='center'  className='cofirm-renderfooter'>
      <Flex.Item ><span>兑换码</span>{item.code}</Flex.Item>
     
    </Flex>)
}

const ShopRenderHeader =withRouter((props)=>{
  const {item} = props

  return ( <div className='cofirm-imgwrap'>
     <Item style={{height:"0.8rem"}}>{'中奖确认'}</Item>
     <div className='img-wrap'>
              <img
                src={item.cover}
                alt="icon" />
            </div>
            </div>)
})


class  CofirmAwardIndoleft extends React.Component {
    
    
      render() {
          const { shopinfo } = this.props
      
      
        return (
          <div className='cofirmaward'>
           <List    renderHeader={() => <ShopRenderHeader item={shopinfo}/>}
                      renderFooter={() =><ShopRenderFooter item={shopinfo}/>}>
              <Item>
              {shopinfo.title}
              </Item>
             
            </List>
         </div>
         
         )
      }

}
export default CofirmAwardIndoleft;

