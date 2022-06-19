import { Column } from '@ant-design/charts';
import { Descriptions,Table } from 'antd';
import React, { Component } from 'react'
import axios from 'axios';


const columns = [
    {
        title: '名词',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '学生姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '学生学号',
        key: 'id',
        dataIndex: 'id',
    },
    {
        title: '成绩',
        key: 'grade',
        dataIndex: 'grade',
    },
    
];

const shuju = [
    {
        num:'1',
        name:'张三',
        id:'3190100001',
        grade:'100',
    },
    {
        num:'2',
        name:'李四',
        id:'3190100002',
        grade:'99',
    },
    {
        num:'3',
        name:'王五',
        id:'3190100003',
        grade:'98',
    },
    {
        num:'...',
        name:'...',
        id:'...',
        grade:'...',
    },
 ];

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '60分以下',
      sales: 4,
    },
    {
      type: '60-70',
      sales: 9,
    },
    {
      type: '70-80',
      sales: 12,
    },
    {
      type: '80-90',
      sales: 18,
    },
    {
      type: '90-100',
      sales: 8,
    },
    
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#000',
        opacity: 0.6,
      },
    },
    columnWidthRatio: 0.4,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '成绩分布' },
      sales: { alias: '人数' },
    },
  };
  
  //class id  
  /*
  state = {
    quiz:[],
    loading:true,
  }
  async componentDidMount(){
    //const res = await axios.get('http://localhost:8000/api/Analysischarts');
    //console.log(res.data.assignment);
    //console.log(res);
    if(res.data.status === 200){
    this.setState({
        quiz: res.data.quiz,
        loading:false,
    })
    }
  }
  */

  return <space>

  

<span style={{ color: 'black', fontSize: '3em' }}> 成 绩 分 布</span>
    <br></br><br></br><br></br><br></br>
    
    <Descriptions bordered >
    <Descriptions.Item label="课程名">数据库系统</Descriptions.Item>
    <Descriptions.Item label="平均分">78分</Descriptions.Item>
    <Descriptions.Item label="上课人数">52人</Descriptions.Item>
    <Descriptions.Item label="60分以下">4人</Descriptions.Item>
    <Descriptions.Item label="60-70分">9人</Descriptions.Item>
    <Descriptions.Item label="70-80分">12人</Descriptions.Item>

    <Descriptions.Item label="80-90分">18人</Descriptions.Item>
    <Descriptions.Item label="90-100">8人</Descriptions.Item>
  </Descriptions>

   
  <br></br><br></br>
  <Column {...config} />
    <br></br><br></br>
    <span style={{ color: 'black', fontSize: '2em' }}>学 生 成 绩 排 名</span>
    <div>
    <Table columns={columns} dataSource={shuju} />
    </div>
    <br></br><br></br><br></br></space>;
};


export default DemoColumn ;