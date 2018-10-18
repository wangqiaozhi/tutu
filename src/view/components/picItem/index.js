import React, { Component } from 'react';
import {withRouter} from 'react-router-dom' ;
import "./index.less"

class PicItem extends Component{
    constructor(props){
        super(props);
        this.state={
            data: props.item,
            isShow: false,
        }
    }
    render(){
        let {data,isShow} = this.state;
        // console.log(this.props)
        return (
            <div>
                <div

                    onMouseEnter={()=>{
                        this.setState({
                            isShow: true,
                        })
                    }}
                    onMouseLeave={()=>{
                        this.setState({
                            isShow: false,
                        })
                    }}
                    onClick={()=>{
                        this.props.history.push({
                            pathname: "/pic/detail/"+ data.id,
                            state:{
                                data
                            }
                        })
                    }}

                >
                    <div>
                        <img  src={data.imgUrl} alt=""/>
                    </div>


                    {isShow ?
                        <div className="picInfo clear">
                            <div className="con">
                                <div className="left">
                                    <img src="" alt=""/>
                                    <span>{data.user}</span>
                                </div>
                                <div className="right">
                                    <i></i>
                                    <span>{data.good}</span>
                                </div>
                            </div>
                        </div>
                        :
                        ""}

                </div>
            </div>
        )
    }
}

export default withRouter(PicItem)