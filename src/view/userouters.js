import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import {userData} from "../router/userconfig";

export default class UseRoutes extends Component{
    render(){
        return(
            <div>
                <Switch>
                    {
                        userData.map((item)=>{
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