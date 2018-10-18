import React, { Component } from 'react';

import {test} from "../../serve/api"
import "./index.less"

class Price extends Component {
    render() {
        return (
            <div className="price">
                价格
                <button
                    onClick={()=>{
                        test().then((res)=>{
                            console.log(res)
                        })
                    }}

                >
                    点击
                </button>
            </div>
        );
    }
}

export default Price;