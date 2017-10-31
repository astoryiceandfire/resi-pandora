import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Card,WingBlank,Flex,List, TextareaItem} from 'antd-mobile';
import Exchange from 'src/components/component/exchange.jsx';
import  'src/components/css/layoutwrap.less';

class Layoutleft  extends React.Component {
  render() {
   const {  ...restProps } = this.props;
    return <Flex.Item {  ...restProps } className='layout-left'></Flex.Item>
  }
}

class Layoutright extends React.Component {
  render() {
   const {  ...restProps } = this.props;
    return <Flex.Item {  ...restProps } className='layout-right'></Flex.Item>
  }
}





class  Layoutwraper extends React.Component {
    static Layoutleft = Layoutleft;
    static Layoutright = Layoutright;
     handleTabClick = (key)=> {
      
    }
      render() {
        const { ...resetProps } = this.props;
    
        return (
           <div className='layout-wraper' style={{ }} >
             <WingBlank style={{height:'100%'}}> 
                 <Flex style={{height:'100%',minHeight:'100%'}} align='start' { ...resetProps }>  
                </Flex>
            </WingBlank>
          </div>
         
         )
      }

}
export default Layoutwraper;

