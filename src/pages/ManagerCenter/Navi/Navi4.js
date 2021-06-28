import {Col, Form, Row, Select} from "antd";
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Navi.css'
import { Button, message } from 'antd';
import { Input } from 'antd';
import { Drawer } from 'antd';
import {Link} from "react-router-dom";
import axios from 'axios';
let codetable={
    "-1": "系统繁忙",
    "0": "请求成功",
    "1001": "输入框不得为空！",
    "1002": "教室id已存在",
    "1003": "输入信息不合规！",
    "1004": "未查到匹配信息！",
    "2001": "您尚未排课，请点击自动排课按钮进行排课！",
    "2002": "在此时间段内无课程！",
    "2003": "排课资源不足，排课失败！",
    "2004": "与其他课程时间冲突！",
    "2005": "教师时间冲突！",
    "2006": "查无此课！",
    "3001": "您还未排课，请移至排课页面进行排课！",
    "3002": "输入信息不合规！",
    "3003": "无此教师！",
    "3004": "无此教室！",
}
const { Option } = Select;

class DrawerForm1 extends React.Component {
    state = {
        visible: true,
        campus:'',
        id:'',
        name:'',
        capacity:'',
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    handleMaxRestoreUp1 = (value)=>{
        this.setState(()=>({campus:value}))
        }

    handleMaxRestoreUp2 = (e)=>{
        if(e&&e.target&&e.target.value){
            let value = e.target.value;
            this.setState(()=>({id:value}))
        }
    }
    handleMaxRestoreUp3 = (e)=>{
        if(e&&e.target&&e.target.value){
            let value = e.target.value;
            this.setState(()=>({name:value}))
        }
    }
    handleMaxRestoreUp4 = (e)=>{
        if(e&&e.target&&e.target.value){
            let value = e.target.value;
            this.setState(()=>({capacity:value}))
        }
    }
    saveData=()=>{
        // console.log(this.state.所在校区);
        // console.log(this.state.教室id);
        // console.log(this.state.教室名称);
        // console.log(this.state.教室容量);
        // console.log(this.state.备注);
        // console.log(this.state);
        let tmp=axios({
            method:'post',
            url:`http://127.0.0.1:8000/ClassroomAdd`,
            data:{
                'campus':this.state.campus,
                'id':this.state.id,
                'name':this.state.name,
                'capacity':this.state.capacity,
            }
        })
        tmp.then(res=>{
            // for(let i = 0; i < length; i++)
            // {
                let _code = res.data.code;
                if(_code!=="0")
                {
                    message.error(codetable[_code]);
                }
            // }

        })
    }
    // handleSubmit(e){
    //     e.preventDefault();
    //     console.log('data of form:',this.props.form.getFieldsValue());
    //     alert(this.props.form.getFieldValue('所在校区')+"-"+this.props.form.getFieldValue('教室id')+"-"+this.props.form.getFieldValue('教室名称'));
    // }
    // inputChange(e){
    //     alert(e.target.value)
    //     this.setState({
    //         教室id:e.target.value
    //     })
    // }

    render() {

        return (
            <>
                <Drawer closable={false} maskClosable={false}
                        title="教室信息"
                        width={500}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        bodyStyle={{ paddingBottom: 80 }}
                        footer={
                            <div
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                    <Link to="/ManagerCenter/ClassroomInfo">
                                        取消
                                    </Link>
                                </Button>
                                <Button onClick={this.saveData} type="primary">
                                    <Link to="/ManagerCenter/ClassroomInfo">
                                        提交
                                    </Link>
                                </Button>
                            </div>
                        }
                >

                    <Form layout="vertical" hideRequiredMark >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="所在校区"
                                    label="所在校区"
                                    rules={[{ required: true, message: '选择所在校区' }]}
                                >
                                    <Select placeholder="选择所在校区" ref='campus' onSelect={this.handleMaxRestoreUp1} >
                                        {/*<Option value="紫金港">紫金港</Option>*/}
                                        {/*<Option value="玉泉">玉泉</Option>*/}
                                        {/*<Option value="华家池">华家池</Option>*/}
                                        {/*<Option value="西溪">西溪</Option>*/}
                                        {/*<Option value="之江">之江</Option>*/}
                                        {/*<Option value="舟山">舟山</Option>*/}
                                        {/*<Option value="海宁">海宁</Option>*/}
                                        <Option value="紫金港">紫金港</Option>
                                        <Option value="玉泉">玉泉</Option>
                                        <Option value="华家池">华家池</Option>
                                        <Option value="西溪">西溪</Option>
                                        <Option value="之江">之江</Option>
                                        <Option value="舟山">舟山</Option>
                                        <Option value="海宁">海宁</Option>
                                    </Select>

                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="教室id"
                                    label="教室id"
                                    rules={[{ required: true, message: '输入教室id' }]}
                                >
                                    <Input placeholder='输入教室id' onChange={Event=>this.handleMaxRestoreUp2(Event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="教室名称"
                                    label="教室名称"
                                    rules={[{ required: true, message: '输入教室名称' }]}
                                >
                                    <Input placeholder='输入教室名称'  onChange={Event=>this.handleMaxRestoreUp3(Event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="教室容量"
                                    label="教室容量"
                                    rules={[{ required: true, message: '输入教室容量' }]}
                                >
                                    <Input placeholder='输入教室容量' onChange={Event=>this.handleMaxRestoreUp4(Event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>

        );
    }
}

export default DrawerForm1;