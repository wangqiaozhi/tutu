import React, { Component } from 'react';
import PicRecommend from "../picrecommend"
import PicComment from "../piccomment"
import "./index.less"

export default class PicDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            data: props.location.state
        }
    }
    componentDidMount(){

        //需要请求推荐图片数据
    }


    render(){
        let {data} = this.state.data;
        console.log(data)
        return(
            <div className="picDetail">
                <div className="con">
                   <div className="top clear">
                       <div className="left fl">
                           <img src={data.imgUrl} />

                       </div>
                       <div className="right fr">
                           <div className="userInfo clear">
                               <div className="userInfo-left fl">
                                   <i></i>
                               </div>
                               <div className="userInfo-right fl">
                                   <p>{data.user}</p>
                                   <button>关注</button>
                               </div>
                           </div>
                           <div className="picintro">
                               <div className="picinfomation">
                                   <p className="title">图片信息</p>
                                   <p>价格：{data.price}元</p>
                                   <p>分类：{data.type}</p>
                                   <p>大小：{data.size}</p>
                                   <p>分辨率：{data.size}</p>
                                   <p>图片类型： png</p>
                                   <p>下载量： {data.load}</p>
                                   <p className="title">图片描述</p>
                                   <p>{data.description}</p>

                                   <p className="title">图片标签</p>
                                   <p>{data.tag.join(" ")}</p>
                               </div>
                           </div>
                       </div>

                   </div>
                    <div className="allBtn clear">
                        <button className="fl good">
                            <i></i>
                            {data.good}
                        </button>
                        <button className="fl car">
                            加入购物车
                        </button>
                        {
                            data.isFree?
                                <button className="fr">免费下载</button>
                                :
                                <button className="fr">点击购买</button>
                        }

                    </div>

                    <PicRecommend />

                    <PicComment />



                </div>



            </div>
        )
    }
}