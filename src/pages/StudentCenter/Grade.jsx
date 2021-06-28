import React, { Component } from 'react'
import { Table ,Button} from 'antd';
import { Link} from 'react-router-dom';
import axios from 'axios';
const columns = [
    {
        title: '课程号',
        dataIndex: 'course_ID',
        key: 'course_ID',

    },
    {
        title: '课程名称',
        dataIndex: 'course_name',
        key: 'course_name',
    },
    {
        title: '教师姓名',
        key: 'teacher_name',
        dataIndex: 'teacher_name',
    },
    {
        title: '作业成绩',
        key: 'HWgrade',
        dataIndex: 'HWgrade',
    },
    {
        title: '课堂测验',
        key: 'Quizgrade',
        dataIndex: 'Quizgrade',
    },
    {
        title: '在线测验',
        key: 'Examgrade',
        dataIndex: 'Examgrade',
    },
    {
        title: '总成绩',
        key: 'Grade',
        dataIndex: 'Grade',
    },

];

const data = [
    {
        key: '1',
        course_ID: '00000001',
        course_name: '软件工程基础',
        teacher_name: '王新宇',
        HWgrade:<Link to="/StudentCenter/HWanalysis">
        <Button>查看</Button>
        </Link>,
        Quizgrade: <Link to="/StudentCenter/Quiz">
        <Button>查看</Button>
        </Link>,
        Examgrade:'100',
        Grade:'100'

    },
    {
        key: '2',
        course_ID: '00000002',
        course_name: '计算机组成',
        teacher_name: '楼学庆',
        HWgrade:<Link to="/StudentCenter/HWanalysis">
        <Button>查看</Button>
        </Link>,
        Quizgrade: <Link to="/StudentCenter/Quiz">
        <Button>查看</Button>
        </Link>,
        Examgrade:'100',
        Grade:'100'
    }, 
    {
        key: '3',
        course_ID: '00000003',
        course_name: '数据库系统',
        teacher_name: '高云军',
        HWgrade:<Link to="/StudentCenter/HWanalysis">
        <Button>查看</Button>
        </Link>,
        Quizgrade: <Link to="/StudentCenter/Quiz">
        <Button>查看</Button>
        </Link>,
        Examgrade:'100',
        Grade:'100'
    },
 ];

export default class Grade extends Component {

    /**
     * const Student_id = this.props.match.params.id; //use to send to backend
     * id from <Route path="/Grade/:id" component={Grade}
     */
    state = {
      quiz:[],
      loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/Grade');
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
                <Table columns={columns} dataSource={data} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

