import React from 'react';
import { Input, Button, Form } from 'antd';
import axios from 'axios'
import { Upload, message} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { serverUrl } from '../../config';

var _THIS;

  const uploadButton = (
    <div>
       <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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

export default class ChangeStuInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: "",
      loading: false
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

  
    handleChange = info => {
      if (info.file.status === 'uploading') {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl:info.file.response.info,
            loading: false,
          }),
        );
        console.log(info);
      }
    };

    render() {
    const { loading, imageUrl } = this.state;
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
                    <Input id="Scommunicationway"></Input>
                </Form.Item>

                <br /><br />
                <Form.Item>
                  <Upload name="file"
                        listType="picture-card"
                        className="file-uploader"
                        showUploadList={false}
                        action="/api/UpPhoto"
                        beforeUpload={beforeUpload}
                        onChange={info => this.handleChange(info)}>
                        {imageUrl ? <img src={serverUrl+imageUrl} alt="file" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
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
    var s4 = document.getElementById("Scommunicationway");

    var v1;
    var v5;

    if (s0.value == "") {
        v1=null;
    }
    else{
        v1=s0;
    }
    if (s4.value == "") {
        v5=null;
    }
    else{
        v5=s4.value;
    }

    axios
        .post('http://127.0.0.1:8000/api/changeStu',
            transformFormData({
                id: v1,
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