import React, { Component } from 'react';
import { List,ListView ,Flex,Tag } from 'antd-mobile';
import { withRouter } from 'react-router'
import {hsdateUtil} from 'utils/index.js'
import APIS from 'src/api.js'
import {IP} from 'src/api.js'
function MyBody(props) {
  return (
    <div className="am-list-body ">
      {props.children}
    </div>
  );
}

const Item = List.Item;
const  tagMarks = ['','#热门话题#','#活动交流#','#游戏交流#','#硬件交流#','#电台交流#','#周边社区交流#']
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
      hasMore:true,
    };
  }

  componentDidMount() {
   	this.getListData()
  

  
   }
   
   getListData(pageIndex){
   	let option = {
    	page:'',
    	rows:10
	    };
	    option.page = pageIndex||1

	    APIS.ApiPostList(option).then((res)=>{
	  
	        genData(res.data.data.page.rows);
	        if (pageIndex>=res.data.data.page.toal) {
	        	 this.setState({ hasMore: false });
	        }
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
   
     this.setState({ isLoading: true });
     this.getListData(++pageIndex)
		
  
  
  }

  render() {
   
    const row = (item, sectionID, rowID) => {
     
      return (
       
        <List  
	        className="commounity-right-row" key={rowID} 
	        renderHeader={() => 
	        	<div><Tag disabled className='commounity-right-row-tag'>{item.mid===0?'官方':'用户'}</Tag>
	        	{item.nickname?<Tag disabled className='commounity-right-row-tag'>{item.nickname}</Tag>:''}
	        	<span className='commounity-right-row-title'>{item.title}</span>
	        	</div>}
	        renderFooter={() => 
	        	<div>
	        		<Tag disabled>{tagMarks[item.coterieid]}</Tag>
	        		<span style={{'marginLeft':'0.2rem'}}>{hsdateUtil(item.posttime*1000)}</span>
	        		<Flex  className="commounity-right-row-envycount" style={{'display':'inline-flex'}}>
				      <Flex.Item> <i className={'iconfont  icon-zan'}/>{item.envycount}</Flex.Item>
				      <Flex.Item> <i className={'iconfont  icon-taolun1'}/>{item.commentcount}</Flex.Item>
				    </Flex>
	        		</div>}
	    > 
	        <Item className="commounity-right-maincontent">
	        	{item.subhead}
	        	</Item>
	      </List>
         
       
      );
    };

    return (<div className='commounity-right'>
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() =>''}
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

