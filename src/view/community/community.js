import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import Communityleft from 'view/community/communityleft';
import Communityright from 'view/community/communityright';
import  'style/community/community.less';


class  Community extends React.Component {
    
    
      render() {
        // const { ...resetProps } = this.props;
      
        return (
          <Layoutwraper>
            <Layoutwraper.Layoutleft>
            <Communityleft/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
               <Communityright/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default Community;

