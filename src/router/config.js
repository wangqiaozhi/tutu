
import Recently from "../view/recently"
import Select from "../view/select"
import Home from "../view/home"
import PicDetail from "../view/components/picdetail";
import User from "../view/user"

let navData = [
    {
        title: '首页',
        path: '/',
        component: Home
    },
    {
        title: '最近',
        path: '/recently',
        component: Recently
    },
    {
        title: '精选',
        path: '/select',
        component: Select
    }

];

let others= [
    {
        title: '图片详情页',
        path: '/pic/detail/:picid',
        component: PicDetail
    },{
        title: '用户个人中心',
        path: '/user/:userid',
        component: User
        
    }
];

export {navData}

export default [...navData,...others]

