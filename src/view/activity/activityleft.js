import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Flex,List, Button,Carousel,Grid,NoticeBar,Icon} from 'antd-mobile';
import APIS from 'src/api.js'
import { withRouter } from 'react-router'

const Item = List.Item;
const Brief = Item.Brief;

const sortsdata = [
{icon:'icon-icon',text:'幸运抢购',type:0},
{icon:'icon-clock-s-o',text:'限时抢购',type:1},
{icon:'icon-auction',text:'低价竞拍',type:2}]

class left extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        data: ['', '', ''],
        initialHeight: 200,
      };
    }
     
   componentDidMount() {
    let option = {};
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    // APIS.Apisingledata(option).then((res)=>{
    //    if (res.data.retcode==1) {

    //        this.setState({
    //           userinfo: res.data.data
    //         });
    //      }
    // })
   
  }
  componentWillUpdate(){
    
  }

  componentWillReceiveProps(nextProps) {
   
 

  }
  handleSortClick = (item)=>{
     const {location,history} = this.props 
       history.push('/activity/activitylist',item)
  }

  render (){ 
   

    return ( <div className='activity-left'> 
                 <List className="activity-left-top">
                   
                     <Carousel
                            autoplay={false}
                            infinite
                            selectedIndex={1}
                            swipeSpeed={35}
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                          >
                            {this.state.data.map(ii => (
                              <div key={ii} style={{height:'3rem'}}>
                                <img
                                  src={`http://img2.imgtn.bdimg.com/it/u=2974104803,1439396293&fm=200&gp=0.jpg`}
                                  alt="icon"
                               
                                />
                              </div>
                            ))}
                          </Carousel>
                  
                  </List>
                  <List className="">
                   <Grid data={sortsdata}
                   className='grid-activitys'
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
                  <List renderHeader={() => <div className='noticebar-header'><Icon type="voice" size='md' style={{fontSize:'0.4rem',color:'#f76a24',marginRight:"0.1rem"}}/>'活动公告'</div>}>
                  <NoticeBar style={{height:'0.6rem'}} marqueeProps={{ loop: true, style: { padding: '0 0.1rem',fontSize:'0.25rem' } }}>
                      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                    </NoticeBar>
                  </List>

              </div>)
  }
}

export default withRouter(left);

