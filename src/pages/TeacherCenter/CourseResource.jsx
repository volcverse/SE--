import React, { Component } from 'react'
import { Table ,Button,Input,Upload, message} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const columns = [
    {
        title: '资源名称',
        dataIndex: 'resource_name',
        key: 'resource_name',
    },
    {
        title: '时间',
        key: 'change_time',
        dataIndex: 'change_time',
    },
    {
        title: '大小',
        key: 'size',
        dataIndex: 'size',
    },
    {
        title: '操作',
        key: 'operation',
        dataIndex: 'operation',
    },
];

const data = [
    {
        key: '1',
        resource_name: '资源1',
        change_time: '第一周',
        size: '102.0kb',
        operation: <div>
            <Button>下载</Button>
            <Button>删除</Button>
        </div>
    },
    {
        key: '2',
        resource_name: '资源2',
        change_time: '第二周',
        size:'3.5mb',
        operation: <div>
            <Button>下载</Button>
            <Button>删除</Button>
        </div>
    },
    {
        key: '3',
        resource_name: '资源3',
        change_time: '第三周',
        size:'20.1mb',
        operation: <div>
            <Button>下载</Button>
            <Button>删除</Button>
        </div>
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

    //class id
    state = {
        courseresource:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/TCourseResource');
        //console.log(res.data.assignment);
        //console.log(res);
        if(res.data.status === 200){
        this.setState({
            courseresource: res.data.courseresource,
            loading:false,
        })
        }
    }

    render() {
        return (
            <div>
                <span style={{ color: 'black', fontSize: '2em' }}>微积分课程资源</span>
                <br></br><br></br>
                <Input.Search placeholder="关键字" allowClear style={{ width: '25%' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Upload {...props}>
                    <Button type="primary" icon={<UploadOutlined />}>上传</Button>
                </Upload>
                
                <br></br><br></br>
                <Table columns={columns} dataSource={data} />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>  
        )
    }
}