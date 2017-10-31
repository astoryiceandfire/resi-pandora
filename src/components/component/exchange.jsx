import React from 'react';
import { List, InputItem,  Button,Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import logo from 'src/logo.svg'
const Item = List.Item;
const exchangButtonStyle = { width: '70%' ,marginLeft:'auto',marginRight:'auto'}

class BasicInput extends React.Component {
  state = {
    value: 1,
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('输入不能为空');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('输入不能为空'));
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (<form>
      <List
      
        renderFooter={() => getFieldError('exchangecode') && getFieldError('exchangecode').join(',')}
      >
       <Item>
        <InputItem
          {...getFieldProps('exchangecode', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '兑换码不能为空' },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('exchangecode')}
          onErrorClick={() => {
            alert(getFieldError('exchangecode').join('、'));
          }}
          placeholder="兑换码"
        >兑换码</InputItem>
        </Item>
       
      
       
       
      </List>
      <List
       
        renderFooter={() => getFieldError('verification') && getFieldError('verification').join(',')}
      >
       
        <Item
          extra={<Flex justify='end' align='center' ><img style={{height:'80px',width:'200px'}} src={logo}/></Flex>}
        >
          <InputItem
          {...getFieldProps('verification', {
            // initialValue: 'little ant',
            rules: [
              { required: true, message: '验证码不能为空' },
              { validator: this.validateAccount },
            ],
          })}
          clear
          error={!!getFieldError('verification')}
          onErrorClick={() => {
            alert(getFieldError('verification').join('、'));
          }}
          placeholder="验证码"
        >验证码</InputItem>
        </Item>
       
      
       
      
      </List>
      <List >
       <Item className='notice'>
          <div style={{color: '#888'}}>
              <p>'注意事项:'</p>
              <p>'1:点击图片可刷新验证码,每分钟内只能获取10次验证码,请勿操作频繁'</p>
             <p>'2:兑换中如果遇到问题,请联系客服QQ 224202410'</p>
          </div>
          
          </Item>
        <Item>
          <Button type="primary" size="large"  style={exchangButtonStyle} onClick={this.onSubmit}>兑换</Button>
         
        </Item>
      </List>
     
    </form>);
  }
}

const Sideritem = createForm()(BasicInput);

export default Sideritem;