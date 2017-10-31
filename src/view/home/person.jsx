import React from 'react';
import Layoutwraper from 'src/components/component/layoutwrap.jsx';
import Refercenter from 'view/home/refercenter.jsx';
import Referlist from 'view/home/referlist.jsx';
import  './style/person.less';


class  person extends React.Component {
    
    
      render() {
        // const { ...resetProps } = this.props;
      
        return (
          <Layoutwraper>
            <Layoutwraper.Layoutleft>
              <Refercenter/>
            </Layoutwraper.Layoutleft>
            <Layoutwraper.Layoutright>
             
              <Referlist/>
            </Layoutwraper.Layoutright>
          </Layoutwraper>
         
         )
      }

}
export default person;

