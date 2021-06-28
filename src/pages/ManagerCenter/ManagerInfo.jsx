import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'


var rid;
var rname;
var rsex;
var rcommu;
var rdep;
var rURL;

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
      formData.append(k, obj[k])
  }

  return formData
}

export default class StudentInfo extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: "",
      name: "",
      department: "",
      sex: "",
      photoURL: "",
      commu: ""
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
    console.log(this.state.username);
    axios
      .post('http://127.0.0.1:8000/api/getinformation',
        transformFormData({
          ID: name,
          type: tp
        }),
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }
      ).then((response) => {
        rid=this.state.username;
        rname=response.data.data[0];
        rdep=response.data.data[1];
        rsex=response.data.data[2];
        rURL=response.data.data[4];
        rcommu=response.data.data[5];

        if(rsex==='M'){
          rsex='男';
        }
        else{
          rsex='女';
        }

        this.forceUpdate();

        // get response

      }).catch(function (error) {
        alert('错误');
      })
  }
  render() {
    return (
      <div>
        <Image
          width={200}
          src={rURL}
        />
        <br /><br />
        <Link to={{ pathname: '/TeacherCenter/ChangeTeaInfo', state: { username: this.state.username, psw: this.state.psw , type:this.state.type} }}>
          <Button>
            编辑信息
          </Button>
        </Link>

        <Link to={{ pathname: '/TeacherCenter/TeaChangePSW', state: { username: this.state.username, psw: this.state.psw, type:this.state.type } }}>
          <Button style={{ marginLeft: 20 }}>
            修改密码
          </Button>
        </Link>
        <br /><br />
        <Descriptions title="教师信息">
          <Descriptions.Item label="姓名">{rname}</Descriptions.Item>
          <Descriptions.Item label="工号">{rid}</Descriptions.Item>
          <Descriptions.Item label="性别">{rsex}</Descriptions.Item>
          <Descriptions.Item label="系/部门">{rdep}</Descriptions.Item>
          <Descriptions.Item label="联系方式">{rcommu}</Descriptions.Item>
        </Descriptions>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}

