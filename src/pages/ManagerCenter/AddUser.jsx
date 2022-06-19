import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs';
const { TextArea } = Input;

const { Option } = Select;


export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            psw: "",
            type: '1',
            id: "",
            class: "",
            college: "",
            department: "",
            major: "",
            gender: "",
            id_card: "",
            contact: "",
            tp:"",
            Batch:"",

        };
        this.changeState = this.changeState.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeGender = this.changeGender.bind(this);
    }

    componentDidMount(){
        console.log(this.props);
    }

    componentWillMount() {
        var name = this.props.location.state.username;
        var passw = this.props.location.state.psw;
        var tp=this.props.location.state.type;
        console.log(name);
        this.setState({
            username: name,
            psw: passw,
            tp: tp,
        })
    }

    changeState(event) {
        switch (event.target.id) {
            case "id":
                this.setState({ id: event.target.value });
                break;
            case "name":
                this.setState({ name: event.target.value });
                break;
            case "id_card":
                this.setState({ id_card: event.target.value });
                break;
            case "contact":
                this.setState({ contact: event.target.value });
                break;
            case "college":
                this.setState({ college: event.target.value });
                break;
            case "department":
                this.setState({ department: event.target.value });
                break;
            case "class":
                this.setState({ class: event.target.value });
                break;
            case "major":
                this.setState({ major: event.target.value });
                break;
            case "Batch":
                this.setState({ Batch: event.target.value });
                break;
        }
    }

    changeGender(value) {
        this.setState({ gender: value });
    }

    changeType(value) {
        this.setState({ type: value });
        console.log(`selected ${value}`);
    }

    sendRequest() {
        const _this = this;
        axios
            .post('http://127.0.0.1:8000/api/adduser', qs.stringify(_this.state),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            ).then((response) => {
                switch (response.data.code) {
                    case 200:
                        message.success(`添加成功！`);
                        break;
                    case 204:
                    case 400:
                        message.error(`添加失败，请检查 id 是否重复、输入格式是否正确！`);
                }
            }).catch((error) => {
                message.error(`添加失败，请检查 id 是否重复、输入格式是否正确！`);
            })
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
        const formItemLayout1 = {
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

        if (this.state.type == '1') {
            return (

                <>
                    <Form.Item {...formItemLayout} label="账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="ID" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>

                    <Form.Item label="姓名" {...formItemLayout}>
                        <Input id="name" onChange={this.changeState} value={this.state.name}></Input>
                    </Form.Item>

                    <Form.Item label="性别" {...formItemLayout}>
                        <Select id="gender" placeholder="请选择性别" onChange={this.changeGender}>
                            <Option value='0'>男</Option>
                            <Option value='1'>女</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="身份证号" {...formItemLayout}>
                        <Input id="id_card" onChange={this.changeState} value={this.state.id_card}></Input>
                    </Form.Item>

                    <Form.Item label="学院" {...formItemLayout}>
                        <Input id="college" onChange={this.changeState} value={this.state.college}></Input>
                    </Form.Item>

                    <Form.Item label="专业" {...formItemLayout}>
                        <Input id="major" onChange={this.changeState} value={this.state.major}></Input>
                    </Form.Item>

                    <Form.Item label="班级" {...formItemLayout}>
                        <Input id="class" onChange={this.changeState} value={this.state.class}></Input>
                    </Form.Item>

                    <Form.Item label="联系方式" {...formItemLayout}>
                        <Input id="contact" onChange={this.changeState} value={this.state.contact}></Input>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={this.sendRequest} style={{ width: 200 }} type="primary" shape="round" size='large'>
                            添加
                        </Button>
                    </Form.Item>

                    <Form.Item label="批量导入" {...formItemLayout1}>
                        <TextArea id="Batch" showCount maxLength={800} autoSize={{ minRows: 8, maxRows: 8 }}></TextArea>
                    </Form.Item>
                    <Form.Item>
                            <Button onClick={requestSend}  style={{ width: 200 }} type="ghost" shape="round" size='large'>
                                批量导入
                            </Button>
                    </Form.Item>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </>
            )
        }
        else {
            return (

                <>
                    <Form.Item {...formItemLayout} label="账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="ID" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>

                    <Form.Item label="姓名" {...formItemLayout}>
                        <Input id="name" onChange={this.changeState} value={this.state.name}></Input>
                    </Form.Item>

                    <Form.Item label="性别" {...formItemLayout}>
                        <Select name="gender" placeholder="请选择性别" onChange={this.changeGender}>
                            <Option value='0'>男</Option>
                            <Option value='1'>女</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="身份证号" {...formItemLayout}>
                        <Input id="id_card" onChange={this.changeState} value={this.state.id_card}></Input>
                    </Form.Item>

                    < Form.Item label="单位" {...formItemLayout}>
                        <Input id="department" onChange={this.changeState} value={this.state.department}></Input>
                    </Form.Item >

                    <Form.Item label="联系方式" {...formItemLayout}>
                        <Input id="contact" onChange={this.changeState} value={this.state.contact}></Input>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={this.sendRequest} style={{ width: 200 }} type="primary" shape="round" size='large'>
                            添加
                        </Button>
                    </Form.Item>

                    <Form.Item label="批量导入" {...formItemLayout1}>
                        <TextArea id="Batch" autoSize={{ minRows: 8, maxRows: 8 }}></TextArea>
                    </Form.Item>
                    <Form.Item>
                            <Button onClick={requestSend}  style={{ width: 200 }} type="ghost" shape="round" size='large'>
                                批量导入
                            </Button>
                    </Form.Item>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </>
            )
        }
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

    var s1 = document.getElementById("Batch");

    var v1;

    if (s1.value == "") {
        v1=null;
    }
    else{
        v1=s1.value;
    }

    axios
        .post('http://127.0.0.1:8000/api/BatchInput',
            transformFormData({
                file: v1,
                
            }),
            {
              headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
          ).then((response) => 
            {
                var code = response.data.code;
                var amount=response.data.data;
                if (code === 200) {
                  alert('插入'+amount+'条');
                }
          })
}
/*
var utype = 's';

function usertypeget(value) {
    console.log(`selected ${value}`);
    utype = value;
}


const transformFormData = (obj) => {
    let formData = new FormData()

    for (let k in obj) {
        formData.append(k, obj[k])
    }

    return formData
}

const requestSend = () => {
    var s1 = document.getElementById("id");
    var s2 = document.getElementById("name");
    var s3 = document.getElementById("sex");
    var s4 = document.getElementById("idcardnum");
    var s5 = document.getElementById("class");
    var s6 = document.getElementById("major");
    var s7 = document.getElementById("school");
    var s8 = document.getElementById("commu");
    var s9 = document.getElementById("department");

    axios
        .get('http://seim.com/api/test',
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
        ).then((response) => {
            console.log('haha');
            console.log(response.data);
            console.log(utype);
        })
    axios
        .post('http://seim.com/api/add',
            transformFormData({
                id: s1.value,
                name: s2.value,
                gender: s3.value,
                id_card: s4.value,
                class: s5.value,
                major: s6.value,
                college: s7.value,
                contact: s8.value,
                department: s9.value,
                type: utype
            }),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }          
    }
  ).then((response) => { 
    // get response
  })
}*/