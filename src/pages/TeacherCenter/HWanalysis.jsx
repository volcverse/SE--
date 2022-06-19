import React, { Component } from 'react'
import { Badge,Table } from 'antd';
import axios from 'axios';


const columns = [
    {
      title: '作业号',
      dataIndex: 'Assignment_id',
      key: 'Assignment_id',
    },
    {
      title: '课程号',
      dataIndex: 'Class_id',
      key: 'Class_id',
    },
    {
      title: '学号',
      dataIndex: 'Student_id',
      key: 'Student_id',
    },
    {
      title: '老师ID',
      dataIndex: 'Teacher_id',
      key: 'Teacher_id',
    },
    {
      title: '作业名称',
      dataIndex: 'Assignment_title',
      key: 'Assignment_title',
    },
    {
      title: '作业内容',
      dataIndex: 'Assignment_content',
      key: 'Assignment_content',
    },
    {
      title: '作业占成绩百分比',
      dataIndex: 'Score_percent',
      key: 'Score_percent',
    },
    {
      title: '提交状况',
      dataIndex: 'Submit_state',
      key: 'Submit_state',
    },
    {
      title: '提交内容',
      dataIndex: 'Submit_content',
      key: 'Submit_content',
    },
    {
      title: '作业分数',
      dataIndex: 'Assignment_score',
      key: 'Assignment_score',
    },
    {
      title: '开放时间',
      dataIndex: 'Start_time',
      key: 'Start_time',
    },
    {
      title: '截止时间',
      dataIndex: 'End_time',
      key: 'End_time',
    },
   
  ];

const data = [
    {
        key: '1',
        student_ID: '3190100001',
        student_name: '张三',
        bool: <Badge status="processing" text="已提交" />,
        
        score: 
           '90'
      
        
    },
    {
        key: '2',
        student_ID: '3190100002',
        student_name: '李四',
        bool: <Badge status="processing" text="已提交" />,
       
        score: '95'
      
        
    }, 
    {
        key: '3',
        student_ID: '3190100003',
        student_name: '王五',
        bool: <Badge status="processing" text="已提交" />,
       
        score: '90'
      
        
    },
 ];

export default class HWanalysis extends Component {

    //class id
    state = {
        assignment:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/THWanalysis');
        //console.log(res.data.assignment);
        //console.log(res);
        if(res.data.status === 200){
        this.setState({
            assignment: res.data.assignment,
            loading:false,
        })
        }
    }

    render() {
        return (
            <div>
                 <span style={{ color: 'black', fontSize: '2em' }}>第一次作业</span>
                <Table columns={columns} dataSource={this.state.assignment} />
                <span style={{ color: 'black', fontSize: '2em' }}>第二次作业</span>
                <Table columns={columns} dataSource={this.state.assignment} />
                <span style={{ color: 'black', fontSize: '2em' }}>第三次作业</span>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

