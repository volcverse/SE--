import React, { Component } from 'react'
import { Table, Tag } from 'antd';
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
                    if(tag==='待处理'){
                        color='gray'
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
        name: '李四转系申请',
        time: '2021-06-03',
        tags: ['待处理'],
    },
];

export default class MyApplication extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            psw:""
        };
      }
    
      componentWillMount(){
        var name=this.props.location.state.username;
        var passw=this.props.location.state.psw;
        console.log(name);
        this.setState({
          username:name,
          psw:passw
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

