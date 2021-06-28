import { Layout, Breadcrumb, Form } from 'antd';
import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import './Navi.css'
import { Button,message } from 'antd';
import { Input, Space } from 'antd';
import { Table, InputNumber, Popconfirm, Typography } from 'antd';
import { Link } from 'react-router-dom'
import axios from "axios";

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

const {  Content, } = Layout;
const { Search } = Input;
let originData = [];
let origin=axios.post(`http://127.0.0.1:8000/ClassroomDisplay`)
origin.then(res=>{
    let length = res.data.data.length;
    console.log(length);
    for( let i = 0; i < length; i++ ){
        originData.push({
            key: i.toString(),
            campus: res.data.data[i].campus,
            id: res.data.data[i].id,
            name: res.data.data[i].name,
            capacity: res.data.data[i].capacity,
        });
    }
    console.log(originData)
})


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber/> :<Input/>;
    return(
        <td {...restProps}>
            {editing ? (
            <Form.Item
                name={dataIndex}
                style={{margin:0}}
                rules={[
                {
                    required: true,
                    message: `Please Input ${title}!`,
                }
                    ]}
            >
                {inputNode}
            </Form.Item>
                ) :(
                    children
                )}
        </td>
    );
};

const SiderDemo = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    console.log(data);
    const OnSearch1 = value => {
        let afterSearch=[]
        let a=axios({
            method:'post',
            url:`http://127.0.0.1:8000/ClassroomSearch`,
            data:{
                'value': value,
                // '_token':'{{csrf_token()}}'
            }
        });
        a.then(res=>{
            let _code=res.data.code;
            console.log(res)
            if(_code!=="0")
            {
                message.error(codetable[_code]);
                return;
            }
            let length=res.data.data.length;
            for( let i = 0; i < length; i++ )
            {
                afterSearch.push({
                    key: i.toString(),
                    campus: res.data.data[i].campus,
                    id: res.data.data[i].id,
                    name: res.data.data[i].name,
                    capacity: res.data.data[i].capacity,
                });
            }
            setData(afterSearch);
        });


    };
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            所在校区: '',
            教室id: '',
            教室名称: '',
            教室容量: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try{
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item)=>key === item.key);
            if(index > -1){
                const item = newData[index];
                newData.splice(index, 1, {...item, ...row});
                setData(newData);
                // const item = newData[index];
                // newData.splice(index, 1, {...item, ...row});
                // setData(newData);
                // setEditingKey('');
                // console.log(originData[index]);
                // console.log(newData[index]);

                let a=axios({
                    method:'post',
                    url:`http://127.0.0.1:8000/ClassroomModify`,
                    data: {
                        'Classroom_id0': originData[index].id,
                        'Classroom_name0': originData[index].name,
                        'Classroom_locate0': originData[index].campus,
                        'Classroom_capacity0': originData[index].capacity,
                        'Classroom_id1': newData[index].id,
                        'Classroom_name1': newData[index].name,
                        'Classroom_locate1': newData[index].campus,
                        'Classroom_capacity1': newData[index].capacity,
                    }
                })
                a.then(res=>{
                    let _code=res.data.code;
                    console.log(res.data)
                    if(_code!=="0")
                    {
                        message.error(codetable[_code]);
                        return;
                    }
                    else
                    {

                        setEditingKey('');
                        console.log(originData[index]);
                        console.log(newData[index]);
                    }
                    // else
                    // {
                    //     const item = newData[index];
                    //     newData.splice(index, 1, {...item, ...row});
                    //     setData(newData);
                    //     setEditingKey('');
                    //     console.log(originData[index]);
                    //     console.log(newData[index]);
                    // }
                })
            }
            else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    }
    const columns = [
        {
            title:'所在校区',
            dataIndex: 'campus',
            editable: true,
        },
        {
            title:'教室id',
            dataIndex:'id',
            editable: false,
        },
        {
            title:'教室名称',
            dataIndex: 'name',
            editable: true,
        },
        {
            title:'教室容量',
            dataIndex: 'capacity',
            editable: true,
        },
        {
            title:'操作',
            dataIndex: '操作',
            render:(_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            onClick={()=>save(record.key)}
                            style={{marginRight:8,}}
                        >
                            保存修改
                        </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>取消</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey!==''} onClick={()=>edit(record)}>
                        修改
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col)=>{
        if(!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType:col.dataIndex==='age'?'number':'text',
                dataIndex:col.dataIndex,
                title:col.title,
                editing:isEditing(record),
            }),
        };
    });
    return(
        <Content style={{ margin: '-40px -10px', }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Button type="primary" style={{margin: '0 100px'}}>
                    <Link to="/ManagerCenter/ClassroomInfo/DrawerForm1">
                        添加教室
                    </Link>
                </Button>
                <Space style={{float:'right', paddingRight:'10%'}} direction="vertical">
                    <Search placeholder="输入教室相关信息" onSearch={OnSearch1} enterButton />
                </Space>
            </Breadcrumb>
        <Form form={form} component={false}>
            <Table
                components={{
                    body:{
                        cell:EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange:cancel,
                }}
            />
        </Form>
        </Content>
    )
}

export default SiderDemo;
