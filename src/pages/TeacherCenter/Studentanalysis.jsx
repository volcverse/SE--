import React, { Component } from 'react'
import { Table ,Button,Input,Upload, message} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const columns = [
    {
        title: '学生姓名',
        dataIndex: 'student_name',
        key: 'student_name',
    },
    {
        title: '学号',
        key: 'student_id',
        dataIndex: 'student_id',
    },
    {
        title: '总学分',
        key: 'total_credit',
        dataIndex: 'total_credit',
    },
    {
        title: '平均分',
        key: 'average_score',
        dataIndex: 'average_score',
    },
    {
        title: 'gpa',
        key: 'gpa',
        dataIndex: 'gpa',
    },
];


 
export default class Studentanalysis extends Component {
    
    //class id, student id 
    state = {
        grade:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/Studentanalysis');
        //console.log(res.data.assignment);
        //console.log(res);
        if(res.data.status === 200){
        this.setState({
            grade: res.data.grade,
            loading:false,
        })
        }
    }

    render() {
        return (
            <div>
                <span style={{ color: 'black', fontSize: '2em' }}>搜索学生学号</span>
                <br></br><br></br>
                <Input.Search placeholder="学号" allowClear style={{ width: '25%' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                    <Button type="primary" >搜索</Button>
                
                
                <br></br><br></br>
                <Table columns={columns} dataSource={this.state.grade} />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>  
        )
    }
}