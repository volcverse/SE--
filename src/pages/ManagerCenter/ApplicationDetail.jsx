import React, { Component } from 'react'
import { Descriptions, Button } from 'antd'

function approveApplicationReturn(){
    if(1) alert('操作成功')
    else alert('操作失败')
}

export default class ApplicationDetail extends Component {
    render() {
        return (
            <div>
                <Descriptions title="申请" bordered>
                    <Descriptions.Item label="姓名">张三</Descriptions.Item>
                    <Descriptions.Item label="学号">319010XXXX</Descriptions.Item>
                    <Descriptions.Item label="性别">男</Descriptions.Item>
                    <Descriptions.Item label="申请时间">2021-06-01 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="申请事务" span={2}>
                        转专业
                    </Descriptions.Item>

                    <Descriptions.Item label="详细说明">
                        由于XXXXX
      <br />
      希望从XX专业转至XX专业
      <br />
      目前均绩：5.0
      <br />
      有很强的学习能力，曾获国奖

                    </Descriptions.Item>
                </Descriptions>
                <br /><br /><br /><br /><br /><br /><br />
                <Button className="yes" onClick={()=>approveApplicationReturn()}>
                    通过
                </Button>
                <Button className="no" style={{ marginLeft: 20 }}  onClick={()=>alert('操作成功')}>
                    驳回
                </Button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br />
                <br />
            </div>
        )
    }
}
