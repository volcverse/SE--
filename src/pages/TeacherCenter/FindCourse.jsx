import { Input, Button, Form } from 'antd';
import React from 'react';
import { Select,Table } from 'antd';
import axios from 'axios'
const { Option } = Select;

var thisM;
var coursefind='name';

function handleChange(value) {
  coursefind=value;
}

const transformFormData = (obj) => {
  let formData = new FormData()

  for (let k in obj) {
    formData.append(k, obj[k])
  } 

  return formData
}    

const requestSendGet=()=>{
  
  data.length=0;
  var coursefindkey=document.getElementById("key");
  var coursefindtype=coursefind;
  const params={
    key: coursefindkey.value,
    type: coursefindtype
  }
  axios
  .get('http://127.0.0.1:8000/api/show/', 
  {params},
  {
  headers: { 'content-type': 'application/x-www-form-urlencoded' }          
  }
  ).then(function (response) {
    thisM.setState({
      isLoaded:true
    });
    var datalist=[];
    datalist=response.data.data;
    
    console.log(datalist);
    data.length=0;
    let temp=[...data];
    for(const i in datalist){
      /*object.key=i;
      object.id=datalist[i].id;
      console.log(datalist[i].id);
      object.course_name=datalist[i].course_name;
      console.log(object);
      data.push(object);*/
      temp.push({
        key:i,
        id:datalist[i].ID,
        course_name:datalist[i].name,
        credit:datalist[i].credit,
        description:datalist[i].description,
        teacher_ID:datalist[i].teacher_ID,
        stock:datalist[i].stock
      })
    }

    thisM.setState({
      courses:temp
    })



    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    thisM.setState({
      isLoaded:false,
      error:error
    })
  })
}


export default class FindCourse extends React.Component {


   /* componentDidMount(){
        const params = {
            key: coursefindkey.value,
            type: coursefindtype
        }
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://localhost:8080',
        {params}
        )
        .then(function (response) {
          data=response.data
          
        })
        .catch(function (error) {
          console.log(error);
        })
      }*/

      constructor(props){
        super(props);
        this.state={
          courses:[],
          isLoaded:false,
        }
      }
      componentDidMount(){

        

        thisM=this;
        
      
      }

  render() {
    console.log(this.state.courses);
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
    if(this.state.isLoaded)
    {
      
    return (

      <>
        <br /><br /><br /><br /><br />
        <Form.Item label="搜索关键字" {...formItemLayout}>
          <Input id="key"></Input>
        </Form.Item>
        <Form.Item {...formItemLayout} label="依据">
          <Select id="coursefindtype" defaultValue="name" onChange={handleChange}>
            <Option value="name">课程名</Option>
            <Option value="ID">课程号</Option>
            <Option value="teacher_ID">任课教师</Option>
            <Option value="credit">学分</Option>
          </Select>
        </Form.Item>
        <br/>
        <Button onClick={requestSendGet} style={{ width: 200 }} type="primary" shape="round" size='large'>
              查找课程信息
            </Button>
        <br/>
        <br />
        <br />  <Table columns={columns} dataSource={this.state.courses} /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br />

      </>
    )
    }
    else{
      return (

        <>
          <br /><br /><br /><br /><br />
          <Form.Item label="搜索关键字" {...formItemLayout}>
            <Input id="key"></Input>
          </Form.Item>
          <Form.Item {...formItemLayout} label="依据">
            <Select id="coursefindtype" defaultValue="name" onChange={handleChange}>
              <Option value="name">课程名</Option>
              <Option value="ID">课程号</Option>
              <Option value="teacher_ID">任课教师</Option>
              <Option value="credit">学分</Option>
            </Select>
          </Form.Item>
          <br/>
          <Button onClick={requestSendGet} style={{ width: 200 }} type="primary" shape="round" size='large'>
                查找课程信息
              </Button>
          <br/>
          
          
          <br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br />
  
        </>
      )
    }
  }
}




const columns=[
  {
    tille: '课程序号',
    dataIndex: 'id',
  },
  {
    title: '课程名',
    dataIndex: 'course_name',
  },
  {
    title: '学分',
    dataIndex: 'credit',
},
{
    title:'余量',
    dataIndex:'stock',

},
{
    title: '描述',
    dataIndex: 'description',
},
{
    title: '教师序号',
    dataIndex: 'teacher_ID',
}
  
]
var data=[];



