import React, { Component } from 'react'
import { Table ,Button} from 'antd';
import { Link} from 'react-router-dom';
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


export default class Quiz extends Component {

    state = {
        quiz:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/Quiz');
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
                 <span style={{ color: 'black', fontSize: '2em' }}>数据库设计课堂测验</span>
                <br /><br /><br />
                <Table columns={columns} dataSource={this.state.quiz} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

