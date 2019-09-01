import A1 from './doc/走进山大/百年山大'
import A2 from './doc/走进山大/大东关篇'
import A3 from './doc/走进山大/坞城篇'
import A4 from './doc/走进山大/东山篇'


import B1 from './doc/入学准备/QQ群'
import B2 from './doc/入学准备/军训小贴士'
import B3 from './doc/入学准备/到校方式'
import B4 from './doc/入学准备/报到流程'
import B5 from './doc/入学准备/物品准备'

import C1 from './doc/校内生活/住在山大'
import C2 from './doc/校内生活/便利生活'
import C3 from './doc/校内生活/吃在山大'
import C4 from './doc/校内生活/大型活动'
import C5 from './doc/校内生活/多彩社团'
import C6 from './doc/校内生活/学生组织'


import D1 from './doc/校外生活/风景名胜'
import D2 from './doc/校外生活/服务网点'
import D3 from './doc/校外生活/周边商圈'

import E1 from './doc/其他信息/学习建议'
import E2 from './doc/其他信息/校园地图'
import E3 from './doc/其他信息/自我提升'
import E4 from './doc/其他信息/图书馆'

import F1 from './doc/关于我们/关于我们'



export default [
    {
        title: '走进山大',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/08b0fdfd58ea4cd1a27e0005c97bd04b.jpg',
        children: {
            '百年山大': A1,
            '大东关篇': A2,
            '坞城篇': A3,
            '东山篇': A4
        }
    },
    {
        title: '入学准备',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/d88f160d4fa045b6be772e0293b8e6b0.png',
        children: {
            // 'QQ群': B1,
            '军训小贴士': B2,
            '到校方式': B3,
            '报到流程': B4,
            '物品准备': B5
        }
    },
    {
        title: '校内生活',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/a74bf07dd058456f9215d79e60e835fa.png',
        children: {
            '住在山大': C1,
            '便利生活': C2,
            '吃在山大': C3,
            '大型活动': C4,
            '多彩社团': C5,
            '学生组织': C6
        }
    },
    {
        title: '校外生活',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/c38dd82d48374d23960bc1c409fa2d63.jpg',
        children: {
            '风景名胜': D1,
            '服务网点': D2,
            '周边商圈': D3
        }
    },
    {
        title: '其他信息',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/3ee008edc30a4e709dff116ea7adcfd3.jpg',
        children: {
            '学习建议': E1,
            '校园地图': E2,
            '自我提升': E3,
            '图书馆': E4
        }
    },
    {
        title: '关于我们',
        imgUrl: 'http://bkzs.sxu.edu.cn/images/2019-07/a79806ff9ab54b1ea6f084ac6906cf7c.jpg',
        children: {
            '关于我们': F1
        }
    }
]