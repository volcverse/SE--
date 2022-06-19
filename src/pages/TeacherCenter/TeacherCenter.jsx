import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import TeacherInfo from './TeacherInfo'
import TApplication from './TApplication'
import AddLesson from './AddLesson'
import EditLesson from './EditLesson'
import MyClass from './MyClass'
import FindCourse from './FindCourse'
import ChangeTeaInfo from './ChangeTeaInfo'
import TeaChangePSW from './TeaChangePSW'
import TeacherCourseInfo from './TeacherCourseInfo'

import CourseResource from './CourseResource'
import AddHW from './AddHW'
import HWMarking from './HWMarking'
import PersonalResource from './PersonalResource'
import Quiz from './Quiz'
import GradeAnalysis from './GradeAnalysis'
import Quizanalysis from './Quizanalysis'
import HWanalysis from './HWanalysis'
import Studentanalysis from './Studentanalysis'

import SiderDemo3 from "../ManagerCenter/Navi/Navi3";

import testipublish from './testcenter_tea/testpublish';
import quesmanager from './testcenter_tea/onlinetest_teacher';
import testexam from './testcenter_tea/testexam'
import testintroduce1 from './testcenter_tea/testpaper1/testintroduce1'
import testquestions1 from './testcenter_tea/testpaper1/testquestions1'
import testrank1 from './testcenter_tea/testpaper1/testrank1'

import {
  BarChartOutlined,
  FileTextOutlined,
  SmileOutlined,
  TeamOutlined,
  UserOutlined,
  CopyOutlined,
  CloudOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class TeacherCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      psw: "",
      type: ""
    };
  }

  componentWillMount() {

    var name = this.props.location.state.username;
    var passw = this.props.location.state.psw;
    var tp = this.props.location.state.type;
    this.setState({
      username: name,
      psw: passw,
      type: tp
    })
  }
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人中心
              <Link to={{ pathname: '/TeacherCenter/TeacherInfo', state: { username: this.state.username, psw: this.state.psw, type: this.state.type } }}></Link>
            </Menu.Item>
            <SubMenu key="lesson" icon={<FileTextOutlined />} title="课程操作">
              <Menu.Item key="l0">我的课程
              <Link to={{ pathname: '/TeacherCenter/MyClass', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
              </Menu.Item>
              <Menu.Item key="l1">开课
              <Link to={{ pathname: '/TeacherCenter/AddLesson', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sinfo" icon={<CopyOutlined />} title="在线测试">
              <Menu.Item key="s1">试卷管理
              <Link to={{ pathname: '/TeacherCenter/testcenter_tea', state: { username: this.state.username, psw: this.state.psw, type:this.state.type } }}></Link>
              </Menu.Item>
              <Menu.Item key="s2">考试管理
              <Link to={{ pathname: '/TeacherCenter/testcenter_tea/testexam', state: { username: this.state.username, psw: this.state.psw, type:this.state.type } }}></Link>
              </Menu.Item>
              <Menu.Item key="s3">题库管理
              <Link to={{ pathname: '/TeacherCenter/testcenter_tea/quesmanager', state: { username: this.state.username, psw: this.state.psw, type:this.state.type } }}></Link>
              </Menu.Item>
              
            </SubMenu>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              成绩分析
              <Link to={{ pathname: '/TeacherCenter/GradeAnalysis', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
          </Menu.Item>
            <Menu.Item key="6" icon={<TeamOutlined />}>
              查询课表
              <Link to={{ pathname: '/TeacherCenter/TimeTableDisplay', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<CloudOutlined />}>
              课程搜索
              <Link to={{ pathname: '/TeacherCenter/FindCourse', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<SmileOutlined />}>
              个人资源
              <Link to={{ pathname: '/TeacherCenter/PersonalResource', state: { username: this.state.username, psw: this.state.psw , type: this.state.type} }}></Link>
          </Menu.Item>

          </Menu>
        </Sider>


        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <span style={{ color: '#fff', fontSize: '1.4em', marginLeft: 20 }}>教务管理系统--教师端</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <Switch>
                <Route path="/TeacherCenter/TeacherInfo" component={TeacherInfo}></Route>
                <Route path="/TeacherCenter/TApplication" component={TApplication}></Route>
                <Route path="/TeacherCenter/MyClass" component={MyClass}></Route>
                <Route path="/TeacherCenter/AddLesson" component={AddLesson}></Route>
                <Route path="/TeacherCenter/EditLesson" component={EditLesson}></Route>
                <Route path="/TeacherCenter/FindCourse" component={FindCourse}></Route>
                <Route path="/TeacherCenter/TeaChangePSW" component={TeaChangePSW}></Route>
                <Route path="/TeacherCenter/ChangeTeaInfo" component={ChangeTeaInfo}></Route>

                <Route path="/TeacherCenter/CourseResource" component={CourseResource}></Route>
                <Route path="/TeacherCenter/AddHW" component={AddHW}></Route>
                <Route path="/TeacherCenter/HWMarking" component={HWMarking}></Route>
                <Route path="/TeacherCenter/PersonalResource" component={PersonalResource}></Route>
                <Route path="/TeacherCenter/GradeAnalysis" component={GradeAnalysis}></Route>
                <Route path="/TeacherCenter/Quiz" component={Quiz}></Route>
                <Route path="/TeacherCenter/Quizanalysis" component={Quizanalysis}></Route>
                <Route path="/TeacherCenter/HWanalysis" component={HWanalysis}></Route>
                <Route path="/TeacherCenter/Studentanalysis" component={Studentanalysis}></Route>

                <Route path="/TeacherCenter/TimeTableDisplay" component={SiderDemo3}></Route>
                <Route path="/TeacherCenter/TeacherCourseInfo" component={TeacherCourseInfo}></Route>

                <Route exact path="/TeacherCenter/testcenter_tea" component={testipublish} />
                <Route path="/TeacherCenter/testcenter_tea/testpublish" component={testipublish} />
                <Route path="/TeacherCenter/testcenter_tea/quesmanager" component={quesmanager} />
                <Route path="/TeacherCenter/testcenter_tea/testexam" component={testexam} />
                <Route exact path="/TeacherCenter/testcenter_tea/testpaper1" component={testintroduce1} />
                <Route path="/TeacherCenter/testcenter_tea/testpaper1/testquestions1" component={testquestions1} />
                <Route path="/TeacherCenter/testcenter_tea/testpaper1/testintroduce1" component={testintroduce1} />
                <Route path="/TeacherCenter/testcenter_tea/testpaper1/testrank1" component={testrank1} />

                <Redirect to="/TeacherCenter/TeacherInfo"></Redirect>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }


}
export default TeacherCenter;
