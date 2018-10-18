import axios from 'axios';

axios.defaults.baseURL = '/letu/api';

function request(option) {
    let defaults = {
        methods: "get",
        path: "",
        params: {},
        data: {},
        withCredentials: true,
        headers:{
            authorization: 123,
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    Object.assign(defaults,option);

    return axios[defaults.methods](defaults.path,defaults.data,{params: defaults.params}).catch((error)=>{
        alert('出错：'+ error);
    })
}

export function getPictureList(){
    return request({path: "/get_picture_list"})
}

export function login(option){
    let defaults = {
        username: '',
        password: ''
    };
    Object.assign(defaults,option);
    return request({methods:'post',path: "/user/login",data: defaults})
}

export function register(option){

    let defaults = {
        username: '',
        password: '',
        repassword: ''
    };

    Object.assign(defaults,option);

    console.log(defaults);

    return request({methods:'post',path: "/user/register",data: defaults})
}

export function uploadImg(option){

    let token = window.localStorage.getItem("token") || '';
    let defaults = {
        title:"", //名称
        classify:"", //分类
        description:"", //描述
        isFree:"", //是否免费
        price:"",//价格
        token: token
    };

    Object.assign(defaults,option);
    console.log(defaults);

    return token && axios({method:'post',url: "/user/upload",data: option,headers:{'Content-Type': 'multipart/form-data'}})
}

//测试

export function test(){

    let token = window.localStorage.getItem("token") || '';
    let defaults = {
        url:1,
        title:1, //名称
        author:"", //作者
        classify:"", //分类
        description:"", //描述
        size:"",
        imgType:"",//图片格
        tag:"",//标签
        isFree:"", //是否免费
        price:"",//价格
        token: token
    };

    console.log(token);

    // Object.assign(defaults,option);
    return token && request({methods:'post',path: "/user/upload",data: defaults})
}

export const getUserInfo = (params={userid:''})=>{
    return request({path: `/user/${params.userid}`});
};