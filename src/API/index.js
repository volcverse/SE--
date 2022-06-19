import axios from 'axios';  //引入axios
import { base } from "./config.js";  //引入请求地址
import cookie from 'react-cookies';//引入cookie保存登录信息

import {message} from 'antd';

import ManagerCenter from '../ManagerCenter/ManagerCenter'
import StudentCenter from '../StudentCenter/StudentCenter'
import TeacherCenter from '../TeacherCenter/TeacherCenter'