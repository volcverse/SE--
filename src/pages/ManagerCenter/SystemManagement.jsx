import { Input, Button, Form,DatePicker, TimePicker,Col,InputNumber } from 'antd';
import React from 'react';
import { Select } from 'antd';
const { RangePicker } = DatePicker;


export default class SystemManagement extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24},
        sm: { span: 4, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8},
      },
    };
	    const formItemLayout1 = {
      labelCol: {
        xs: { span: 24},
        sm: { span: 7, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 2},
      },
    };


    return (

      <>
        <br /><br /><br /><br /><br />
	 
      <Form.Item name="PrimarySelectionTime" label="初选时间设置" {...formItemLayout}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss " />
      </Form.Item>
      <Form.Item name="By-electionTime" label="补选时间设置" {...formItemLayout}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss " />
      </Form.Item>      
	  <Form.Item name="studentnum" label="在线人数限制" rules={[{ type: 'number', min: 0, max: 10000 }]}{...formItemLayout1}>
        <InputNumber/>
        </Form.Item>	
        <br/>
        <Button style={{ width: 100 }} type="primary" shape="round" size='large'>
              确定
            </Button>
        <br/>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

      </>
    )
  }
}

function handleChange(value) {
  console.log(`selected ${value}`);
}




