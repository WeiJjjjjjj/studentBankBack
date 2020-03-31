// import { router } from "umi"

import { router } from "umi"

// var routes = [
//     {
//         path: '/',
//         redirect: '/welcome',
//     },
//     {
//         path: '/welcome',
//         name: 'welcome',
//         icon: 'smile',
//         component: './Welcome',
//     },
//     {
//         path: '/otherpage',
//         name: 'welcome',
//         icon: 'smile',
//         component: './OtherPage/index',
//     },
//     {
//         path: '/admin',
//         name: 'admin',
//         icon: 'crown',
//         component: './Admin',
//         authority: ['admin'],
//         routes: [
//             {
//                 path: '/admin/sub-page',
//                 name: 'sub-page',
//                 icon: 'smile',
//                 component: './Welcome',
//                 authority: ['admin'],
//             },
//         ],
//     },
//     {
//         path: '/manager',
//         name: 'manager',
//         icon: 'crown',
//         routes: [
//             {
//                 path: '/manager/rolemanager',
//                 name: 'role',
//                 icon: 'smile',
//                 component: './manager/roleManager',
//             },
//             {
//                 path: '/manager/usermanager',
//                 name: 'usermanager',
//                 icon: 'smile',
//                 component: './manager/userManager',
//             }
//         ],
//     },
//     {
//         path: '/systemmanager',
//         name: 'manager',
//         icon: 'crown',
//         routes: [
//             {
//                 path: '/systemmanager/rolemanager',
//                 name: 'role',
//                 icon: 'smile',
//                 component: './SystemManager/RoleManager',
//             },
//             {
//                 path: '/systemmanager/usermanager',
//                 name: 'usermanager',
//                 icon: 'smile',
//                 component: './SystemManager/UserManager',
//             }
//         ],
//     },
//     {
//         path: '/schoolmanager',
//         name: 'schoolmanager',
//         icon: 'crown',
//         routes: [
//             {
//                 path: '/schoolmanager/classmanager',
//                 name: 'classmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/ClassManager',
//             },
//             {
//                 path: '/schoolmanager/grademanager',
//                 name: 'grademanager',
//                 icon: 'smile',
//                 component: './SchoolManager/GradeManager',
//             }
//             ,
//             {
//                 path: '/schoolmanager/studentmanager',
//                 name: 'studentmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/StudentManager',
//             },
//             {
//                 path: '/schoolmanager/teachermanager',
//                 name: 'teachermanager',
//                 icon: 'smile',
//                 component: './SchoolManager/TeacherManager',
//             },
//             {
//                 path: '/schoolmanager/commentmanager',
//                 name: 'commentmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/CommentManager',
//             },
//             {
//                 path: '/schoolmanager/subjectmanager',
//                 name: 'subjectmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/SubjectManager',
//             }
//         ],
//     },
//     {
//         component: './404',
//     }
// ]

// var authorityList = {

// }

// export var routesKey = JSON.parse(JSON.stringify(routes))
// routesKey.forEach((item, index) => {
//     // console.log(item)
//     item.key = index+1
// })

// export default routes

var routes = [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/systemmanager',
      name: 'manager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
    //   hideChildrenInMenu:getAuthority('/systemmanager',authArr),
      routes: [
        {
          path: '/systemmanager/rolemanager',
          name: 'role',
          icon: 'smile',
          component: './SystemManager/RoleManager',
          // authority: ['admin'],
        },
        {
          path: '/systemmanager/usermanager',
          name: 'usermanager',
          icon: 'smile',
          component: './SystemManager/UserManager',
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/schoolmanager',
      name: 'schoolmanager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/schoolmanager/classmanager',
          name: 'classmanager',
          icon: 'smile',
          component: './SchoolManager/ClassManager',
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/grademanager',
          name: 'grademanager',
          icon: 'smile',
          component: './SchoolManager/GradeManager',
          // authority: ['admin'],
        }
        ,
        {
          path: '/schoolmanager/studentmanager',
          name: 'studentmanager',
          icon: 'smile',
          component: './SchoolManager/StudentManager',
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/teachermanager',
          name: 'teachermanager',
          icon: 'smile',
          component: './SchoolManager/TeacherManager',
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/commentmanager',
          name: 'commentmanager',
          icon: 'smile',
          component: './SchoolManager/CommentManager',
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/subjectmanager',
          name: 'subjectmanager',
          icon: 'smile',
          component: './SchoolManager/SubjectManager',
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/searchmanager',
      name: 'searchmanager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/searchmanager/flowersearch',
          name: 'flowersearch',
          icon: 'smile',
          component: './SearchManager/FlowerSearch',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/classsearch',
          name: 'classsearch',
          icon: 'smile',
          component: './SearchManager/ClassSearch',
          // authority: ['admin'],
        }
        ,
        {
          path: '/searchmanager/withdrawsearch',
          name: 'withdrawsearch',
          icon: 'smile',
          component: './SearchManager/WithdrawSearch',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/transfersearch',
          name: 'transfersearch',
          icon: 'smile',
          component: './SearchManager/TransferSearch',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/consumptionsearch',
          name: 'consumptionsearch',
          icon: 'smile',
          component: './SearchManager/ConsumptionSearch',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/studentsearch',
          name: 'studentQR',
          icon: 'smile',
          component: './SearchManager/StudentQR',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/teachersearch',
          name: 'teacherQR',
          icon: 'smile',
          component: './SearchManager/TeacherQR',
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/checkbooksearch',
          name: 'checkbooksearch',
          icon: 'smile',
          component: './SearchManager/CheckbookSearch',
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/QRmanager',
      name: 'QRmanager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/QRmanager/QRCreate',
          name: 'QRCreate',
          icon: 'smile',
          component: './QRManager/QRCreate',
          // authority: ['admin'],
        },
        {
          path: '/QRmanager/QRDistribution',
          name: 'QRDistribution',
          icon: 'smile',
          component: './QRManager/QRDistribution',
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/shopmanager',
      name: 'shopmanager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/shopmanager/bankmanager',
          name: 'bankmanager',
          icon: 'smile',
          component: './ShopManager/BankManager',
          // authority: ['admin'],
        },
        {
          path: '/shopmanager/shoppermanager',
          name: 'shoppermanager',
          icon: 'smile',
          component: './ShopManager/ShopperManager',
          // authority: ['admin'],
        },
        {
          path: '/shopmanager/goodsmanager',
          name: 'goodsmanager',
          icon: 'smile',
          component: './ShopManager/GoodsManager',
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/logmanager',
      name: 'logmanager',
      icon: 'crown',
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/logmanager/backlog',
          name: 'backlog',
          icon: 'smile',
          component: './LogManager/BackLog',
          // authority: ['admin'],
        },
        {
          path: '/logmanager/banklog',
          name: 'banklog',
          icon: 'smile',
          component: './LogManager/BankLog',
          // authority: ['admin'],
        },
        {
          path: '/logmanager/shoplog',
          name: 'shoplog',
          icon: 'smile',
          component: './LogManager/ShopLog',
          // authority: ['admin'],
        },
        {
          path: '/logmanager/logsearch',
          name: 'logsearch',
          icon: 'smile',
          component: './LogManager/LogSearch',
          // authority: ['admin'],
        }
      ],
    },
    {
      component: './404',
    },
  ]


// 01 新增  02 详情 03 删除 04 查询 05 重置 06 重置密码 07 编辑 08 升年级 09 领用 010 回收

var authority = {
    '/systemmanager':[1, 101, 10101, 10102, 10103, 10106, 102, 10201, 10202, 10204, 10205], //系统管理
    '/systemmanager/rolemanager':[1, 101, 10101, 10102,],
    '/systemmanager/usermanager':[1, 102, 10201, 10202, 10204, 10205],
    '/schoolmanager':[2, 201, 20101, 20103, 20107, 20105, 20104, 202, 20201, 20203, 20207,20205, 20204, 20208,203, 20301, 20305, 20304, 20302, 204, 20401, 20405, 20404, 20402, 205, 20501, 20505, 20504, 20503, 20507,206, 20601, 20503, 20607],
    '/schoolmanager/classmanager':[2,201, 20101, 20103, 20107, 20105, 20104],
    '/schoolmanager/grademanager':[2,202, 20201, 20203, 20207, 20205, 20204, 20208],
    '/schoolmanager/studentmanager':[2,203, 20301, 20305, 20304, 20302],
    '/schoolmanager/teachermanager':[2,204, 20401, 20405, 20404, 20402],
    '/schoolmanager/commentmanager':[2,205, 20501, 20505, 20504, 20503, 20507],
    '/schoolmanager/subjectmanager':[2,206, 20601, 20503, 20607],
    '/searchmanager':[3, 301, 30102, 30104, 30105, 302,30202, 30204, 30205, 303, 30302, 30304, 30305, 304, 30402, 30404, 30405, 305, 30502, 30504, 30505, 306,30602, 30604, 30605, 307, 30702, 30704, 30705, 308, 30802, 30804, 30805],
    '/searchmanager/flowersearch':[3, 301, 30102, 30104, 30105],
    '/searchmanager/classsearch':[3, 302,30202, 30204, 30205],
    '/searchmanager/withdrawsearch':[3, 303, 30302, 30304, 30305],
    '/searchmanager/transfersearch':[3, 304, 30402, 30404, 30405],
    '/searchmanager/consumptionsearch':[3, 305, 30502, 30504, 30505],
    '/searchmanager/studentsearch':[3, 306,30602, 30604, 30605],
    '/searchmanager/teachersearch':[3, 307, 30702, 30704, 30705],
    '/searchmanager/checkbooksearch':[3, 308, 30802, 30804, 30805],
    '/QRmanager':[4, 401,40101, 40104, 40105,402,402010, 40209, 40204, 40205],
    '/QRmanager/QRCreate':[4, 401,40101, 40104, 40105],
    '/QRmanager/QRDistribution':[4, 402,402010, 40209, 40204, 40205],
    '/shopmanager':[5, 501,50101, 50104, 50105, 50103, 502,50201, 50204, 50205, 50203, 503,50301, 50307, 50303],
    '/shopmanager/bankmanager':[5, 501,50101, 50104, 50105, 50103],
    '/shopmanager/shoppermanager':[5, 502,50201, 50204, 50205, 50203],
    '/shopmanager/goodsmanager':[5, 503,50301, 50307, 50303],
    '/logmanager':[6, 601,60102, 60104, 60105,602, 60203, 60204, 60205, 603, 60303, 60304, 60305],
    '/logmanager/backlog':[6, 601,60102, 60104, 60105],
    '/logmanager/shoplog':[6, 602, 60203, 60204, 60205],
    '/logmanager/banklog':[6, 603, 60303, 60304, 60305]
}

var getAuthority = (pathname, authArr) => {
    var authArrs = authority[pathname]
    // console.log(authArrs)
        var bool = null
        for(var i = 0; i<authArr.length; i++){
            if(authArrs.indexOf(authArr[i]) == -1){
                bool = true
                // return
            }else{
                bool = false
                break
            }
        }
        // console.log(bool)
        return bool
}

// console.log(getAuthority('/systemmanager',[10102]))

export default getAuthority