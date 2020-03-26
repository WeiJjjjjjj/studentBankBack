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

// 动态路由  在生命周期创建成功后可以利用model发送ajax请求数据
const menuData = [
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/login',
  //     },
  //   ],
  // },
  // {
  //   path:'/login',
  //   name:'login',
  //   component:'./Login',
  //   icon:'smile'
  // },
  // // {
  //   path: '/',
  //   name:'denglu',
  //   component: '../layouts/SecurityLayout',
    // routes: [
      // {
      //   path: '/',
      //   component: '../layouts/BasicLayout',
      //   // authority: ['admin', 'user'],
      //   name:'login',
        // routes: [
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
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            // authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                // authority: ['admin'],
              },
            ],
          },
          {
            path: '/manager',
            name: 'manager',
            icon: 'crown',
            // component: './manager',
            // authority: ['admin'],
            routes: [
              {
                path: '/manager/rolemanager',
                name: 'role',
                icon: 'smile',
                component: './manager/roleManager',
                // authority: ['admin'],
              },
              {
                path: '/manager/usermanager',
                name: 'usermanager',
                icon: 'smile',
                component: './manager/userManager',
                // authority: ['admin'],
              }
            ],
          },
          {
            path: '/systemmanager',
            name: 'manager',
            icon: 'crown',
            // component: './manager',
            // authority: ['admin'],
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
          // {
          //   name: 'manager',
          //   icon: 'smile',
          //   path: '/home/emptypage',
          //   component: './Home/EmptyPageTwo',
          // },
          // {
          //   path: '/home',
          //   name: 'home',
          //   icon: 'crown', 
          //   component: './Home',
          //   authority: ['admin'],
          //   routes: [
          //     {
          //       name: '空白页面',
          //       icon: 'smile',
          //       path: '/home/emptypage',
          //       component: './Home',
          //     },
          //   ],
          // },
          {
            component: './404',
          },
        // ],
      // },
      {
        component: './404',
      },
    // ],
  // },
  {
    component: './404',
  },
]

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
