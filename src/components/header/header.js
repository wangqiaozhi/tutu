import React, { Component } from 'react';
import {NavLink,Link} from "react-router-dom"
import {navData} from "../../router/config"
import Login from "../login"
import {withRouter} from 'react-router-dom' ;
import Register from "../register"
import UpLoadImg from "../uploadImg"

import "./header.less"


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            num:0,
            isLogin: false,
            isShowLogin: false,
            isShowRegister: false,
            isShowUploadImg: true,
            useInfo: {}
        }
    }
    changeShowLogin=()=>{
        this.setState({
            isShowLogin: false,
        })
    }
    changeIsLogin=(useInfo)=>{
        console.log(123)
        this.setState({
            isLogin: true,
            useInfo
        })
    }

    changeShowRegister=()=>{
        this.setState({
            isShowRegister: false,
        })
    }
    changeUploadImg=()=>{
        this.setState({
            isShowUploadImg: false,
        })
    }

    render() {
        let {num,isLogin,isShowLogin,isShowRegister,isShowUploadImg,useInfo}=this.state;
        let username = useInfo.username || "知知";
        return (
            <nav id="nav">
                <div className="nav-con clear">
                    <Link to="/" className="nav-logo">
                    </Link>
                    <ul className="nav-item">
                        {
                            navData.map((item,index)=>{
                                return(
                                    <li
                                        className={num ===index?"active-item":''}
                                        key={item.path}
                                    >
                                        <NavLink
                                            to={item.path}
                                            exact
                                            onClick={()=>{
                                                this.setState({
                                                    num: index
                                                })
                                            }}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>

                    <div className="login-part">
                        {
                            isLogin?
                                <div className= "logged">
                                    <span>购物车</span>
                                    <span
                                        onClick={()=>{
                                            //点击弹出上传图片窗口
                                            console.log(123,isShowUploadImg)
                                            this.setState({
                                                isShowUploadImg: true,
                                            })
                                        }}
                                    >上传</span>
                                    <span
                                        onClick= {()=>{
                                            //根据用户的id渲染页面
                                            var id = useInfo._id || 1; //用mock时假定为1
                                            this.props.history.push({
                                                pathname: "/user/" +id,
                                            })
                                        }}
                                    >{username}</span>
                                </div>
                                :
                                <div>
                                    <span
                                        onClick={()=>{
                                            this.setState({
                                                isShowLogin: true,
                                                isShowRegister: false,
                                            })
                                        }}
                                    >登录</span>
                                    <span
                                        onClick={()=>{
                                            this.setState({
                                                isShowRegister: true,
                                                isShowLogin: false,
                                            })
                                        }}
                                    >注册</span></div>
                        }

                    </div>

                    {isShowLogin?
                        <Login
                        changeShowLogin={this.changeShowLogin}
                        changeIsLogin={this.changeIsLogin}
                    /> :
                        ""}

                    {isShowRegister?
                        <Register
                            changeShowRegister={this.changeShowRegister}
                        /> :
                        ""}

                    {isShowUploadImg ?
                        <UpLoadImg
                            changeUploadImg={this.changeUploadImg}
                        />
                        :
                        ""
                    }

                </div>
            </nav>
        );
    }
}

export default withRouter(Header);