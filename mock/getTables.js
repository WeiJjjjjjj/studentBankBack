export default {
    'POST /api/manager/getTables': (req, res) => {
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
                    height: '178cm',
                    proportion:'2.4%'
                  },
                  {
                      key: '2',
                      grade:'五年级',
                      startTime:'2020-01-19',
                      endTime:'2020-02-19',
                      class:'三班',
                      totle:36,
                      proportion:'2.4%',
                      height: '178cm',
                    },
                    {
                      key: '3',
                      grade:'三年级',
                      startTime:'2020-01-19',
                      endTime:'2020-02-19',
                      class:'三班',
                      totle:33,
                      height: '178cm',
                      proportion:'8.4%'
                    },
                    {
                      key: '4',
                      grade:'二年级',
                      startTime:'2019-01-19',
                      endTime:'2020-01-19',
                      class:'四班',
                      totle:40,
                      height: '178cm',
                      proportion:'2.5%'
                    },
                    {
                        key: '5',
                        grade:'二年级',
                        startTime:'2019-01-19',
                        endTime:'2020-01-19',
                        class:'四班',
                        totle:40,
                        proportion:'2.5%',
                        height: '178cm'
                      },
                      {
                        key: '6',
                        grade:'二年级',
                        startTime:'2019-01-19',
                        endTime:'2020-01-19',
                        class:'四班',
                        totle:40,
                        proportion:'2.5%',
                        height: '178cm'
                      },
                      {
                        key: '7',
                        grade:'二年级',
                        startTime:'2019-01-19',
                        endTime:'2020-01-19',
                        class:'四班',
                        totle:40,
                        proportion:'2.5%',
                        height: '178cm'
                      },
                      {
                        key: '8',
                        grade:'二年级',
                        startTime:'2019-01-19',
                        endTime:'2020-01-19',
                        class:'四班',
                        totle:40,
                        proportion:'2.5%',
                        height: '178cm'
                      },
                      {
                        key: '9',
                        grade:'二年级',
                        startTime:'2019-01-19',
                        endTime:'2020-01-19',
                        class:'四班',
                        totle:40,
                        proportion:'2.5%',
                        height: '178cm'
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
                  title: '身高',
                  dataIndex: 'height',
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
                }
            ]
        })
    }
}