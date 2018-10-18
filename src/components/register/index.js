import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {register} from "../../serve/api"

import "./index.less"

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            nameValue: '',
            passwordValue: '',
            rePasswordValue: ''
        }
    }
    changeNameValue=(e)=>{
        this.setState({
            nameValue: e.target.value
        })
    }
    changePasswordValue=(e)=>{

        this.setState({
            passwordValue: e.target.value
        })
    }

    changeRePasswordValue=(e)=>{
        this.setState({
            rePasswordValue: e.target.value
        })
    }
    render(){
        // console.log(this.props);
        let {nameValue,passwordValue,rePasswordValue} = this.state;
        let {changeShowRegister} = this.props;
        return ReactDOM.createPortal(
            <div className="register-pop">
                <p className="title">注册</p>
                <p>用户名</p>
                <input type="text" value={this.state.nameValue} onChange={this.changeNameValue}/>

                <p>密码</p>
                <input type="password"
                       value={this.state.passwordValue}
                       onChange={this.changePasswordValue}
                       onBlur={(e)=>{
                           //失去焦点的时判断密码的长度
                           if(e.target.value.length<6 || e.target.value.length>10){
                               alert('请输入长度为6~10的密码')
                           }
                       }}
                />

                <p>确认密码</p>
                <input type="password"
                       value={this.state.rePasswordValue}
                       onChange={this.changeRePasswordValue}

                />

                <a className="button"
                    onClick={()=>{
                        // if(nameValue==''||passwordValue==''||rePasswordValue==''){
                        //     alert('用户名或密码或确认密码不能为空');
                        //     return
                        // }
                        //
                        // if(passwordValue!=rePasswordValue){
                        //     alert('两次输入的密码不一致');
                        //     return
                        // }

                        //满足条件再请求ajax
                        register({
                            username: this.state.nameValue,
                            password: this.state.passwordValue,
                            repassword: this.state.rePasswordValue,
                        }).then((res)=>{
                            console.log(res);
                        });
                        changeShowRegister();
                    }}
                >注册</a>
                <p className="tip">
                    如果已有账号？<span>请点击登录</span>
                </p>
                <div className="close"
                     onClick={()=>{
                         changeShowRegister();
                     }}
                >
                    X
                </div>
            </div>
            ,document.body)
    }
}