import React, { Component } from 'react'
import { Descriptions, Button,Popconfirm,Input, Select,message } from 'antd';
import { Image } from 'antd';
import { Link } from 'react-router-dom'
import { Table, Tag, Space } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Column, ColumnGroup } = Table;
function selectQuery(recordID) {
  return 0
}

function selectCourseReturn(recordID) {
  var validation_code = selectQuery(recordID);
  if(validation_code==0)  alert('选课成功')
  else {
    switch(validation_code){
      case 1: alert('选课失败，失败原因1'); break;
      case 2: alert('选课失败，失败原因2'); break;
      default: alert('选课失败，未知原因');
    }
  }
}
function QuitCourseReturn(recordID) {
  var validation_code = selectQuery(recordID);
  if(validation_code==0)  alert('退课成功')
  else {
    switch(validation_code){
      case 1: alert('退课失败，失败原因1'); break;
      case 2: alert('退课失败，失败原因2'); break;
      default: alert('退课失败，未知原因');
    }
  }
}
const data = [
  {
    key: '1',
    课程名: '认识实习',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
  {
    key: '2',
    课程名: '认识实习',
	课程编号:'x0000',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
  {
    key: '3',
    课程名: '认识实习',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
    {
    key: '4',
    课程名: '认识实习',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
    {
    key: '5',
    课程名: '认识实习',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
    {
    key: '6',
    课程名: '认识实习',
	课程编号:'x0000',
    学分: 1,
    课程类别: '必修',
	状态:'已选'
  },
    {
    key: '7',
    课程名: '认识实习',
	课程编号:'x0000',
    学分: 1,
    课程类别: '选修',
	状态:'未选'
  },
    {
    key: '8',
    课程名: '认识实习',
    学分: 1,
    课程类别: '选修',
	状态:'未选'
  },
    {
    key: '9',
    课程名: '认识实习',
    学分: 1,
    课程类别: '选修',
	状态:'未选'
  },
    {
    key: '10',
    课程名: '认识实习',
    学分: 1,
    课程类别: '选修',
	状态:'未选'
  },
];

export default class Plan extends Component {
  render() {
    return (
<>
       <Table dataSource={data}>
      <Column title="课程名" dataIndex="课程名" key="课程名" />
    <Column title="学分" dataIndex="学分" key="学分" />
    <Column title="课程类别" dataIndex="课程类别" key="课程类别" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
            <a onClick={()=>selectCourseReturn(record.id)}>选择</a>
            <a onClick={()=>QuitCourseReturn(record.id)}>退选</a>
        </Space>
      )}
    />
	<Column title="状态" dataIndex="状态" key="状态" />
  </Table>

                <Popconfirm
                    title="您确认无误吗？定制之后将无法修改"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary">确认</Button>
                </Popconfirm>
		</>
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
