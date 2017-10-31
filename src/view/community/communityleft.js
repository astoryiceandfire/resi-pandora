import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Flex,List, Button,Carousel,Grid,NoticeBar,Icon} from 'antd-mobile';
import APIS from 'src/api.js'
import { withRouter } from 'react-router'

const Item = List.Item;
const Brief = Item.Brief;

const sortsdata = [
{icon:'icon-remen',text:'热门帖子',type:0},
{icon:'icon-Combined-Shape',text:'用户晒单',type:1},
{icon:'icon-taolun',text:'与我相关',type:2}]

class left extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        initialHeight: 200,
        banner:'',
      };
    }
     
   componentDidMount() {
   
        this.getApiAdvertList()
        this.getApiAllCoterie()
   
  }
  getApiAllCoterie(){
     let option = {};
        APIS.ApiAllCoterie({type:3}).then((res)=>{
           if (res&&res.data&&res.data.retcode===1) {


               this.setState({
                  banner: res.data.data.banner
                });
             }
        })
  }
  getApiAdvertList(){
    let vm = this
     APIS.ApiAdvertList({showArea:3}).then((res)=>{

     })

   }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
  handleSortClick = (item)=>{
     const {location,history} = this.props 
       history.push('/commounity/commounitylist',item)
  }

  render (){ 
   const {banner} = this.state

    return ( <div className='commounity-left'> 
                 <List className="commounity-left-top">
                   
                   
                           
                              <div style={{height:'3rem'}}>
                                <img className="commounity-left-top-img" 
                                  src={banner.img}
                                  alt="icon"
                               
                                />
                              </div>
                          
                       
                  
                  </List>
                  <List className="">
                   <Grid data={sortsdata}
                   className='grid-commounitys'
                    columnNum={3} 
                    hasLine={false} 
                    renderItem={dataItem => (
                    <div  className='am-grid-item-inner-content' onClick={()=>{this.handleSortClick(dataItem)}}>
                       <i className={'iconfont icon-sm '+ dataItem.icon} style={{fontSize: '0.4rem'}} />
                      <div style={{ color: '#888', fontSize: '0.2rem', marginTop: '0.1rem' }}>
                        <span>{dataItem.text}</span>
                      </div>
                    </div>
                  )}
                    />
                  </List>
                  <List renderHeader={() => <div className='noticebar-header'><Icon type="voice" size='md' style={{fontSize:'0.4rem',color:'#f76a24',marginRight:"0.1rem"}}/>'最新公告'</div>}>
                  <NoticeBar style={{height:'0.6rem'}} marqueeProps={{ loop: true, style: { padding: '0 0.1rem',fontSize:'0.25rem' } }}>
                      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                    </NoticeBar>
                  </List>

              </div>)
  }
}

export default withRouter(left);

