import React, { Component,useState, useEffect } from 'react'
import { Table, Space } from 'antd';
import { Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom'
import { Descriptions } from 'antd';

import axios from 'axios';
const columns = [
    {
        title: '学生姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '学生学号',
        dataIndex: 'ID',
        key: 'ID',
    },
    {
        title:'班级',
        dataIndex:'class',
        key:'class',
    },
    {
        title:'联系方式',
        dataIndex:'commu',
        key:'commu',
    }
]
// const data = [
//     {
//         key:'1',
//         id:'319010xxx1',
//         name:'张三',
//         class:'软工1901',
//         phone:'123'
//     },
//     {
//         key:'2',
//         id:'319010xxx2',
//         name:'李四',
//         class:'软工1902',
//         phone:'121'
//     },
//     {
//         key:'3',
//         id:'318010xxx3',
//         name:'Jack',
//         class:'软工1903',
//         phone:'119',
//     },
// 	    {
//         key:'4',
//         id:'318010xxx3',
//         name:'Jack',
//         class:'软工1903',
//         phone:'119',
//     },
// 	    {
//         key:'5',
//         id:'318010xxx3',
//         name:'Jack',
//         class:'软工1903',
//         phone:'119',
//     },
// ];
//http://127.0.0.1:8000/api/searchStuById/0000000001
const TeacherCourseInfo = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/searchStuById/' + '000000001').then(response =>{
            let tmp = response.data;
            tmp.forEach(function(value,index,array){
                console.log(value.ID);
            })
            setData(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    },[])
    return(
        <div>
        <Descriptions title="选课信息">
            <Descriptions.Item label="课程名称">微积分</Descriptions.Item>
            <Descriptions.Item label="课程id">1810000000</Descriptions.Item>
            <Descriptions.Item label="课程人数">152</Descriptions.Item>
            <Descriptions.Item label="教室容量">200</Descriptions.Item>
        </Descriptions>,
        <Table dataSource={data} columns={columns} />
        <br />
    </div>
    )
}




export default TeacherCourseInfo;
