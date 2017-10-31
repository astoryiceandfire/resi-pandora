import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import Activityleft from 'view/activity/activityleft';
import Activityright from 'view/activity/activityright';
import  'style/activity/activity.less';


class  Activity extends React.Component {
    
    
      render() {
        // const { ...resetProps } = this.props;
      
        return (
          <Layoutwraper>
            <Layoutwraper.Layoutleft>
            <Activityleft/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
            <Activityright/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default Activity;

