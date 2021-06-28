import {Layout, Breadcrumb, Input, Space, Button, Table, Form, message} from 'antd';
import React, {Component, useState} from 'react';
import 'antd/dist/antd.css';
import './Navi3.css'
import {Link} from "react-router-dom";
import axios from "axios";
let originData = []
const { Content } = Layout;
const { Search } = Input;
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
const SiderDemo3 = () => {
    function onPrint() {
        window.print();
    }
    const [data, setData] = useState(originData);
    const OnSearch3 = value => {
        let afterSearch = [];
        let a=axios({
            method:'post',
            url:`http://127.0.0.1:8000/ScheduleSearch`,
            data:{
                'value': value,
                // '_token':'{{csrf_token()}}'
            }
        });
        a.then(res=>{
            let _code=res.data.code;
            if(_code!=="0")
            {
                message.error(codetable[_code]);
                return;
            }

            console.log(res.data)
            for( let i = 0; i < 5; i++ )
            {
                // if(i===0)
                //     afterSearch.push({span:"1、2节"});
                // else if(i===1)
                //     afterSearch.push({span:"3、4、5节"});
                // else if(i===2)
                //     afterSearch.push({span:"6、7、8节"});
                // else if(i===3)
                //     afterSearch.push({span:"9、10节"});
                // else if(i===4)
                //     afterSearch.push({span:"11、12、13节"});
                // eslint-disable-next-line default-case
                switch (i){
                    case 0:
                        afterSearch.push({
                            span:"1、2节",
                            key: i.toString(),
                            Mon: res.data.data[i].Mon,
                            Tue: res.data.data[i].Tue,
                            Wed: res.data.data[i].Wed,
                            Thu: res.data.data[i].Thu,
                            Fri: res.data.data[i].Fri,
                            Sat: res.data.data[i].Sat,
                            Sun: res.data.data[i].Sun,
                        });
                        break;
                    case 1:
                        afterSearch.push({
                            span:"3、4、5节",
                            key: i.toString(),
                            Mon: res.data.data[i].Mon,
                            Tue: res.data.data[i].Tue,
                            Wed: res.data.data[i].Wed,
                            Thu: res.data.data[i].Thu,
                            Fri: res.data.data[i].Fri,
                            Sat: res.data.data[i].Sat,
                            Sun: res.data.data[i].Sun,
                        });
                        break;
                    case 2:
                        afterSearch.push({
                            span:"6、7、8节",
                            key: i.toString(),
                            Mon: res.data.data[i].Mon,
                            Tue: res.data.data[i].Tue,
                            Wed: res.data.data[i].Wed,
                            Thu: res.data.data[i].Thu,
                            Fri: res.data.data[i].Fri,
                            Sat: res.data.data[i].Sat,
                            Sun: res.data.data[i].Sun,
                        });
                        break;
                    case 3:
                        afterSearch.push({
                            span:"9、10节",
                            key: i.toString(),
                            Mon: res.data.data[i].Mon,
                            Tue: res.data.data[i].Tue,
                            Wed: res.data.data[i].Wed,
                            Thu: res.data.data[i].Thu,
                            Fri: res.data.data[i].Fri,
                            Sat: res.data.data[i].Sat,
                            Sun: res.data.data[i].Sun,
                        });
                        break;
                    case 4:
                        afterSearch.push({
                            span:"10、11、12节",
                            key: i.toString(),
                            Mon: res.data.data[i].Mon,
                            Tue: res.data.data[i].Tue,
                            Wed: res.data.data[i].Wed,
                            Thu: res.data.data[i].Thu,
                            Fri: res.data.data[i].Fri,
                            Sat: res.data.data[i].Sat,
                            Sun: res.data.data[i].Sun,
                        });
                        break;
                }

            }
            setData(afterSearch);
        });
    };

    const columns=[
        {
            title: ' ',
            dataIndex: 'span',
            key: 'span',
        },
        {
            title: '星期一',
            dataIndex: 'Mon',
            key: 'Mon',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期二',
            dataIndex: 'Tue',
            key: 'Tue',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期三',
            dataIndex: 'Wed',
            key: 'Wed',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期四',
            dataIndex: 'Thu',
            key: 'Thu',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期五',
            dataIndex: 'Fri',
            key: 'Fri',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期六',
            dataIndex: 'Sat',
            key: 'Sat',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
        {
            title: '星期日',
            dataIndex: 'Sun',
            key: 'Sun',
            render: (text, record) =>{
                let snArray=[];
                snArray=text.split(";");

                let br=<br></br>;
                let result=null;
                if(snArray.length<2){
                    return text;
                }

                for(let i=0;i<snArray.length;i++){
                    // eslint-disable-next-line eqeqeq
                    if(i==0){
                        result=snArray[i];
                    }else{
                        result=<span>{result}{br}{snArray[i]}</span>;
                    }
                }
                return <div>{result}</div>;
            }
        },
    ]

        return (
            <Layout style={{ whiteSpace: 'pre-wrap' }}>
                <Layout style={{ whiteSpace: 'pre-wrap' }}>
                    <Content style={{ margin: '-40px -10px', whiteSpace: 'pre-wrap' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>Administrator</Breadcrumb.Item>*/}

                            <Space style={{float:'right', paddingRight:'10%'}} direction="vertical">
                                <Search placeholder="输入教师或教室ID" onSearch={OnSearch3} enterButton />
                            </Space>
                            <Button style={{ margin: '0 200px' }} type="primary" onClick={onPrint}>打印课表</Button>
                        </Breadcrumb>
                        <Table style={{ whiteSpace: 'pre-wrap' }}
                            bordered
                            dataSource={data}
                            columns={columns}
                        />
                    </Content>
                </Layout>
            </Layout>
        );

}

export default SiderDemo3;
