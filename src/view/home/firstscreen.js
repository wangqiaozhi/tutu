import React, { Component } from 'react';
import HomeSearch from "../components/homesearch"
import "./firstscreen.less"
import pic1 from "../../img/banner1.jpg"
import pic2 from "../../img/banner2.jpg"
import pic3 from "../../img/banner3.jpg"
import pic4 from "../../img/banner4.jpg"


let data=[{
    title: "星空",
    description: "涓涓流淌的溪流，风中摇曳的绿叶，都是心情的点滴，点缀着盛夏的美丽1",
    imgUrl: pic1
},{
    title: "溪流2",
    description: "涓涓流淌的溪流，风中摇曳的绿叶，都是心情的点滴，点缀着盛夏的美丽2",
    imgUrl: pic2
},{
    title: "溪流3",
    description: "涓涓流淌的溪流，风中摇曳的绿叶，都是心情的点滴，点缀着盛夏的美丽3",
    imgUrl: pic3
},{
    title: "溪流4",
    description: "涓涓流淌的溪流，风中摇曳的绿叶，都是心情的点滴，点缀着盛夏的美丽3",
    imgUrl: pic4
}
];

export default class Firstscreen extends Component{

    constructor(props){
        super(props);
        this.state={
            data,
            num: 2 //记录选中的是第几个
        };
        this.img= React.createRef();
    }
    componentDidMount(){
        let img= this.img.current;

        img.style.height= document.body.clientHeight + "px";
    }

    render(){
        let {data,num}=this.state;
        return(
            <div className= "firstScreen">

                <div className="pic">
                    <img src={data[num].imgUrl} ref={this.img} alt=""/>
                </div>

                <div className="info">
                    <p className="title">{data[num].title}</p>
                    <p className="des">{data[num].description}</p>
                </div>

                <ul className="list">
                    {
                        data.map((item,index)=>{
                            return (
                                <li
                                    key={item.title}
                                    className={index==num?"active":''}
                                    onClick={()=>{
                                        this.setState({
                                            num: index
                                        })
                                    }}
                                >
                                    <img src={item.imgUrl} alt="" />
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="home-search">
                    <HomeSearch/>
                </div>

            </div>
        )
    }
}