export default {
    'POST /api/schoolmanager/subjectManagerList': (req, res) => {
        res.send({
            flag:1,
            data:[
                {
                    key:1,
                    order:1,
                    subjectName:'语文',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                },
                {
                    key:2,
                    order:1,
                    subjectName:'数学',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                },{
                    key:3,
                    order:1,
                    subjectName:'英文',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                },
                {
                    key:4,
                    order:1,
                    subjectName:'历史',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                },
                {
                    key:5,
                    order:1,
                    subjectName:'地理',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                },
                {
                    key:6,
                    order:1,
                    subjectName:'科学',
                    subjectIcon:'2222',
                    createTime:'2020-10-2'
                }
            ],
            columns:[
                {
                    title: '序号',
                    dataIndex: 'order',
                },
                {
                  title: '学科名称',
                  dataIndex: 'subjectName',
              },
                {
                  title: '学科图标',
                  dataIndex: 'subjectIcon',
                //   defaultSortOrder: 'descend',
                //   sorter: (a, b) => a.age - b.age,
                },
                {
                    title: '创建时间',
                    dataIndex: 'createTime',
                    // defaultSortOrder: 'descend',
                    // sorter: (a, b) => a.age - b.age,
                }
            ]
        })
    }
}