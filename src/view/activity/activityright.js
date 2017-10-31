import React, { Component } from 'react';
import { List,ListView } from 'antd-mobile';
import { withRouter } from 'react-router'
import APIS from 'src/api.js'
import unjoin from 'src/image/img/act_tip_unjoined.png';
import joined from 'src/image/img/act_tip_joined.png';
import {IP} from 'src/api.js'
function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      {props.children}
    </div>
  );
}



let pageIndex = 1;

const dataBlobs = {};

let rowIDs = [];
function genData(data) {

    data.forEach((item)=>{
   
      dataBlobs[item.id] =item 
    })



}

class Right extends React.Component {
  constructor(props) {
    super(props);
    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID][rowID]
    };

    const dataSource = new ListView.DataSource({
      getRowData,
      rowHasChanged: (row1, row2) => row1.id !== row2.id,
    
    });

    this.state = {
      dataSource,
      isLoading: true,
      hasMore:false,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    let option = {};
    APIS.ApiHotActivity(option).then((res)=>{
     
        genData(res.data.data.list);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(dataBlobs),
        isLoading:false,
      })

    })


   }


  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    

  
  
  }

  render() {
   
    const row = (rowData, sectionID, rowID) => {
     
      return (
        <div key={rowID} className="row">
         <div className='row-left'>
           <div className='row-left-img'>
             <img src={'IP + rowData.rightimgwide'}/>

           </div>
           <div className='row-left-shop-title'>
             <i>{rowData.title}</i>
            <i>{rowData.subhead}</i>
           </div>
           <div className='row-left-identif'>
           {rowData.type===0?<div className='row-left-identif-inner organbg'><i>幸运</i><i>抢购</i></div>:'' }
          {rowData.type===1?<div className='row-left-identif-inner bluebg'><i>限时</i><i>抢购</i></div>:'' }
          {rowData.type===2?<div className='row-left-identif-inner redbg'><i>低价</i><i>竞拍</i></div>:'' }
           
           </div>
         </div>
          <div className='row-right'>
          <div className='tip'>
          {rowData.isJoin===1?<img src={joined}/>:<img src={unjoin}/>}
          </div>
            <div className='right-middle'>
              <div className='right-middle-progress'>
                活动进度:<span>{Math.floor(rowData.joinedmember / rowData.totalmember * 100)}%</span>
              </div>
               <div className='right-middle-progress'>
                  参与人数:<span>{rowData.joinedmember}人</span>
               </div>
            </div>
          </div>
        </div>
      );
    };

    return (<div className='activity-right'>
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>即将揭晓</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '加载完成'}
        </div>)}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        className="fortest"
        style={{
          height: document.documentElement.clientHeight * 3 / 4,
          overflow: 'auto',
          border: '1px solid #ddd',
          margin: '5px 0',
        }}
        pageSize={4}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    </div>);
  }
}
export default withRouter(Right);

