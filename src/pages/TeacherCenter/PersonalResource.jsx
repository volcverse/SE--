import React, { Component } from 'react'
import { Table ,Button,Input,Upload, message} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const columns = [
    {
        title: '资源路径',
        dataIndex: 'Path',
        key: 'Path',
    },
    {
        title: '资源名称',
        key: 'Resource_name',
        dataIndex: 'Resource_name',
    },
    {
        title: '上传时间',
        key: 'Submit_time',
        dataIndex: 'Submit_time',
    },
    {
        title: '学号',
        key: 'Student_id',
        dataIndex: 'Student_id',
    },
    {
        title: '教师号',
        key: 'Teacher_id',
        dataIndex: 'Teacher_id',
    },
    {
        title: '资源大小',
        key: 'Resource_space',
        dataIndex: 'Resource_space',
    },
    {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        render: text =><a>下载 删除</a>
    },
];


 const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};
export default class PersonalResource extends Component {

    state = {
    personalresource:[],
    loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/PersonalResource');
        //console.log(res.data.assignment);
        //console.log(res);
        if(res.data.status === 200){
        this.setState({
            personalresource: res.data.personalresource,
            loading:false,
        })
        }
    }

    render() {
        return (
            <div>
                <span style={{ color: 'black', fontSize: '2em' }}>个 人 资 源</span>
                <br></br><br></br>
                <Input.Search placeholder="关键字" allowClear style={{ width: '25%' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Upload {...props}>
                    <Button type="primary" icon={<UploadOutlined />}>上传</Button>
                </Upload>
                
                <br></br><br></br>
                <Table columns={columns} dataSource={this.state.personalresource} />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>  
        )
    }
}