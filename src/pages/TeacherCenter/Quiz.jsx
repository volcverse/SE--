import React, { Component } from 'react'
import { Badge,Table ,Button,Form } from 'antd';
import { Link} from 'react-router-dom';
import {  FileOutlined} from '@ant-design/icons';
import axios from 'axios';

const columns = [
    {
        title: '学号',
        dataIndex: 'student_ID',
        key: 'student_ID',

    },
    {
        title: '姓名',
        dataIndex: 'student_name',
        key: 'student_name',
    },
    {
        title: '是否参加',
        key: 'bool',
        dataIndex: 'bool',
    },
    {
        title: '输入成绩',
        key: 'score',
        dataIndex: 'score',
    },
 
   
];

const data = [
    {
        key: '1',
        student_ID: '3190100001',
        student_name: '张三',
        bool: <Badge status="processing" text="参加" />,
        score: 
           <space> <input shape="round"></input> <Button type="primary"shape="round" >确定</Button></space> ,
        
        
    },
    {
        key: '2',
        student_ID: '3190100002',
        student_name: '李四',
        bool: <Badge status="processing" text="参加" />,
        
        score: 
           <space> <input shape="round"></input> <Button type="primary"shape="round" >确定</Button></space> ,

        
    }, 
    {
        key: '3',
        student_ID: '3190100003',
        student_name: '王五',
        bool: <Badge status="processing" text="未参考" />,
        
        score: 
           <space> <input shape="round"></input> <Button type="primary"shape="round" >确定</Button></space> ,
        
        
    },
 ];

export default class Quiz extends Component {
    //class id
    state = {
        quiz:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/TQuiz');
        //console.log(res.data.assignment);
        //console.log(res);
        if(res.data.status === 200){
        this.setState({
            quiz: res.data.quiz,
            loading:false,
        })
        }
    }
    render() {
        return (
            <div>
                 <span style={{ color: 'black', fontSize: '2em' }}>第一次课堂测验</span>
                <Table columns={columns} dataSource={data} />
                <span style={{ color: 'black', fontSize: '2em' }}>第二次课堂测验</span>
                <Table columns={columns} dataSource={data} />
                <span style={{ color: 'black', fontSize: '2em' }}>第三次课堂测验</span>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

