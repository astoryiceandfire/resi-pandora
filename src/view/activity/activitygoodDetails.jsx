import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import ActivitygoodDetailsLeft from 'view/activity/activitygoodDetailsLeft.jsx';
import ActivitygoodDetailsRight from 'view/activity/activitygoodDetailsRight.jsx';
import { withRouter } from 'react-router'
import  'src/view/activity/style/activitygoodsdetails.less';
import APIS from 'src/api.js'

class  shopDetails extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        acgoodinfo:{

        }
      };
    }

   componentDidMount() {
    const { location:{state}} = this.props
      let option = {id:state.id};
       APIS.ApiIshopInfo(option).then((res)=>{
         if (res.data.retcode===1) {
           this.setState({
              acgoodinfo: res.data.data
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
              <ActivitygoodDetailsLeft type={state.type} shopdata = {{...this.state.acgoodinfo}}/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
             
              <ActivitygoodDetailsRight shopid = {state.id}  shopdata = {{...this.state.acgoodinfo}}/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default withRouter(shopDetails);

