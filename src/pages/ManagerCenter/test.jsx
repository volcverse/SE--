import React from 'react';
import { connect } from 'react-redux';
import { RightCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Input, Form, Button, Upload } from 'antd';
const FormItem = Form.Item;

class upload extends React.Component {
    constructor(){
        super()
        this.state={
            fileList:[]
        }
    }
    /*点击上传时触发*/
    onChange=({fileList: newFileList})=>{
        this.setState({fileList:newFileList});
        console.log(newFileList)
    }
    render(){
        return <div>
           <Upload
               action="http://127.0.0.1:8000/upload"
               listType="picture-card"
               onChange={this.onChange} //0000
               fileList={this.state.fileList}
           >
               {this.state.fileList.length < 2 && '+ Upload'}
           </Upload>
        </div>
    }
}
export default connect()(upload)
