import { Input, Button, Form } from 'antd';
import { Popconfirm, message } from 'antd';
import React from 'react';
import { Select } from 'antd';
import axios from 'axios';
import qs from 'qs';
const { Option } = Select;



export default class ChangeUser extends React.Component {
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
            tp:""
        };
        this.changeState = this.changeState.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentWillMount() {
        var name = this.props.location.state.username;
        var passw = this.props.location.state.psw;
        var tp = this.props.location.state.type;
        console.log(name);
        this.setState({
            username: name,
            psw: passw,
            tp:tp
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
        }
    }

    changeGender(value) {
        this.setState({ gender: value });
    }

    changeType(value) {
        this.setState({ type: value });
        console.log(`selected ${value}`);
    }

    confirm(e) {
        console.log(e);
        message.success('操作确认');
        this.sendRequest();
    }

    cancel(e) {
        console.log(e);
        message.error('操作取消');
    }

    sendRequest() {
        const _this = this;
        axios
            .post('http://127.0.0.1:8000/api/change', qs.stringify(_this.state),
                {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            ).then((response) => {
                if (response.data.code == 200) {
                    message.success(`修改成功！`);
                }
                else {
                    message.error(`修改失败，请检查 id 是否存在、输入格式是否正确！`);
                }
            }).catch((error) => {
                message.error(`修改失败，请检查 id 是否存在、输入格式是否正确！`);
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
        console.log(this.state.username);

        if (this.state.type == '1') {
            return (

                <>
                    <br /><br />
                    <Form.Item label="目标账号" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>
                    <br /><br /><br />

                    <Form.Item {...formItemLayout} label="所修改内容">
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
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
                        <Popconfirm
                            title="您确定修改的信息无误吗"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
                                修改
                        </Button>
                        </Popconfirm>
                    </Form.Item>


                    <br /><br />

                </>
            )
        }
        else {
            return (

                <>
                    <br /><br /><br /><br /><br />
                    <Form.Item label="目标账号" {...formItemLayout}>
                        <Input id="id" onChange={this.changeState} value={this.state.id}></Input>
                    </Form.Item>
                    <br /><br /><br />

                    <Form.Item {...formItemLayout} label="所修改内容">
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="账号类型">
                        <Select defaultValue='1' onChange={this.changeType}>
                            <Option value='2'>教师</Option>
                            <Option value='1'>学生</Option>
                            <Option value='3'>管理员</Option>
                        </Select>
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

                    <Form.Item label="单位" {...formItemLayout}>
                        <Input id="department" onChange={this.changeState} value={this.state.department}></Input>
                    </Form.Item>

                    <Form.Item label="联系方式" {...formItemLayout}>
                        <Input id="contact" onChange={this.changeState} value={this.state.contact}></Input>
                    </Form.Item>

                    <Form.Item>
                        <Popconfirm
                            title="您确定修改的信息无误吗"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button style={{ width: 200 }} type="primary" shape="round" size='large'>
                                修改
                        </Button>
                        </Popconfirm>
                    </Form.Item>


                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br />

                </>
            )
        }
    }
}




/*
var utype = "student";

function usertypeget(value) {
  console.log(`selected ${value}`);
  utype=value;
}


const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
    formData.append(k, obj[k])
  }

  return formData
}

const requestSend=()=>{
  var s1=document.getElementById("changeid");
  var s2=document.getElementById("changename");
  var s3=document.getElementById("changesex");
  var s4=document.getElementById("changeidcard");
  var s5=document.getElementById("changeclass");
  var s6=document.getElementById("changemajor");
  var s7=document.getElementById("changeschool");
  var s8=document.getElementById("changecommu");


  axios
  .post('https://localhost:8080',
    transformFormData({
      id: s1.value,
      name: s2.value,
      sex: s3.value,
      idcardnum: s4.value,
      class: s5.value,
      major: s6.value,
      school: s7.value,
      commu: s8.value,
      type: utype
    }),
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }
  ).then((response) => {
    // get response
  })
}*/