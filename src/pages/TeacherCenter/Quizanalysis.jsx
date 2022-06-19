import React, { Component } from 'react'
import { Badge,Table ,Button,Form } from 'antd';
import { Link} from 'react-router-dom';
import {  FileOutlined} from '@ant-design/icons';
import axios from 'axios';


const columns = [
    {
        title: '测试名称',
        dataIndex: 'Quiz_id',
        key: 'Quiz_id',
    },
    {
        title: '测试成绩',
        dataIndex: 'Quiz_score',
        key: 'Quiz_score',

    },
    {
        title: '测验标题',
        dataIndex: 'Quiz_title',
        key: 'content',
    },
    {
        title: '测试内容',
        dataIndex: 'Quiz_content',
        key: 'Quiz_content',
    },
    {
        title: '学号',
        dataIndex: 'Student_id',
        key: 'Quiz_content',
    },
    {
        title: '教师号',
        dataIndex: 'Teacher_id',
        key: 'Teacher_id',
    },
    {
        title: '班级号',
        dataIndex: 'Class_id',
        key: 'Class_id',
    },
    {
        title: '测试时间',
        dataIndex: 'Quiz_time',
        key: 'Quiz_time',
    },
    
];
const data = [
    {
        key: '1',
        student_ID: '3190100001',
        student_name: '张三',
        bool: <Badge status="processing" text="参加" />,
        score: 
           '98',
        apply: <Link to="/TeacherCenter/TApplication">申请</Link>
        
    },
    {
        key: '2',
        student_ID: '3190100002',
        student_name: '李四',
        bool: <Badge status="processing" text="参加" />,
        
        score: 
          '89',
        apply:  <Link to="/TeacherCenter/TApplication">申请</Link>
        
    }, 
    {
        key: '3',
        student_ID: '3190100003',
        student_name: '王五',
        bool: <Badge status="processing" text="未参考" />,
        
        score: 
          '0',
        apply:  <Link to="/TeacherCenter/TApplication">申请</Link>
        
    },
 ];

export default class Quizanalysis extends Component {

    //class id
    state = {
        quiz:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/Quizanalysis');
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
                <Table columns={columns} dataSource={this.state.quiz} />
                <span style={{ color: 'black', fontSize: '2em' }}>第二次课堂测验</span>
                <Table columns={columns} dataSource={this.state.quiz} />
                <span style={{ color: 'black', fontSize: '2em' }}>第三次课堂测验</span>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

