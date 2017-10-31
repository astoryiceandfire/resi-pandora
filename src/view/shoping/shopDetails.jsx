import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import ShopDetailsLeft from 'view/shoping/shopDetailsLeft.jsx';
import ShopDetailsRight from 'view/shoping/shopDetailsRight.jsx';
import { withRouter } from 'react-router'
import  'src/view/shoping/style/shopdetails.less';
import APIS from 'src/api.js'

class  shopDetails extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        shopinfo:{

        }
      };
    }

   componentDidMount() {
    const { location:{state}} = this.props

  
    let option = {id:state.id};
       APIS.ApiGoosdInfo(option).then((res)=>{
         if (res.data.retcode===1) {

           this.setState({
              shopinfo: res.data
            });
         }
       })
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
    
      render() {
       
      const { location:{state}} = this.props
        return (
          <Layoutwraper>
            <Layoutwraper.Layoutleft>
              <ShopDetailsLeft shopdata = {this.state.shopinfo}/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
             
              <ShopDetailsRight shopid = {state.id}  shopdata = {this.state.shopinfo}/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default withRouter(shopDetails);

