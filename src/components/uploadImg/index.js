import React, { Component } from 'react';
import ReactDOM from "react-dom";


import "./index.less"
import {uploadImg} from "../../serve/api";

export default class UpLoadImg extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"", //名称
            classify:"", //分类
            description:"", //描述
            // imgType:"",//图片格
            isFree:"", //是否免费
            price:"",//价格
        }
        this.files = React.createRef();
    }
    changeTitle=(e)=>{
        this.setState({
            title: e.target.value
        })
    }
    changeImgClassify=(e)=>{
        this.setState({
            classify: e.target.value
        })
    }
    changeDescription=(e)=>{
        this.setState({
            description: e.target.value
        })
    }
    changeIsFree=(e)=>{
        this.setState({
            isFree: e.target.value
        })

    }
    changePrice=(e)=> {
        this.setState({
            price: e.target.value
        })
    }


    render(){
        let {changeUploadImg} = this.props;
        return ReactDOM.createPortal(
            <div className="uploadImg-part">
                <div className="uploadImg-name">
                    <span>图片名称：</span>
                    <input
                        type="text"
                        onChange={this.changeTitle}
                    />
                </div>
                {/*<div className="uploadImg-imgType">*/}
                    {/*<span>图片格式：</span>*/}
                    {/*<input type="radio" name="imgType" value="jpg"/>*/}
                    {/*<span>jpg</span>*/}
                    {/*<input type="radio" name="imgType" value="png"/>*/}
                    {/*<span>png</span>*/}
                    {/*<input type="radio" name="imgType" value="img"/>*/}
                    {/*<span>img</span>*/}
                    {/*<input type="radio" name="imgType" value="其他"/>*/}
                    {/*<span>其他</span>*/}

                {/*</div>*/}
                <div className="uploadImg-classify">
                    <span>图片分类：</span>
                    <input type="radio" name="classify" value="沙漠"
                           onChange={this.changeImgClassify}
                    />
                    <span>沙漠</span>
                    <input type="radio" name="classify" value="星空"
                           onChange={this.changeImgClassify}
                    />
                    <span>星空</span>
                    <input type="radio" name="classify" value="美女"
                           onChange={this.changeImgClassify}
                    />
                    <span>美女</span>
                    <input type="radio" name="classify" value="海边"
                           onChange={this.changeImgClassify}
                    />
                    <span>海边</span>
                    <input type="radio" name="classify" value="动物"
                           onChange={this.changeImgClassify}
                    />
                    <span>动物</span>
                    <input type="radio" name="classify" value="水果"
                           onChange={this.changeImgClassify}
                    />
                    <span>水果</span>
                    <input type="radio" name="classify" value="其他"
                           onChange={this.changeImgClassify}
                    />
                    <span>其他</span>
                </div>
                <div className="uploadImg-description">
                    <span>图片描述：</span>
                    <div>
                        <textarea cols="60" required
                                  onChange={this.changeDescription}
                        >

                        </textarea>
                    </div>

                </div>
                <div className="uploadImg-isFree">
                    <span>是否收费：</span>
                    <input type="radio" name="isFree" value="0"
                           onChange={this.changeIsFree}
                    />
                    <span>否</span>
                    <input type="radio" name="isFree" value="1"
                           onChange={this.changeIsFree}
                    />
                    <span>是</span>
                    <input type="text" placeholder="请输入价格"
                            onChange={this.changePrice}
                    />
                    <span>元</span>
                </div>
                <div className="findImg">
                    <input type="file"
                           name="imageFile"
                           multiple="multiple"
                           ref = {this.files}
                    />
                </div>
                <div className="uploadImg-button">
                    <a className="button"
                        onClick={()=>{
                            let files = this.files.current.files[0];
                            let token = window.localStorage.getItem("token") || '';
                            var formData = new FormData();

                            formData.append('file',files);
                            formData.append('classify',this.state.classify);
                            formData.append('classify',this.state.classify);
                            formData.append('description',this.state.description);
                            formData.append('isFree',this.state.isFree);
                            formData.append('price',this.state.price);
                            formData.append('token',token);
                            uploadImg(formData).then((res)=>{
                                console.log(res);
                            })
                        }}
                    >
                        上传图片
                    </a>
                </div>

                <div className="close"
                     onClick={()=>{
                         changeUploadImg();
                     }}
                >
                    X
                </div>

            </div>
            ,document.body)
    }

}