import React, { Component } from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import { withRouter } from 'react-router'
import { List ,Carousel} from 'antd-mobile';

const Item = List.Item;

const CarouselF = ({images})=>{

  return ( <Carousel
          className="my-carousel"
          autoplay={false}
          infinite 
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {images.map((item,index) => (
            <div className="v-item" key={index} >
              <img
                src={item} 
              />
            </div>
          ))}
        </Carousel>)
}
class  shopDetailsLeft extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        
      };
    }

  //  componentDidMount() {
  //   console.log(this.props)
   
  // }
  // componentWillUpdate(){
    
  // }

  // componentWillReceiveProps(nextProps) {
   
 

  // }
    
      render() {
        const { shopdata,...resetProps } = this.props;
        return (
         <div className='shop-details-left'>
           <List renderHeader={() => (<CarouselF images={shopdata.data?shopdata.data.images:[]} />)}  className="shop-details">
              <Item className="shop-details-item1"  extra={ <i className={'iconfont icon-shoucang'}/>} >商品详情</Item>
          
              <Item className="shop-details-content"><p style={{height:'60px'}}>{shopdata.data?shopdata.data.title:''}</p></Item>
              <Item className="shop-details-item3"  extra={<div>{shopdata.data?shopdata.data.price:''}通币</div>} >已售{shopdata.data?shopdata.data.solecount:''}件</Item>
            </List>
         </div>
         
         )
      }

}
export default withRouter(shopDetailsLeft);

