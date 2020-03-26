import { router } from "umi"

var routes = [
    // {
    //   path: '/',
    //   component: '../layouts/BasicLayout',
    //   authority: ['admin', 'user'],
    //   routes: [
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
        path: '/otherpage',
        name: 'welcome',
        icon: 'smile',
        component: './OtherPage/index',
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        component: './Admin',
        authority: ['admin'],
        routes: [
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
            },
        ],
    },
    {
        path: '/manager',
        name: 'manager',
        icon: 'crown',
        routes: [
            {
                path: '/manager/rolemanager',
                name: 'role',
                icon: 'smile',
                component: './manager/roleManager',
            },
            {
                path: '/manager/usermanager',
                name: 'usermanager',
                icon: 'smile',
                component: './manager/userManager',
            }
        ],
    },
    {
        path: '/systemmanager',
        name: 'manager',
        icon: 'crown',
        routes: [
            {
                path: '/systemmanager/rolemanager',
                name: 'role',
                icon: 'smile',
                component: './SystemManager/RoleManager',
            },
            {
                path: '/systemmanager/usermanager',
                name: 'usermanager',
                icon: 'smile',
                component: './SystemManager/UserManager',
            }
        ],
    },
    {
        path: '/schoolmanager',
        name: 'schoolmanager',
        icon: 'crown',
        routes: [
            {
                path: '/schoolmanager/classmanager',
                name: 'classmanager',
                icon: 'smile',
                component: './SchoolManager/ClassManager',
            },
            {
                path: '/schoolmanager/grademanager',
                name: 'grademanager',
                icon: 'smile',
                component: './SchoolManager/GradeManager',
            }
            ,
            {
                path: '/schoolmanager/studentmanager',
                name: 'studentmanager',
                icon: 'smile',
                component: './SchoolManager/StudentManager',
            },
            {
                path: '/schoolmanager/teachermanager',
                name: 'teachermanager',
                icon: 'smile',
                component: './SchoolManager/TeacherManager',
            },
            {
                path: '/schoolmanager/commentmanager',
                name: 'commentmanager',
                icon: 'smile',
                component: './SchoolManager/CommentManager',
            },
            {
                path: '/schoolmanager/subjectmanager',
                name: 'subjectmanager',
                icon: 'smile',
                component: './SchoolManager/SubjectManager',
            }
        ],
    },
    {
        component: './404',
    }
]

export var routesKey = JSON.parse(JSON.stringify(routes))
routesKey.forEach((item, index) => {
    // console.log(item)
    item.key = index+1
})

export default routes