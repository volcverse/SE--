import React, { Component } from 'react'
import { Table ,Button} from 'antd';
import {  FileOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
const columns = [
    {
        title: '时间',
        dataIndex: 'num',
        key: 'num',

    },
    {
        title: '课程资料',
        dataIndex: 'chapter',
        key: 'chapter',
    },
    {
        title: '作业',
        key: 'assignment',
        dataIndex: 'assignment',
    },
    {
        title: '课堂测验',
        key: 'grade',
        dataIndex: 'grade',
    },
    
];

const data = [
    {
        key: '1',
        num: '第一周',
        chapter :   <Button   type="primary" shape="round" icon={<FileOutlined  />} size={'middle'}>
     SE01
      </Button>,
        assignment:<Link to ="/StudentCenter/Assignment">
        <Button shape="round">查看</Button>,
        </Link>,
        grade:'无',
    },
    {
        key: '2',
        num: '第二周',
        chapter : <Button   type="primary" shape="round" icon={<FileOutlined  />} size={'middle'}>
        SE02
        </Button>,
         assignment:<Link to ="/StudentCenter/Assignment">
         <Button shape="round">查看</Button>,
         </Link>,
         grade:<Link to ="/StudentCenter/Quiz">
         <Button shape="round">查看</Button>,
         </Link>,
    }, 
    {
        key: '3',
        num: '第三周',
        chapter : <Button   type="primary" shape="round" icon={<FileOutlined   />} size={'middle'}>
        SE03
        </Button>,
        assignment:<Link to ="/StudentCenter/Quiz">
        <Button shape="round">查看</Button>,
        </Link>,
        grade:'无',
    },
    {
        key: '4',
        num: '第四周',
        chapter : <Button   type="primary" shape="round" icon={<FileOutlined   />} size={'middle'}>
        SE04
        </Button>,
       assignment:<Link to ="/StudentCenter/Assignment">
       <Button shape="round">查看</Button>,
       </Link>,
        grade:<Link to ="/StudentCenter/Quiz">
        <Button shape="round">查看</Button>,
        </Link>,
    },
    {
        key: '6',
        num: '第六周',
        chapter :'/',
       assignment:'/',
        grade:'/',
    },
    {
        key: '7',
        num: '第七周',
        chapter :'/',
       assignment:'/',
        grade:'/',
    },
    {
        key: '8',
        num: '第八周',
        chapter :'/',
       assignment:'/',
        grade:'/',
    },
    {
        key: '9',
        num: '第九周',
        chapter :'/',
       assignment:'/',
        grade:'/',
    },
 ];

export default class CourseResource extends Component {

    state = {
        courseresource:[],//assignment数组
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/CourseResource');
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
                <span style={{ color: 'black', fontSize: '2em' }}>数据库设计</span>
                <br /><br /><br />
                <Table columns={columns} dataSource={data} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}









