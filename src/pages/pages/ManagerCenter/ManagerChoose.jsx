import { Input, Button, Form,Popconfirm,message } from 'antd';
import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


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
        <Form.Item label="课程id" {...formItemLayout}>
          <Input></Input>
        </Form.Item>
		<Form.Item label="学生id" {...formItemLayout}>
          <Input></Input>
        </Form.Item>

        <br/>
				<Popconfirm
                    title="您确认设置内容无误吗？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
        <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
              确认
            </Button>
			</Popconfirm>
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
function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}