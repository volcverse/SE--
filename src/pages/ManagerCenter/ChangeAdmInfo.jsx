import React from 'react';
import { Input, Button, Form } from 'antd';

export default class ChangeAdmInfo extends React.Component {
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
            <div>
                <br /><br /><br /><br /><br />
                <span style={{ color: '#000', fontSize: '1.4em'}}>个人信息修改</span>
                <br /><br />
                <Form.Item label="姓名" {...formItemLayout}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="性别" {...formItemLayout}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="身份证号" {...formItemLayout}>
                    <Input></Input>
                </Form.Item>

                <Form.Item>
                    <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
                        确定
                    </Button>
                </Form.Item>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                
            </div>
        )
    }
}
