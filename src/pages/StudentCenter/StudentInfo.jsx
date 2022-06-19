import React, { Component } from 'react'
import { Descriptions, Button } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'

var _THIS;

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
      formData.append(k, obj[k])
  }

  return formData
}

var rid;
var rname;
var rsex;
var rschool;
var rmajor;
var rclass;
var rcommu;
var pURL;

export default class StudentInfo extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: "",
      name: "",
      class: "",
      school: "",
      major: "",
      sex: "",
      photoURL: "",
      commu: ""
    };
  }

  componentWillMount() {
    _THIS = this;
    var name = this.props.location.state.username;
    var passw = this.props.location.state.psw;
    var tp = this.props.location.state.type;
    this.setState({
      username: name,
      psw: passw,
      type: tp
    })
    console.log(name);
    console.log(tp);

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
        rclass=response.data.data[1];
        rsex=response.data.data[4];
        pURL=response.data.data[6];
        pURL='../../resources/asd.png';
        rschool=response.data.data[2];
        rmajor=response.data.data[3];
        rcommu=response.data.data[7];
        console.log(pURL);

        if(rsex=='M'){
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
        <img className="logo" src="resources/adm.png" />
        <br /><br />
        <Link to={{ pathname: '/StudentCenter/ChangeStuInfo', state: { username: this.state.username, psw: this.state.psw } }}>
          <Button>
            编辑信息
          </Button>
        </Link>

        <Link to={{ pathname: '/StudentCenter/StuChangePSW', state: { username: this.state.username, psw: this.state.psw } }}>
          <Button style={{ marginLeft: 20 }}>
            修改密码
          </Button>
        </Link>

        <br /><br />
        <Descriptions title="学生信息">
          <Descriptions.Item label="姓名">{rname}</Descriptions.Item>
          <Descriptions.Item label="学号">{rid}</Descriptions.Item>
          <Descriptions.Item label="性别">{rsex}</Descriptions.Item>
          <Descriptions.Item label="学院">{rschool}</Descriptions.Item>
          <Descriptions.Item label="专业">{rmajor}</Descriptions.Item>
          <Descriptions.Item label="班级">{rclass}</Descriptions.Item>
        </Descriptions>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />

        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
