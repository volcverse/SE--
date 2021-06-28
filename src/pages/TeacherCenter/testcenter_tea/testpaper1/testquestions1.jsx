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


let datasourcechoose=[];
let datasourcejudge=[];
let handupabl=true;
let examinfo=[{'exam_id':0}];
function abc(eid){
  // console.log(789);
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
  // return 1;


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
  axios
    .get('http://127.0.0.1:8000/exam/query/'+eid,
          { 
            headers:{'content-type':'application/x-www-form-urlencoded'},
  
          }
        ).then((res)=>{
          examinfo=res.data
          if(examinfo[0]['state']=='进行中'){
            handupabl=false;
            aable=false;
            bable=true;
          }
          else{
            bable=false;
          }
          let mm=[];
          let ccddata=[];
          axios
              .get('http://127.0.0.1:8000/addanswercorrectforeachques/'+eid,
                    { 
                      headers:{'content-type':'application/x-www-form-urlencoded'},
            
                    }
                  ).then((res)=>{
                    console.log(res.data);
                      if(res.data==-1){

                      }
                      ccddata=res.data;
              })




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
                datasourcechoose=[];
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
                      let ttt=res.data[0]['choose_id'];
                      datasourcechoose.push({
                        tid:i,
                      cid:res.data[0]['choose_id'],
                    stem:res.data[0]['stem'],
                    value:res.data[0]['value'],
                    optionA:res.data[0]['optionA'],
                    optionB:res.data[0]['optionB'],
                    optionC:res.data[0]['optionC'],
                    optionD:res.data[0]['optionD'],
                    correctrate:ccddata.choose[ttt],
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
                datasourcejudge=[];
          for(let i=0;i<mm2.length;i++){
            axios
            .get('http://127.0.0.1:8000/show_judge_questionbyid/'+mm2[i]['judge_id'],
                  { 
                    headers:{'content-type':'application/x-www-form-urlencoded'},
          
                  }
                ).then((res)=>{
                  console.log(res.data);
                  let ttt=res.data[0]['choose_id'];
                  datasourcejudge.push({
                    tid:i,
                    jid:res.data[0]['judge_id'],
                  stem:res.data[0]['stem'],
                  value:res.data[0]['value'],
                  correctrate:ccddata.judge[ttt],
                })
            })
          }
          })
          return 1;
    })



}
let aable=true;
let bable=true;
function tonchangeet(tt){ 
  ttid=tt;console.log(ttid);

}
function tonchangee(e){
  console.log(e.target.value);

  datasourcechoose[ttid]['select']=e.target.value;
}
function tonchangeet2(tt){ 

  ttid2=tt;console.log(ttid2);
}
function tonchangee2(e){
  console.log(e.target.value);

  datasourcejudge[ttid]['select']=e.target.value;
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
    this.state = {
    eid: this.props.location.state.pid,
    tid: this.props.location.state.username,
    y:abc(this.props.location.state.pid),
    current:'mail',
    value:0,
    handupabl:handupabl,
    examinfo:examinfo,
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
    //       let ccddata=[];
    //       axios
    //           .get('http://127.0.0.1:8000/addanswercorrectforeachques/'+this.state.eid,
    //                 { 
    //                   headers:{'content-type':'application/x-www-form-urlencoded'},
            
    //                 }
    //               ).then((res)=>{
    //                 console.log(res.data);
                    
    //                   ccddata=res.data;
    //           })
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
    //                   let ttt=res.data[0]['choose_id'];
    //                   console.log(ccddata);
    //                   datasourcechoose[i].cid=res.data[0]['choose_id'];
    //                 datasourcechoose[i]['stem']=res.data[0]['stem'];
    //                 datasourcechoose[i]['value']=res.data[0]['value'];
    //                 datasourcechoose[i]['optionA']=res.data[0]['optionA'];
    //                 datasourcechoose[i]['optionB']=res.data[0]['optionB'];
    //                 datasourcechoose[i]['optionC']=res.data[0]['optionC'];
    //                 datasourcechoose[i]['optionD']=res.data[0]['optionD'];
    //                 datasourcechoose[i]['correct_answer']=res.data[0]['correct_answer'];
    //                 datasourcechoose[i]['correctrate']=ccddata.choose[ttt];
    //                 }
    //           })
    //         }
    //       })
    //       for(let i=0;i<mm.length;i++){
            
    //       }

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
    //               let ttt=res.data[0]['judge_id'];
    //               console.log(res.data);
    //               datasourcechoose[i]['jid']=res.data[0]['judge_id'];
    //               datasourcejudge[i]['stem']=res.data[0]['stem'];
    //               datasourcejudge[i]['value']=res.data[0]['value'];
    //               datasourcejudge[i]['correct_answer']=res.data[0]['correct_answer'];
    //               datasourcejudge[i]['correctrate']=ccddata.judge[ttt]
    //         })
    //       }
    //       })
    // })
    
  }
  Greeting(props) {
    const text=props.ttext;
    if (text<=choosenum-1) {
      return <Card title={<div>1-{text+1}</div>} extra={<div>正确答案：{datasourcechoose[text]['correct_answer']}  &nbsp;&nbsp;分数：{datasourcechoose[text]['value']} </div>}style={{ marginRight: 0,marginLeft: 0 }}>
        <p>{datasourcechoose[text]['stem']}</p>
        <br></br>
              <Radio.Group   onChange={tonchangee} value={0}>
                <Radio value={1} disabled={aable} onChange={()=>{tonchangeet(text)}}>A&nbsp;&nbsp;{datasourcechoose[text]['optionA']}</Radio>
                <br></br>
                <Radio value={2}  disabled={aable} onChange={()=>{tonchangeet(text)}}>B&nbsp;&nbsp;{datasourcechoose[text]['optionB']}</Radio>
                <br></br>
                <Radio value={3}  disabled={aable} onChange={()=>{tonchangeet(text)}}>C&nbsp;&nbsp;{datasourcechoose[text]['optionC']}</Radio>
                <br></br>
                <Radio value={4}  disabled={aable} onChange={()=>{tonchangeet(text)}}>D&nbsp;&nbsp;{datasourcechoose[text]['optionD']}</Radio>
              </Radio.Group>
              <br></br>
              <p>正确率：{datasourcechoose[text]['correctrate']}</p>
     </Card>;
    }
    
    return null;
  }
  Greeting2(props) {
    const text=props.ttext;
    if (text<=judgenum-1) {
      return <Card title={<div>2-{text+1}</div>} extra={<div>正确答案：{datasourcejudge[text]['correct_answer']} &nbsp;&nbsp;分数：{datasourcejudge[text]['value']} </div>}style={{ marginRight: 0,marginLeft: 0 }}>
        <p>{datasourcejudge[text]['stem']}</p>
        <br></br>
              <Radio.Group   onChange={tonchangee2} value={0}>
                <Radio value={1} disabled={aable} onChange={()=>{tonchangeet2(text)}}>T&nbsp;&nbsp;</Radio>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio value={2}  disabled={aable}onChange={()=>{tonchangeet2(text)}}>F</Radio>

              </Radio.Group>
              <br></br>
              <p>正确率：{datasourcejudge[text]['correctrate']}</p>
     </Card>;
    }
    
    return null;
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
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testexam",state:{username:this.state.tid}}}>
              返回题目列表
            </Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testintroduce1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              考试概况
            </Link>
          </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testquestions1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              题目列表
              </Link>
          </Menu.Item>
            <Menu.Item key="4" icon={<OrderedListOutlined />}>
            <Link to={{pathname:"/TeacherCenter/testcenter_tea/testpaper1/testrank1/",state:{pid:this.state.pid,username:this.state.tid}}}>
              排名
              </Link>
          </Menu.Item>
          </Menu>
        </Sider>

        


        <Layout className="site-layout" style={{color:'white', marginLeft: 200 }}>
            
            <div style={{ color:'black', fontSize: '2.0em', marginLeft: 20 }}>试卷编号：{this.state.examinfo[0]['paper_id']}</div>
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
