import React, { Component } from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import Tabtitle from 'src/components/component/tabtitle.jsx';
import Carouselactpage from 'src/view/activity/carouselactpage.jsx';
import { withRouter } from 'react-router'
import APIS from 'src/api.js'

class  ActivityLists extends React.Component {
    constructor(props) {
          super(props);
           this.state = {
             resdata:{},
          };
        }
     componentDidMount() {
       const {location:{state:{type}}} = this.props
       let option = {
          page:1,
          rows:99,
       }
       console.log(type)
       if (type===0) {//幸运抢购
        option.islimittime = 0
        APIS.ApiIshopList(option).then((res)=>{
     
           this.setState({resdata:res.data.data})
         })

       }else if(type===1){//限时抢购
        option.islimittime = 1
        APIS.ApiIshopList(option).then((res)=>{

           this.setState({resdata:res.data.data})
         })

       }else if(type===2){//低价竞拍
           APIS.ApiAuctionList(option).then((res)=>{

           this.setState({resdata:res.data.data})
         })
       }
         
   
  }

  componentWillReceiveProps(nextProps) {
   
        
  }
    
      render() {
        const {location:{state:{type,text}}} = this.props
        return (
          <div style={{width:'100%',height:'100%'}} className='tabs-wrap'>
          <Tabtitle text={text}/>
            <div  className='tabs-content' style={{ display: 'block',width:'100%',height:'90%', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          <Carouselactpage items={this.state.resdata.rows} type={type} />
          </div>
            </div>
         
         )
      }

}
// const mapStateToProps = state => {
//   const { activityNotesDatas } = state
//   return {
//    activityNotesDatas
//   }
// }
export default withRouter(ActivityLists);

