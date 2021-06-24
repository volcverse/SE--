import React from 'react';
import { Input, Button, Form } from 'antd';

export default class ChangeStuInfo extends React.Component {
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
                <Form.Item label="联系方式" {...formItemLayout}>
                    <Input></Input>
                </Form.Item>


                <Form.Item>
                    <Button>照片上传</Button>
                </Form.Item>
                <br /><br />
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
