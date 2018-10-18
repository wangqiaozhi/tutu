
import Browserecord from "../view/browserecord"
import Shoppingcar from "../view/shoppingcar"
import Messenger from "../view/messenger"
import UploadImg from "../view/uploadImg"
import Order from "../view/order";
import Setting from "../view/setting"
import Comment from "../view/comment";
import Follow from "../view/follow"

let userData = [
    {
        title: '浏览记录',
        path: '/user/browserecord',
        component: Browserecord
    },{
        title: '我的购物车',
        path: '/user/shoppingcar',
        component: Shoppingcar
    },{
        title: '我的消息',
        path: '/user/messenger',
        component: Messenger
    },{
        title: '我长传的图片',
        path: '/user/uploadImg',
        component: UploadImg
    },{
        title: '我的订单',
        path: '/user/order',
        component: Order
    }
    ,{
        title: '个人设置',
        path: '/user/setting',
        component: Setting
    }
    ,{
        title: '我的评论',
        path: '/user/comment',
        component: Comment
    },{
        title: '我的关注',
        path: '/user/follow',
        component: Follow
    }


];


export {userData}

// export default [...navData,...others]

