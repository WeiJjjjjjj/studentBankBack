/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect} from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import { Icon, Result, Button } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { isAntDesignPro, getAuthorityFromRouter } from '@/utils/utils';
import logo from '../assets/logo.svg';
import getAuthoritys from '../utils/menu'

// const [menuData, setMenuData] = useState([]);

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

/**
 * use Authorized check all menu item
 */
const menuDataRender = menuList =>
  menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return Authorized.check(item.authority, localItem, null);
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <Icon type="github" />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

const footerRender = () => {
  if (!isAntDesignPro()) {
    return defaultFooterDom;
  }

  return (
    <>
      {defaultFooterDom}
      <div
        style={{
          padding: '0px 24px 24px',
          textAlign: 'center',
        }}
      >
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            width="82px"
            alt="netlify logo"
          />
        </a>
      </div>
    </>
  );
};

const BasicLayout = props => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  /**
   * constructor
   */

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const getAuthority = getAuthoritys

  const authArr= [10102,20503, 20607,60305, 50203,1,2,3,4,5,6]
  const menuData = [
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
      hideInMenu: JSON.parse(JSON.stringify(getAuthority('/systemmanager',authArr))) ,
      // hideInMenu: true,
      routes: [
        {
          path: '/systemmanager/rolemanager',
          name: 'role',
          icon: 'smile',
          component: './SystemManager/RoleManager',
          hideInMenu: JSON.parse(JSON.stringify(getAuthority('/systemmanager/rolemanager',authArr))),
          // authority: ['admin'],
        },
        {
          path: '/systemmanager/usermanager',
          name: 'usermanager',
          icon: 'smile',
          component: './SystemManager/UserManager',
          hideInMenu: getAuthority('/systemmanager/usermanager',authArr),
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/schoolmanager',
      name: 'schoolmanager',
      icon: 'crown',
      hideInMenu: getAuthority('/schoolmanager',authArr),
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/schoolmanager/classmanager',
          name: 'classmanager',
          icon: 'smile',
          component: './SchoolManager/ClassManager',
          hideInMenu: getAuthority('/schoolmanager/classmanager',authArr),
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/grademanager',
          name: 'grademanager',
          icon: 'smile',
          component: './SchoolManager/GradeManager',
          hideInMenu: getAuthority('/schoolmanager/grademanager',authArr),
          // authority: ['admin'],
        }
        ,
        {
          path: '/schoolmanager/studentmanager',
          name: 'studentmanager',
          icon: 'smile',
          component: './SchoolManager/StudentManager',
          hideInMenu: getAuthority('/schoolmanager/studentmanager',authArr),
          
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/teachermanager',
          name: 'teachermanager',
          icon: 'smile',
          component: './SchoolManager/TeacherManager',
          hideInMenu: getAuthority('/schoolmanager/teachermanager',authArr),
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/commentmanager',
          name: 'commentmanager',
          icon: 'smile',
          component: './SchoolManager/CommentManager',
          hideInMenu: getAuthority('/schoolmanager/commentmanager',authArr),
          // authority: ['admin'],
        },
        {
          path: '/schoolmanager/subjectmanager',
          name: 'subjectmanager',
          icon: 'smile',
          component: './SchoolManager/SubjectManager',
          hideInMenu: getAuthority('/schoolmanager/subjectmanager',authArr),
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/searchmanager',
      name: 'searchmanager',
      icon: 'crown',
      hideInMenu: getAuthority('/searchmanager',authArr),
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/searchmanager/flowersearch',
          name: 'flowersearch',
          icon: 'smile',
          component: './SearchManager/FlowerSearch',
          hideInMenu: getAuthority('/searchmanager/flowersearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/classsearch',
          name: 'classsearch',
          icon: 'smile',
          component: './SearchManager/ClassSearch',
          hideInMenu: getAuthority('/searchmanager/classsearch',authArr),
          // authority: ['admin'],
        }
        ,
        {
          path: '/searchmanager/withdrawsearch',
          name: 'withdrawsearch',
          icon: 'smile',
          component: './SearchManager/WithdrawSearch',
          hideInMenu: getAuthority('/searchmanager/withdrawsearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/transfersearch',
          name: 'transfersearch',
          icon: 'smile',
          component: './SearchManager/TransferSearch',
          hideInMenu: getAuthority('/searchmanager/transfersearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/consumptionsearch',
          name: 'consumptionsearch',
          icon: 'smile',
          component: './SearchManager/ConsumptionSearch',
          hideInMenu: getAuthority('/searchmanager/consumptionsearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/studentsearch',
          name: 'studentQR',
          icon: 'smile',
          component: './SearchManager/StudentQR',
          hideInMenu: getAuthority('/searchmanager/studentsearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/teachersearch',
          name: 'teacherQR',
          icon: 'smile',
          component: './SearchManager/TeacherQR',
          hideInMenu: getAuthority('/searchmanager/teachersearch',authArr),
          // authority: ['admin'],
        },
        {
          path: '/searchmanager/checkbooksearch',
          name: 'checkbooksearch',
          icon: 'smile',
          component: './SearchManager/CheckbookSearch',
          hideInMenu: getAuthority('/searchmanager/checkbooksearch',authArr),
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/QRmanager',
      name: 'QRmanager',
      icon: 'crown',
      hideInMenu: getAuthority('/QRmanager',authArr),
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/QRmanager/QRCreate',
          name: 'QRCreate',
          icon: 'smile',
          component: './QRManager/QRCreate',
          hideInMenu: getAuthority('/QRmanager/QRCreate',authArr),
          // authority: ['admin'],
        },
        {
          path: '/QRmanager/QRDistribution',
          name: 'QRDistribution',
          icon: 'smile',
          component: './QRManager/QRDistribution',
          hideInMenu: getAuthority('/QRmanager/QRDistribution',authArr),
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/shopmanager',
      name: 'shopmanager',
      icon: 'crown',
      hideInMenu: getAuthority('/shopmanager',authArr),
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/shopmanager/bankmanager',
          name: 'bankmanager',
          icon: 'smile',
          component: './ShopManager/BankManager',
          hideInMenu: getAuthority('/shopmanager/bankmanager',authArr),
          // authority: ['admin'],
        },
        {
          path: '/shopmanager/shoppermanager',
          name: 'shoppermanager',
          icon: 'smile',
          component: './ShopManager/ShopperManager',
          hideInMenu: getAuthority('/shopmanager/shoppermanager',authArr),
          // authority: ['admin'],
        },
        {
          path: '/shopmanager/goodsmanager',
          name: 'goodsmanager',
          icon: 'smile',
          component: './ShopManager/GoodsManager',
          hideInMenu: getAuthority('/shopmanager/goodsmanager',authArr),
          // authority: ['admin'],
        }
      ],
    },
    {
      path: '/logmanager',
      name: 'logmanager',
      icon: 'crown',
      hideInMenu: getAuthority('/logmanager',authArr),
      // component: './manager',
      // authority: ['admin'],
      routes: [
        {
          path: '/logmanager/backlog',
          name: 'backlog',
          icon: 'smile',
          component: './LogManager/BackLog',
          hideInMenu: getAuthority('/logmanager/backlog',authArr),
          // authority: ['admin'],
        },
        {
          path: '/logmanager/banklog',
          name: 'banklog',
          icon: 'smile',
          component: './LogManager/BankLog',
          hideInMenu: getAuthority('/logmanager/banklog',authArr),
          // authority: ['admin'],
        },
        {
          path: '/logmanager/shoplog',
          name: 'shoplog',
          icon: 'smile',
          component: './LogManager/ShopLog',
          hideInMenu: getAuthority('/logmanager/shoplog',authArr),
          // authority: ['admin'],
        },
        // {
        //   path: '/logmanager/logsearch',
        //   name: 'logsearch',
        //   icon: 'smile',
        //   component: './LogManager/LogSearch',
        //   hideInMenu: getAuthority('/logmanager/logsearch',authArr),
        //   // authority: ['admin'],
        // }
      ],
    },
    {
      component: './404',
    },
  ]

// 动态路由  在生命周期创建成功后可以利用model发送ajax请求数据
// const menuData = [
//           {
//             path: '/',
//             redirect: '/welcome',
//           },
//           {
//             path: '/welcome',
//             name: 'welcome',
//             icon: 'smile',
//             component: './Welcome',
//           },
//           {
//             path: '/admin',
//             name: 'admin',
//             icon: 'crown',
//             component: './Admin',
//             routes: [
//               {
//                 path: '/admin/sub-page',
//                 name: 'sub-page',
//                 icon: 'smile',
//                 component: './Welcome',
//               },
//             ],
//           },
//           {
//             path: '/manager',
//             name: 'manager',
//             icon: 'crown',
//             // hideInMenu: menuHasPermission('/manager/rolemanager'),
//             routes: [
//               {
//                 path: '/manager/rolemanager',
//                 name: 'role',
//                 icon: 'smile',
//                 hideInMenu: menuHasPermission('/manager/rolemanager'),
//                 component: './manager/roleManager',
//               },
//               {
//                 path: '/manager/usermanager',
//                 name: 'usermanager',
//                 icon: 'smile',
//                 component: './manager/userManager',
//               }
//             ],
//           },
//           {
//             path: '/systemmanager',
//             name: 'manager',
//             icon: 'crown',
//             routes: [
//               {
//                 path: '/systemmanager/rolemanager',
//                 name: 'role',
//                 icon: 'smile',
//                 component: './SystemManager/RoleManager',
//               },
//               {
//                 path: '/systemmanager/usermanager',
//                 name: 'usermanager',
//                 icon: 'smile',
//                 component: './SystemManager/UserManager',
//               }
//             ],
//           },
//           {
//             path: '/schoolmanager',
//             name: 'schoolmanager',
//             icon: 'crown',
//             routes: [
//               {
//                 path: '/schoolmanager/classmanager',
//                 name: 'classmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/ClassManager',
//               },
//               {
//                 path: '/schoolmanager/grademanager',
//                 name: 'grademanager',
//                 icon: 'smile',
//                 component: './SchoolManager/GradeManager',
//               }
//               ,
//               {
//                 path: '/schoolmanager/studentmanager',
//                 name: 'studentmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/StudentManager',
//               },
//               {
//                 path: '/schoolmanager/teachermanager',
//                 name: 'teachermanager',
//                 icon: 'smile',
//                 component: './SchoolManager/TeacherManager',
//               },
//               {
//                 path: '/schoolmanager/commentmanager',
//                 name: 'commentmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/CommentManager',
//               },
//               {
//                 path: '/schoolmanager/subjectmanager',
//                 name: 'subjectmanager',
//                 icon: 'smile',
//                 component: './SchoolManager/SubjectManager',
//               }
//             ],
//           },
//           {
//             component: './404',
//           },
//       {
//         component: './404',
//       },
//   {
//     component: './404',
//   },
// ]

  // useEffect(() => {
  //   // 这里是一个演示用法
  //   // 真实项目中建议使用 dva dispatch 或者 umi-request
  //   // fetch('/api/example.json')
  //   //   .then(response => response.json())
  //   //   .then(data => {
  //   //     setMenuData(data || []);
  //   //   });

  //     setMenuData(data || []);

  // }, []);
  /**
   * init variables
   */
 
  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  return (
    <ProLayout

    menuDataRender={() => menuData}

      logo={logo}
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      onCollapse={handleMenuCollapse}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({
            id: 'menu.home',
            defaultMessage: 'Home',
          }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={footerRender}
      // menuDataRender={menuDataRender}
      formatMessage={formatMessage}
      rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
