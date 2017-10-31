import React, { Component } from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import { withRouter } from 'react-router'
import { List ,Carousel,Progress} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const sortstype = [
{text:'幸运抢购'},
{text:'限时抢购'},
{text:'低价竞拍'}];
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

  componentWillReceiveProps(nextProps) {

  }
    
      render() {
        const { shopdata  ,type} = this.props;
        const { periods=0,period=0,images=[],price=0,solecount=0,title='',remainmember=0,totalmember=0} = shopdata

     
       
      
        return (
         <div className='activity-good-details-left'>
           <List renderHeader={() => (<CarouselF images={images} />)}  className="activity-good-details">
              <Item className="activity-good-details-sorttitle"  extra={ <div>第{(periods||period)}期</div>} >{sortstype[type].text}</Item>
          
              <Item className="activity-good-details-title">{title}</Item>
              <Item className="activity-good-details-progress" thumb={<div> 剩余 <Brief>{remainmember}</Brief></div>} extra={<div> 总需 <Brief>{totalmember}</Brief></div>} ><Progress percent={50} position="normal" /></Item>
      
            </List>
         </div>
         
         )
      }

}
export default withRouter(shopDetailsLeft);

