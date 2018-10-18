import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getGroupData, getPictureList } from './data'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_group/, getGroupData)
Mock.mock(/\/get_picture_list/, getPictureList)

export default Mock

// Mock.mock(/\/abc/, {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'name': '@first',
//
//     }]
// })
// Mock.mock(/\/abc/, {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'name': '@first',
//
//     }]
// })
// Mock.mock(/\/abc/, {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'name': '@first',
//
//     }]
// })