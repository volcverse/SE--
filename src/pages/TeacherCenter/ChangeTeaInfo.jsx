import React from 'react';
import { Input, Button, Form } from 'antd';
import axios from 'axios'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

var _THIS;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action=""
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}
export default class ChangeTeaInfo extends React.Component {
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
        return (
            <div>
                <br /><br /><br /><br /><br />
                <span style={{ color: '#000', fontSize: '1.4em'}}>个人信息修改</span>
                <br /><br />
                <Form.Item label="联系方式" {...formItemLayout}>
                    <Input id="communicationway"></Input>
                </Form.Item>


                <Form.Item>
                       <Avatar />
                </Form.Item>
                <br /><br />
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

    var s1 = _THIS.state.username;
    var s2 = document.getElementById("communicationway");

    var v1;
    var v2;

    if (s1.value == "") {
      v1=null;
  }
  else{
      v1=s1;
  }

  if (s2.value == "") {
      v2=null;
  }
  else{
      v2=s2.value;
  }

    axios
        .post('http://127.0.0.1:8000/api/changeTea',
            transformFormData({
                id: v1,
                commu: v2
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