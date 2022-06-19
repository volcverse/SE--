import {Tabs,Table, Radio,Space,Row,Col,Layout, Menu, Descriptions,Card,Divider,Button} from 'antd';

import{FontColorsOutlined,CloseSquareOutlined,DesktopOutlined,IdcardOutlined,EditOutlined,ReadOutlined,LeftOutlined,PlayCircleOutlined,BorderOutlined,OrderedListOutlined}from'@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Tag,Image } from 'antd';
import axios from 'axios';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HighlightOutlined,
  BookOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const {TabPane}=Tabs;

let ttid=0;
let ttid2=0;
const changetempselect=(e,id)=>{
  console.log(1);
  console.log(id);
  console.log(e.target.value);
  ttid=id;
}
let handupabl=true;
let aable=true;
let bable=true;
let datasourcechoose=[];
let datasourcejudge=[];
let examinfo=[{'exam_id':0}];
function abc(eid){
  console.log(789);
  // for(let i=0;i<=100;i++){
  //   datasourcechoose.push({
  //     tid:i,
  //     cid:0,
  //     stem:'1',
  //     value:1,
  //     optionA:'1',
  //     optionB:'1',
  //     optionC:'1',
  //     optionD:'1',
  //     select:0,
  //   })
  //   datasourcejudge.push({
  //     tid:i,
  //     jid:0,
  //     stem:'1',
  //     value:'1',
  //     select:0,
  //   })
  // }
  console.log(eid);
  if(datasourcejudge.length==0&&datasourcechoose.length==0)
  axios
    .get('http://127.0.0.1:8000/exam/query/'+eid,
          { 
            headers:{'content-type':'application/x-www-form-urlencoded'},
  
          }
        ).then((res)=>{
          examinfo=res.data
          console.log(examinfo);
          if(examinfo[0]['state']=='进行中'){
            handupabl=false;
            aable=false;
            bable=true;
          }
          if(examinfo[0]['state']=='已结束'){
            bable=false;
            
          }
          if(examinfo[0]['state']=='未开始'){
            bable=true;
          }
          let mm=[];
          axios
          .get('http://127.0.0.1:8000/show_test_paper_choose_questionbyid/'+examinfo[0]['paper_id'],
                { 
                  headers:{'content-type':'application/x-www-form-urlencoded'},
        
                }
              ).then((res)=>{
                console.log(examinfo);
                console.log(res.data);
                mm=res.data;
                choosenum=mm.length;

            for(let i=0;i<mm.length;i++){
              axios
              .get('http://127.0.0.1:8000/show_choose_questionbyid/'+mm[i]['choose_id'],
                    { 
                      headers:{'content-type':'application/x-www-form-urlencoded'},
            
                    }
                  ).then((res)=>{
                    console.log(datasourcechoose[i])
                    console.log(res.data);
                    if(res.data.length>0){
                      datasourcechoose.push({
                        tid:i,
                      cid:res.data[0]['choose_id'],
                    stem:res.data[0]['stem'],
                    value:res.data[0]['value'],
                    optionA:res.data[0]['optionA'],
                    optionB:res.data[0]['optionB'],
                    optionC:res.data[0]['optionC'],
                    optionD:res.data[0]['optionD'],
                    })
                  }
              })
            }
          })
          

          let mm2=[];
          axios
          .get('http://127.0.0.1:8000/show_test_paper_judge_questionbyid/'+examinfo[0]['paper_id'],
                { 
                  headers:{'content-type':'application/x-www-form-urlencoded'},
                }
              ).then((res)=>{
                console.log(examinfo);
                console.log(res.data);
                mm2=res.data;
                judgenum=mm2.length;

          for(let i=0;i<mm2.length;i++){
            axios
            .get('http://127.0.0.1:8000/show_judge_questionbyid/'+mm2[i]['judge_id'],
                  { 
                    headers:{'content-type':'application/x-www-form-urlencoded'},
          
                  }
                ).then((res)=>{
                  console.log(res.data);
                  datasourcejudge.push({
                    tid:i,
                    jid:res.data[0]['judge_id'],
                  stem:res.data[0]['stem'],
                  value:res.data[0]['value'],
                })
            })
          }
          })
          return 1;
    })




}
function tonchangeet(tt){ 
  ttid=tt;
  console.log(ttid);

}
function tonchangee(e){
  console.log(e.target.value);

  datasourcechoose[ttid]['select']=e.target.value;
}
function tonchangeet2(tt){ 

  ttid2=tt;
  console.log(ttid2);
}
function tonchangee2(e){
  console.log(e.target.value);

  datasourcejudge[ttid2]['select']=e.target.value;
}

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   const text=props.ttext;
//   if (isLoggedIn) {
//     return <Card title={<div>{text} </div>} style={{ marginRight: 0,marginLeft: 0 }}>
//       <p>{text}</p>
//        <p>{datasource2[text].select}</p>
//             <Radio.Group   onChange={StudentCenter.onccc} value={datasource2[text]['select']}>
//               <Radio value={1} onChange={()=>{tonchangeet(text)}}>A</Radio>
//               <Radio value={2} onChange={()=>{tonchangeet(text)}}>B</Radio>
//               <Radio value={3} onChange={()=>{tonchangeet(text)}}>C</Radio>
//               <Radio value={4} onChange={()=>{tonchangeet(text)}}>D</Radio>
//             </Radio.Group>
//    </Card>;
//   }
// }
let choosenum=0;
let judgenum=0;
class StudentCenter extends React.Component {
  constructor(props) {
    super(props);
    console.log(78910);
    this.state = {
      examinfo:examinfo,
      sid:this.props.location.state.username,
    eid: this.props.location.state.eid,
    current:'mail',
    value:0,
    handupabl:handupabl,
    y:abc(this.props.match.params.eid),
    columns : [
      {
        title: '',
        dataIndex: 'tid',
        width:'100%',
        render:text=>
        <this.Greeting isLoggedIn={false} ttext={text}/>
        // <Card title={<div>{text+1} </div>} style={{ marginRight: 0,marginLeft: 0 }}>
        //   <p>{text}</p>
        //   <p>{datasource[text].select}</p>
        //         <Radio.Group   onChange={this.tonchangee} value={datasource[text]['select']}>
        //           <Radio value={1} onChange={()=>{this.tonchangeet(text)}}>A</Radio>
        //           <Radio value={2} onChange={()=>{this.tonchangeet(text)}}>B</Radio>
        //           <Radio value={3} onChange={()=>{this.tonchangeet(text)}}>C</Radio>
        //           <Radio value={4} onChange={()=>{this.tonchangeet(text)}}>D</Radio>
        //         </Radio.Group>
        // </Card>
      },
    ],
    columns2 : [
      {
        title: '',
        dataIndex: 'tid',
        width:'100%',
        render:text=>
        <this.Greeting2 isLoggedIn={false} ttext={text}/>
        // <Card title={<div>{text+1} </div>} style={{ marginRight: 0,marginLeft: 0 }}>
        //   <p>{text}</p>
        //   <p>{datasource[text].select}</p>
        //         <Radio.Group   onChange={this.tonchangee} value={datasource[text]['select']}>
        //           <Radio value={1} onChange={()=>{this.tonchangeet(text)}}>A</Radio>
        //           <Radio value={2} onChange={()=>{this.tonchangeet(text)}}>B</Radio>
        //           <Radio value={3} onChange={()=>{this.tonchangeet(text)}}>C</Radio>
        //           <Radio value={4} onChange={()=>{this.tonchangeet(text)}}>D</Radio>
        //         </Radio.Group>
        // </Card>
      },
    ],

    };
    axios
    .get('http://127.0.0.1:8000/examstateupdate',
      { 
        headers:{'content-type':'application/x-www-form-urlencoded'},

      }
    ).then((res)=>{

    })
    // axios
    // .get('http://127.0.0.1:8000/exam/query/'+this.state.eid,
    //       { 
    //         headers:{'content-type':'application/x-www-form-urlencoded'},
  
    //       }
    //     ).then((res)=>{
    //       this.setState({examinfo:res.data});
    //       if(this.state.examinfo[0]['state']=='进行中'){
    //         this.state.handupabl=false;
    //         aable=false;
    //         bable=true;
    //       }
    //       else{
    //         bable=false;
    //       }
    //       let mm=[];
    //       axios
    //       .get('http://127.0.0.1:8000/show_test_paper_choose_questionbyid/'+this.state.examinfo[0]['paper_id'],
    //             { 
    //               headers:{'content-type':'application/x-www-form-urlencoded'},
        
    //             }
    //           ).then((res)=>{
    //             console.log(this.state.examinfo);
    //             console.log(res.data);
    //             mm=res.data;
    //             choosenum=mm.length;
    //         for(let i=0;i<mm.length;i++){
    //           axios
    //           .get('http://127.0.0.1:8000/show_choose_questionbyid/'+mm[i]['choose_id'],
    //                 { 
    //                   headers:{'content-type':'application/x-www-form-urlencoded'},
            
    //                 }
    //               ).then((res)=>{
    //                 console.log(datasourcechoose[i])
    //                 console.log(res.data);
    //                 if(res.data.length>0){
    //                   datasourcechoose[i].cid=res.data[0]['choose_id'];
    //                 datasourcechoose[i]['stem']=res.data[0]['stem'];
    //                 datasourcechoose[i]['value']=res.data[0]['value'];
    //                 datasourcechoose[i]['optionA']=res.data[0]['optionA'];
    //                 datasourcechoose[i]['optionB']=res.data[0]['optionB'];
    //                 datasourcechoose[i]['optionC']=res.data[0]['optionC'];
    //                 datasourcechoose[i]['optionD']=res.data[0]['optionD'];
    //                 }
    //           })
    //         }
    //       })
          

    //       let mm2=[];
    //       axios
    //       .get('http://127.0.0.1:8000/show_test_paper_judge_questionbyid/'+this.state.examinfo[0]['paper_id'],
    //             { 
    //               headers:{'content-type':'application/x-www-form-urlencoded'},
    //             }
    //           ).then((res)=>{
    //             console.log(this.state.examinfo);
    //             console.log(res.data);
    //             mm2=res.data;
    //             judgenum=mm2.length;
    //       for(let i=0;i<mm2.length;i++){
    //         axios
    //         .get('http://127.0.0.1:8000/show_judge_questionbyid/'+mm2[i]['judge_id'],
    //               { 
    //                 headers:{'content-type':'application/x-www-form-urlencoded'},
          
    //               }
    //             ).then((res)=>{
    //               console.log(res.data);
    //               datasourcechoose[i]['jid']=res.data[0]['judge_id'];
    //               datasourcejudge[i]['stem']=res.data[0]['stem'];
    //               datasourcejudge[i]['value']=res.data[0]['value'];
    //         })
    //       }
    //       })
    // })
    
  }
  componentDidMount() {
    

    
      this.timer = setInterval(function () {
        this.setState({
          columns: this.state.columns,
          columns2:this.state.columns2
        });
      }.bind(this), 100);
    
  }
  Greeting(props) {
    const text=props.ttext;
      return <Card title={<div>1-{text+1}</div>} extra={<div>分数：{datasourcechoose[text]['value']}</div>}style={{ marginRight: 0,marginLeft: 0 }}>
        <p>{datasourcechoose[text]['stem']}</p>
        <br></br>
              <Radio.Group   onChange={tonchangee} value={datasourcechoose[text]['select']}>
                <Radio value={1} disabled={aable} onChange={()=>{tonchangeet(text)}}>A&nbsp;&nbsp;{datasourcechoose[text]['optionA']}</Radio>
                <br></br>
                <Radio value={2}  disabled={aable} onChange={()=>{tonchangeet(text)}}>B&nbsp;&nbsp;{datasourcechoose[text]['optionB']}</Radio>
                <br></br>
                <Radio value={3}  disabled={aable} onChange={()=>{tonchangeet(text)}}>C&nbsp;&nbsp;{datasourcechoose[text]['optionC']}</Radio>
                <br></br>
                <Radio value={4}  disabled={aable} onChange={()=>{tonchangeet(text)}}>D&nbsp;&nbsp;{datasourcechoose[text]['optionD']}</Radio>
              </Radio.Group>
     </Card>;
    
    
    return null;
  }
  Greeting2(props) {
    const text=props.ttext;
   
      return <Card title={<div>2-{text+1}</div>} extra={<div>分数：{datasourcejudge[text]['value']}</div>}style={{ marginRight: 0,marginLeft: 0 }}>
        <p>{datasourcejudge[text]['stem']}</p>
        <br></br>
              <Radio.Group   onChange={tonchangee2} value={datasourcejudge[text]['select']}>
                <Radio value={1} disabled={aable} onClick={()=>{tonchangeet2(text)}}>T&nbsp;&nbsp;</Radio>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio value={2}  disabled={aable}onClick={()=>{tonchangeet2(text)}}>F</Radio>

              </Radio.Group>
     </Card>;
    
    
    return null;
  }
  handuppaper=()=>{
    axios
              .get('http://127.0.0.1:8000/addanswerpaper/'+this.state.examinfo[0]['paper_id']+'/'+this.state.examinfo[0]['exam_id']+'/3190100666',
                    { 
                      headers:{'content-type':'application/x-www-form-urlencoded'},
            
                    }
                  ).then((res)=>{
                    
              })
    for(let i=0;i<choosenum;i++){
      axios
              .get('http://127.0.0.1:8000/addanswerchoose/'+this.state.examinfo[0]['paper_id']+'/'+this.state.examinfo[0]['exam_id']+'/3190100666/'+datasourcechoose[i]['cid']+'/'+datasourcechoose[i]['select']+'/'+datasourcechoose[i]['value'],
                    { 
                      headers:{'content-type':'application/x-www-form-urlencoded'},
            
                    }
                  ).then((res)=>{
                    console.log('修改选择题');
                    console.log(this.state.examinfo);
                    axios.
                    get('http://127.0.0.1:8000/choosecompare/'+this.state.examinfo[0]['paper_id']+'/'+datasourcechoose[i]['cid']+'/3190100666/'+this.state.examinfo[0]['exam_id'],
                    {
                      headers:{'content-type':'application/x-www-form-urlencoded'},
                    }).then(()=>{

                    })
              })
    }
    for(let i=0;i<judgenum;i++){
      axios
              .get('http://127.0.0.1:8000/addanswerjudge/'+this.state.examinfo[0]['paper_id']+'/'+this.state.examinfo[0]['exam_id']+'/3190100666/'+datasourcejudge[i]['jid']+'/'+datasourcejudge[i]['select']+'/'+datasourcejudge[i]['value'],
                    { 
                      headers:{'content-type':'application/x-www-form-urlencoded'},
            
                    }
                  ).then((res)=>{
                    console.log('修改判断题');
                    axios.
                    get('http://127.0.0.1:8000/judgecompare/'+this.state.examinfo[0]['paper_id']+'/'+datasourcejudge[i]['jid']+'/3190100666/'+this.state.examinfo[0]['exam_id'],
                    {
                      headers:{'content-type':'application/x-www-form-urlencoded'},
                    }).then(()=>{

                    })
              })
    }

  }

  render() {
    const { current } = this.state;
    const { value } = this.state;
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
            <Menu.Item key="1" icon={<LeftOutlined />}>
            <Link to={{pathname: "/StudentCenter/testcenter_stu",state:{username:this.state.sid}}}>
              返回题目列表
            </Link>
          </Menu.Item>
            <Menu.Item  key="2" icon={<VideoCameraOutlined />}>
            <Link to={{pathname: "/StudentCenter/testcenter_stu/testpaper/testintroduce/",state:{eid: this.state.pid,username:this.state.sid}}}>
              考试概况
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />} >
            <Link to={{pathname: "/StudentCenter/testcenter_stu/testpaper/testquestions/",state:{eid: this.state.pid,username:this.state.sid}}}>
              题目列表
              </Link>
          </Menu.Item>
            <Menu.Item  key="4"  icon={<OrderedListOutlined />} disabled={bable}>
            <Link to={{pathname: "/StudentCenter/testcenter_stu/testpaper/testrank/",state:{eid: this.state.pid,username:this.state.sid}}}>
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2.0em', marginLeft: 20 }}>试卷编号：{this.state.examinfo[0]['paper_id']}</div>
            <Button type='primary' disabled={aable} onClick={this.handuppaper}style={{ marginLeft: 20 ,marginRight:500 }} ><Link to={'/testcenter_stu'}>交卷</Link></Button>
            <Divider />
            <Tabs defaultActiveKey="1" >
            <TabPane tab={<div><OrderedListOutlined />选择题</div>} key="1" id="   QB_view">
            <Table columns={this.state.columns} dataSource={datasourcechoose}/>
            </TabPane>
            <TabPane tab={<div><VideoCameraOutlined />填空题</div>} key="2" id="QB_view">
            <Table columns={this.state.columns2} dataSource={datasourcejudge}/>
            </TabPane>
            </Tabs>


            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        
      </Layout >
    )
  }


}
StudentCenter.contextTypes = {router:()=> React.PropTypes.func.isRequired };
export default StudentCenter;
