
import "./lemon-login.less"

import React from "react";

import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, CloudServerOutlined } from '@ant-design/icons';

class LemonLogin extends React.Component {
    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className="login_head_bg"></div>
                <div className="login_page">
                    <div className="login_form_wrap">
                        <h3 className="login_form_head">登录</h3>
                        <p className="login_form_lead">请输入用户名和密码进行登录</p>
                        <Form>
                            <Form.Item name="server">
                                <Input type="text" size="large" placeholder="您的服务器" prefix={<CloudServerOutlined />} />
                            </Form.Item>
                            <Form.Item name="user">
                                <Input type="text" size="large" placeholder="您的用户名" prefix={<UserOutlined />} />
                            </Form.Item>
                            <Form.Item name="password">
                                <Input type="password" size="large" placeholder="您的密码" prefix={<LockOutlined />} />
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col span={12}>
                                        <div className="loginBtn">
                                            <Button type="primary" onClick={this.onLogin}> 登录 </Button>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="loginBtn">
                                            <Button onClick={this.onRegister}> 注册 </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form >
                    </div >
                </div >
            </div >
        )
    }
    onLogin() {
        
    }

    onRegister() {

    }
}

export default LemonLogin;