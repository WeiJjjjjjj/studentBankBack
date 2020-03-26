export default {
    'POST /api/manager/getInfor': (req, res) => {
        // const {username, password} = req.body
        // if(username == 'admin' && password == 'admin'){
        //     res.send({
        //         flag : 1,
        //         msg: '登录成功'
        //     })
        // }else{
        //     res.send({
        //         flag : 2,
        //         msg: '登录失败'
        //     })
        // }
        res.send({
            flag:1,
            data:[
                {
                    key: '1',
                    grade:'二年级',
                    startTime:'2020-01-19',
                    endTime:'2020-02-19',
                    class:'三班',
                    totle:30,
                    proportion:'2.4%'
                  },
                  {
                      key: '2',
                      grade:'五年级',
                      startTime:'2020-01-19',
                      endTime:'2020-02-19',
                      class:'三班',
                      totle:36,
                      proportion:'2.4%'
                    },
                    {
                      key: '3',
                      grade:'三年级',
                      startTime:'2020-01-19',
                      endTime:'2020-02-19',
                      class:'三班',
                      totle:33,
                      proportion:'8.4%'
                    },
                    {
                      key: '4',
                      grade:'二年级',
                      startTime:'2019-01-19',
                      endTime:'2020-01-19',
                      class:'四班',
                      totle:40,
                      proportion:'2.5%'
                    }
            ],
            columns:[
                {
                    title: '年纪',
                    dataIndex: 'grade',
                    // defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                },
                {
                  title: '起始时间',
                  dataIndex: 'startTime',
                //   defaultSortOrder: 'descend',
                //   sorter: (a, b) => a.age - b.age,
                },
                {
                    title: '终止时间',
                    dataIndex: 'endTime',
                    // defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                },
                {
                    title: '班级',
                    dataIndex: 'class',
                    // defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                },
                {
                    title: '总数',
                    dataIndex: 'totle',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.totle - b.totle,
                },
                {
                    title: '占比',
                    dataIndex: 'proportion',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.proportion - b.proportion,
                },
                // {
                //     title: '操作',
                //     dataIndex: 'operation',
                //     defaultSortOrder: 'descend',
                //     sorter: (a, b) => a.age - b.age,
                //     render:(text, record) => 
                //         // state.data.length >= 1 ? (
                //             <a onClick={() => this.look(record)}>Delete</a>
                //         //   ) : null,
                    
                // },
            ]
        })
    }
}