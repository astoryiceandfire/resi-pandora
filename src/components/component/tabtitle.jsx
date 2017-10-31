import React from 'react';
import  'src/components/css/tabtitle.less';

const Tabtitle = (props)=>{
	const {text} = props
  return ( 
    <div className="tab-title">{text}</div>)
}



export default Tabtitle;