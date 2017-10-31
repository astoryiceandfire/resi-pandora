import React, { Component } from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import Tabtitle from 'src/components/component/tabtitle.jsx';
import Carouselactpage from 'src/view/home/carouselactpage.jsx';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { axiosPosts } from 'src/action/actions'

class  ActivityNotes extends React.Component {
     componentDidMount() {
   const { dispatch } = this.props
    dispatch(axiosPosts({}))
  }

  componentWillReceiveProps(nextProps) {
     const { shopingDatas} = nextProps
        
  }
    
      render() {
        const {activityNotesDatas:{activityNotesExchange} } = this.props;
        return (
          <div style={{width:'100%',height:'100%'}} className='tabs-wrap'>
          <Tabtitle text={'兑奖记录'}/>
            <div  className='tabs-content' style={{ display: 'block',width:'100%',height:'90%', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          <Carouselactpage items={activityNotesExchange} categoryid={1} />
          </div>
            </div>
         
         )
      }

}
const mapStateToProps = state => {
  const { activityNotesDatas } = state
  return {
   activityNotesDatas
  }
}
export default withRouter(connect(mapStateToProps)(ActivityNotes));

