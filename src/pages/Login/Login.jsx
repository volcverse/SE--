import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import ManagerCenter from '../ManagerCenter/ManagerCenter'
import StudentCenter from '../StudentCenter/StudentCenter'
import TeacherCenter from '../TeacherCenter/TeacherCenter'
import LoginInterface from './LoginInterface'
import ForgetPSW from './ForgetPSW'



export default class Login extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/ManagerCenter" component={ManagerCenter}></Route>
                    <Route path="/StudentCenter" component={StudentCenter}></Route>
                    <Route path="/TeacherCenter" component={TeacherCenter}></Route>
                    <Route path="/LoginInterface" component={LoginInterface}></Route>
                    <Route path="/ForgetPSW" component={ForgetPSW}></Route>
                    <Redirect to="/LoginInterface"></Redirect>
                </Switch>
        )
    }
}


