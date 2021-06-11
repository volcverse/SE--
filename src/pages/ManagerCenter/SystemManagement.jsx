import { Input, Button, Form,DatePicker, TimePicker,Col,InputNumber,Popconfirm } from 'antd';
import React, { Component } from 'react';
import { Select,message } from 'antd';
const { RangePicker } = DatePicker;
const validateMessages = {
  number: {
    range: '最大${label}必须大于0',
  },
};

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
 const onFinish = (values: any) => {
    console.log(values);
  };


    return (

      <>
        <br /><br /><br /><br /><br />
	  <Form {...formItemLayout1} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="PrimarySelectionTime" label="初选时间设置" {...formItemLayout}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss " />
      </Form.Item>
      <Form.Item name="By-electionTime" label="补选时间设置" {...formItemLayout}>
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss " />
      </Form.Item>      
	  
	  <Form.Item name="studentnum" label="在线人数限制" rules={[{ type: 'number', min: 1, max: 10000 }]}{...formItemLayout1}>
        <InputNumber/>
        </Form.Item>	
		        <Popconfirm
                    title="您确认设置内容无误吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
        <Button style={{ width: 100 }} type="primary" shape="round" size='large'>
              确定
            </Button>
			</Popconfirm>
        <br/>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />
		</Form>
      </>
    )
  }
}

function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}



