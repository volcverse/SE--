import React, { Component } from 'react'
import { Table} from 'antd';
import { Link} from 'react-router-dom';
import axios from 'axios';


const columns = [
    {
        title: '课程号',
        dataIndex: 'ID',
        key: 'ID',

    },
    {
        title: '课程名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '学分',
        key: 'credit',
        dataIndex: 'credit',
    },
    {
        title: '课程类别',
        key: 'description',
        dataIndex: 'description',
    },
    {
        title: '类别',
        key: 'type',
        dataIndex: 'type',
    },
    {
        title: '教师号',
        key: 'teacher_ID',
        dataIndex: 'teacher_ID',
    },
    {
        title: '时间',
        key: 'time',
        dataIndex: 'time',
    },
    {
        title: '上课时间',
        key: 'day',
        dataIndex: 'day',
    },
    {
        title: '详情',
        key: 'detail',
        dataIndex: 'detail',
        render: text => <Link to="/StudentCenter/CourseResource">
        <a>详情</a>
    </Link>,
    },
   
];



export default class AllCourse extends Component {
    state = {
        course : [],//assignment数组
        loading:true,
      }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/AllCourse');
        //console.log(res.data.assignment);
        if(res.data.status === 200){
        this.setState({
            //这里吧后端传进来的数据放入assignment[]数组中，需要Display到界面Table中（在下面），Description暂时不用）
            course: res.data.course,
            loading:false,
        })
        }
    }
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={this.state.course} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}