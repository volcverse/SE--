import { Input, Button, Form,Popconfirm,message } from 'antd';
import React from 'react';
import { Select } from 'antd';
import axios from 'axios';


export default class ManagerChoose extends React.Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };

    return (

      <>
        <br /><br /><br /><br /><br />
        <Form onFinish={onFinish}>
        <Form.Item label="课程id"  name="cid" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
		<Form.Item label="学生id" name="stuid" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
        <Form.Item>
        <Button style={{ width: 200 }} type="primary" shape="round" size='large' htmlType="submit">
              确认
        </Button>

        </Form.Item>

        

        </Form>

        
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

      </>
    )
  }
}


const onFinish = (values) => {
  axios.get('http://127.0.0.1:8000/api/managerChooseCourse?stu=' + values.stuid + '&cid=' + values.cid).then(response => {
    console.log('response: ', response.data);
  }).catch(function (error) {
    console.log(error);
  });
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}