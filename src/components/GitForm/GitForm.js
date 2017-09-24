import React from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './GitForm.css';

const FormItem = Form.Item;

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

// Form props
const FormUser = ({ 
    onSubmit, 
    setFieldValueFirstName, 
    onChangeFirstName, 
    setFieldValueBirth, 
    onChangeBirth, 
    setFieldValueLastName, 
    onChangeLastName,
    setFieldValueEmail, 
    onChangeEmail,
    setFieldValueDocument, 
    onChangeDocument,
    setFieldValueUser, 
    onChangeUser
}) => (

    // User's Form
    <Form onSubmit={onSubmit} className="ant-advanced-search-form">
    
        <Row gutter={20}>
            <Col span={8}>
                <FormItem label="FirstName" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueFirstName} 
                        onChange={onChangeFirstName} 
                        placeholder="Estefany"
                    />  
                </FormItem>
                <FormItem label="Birth" {...formItemLayout}>  
                    <DatePicker 
                        style={{width:"207px"}} 
                        setFieldValue={setFieldValueBirth}
                        onChange={onChangeBirth}
                        placeholder="1994-02-01"
                    />
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="LastName" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueLastName} 
                        onChange={onChangeLastName} 
                        placeholder="Aguilar"
                    />  
                </FormItem>
                <FormItem label="Email" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueEmail} 
                        onChange={onChangeEmail} 
                        placeholder="example@seven4n.com"
                    />  
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="Document" {...formItemLayout}>             
                    <Input 
                        type="number" 
                        setFieldValue={setFieldValueDocument} 
                        onChange={onChangeDocument} 
                        placeholder="123456789"
                    />  
                </FormItem>
                <FormItem label="User" {...formItemLayout}>             
                    <Input 
                        type="text" 
                        setFieldValue={setFieldValueUser} 
                        onChange={onChangeUser} 
                        placeholder="teffcode"
                    />  
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit" style={{width:'100px'}}>
                    Save
                </Button>
            </Col>
        </Row>

    </Form>
);

export default FormUser;