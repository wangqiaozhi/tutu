import Mock from 'mockjs'
import { doCustomTimes } from '../libs/util'
const Random = Mock.Random;

export const getGroupData = req => {
    let groupData = [];
    doCustomTimes(6, () => {
        groupData.push(Mock.mock({
            name: '@name',
            email: '@email',
            createTime: '@date'
        }))
    })
    return groupData
};

export const getPictureList = req => {
    let pictureList = [];
    doCustomTimes(80, () => {
        pictureList.push(Mock.mock({
            title: Random.cword(2, 4),
            price: Random.natural(0,100),
            id: Random.increment(10),
            imgUrl: Random.dataImage( '336x280','#ffcc33', '#FFF', 'png'),
            user: '@name',
            good: Random.natural(0,1000),
            load: Random.natural(0,1000),
            description: Random.cword(12, 17),
            size: '336x280',
            tag: [Random.cword(2, 4),Random.cword(2, 4),Random.cword(2, 4)],
            time: Random.date(),
            isFree: Random.boolean(),
            "type|1": [
                "动物",
                "海边",
                "沙漠",
                "星空",
                "美女",
                "帅哥",
            ]
        }))
    });
    return pictureList
};
