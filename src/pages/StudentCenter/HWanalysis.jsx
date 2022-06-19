import React,{Component } from 'react'


import { Table } from 'antd';
import { message} from 'antd';
import axios from 'axios';
const {Column} = Table;
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


export default class SApplication extends Component {
    
    //id=this.props.location.username
    state = {
      assignment : [],//assignment数组
      loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/Assignment');
        
        //console.log(res.data.assignment);
        
        if(res.data.status === 200){
          this.setState({
            //这里吧后端传进来的数据放入assignment[]数组中，需要Display到界面Table中（在下面），Description暂时不用）
            assignment: res.data.assignment,
            loading:false,
          })
        }
        //console.log(res);
    }

    render() {
      /*
        var assignment_Table ="";
        if(this.state.loading){
          assignment_Table=[];
        }else{
          assignment_Table= this.state.assignment.map(（item) =>{
            return(
              key:{item.Assignment_id}
            );
          });
        }
        */

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4, offset: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        return (
            <div>
                <br /><br />
                <span style={{ color: 'black', fontSize: '3em' }}>作 业 详 情</span>
                <br /><br /><br />
                
                <Table dataSource = {this.state.assignment} columns={columns}>
                  
                </Table>
                <br/><br/><br/>
                

                
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}









