import React, { Component } from 'react'
import { Table, Tag } from 'antd';
import { SiderContext } from 'antd/lib/layout/Sider';
import axios from 'axios'


const columns = [
    {
        title: '申请',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '结果',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === '驳回') {
                        color = 'volcano';
                    }
                    if (tag === '待处理') {
                        color = 'gray'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const data = [
    {
        key: '1',
        name: '张三转专业申请',
        time: '2021-06-01',
        tags: ['通过'],
    },
    {
        key: '2',
        name: '张三休学申请',
        time: '2021-06-02',
        tags: ['驳回'],
    },
    {
        key: '3',
        name: '张三退学申请',
        time: '2021-06-03',
        tags: ['待处理'],
    },
];

export default class MyApplication extends Component {
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
            <div>
                <Table columns={columns} dataSource={data} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

const requestSendGet = () => {
    var Sid;
    const params = {
        id: SiderContext
    }

    axios
        .get('https://localhost:8080',
            { params },
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }
        ).then((response) => {
            // get response
        })
}