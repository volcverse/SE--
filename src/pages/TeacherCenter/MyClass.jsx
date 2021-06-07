import React, { Component } from 'react'
import { Table, Space } from 'antd';
import { Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom'

const columns = [
    {
        title: '课程编号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '课名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '学分',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '容量',
        dataIndex: 'stock',
        key: 'stock',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Link to="/TeacherCenter/EditLesson">
                    <a>编辑信息</a>
                </Link>
                <a>资源管理</a>
                <Popconfirm
                    title="您确定要删除此课程吗"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No">
                    <a>删除课程</a>
                </Popconfirm>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        id: 'M00001',
        name: '微积分',
        age: 5,
        stock: 200

    },
    {
        key: '2',
        id: 'M00002',
        name: '线性代数',
        age: 3,
        stock: 200

    },
    {
        key: '3',
        id: 'M00003',
        name: '常微分方程',
        age: 2,
        stock: 30

    },
];

export default class MyClass extends Component {
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}


function confirm(e) {
    console.log(e);
    message.success('操作确认');
}

function cancel(e) {
    console.log(e);
    message.error('操作取消');
}
