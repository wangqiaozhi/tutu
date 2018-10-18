import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {login} from "../../serve/api"

import "./index.less"

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            nameValue: '',
            passwordValue: ''
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
    render(){
        // console.log(this.props);
        let {nameValue,passwordValue} = this.state;
        let {changeShowLogin,changeIsLogin} = this.props;
        return ReactDOM.createPortal(
            <div className="login-pop">
                <p className="title">登录</p>
                <p>用户名</p>
                <input type="text"
                       value={this.state.nameValue}
                       onChange={this.changeNameValue}
                />

                <p>密码</p>
                <input type="password" value={this.state.passwordValue} onChange={this.changePasswordValue}/>

                <a className="button"
                    onClick={()=>{
                        if(nameValue==''||passwordValue==''){
                            alert('用户名或密码不能为空');
                            return;
                        }

                        //如果用户名和密码都存在
                        login({
                                username: this.state.nameValue,
                                password: this.state.passwordValue
                        }).then((res)=>{
                            console.log(res);
                            let {data} = res;

                           //如果登录成功
                            if(data.code==0){
                                console.log(typeof (data.userInfo.token))
                                changeIsLogin(data.userInfo);
                                window.localStorage.setItem('token',data.userInfo.token);
                                window.localStorage.token=data.userInfo.token;
                            }
                            //请求mock登录
                            if(!data.userInfo){
                                console.log(123)
                                let info= data.userInfo || data.token;
                                changeIsLogin(info);
                                window.localStorage.setItem('token',data.token);
                            }

                        });
                        changeShowLogin();
                    }}
                >登录</a>
                <p className="tip">
                    如果没有账号？<span>请点击注册</span>
                </p>
                <div className="close"
                    onClick={()=>{
                        changeShowLogin();
                    }}
                >
                    X
                </div>
            </div>
            ,document.body)
    }
}