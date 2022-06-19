import { Input, Button, Form } from 'antd';
import axios from 'axios';
import React  from 'react';
import { Select,DatePicker, Space } from 'antd';

//const { Option } = Select;
const { TextArea } = Input;
//const { RangePicker } = DatePicker;
export default class AddHW extends React.Component {
  //teacher id and class id
  state={
    Assignment_id:'',
    Assignment_title:'',
    Assignment_content:'',
    //Start_time:'',
    //End_time:'',
    Score_percent:'',
    loading:true,
  }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  
  //这个取assignmentid还不懂怎么得到
async componentDidMount(){
    const res = await axios.get('http://localhost:8000/api/getAssignmentID');
    console.log(res.data.assignmentid);
    //console.log(res);
    if(res.data.status === 200){
    this.setState({
        Assignment_id: res.data.assignmentid,
        loading:false,
    })
    }
}
  
  
  /*
  handleStart = (e) =>{
    this.setState({
      Start_time:e
    })
  }
  handleEnd = (e) =>{
    this.setState({
      End_time:e
    })
  }
  */
  /*
  handlePanelChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    */
  saveAssignment = async (e) =>{
    //e.preventDefault();
    const res = await axios.post('http://localhost:8000/api/addAssignment',this.state)
    .then(response => { 
      console.log(response)
    })
    .then(data => { 
      if(data.status == 200){
        console.log(data.message);
        this.setState({
        Assignment_title:'',
        Assignment_content:'',
        //Start_time:'',
        //End_time:'',
        Score_percent:'',
        })
      }
    })
    .catch(error => {
        console.log(error.response);
    });
  }

  render() {
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
      <>
      
      <br/><br/><br/>
      <span style={{ color: '#000', fontSize: '1.9em' }}>发 布 作 业</span>
      <br/><br/>
      <Form onFinish={this.saveAssignment}>
        <Form.Item {...formItemLayout} label="作业名">
        <Input type="text" onChange={this.handleInput} name="Assignment_title" value={this.state.Assignment_title} ></Input>
        </Form.Item>

        <Form.Item {...formItemLayout} label="占平时成绩百分比">
        <Input type="text" onChange={this.handleInput} name="Score_percent" value={this.state.Score_percent}></Input>
        </Form.Item>

        <Form.Item label="作业描述" {...formItemLayout}>
          <TextArea showCount maxLength={500} autoSize={{ minRows: 6, maxRows: 6 }} 
            onChange={this.handleInput} name="Assignment_content" value={this.state.Assignment_content}></TextArea>
        </Form.Item>

        <Form.Item>
          <Button style={{ width: 200 }} type="primary" htmlType="submit" shape="round" size='large'>
            添加
          </Button>
        </Form.Item>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Form>
      </>
    )
  }
}

function handleinput(value) {
  console.log(`selected ${value}`);
}