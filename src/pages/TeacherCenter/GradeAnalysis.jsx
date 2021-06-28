import React, { Component } from 'react'
import { Table,Select, Button} from 'antd';
import { message } from 'antd';
import { Link } from 'react-router-dom'
const { Option } = Select;
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
    },
    {
        title: '作业成绩',
        dataIndex: 'hwgrade',
        key: 'hwgrade',
    },
    {
        title: '课堂测验成绩',
        dataIndex: 'quiz',
        key: 'quiz',
    },
    {
        title: '在线测验成绩',
        dataIndex: 'exam',
        key: 'exam',
       
    },
    {
        title: '总成绩',
        dataIndex: 'grade',
        key: 'grade',
       
    },
    {
        title: '分析学生成绩',
        dataIndex: 'index',
        key: 'index',
       
    },
];

const data = [
    {
        key: '1',
        id: 'M00001',
        name: '微积分',
        hwgrade:<Link to="/TeacherCenter/HWanalysis"><a>查看</a>
        </Link>,
        quiz:<Link to="/TeacherCenter/Quizanalysis"><a>查看</a>
            </Link>,
        exam:<a>查看</a>,
        grade:<Link to="/TeacherCenter/Analysischarts"><a>查看</a>
        </Link>,
        index:<space>
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a studentID"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option >3190100001</Option>
        <Option >3190100002</Option>
        <Option >3190100003</Option>
      </Select> 
      <Link to="/TeacherCenter/Studentanalysis"><Button  >查看</Button>
            </Link>
      </space>
    },
    {
        key: '2',
        id: 'M00002',
        name: '线性代数',
        hwgrade:<Link to="/TeacherCenter/HWanalysis"><a>查看</a>
        </Link>,
        quiz:<Link to="/TeacherCenter/Quizanalysis"><a>查看</a>
            </Link>,
        exam:<a>查看</a>,
        grade:<Link to="/TeacherCenter/Analysischarts"><a>查看</a>
        </Link>,
        index:<space>
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a studentID"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option >3190100001</Option>
        <Option >3190100002</Option>
        <Option >3190100003</Option>
      </Select> 
      <Link to="/TeacherCenter/Studentanalysis"><Button  >查看</Button>
            </Link>
      </space>
    },
    {
        key: '3',
        id: 'M00003',
        name: '常微分方程',
        hwgrade:<Link to="/TeacherCenter/HWanalysis"><a>查看</a>
        </Link>,
        quiz:<Link to="/TeacherCenter/Quizanalysis"><a>查看</a>
            </Link>,
        exam:<a>查看</a>,
        grade:<Link to="/TeacherCenter/Analysischarts"><a>查看</a>
        </Link>,
        index:<space>
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a studentID"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option >3190100001</Option>
        <Option >3190100002</Option>
        <Option >3190100003</Option>
      </Select> 
      <Link to="/TeacherCenter/Studentanalysis"><Button  >查看</Button>
            </Link>
      
      </space>
    },
];

export default class GradeAnalysis extends Component {
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
function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }