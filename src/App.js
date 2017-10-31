import React, { Component } from 'react';
// import { LOGINSUCCESS } from 'src/action/actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {   push } from 'react-router-redux'
import 'src/App.less';
import 'src/style/iconfont.css';
import {Button,Flex, NavBar } from 'antd-mobile';



class App extends Component {
      constructor(props) {
      super(props);
      this.state = {
        
      };
    }

   componentDidMount() {
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }

   handleSiderClick = (item,index) => {
    this.props.dispatch(push(item.route))
  }
   handleSetState = () => {

     window.location.reload(); 
   
  }

  render() {
     let { location,history} = this.props;
     let activeSidebarIndexloc = location.pathname.split('/')[1]
      let sideitemm = {'activity':0,'mall':1,'commounity':2,'person':3}
     let SidebarItemIndex = sideitemm[activeSidebarIndexloc]


    
  

    const siderItems = [
    { className:'icon-huodong',text:'活动专区' ,'route':'/activity/activity'},
    { className:'icon-shangcheng',text:'通币商城','route':'/mall/shoping'},
    { className:'icon-shequ',text:'用户社区','route':'/commounity/commounity'},
    { className:'icon-gerenzhongxin',text:'个人中心','route':'/person/center'},
  ].map((item ,index)=> (
     <Flex.Item  key={item.className} className='App-sider-item'>
       <Button  type="primary" className='App-sider-item-button' style={(SidebarItemIndex||0)===index?{background:"red"}:{} }  onClick={()=>{this.handleSiderClick(item,index)}} >
         <i className={'iconfont icon-sm '+`${item.className}`}>
         </i>{item.text}
       </Button>
     </Flex.Item>))
  const navbarItems = [ <Button  onClick={()=>{history.goBack()}} inline key='1' size='large'  style={{ marginRight: '0.4rem' }} icon="left"></Button> ,
                <Button  onClick={()=>{history.goForward()}} inline key='2' size='large' style={{ marginRight: '0.5rem' }} icon="right"></Button>,
                <Button   onClick={this.handleSetState} inline key='3' icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" className="" alt="icon" />}></Button>]
    return (
      <div className="App">
             <Flex align='stretch' className='App-grow'>
                <Flex.Item className='App-wrap-sider'>
                   <Flex direction='column' className='App-sider'>
                   {siderItems}
                  </Flex>
                </Flex.Item>
                <Flex.Item className='App-content'>
                  {this.props.children}
                </Flex.Item>
            </Flex>
            <Flex className='App-footer'>
               <NavBar iconName={false} leftContent={navbarItems}
                  mode="dark"
                  onLeftClick={() => console.log('onLeftClick')}
                  rightContent={[
                    <Button inline key='0' icon="cross-circle" style={{ marginRight: '0.5rem' }} ></Button>
                  ]}
                >{this.state.refresh}</NavBar>
            </Flex>
        
      </div>
    );
  }
}





const mapStateToProps = state => {
  const { userInfo } = state
  return {
   userInfo,
   
  }
}
export default withRouter(connect(mapStateToProps)(App))


