import React from 'react';
import { connect } from 'react-redux'
import { Tabs, Card} from 'antd-mobile';
import Carouselpage from 'src/components/component/carouselpage.jsx';
import Exchange from 'src/components/component/exchange.jsx';
import  'src/components/css/shopingmall.less';
import { PostsShopings } from 'src/action/actions'
const tabs = [
  { title: '游戏硬件' },
  { title: '游戏周边' },
  { title: '动漫专场' },
  { title: '涂装专区' },
  { title: '数码产品' },
  { title: '兑换专区' },
];




class  Shopingmall extends React.Component {
      constructor(props) {
          super(props);
           this.state = {
             CURINDEX:1,
          };
    }

  componentDidMount() {
   const { dispatch } = this.props
    dispatch(PostsShopings({categoryid:1}))
  }

  componentWillReceiveProps(nextProps) {
     const { shopingDatas} = nextProps
        if (nextProps.shopingDatas!==this.props.shopingDatas) {
         
      
      }
  }

     handleTabClick = (key,index)=> {
      const { dispatch } = this.props
        index = index + 1
        dispatch(PostsShopings({categoryid:index}))
          this.setState({
              CURINDEX: index
            });
      
    }
    
      render() {
          const { shopingDatas } = this.props
        
         let  categoryid = shopingDatas[`categoryid${this.state.CURINDEX}`]
        return (
         <div style={{width:'100%',height:'100%'}} className='tabs-wrap'>
                <Tabs tabs={tabs}  swipeable = {false} initialPage={2} animated={false} tabBarTextStyle={[]} useOnPan={false} onTabClick={this.handleTabClick}>
                </Tabs>
                {
                  this.state.CURINDEX===6?(
                     <div className="exchange" style={{ display: 'flex',width:'100%',height:'100%', alignItems: 'start', justifyContent: 'center', backgroundColor: '#fff' }}>
                   <Card>
                      <Card.Body>
                        <Exchange></Exchange>
                      </Card.Body>
                    </Card>
                  </div>):(
                     <div  className='tabs-content' style={{ display: 'block',width:'100%',height:'90%', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                   <Carouselpage key="11" items={categoryid} categoryid={this.state.CURINDEX} />
                </div>)
                }
               
               
            </div>)
      }

}

const mapStateToProps = state => {
  const { shopingDatas } = state
  return {
   shopingDatas
  }
}

export default connect(mapStateToProps)(Shopingmall);

