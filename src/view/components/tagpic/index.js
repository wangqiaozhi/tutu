import React, { Component } from 'react';
import "./tagpic.less";

import pic1 from  "../../../img/pic1.jpg"
import pic2 from  "../../../img/pic2.jpg"
import pic3 from  "../../../img/pic3.jpg"
import pic4 from  "../../../img/pic4.jpg"
import pic5 from  "../../../img/pic5.jpg"
import pic6 from  "../../../img/pic6.jpg"
import pic7 from  "../../../img/pic7.jpg"
import pic8 from  "../../../img/pic8.jpg"
import pic9 from  "../../../img/pic9.jpg"

let data= [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9];

export default class TagPic extends Component {
    constructor(props){
        super(props);
        this.state={
            data,
            activeNum: Math.floor(data.length/2),
        };
        this.timer = 0;
        this.len = 0;
        this.pics = React.createRef();
        this.list = React.createRef();

    }

    // componentDidMount(){
    //     // console.log(this.pics.current)
    // }

    toTap =(num)=>{
        let {len} = this;
        let {activeNum} = this.state;
        const THIS = this;
        let now = 0;
        len = Math.abs(num - activeNum);
        clearInterval(this.timer);
       this.timer = setInterval(fn,400);
        fn();
        function fn(){
            if(len == now){
                console.log(1)
                clearInterval(THIS.timer);
            }else{
                console.log(123);
                num>activeNum?THIS.next():THIS.prev();
                now++;
            }
        }

    };

    prev=()=>{
        let {activeNum} = this.state;
        --activeNum;
        this.setState({
            activeNum: activeNum<0?0:activeNum
        })
        activeNum>=0 && this.set(activeNum);
    };
    next=()=>{
        let {activeNum,data} = this.state;
        ++activeNum;
        this.setState({
            activeNum: activeNum>data.length?data.length-1:activeNum
        })

        activeNum<data.length && this.set(activeNum);

    };
    set=(activeNum)=>{
        let list = this.list.current;
        let pics = list.children[activeNum];
        let dis = pics.offsetLeft - list.clientWidth/2 + pics.offsetWidth/2;
        list.style.transform = 'translateX('+(-dis)+'px)';
    };

    render(){
        let {data,activeNum} = this.state;
        return (
            <div className="wrap">
                <div className="list">
                    <ul className="tagPicList" ref={this.list}>
                        {
                            data.map((item,index)=>{
                               return (
                                   <li
                                       className={activeNum==index?"active":''}
                                       key = {item}
                                       ref={this.pics}
                                       onClick={()=>{

                                           this.toTap(index);
                                       }}
                                   >
                                       <img src={item} alt=""/>
                                   </li>
                               )
                           })
                        }
                    </ul>
                </div>



        </div>)
    }
}