import React, { Component } from 'react';
import "./index.less"
import PicItem from "../components/picItem";
import {getPictureList} from "../../serve/api"

class Recently extends Component {
    state={
        data: [],
    }
    componentDidMount(){
        getPictureList().then(({data}) => {

            this.setState({
                data
            })
        })
    }
    render() {
        let {data,isHover} =this.state;
        return (
            <div className="recently">
                <ul className="list clear">
                    {
                        data.map((item,index)=>{
                            return(
                                <li
                                    key={item.id}
                                >
                                    <PicItem
                                        item={item}
                                    />
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Recently;