import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import chunk from "lodash/chunk";
import Sideritem from 'src/components/component/sideritem.jsx';
import  'src/components/css/carousepage.less';




class Carouselpage extends React.Component {
  
     constructor(props) {
        super(props);
        this.state = {
          siderItemx :[]
        }
      
  }

    componentDidMount() {
      let {items} = this.props
     
     this.trueTosiderItems(items)
    }
    trueTosiderItems(items){
      let {categoryid} = this.props
      let siderItems =  chunk(items,3)
    let siderItemx = siderItems.map((arrs,index)=>{
          return (<div key={`${categoryid} + ${index}`} className='slide'>{arrs.map((item,index)=>(<Sideritem key={item.id} slidecount={3} item={item} />))}</div>)
        })
          this.setState({
              siderItemx: siderItemx
            });
      
    }
    componentWillReceiveProps(nextProps) {
       let {items} = this.props
       if (nextProps.items!==this.props.items) {

         this.trueTosiderItems(nextProps.items)
       }
     
    }
     render() {
        return (
            <SwipeableViews resistance = {true} style={{width:'100%',height:'100%'}}  slideStyle = {{}}>
              {this.state.siderItemx}    
            </SwipeableViews>
          )
      }
  }

export default Carouselpage;