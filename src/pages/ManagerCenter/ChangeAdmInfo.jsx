import React from 'react';
import { Input, Button, Form } from 'antd';
import axios from 'axios'

var _THIS;

export default class ChangeAdmInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            psw: "",
            type: ""
        };
    }

    componentWillMount() {
        var name = this.props.location.state.username;
        var passw = this.props.location.state.psw;
        var tp = this.props.location.state.type;
        this.setState({
            username: name,
            psw: passw,
            type: tp
        })

        _THIS=this;
    }
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
        console.log(this.state.username);
        return (
            <div>
                <br /><br /><br /><br /><br />
                <span style={{ color: '#000', fontSize: '1.4em' }}>个人信息修改</span>
                <br /><br />
                <Form.Item label="姓名" {...formItemLayout}>
                    <Input id="Name"></Input>
                </Form.Item>

                <Form.Item label="性别" {...formItemLayout}>
                    <Input id="Sex"></Input>
                </Form.Item>

                <Form.Item label="身份证号" {...formItemLayout}>
                    <Input id="id_card"></Input>
                </Form.Item>

                <Form.Item label="联系方式" {...formItemLayout}>
                    <Input id="Scommunicationway"></Input>
                </Form.Item>

                <Form.Item>
                    <Button>照片上传</Button>
                </Form.Item>
                <br /><br />

                <Form.Item>
                    <Button onClick={requestSend} style={{ width: 200 }} type="primary" shape="round" size='large'>
                        确定
                    </Button>
                </Form.Item>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}

const transformFormData = (obj) => {
    let formData = new FormData()

    for (let k in obj) {
        formData.append(k, obj[k])
    }

    return formData
}


const requestSend = () => {

    var s0 = _THIS.state.username;
    var s1 = document.getElementById("Name");
    var s2 = document.getElementById("Sex");
    var s3 = document.getElementById("id_card");
    var s4 = document.getElementById("Scommunicationway");

    var v1;
    var v2;
    var v3;
    var v4;
    var v5;

    if (s0.value == "") {
        v1=null;
    }
    else{
        v1=s0;
    }

    if (s1.value == "") {
        v2=null;
    }
    else{
        v2=s1.value;
    }

    if (s2.value == "") {
        v3=null;
    }
    else{
        v3=s2.value;
    }

    if (s3.value == "") {
        v4=null;
    }
    else{
        v4=s3.value;
    }

    if (s4.value == "") {
        v5=null;
    }
    else{
        v5=s4.value;
    }

    axios
        .post('http://127.0.0.1:8000/api/changeMan',
            transformFormData({
                id: v1,
                name: v2,
                sex: v3,
                idcardnum: v4,
                commu: v5
            }),
            {
              headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
          ).then((response) => 
            {
                var code = response.data.code;
          
                if (code === 200) {
                  alert('修改成功！');
                }
          })
}