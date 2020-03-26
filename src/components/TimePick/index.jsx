import React, { Component } from 'react'
import { Form, DatePicker, TimePicker, Button } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

class index extends Component {

    handleSubmit = e => {
        e.preventDefault();
    
        this.props.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
    
          // Should format date value before submit.
          const rangeValue = fieldsValue['range-picker'];
          const rangeTimeValue = fieldsValue['range-time-picker'];
          const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [
              rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
              rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            ],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
          };
          console.log('Received values of form: ', values);
        });
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            };
            const config = {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
              };
        return (
            <div>
                {/* 角色管理 */}
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="DatePicker">
                    {getFieldDecorator('date-picker', config)(<DatePicker />)}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(index)
export default WrappedTimeRelatedForm