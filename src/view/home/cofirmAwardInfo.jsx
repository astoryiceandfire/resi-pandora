import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import CofirmAwardIndoleft from 'view/home/cofirmAwardInfoleft.jsx';
import CofirmAwardIndoright from 'view/home/cofirmAwardInforight.jsx';
import  'view/home/style/cofirmAwardInfo.less';
import { withRouter } from 'react-router'
import APIS from 'src/api.js'
class  CofirmAwardInfo extends React.Component {
          constructor(props) {
          super(props);
           this.state = {
             exshopinfo:{},
          };
    }
   componentDidMount() {
    const { location:{state}} = this.props

  
    let option = {id:state.id};
       APIS.ApiqueryExchangeInfo(option).then((res)=>{
         if (res.data.retcode===1) {

           this.setState({
              exshopinfo: res.data.data
            });
         }
       })
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
    
      render() {
        const { exshopinfo} = this.state;
      
        return (
          <Layoutwraper>
            <Layoutwraper.Layoutleft>
              <CofirmAwardIndoleft shopinfo={exshopinfo}/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
             
              <CofirmAwardIndoright  shopinfo={exshopinfo}/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default withRouter(CofirmAwardInfo);

