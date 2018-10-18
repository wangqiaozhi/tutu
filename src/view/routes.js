import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import routerData from "../router/config";

export default class Routes extends Component{
    render(){
        console.log(routerData)
        return(
            <div>
                <Switch>
                    {
                        routerData.map((item)=>{
                            return <Route
                                exact
                                key = {item.path}
                                path = {item.path}
                                component={item.component}
                            ></Route>
                        })
                    }

                </Switch>
            </div>
        )
    }
}