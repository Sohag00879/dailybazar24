import {
    CreditCardOutlined,
    EnvironmentOutlined,
    FacebookOutlined,
    GiftOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    MailOutlined,
    PhoneOutlined,
    SafetyCertificateOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from '@ant-design/icons';
import { Button, Col, Divider, Layout, Row, Space, Typography } from 'antd';
import '../../styles/Footer.css';

const { Footer } = Layout;
const { Text, Link, Title } = Typography;

const AppFooter = () => {
    return (
        <Footer className="app-footer">
            <div className="footer-container">
                <Row gutter={[24, 24]} justify="space-between">
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Daily Bazaar24</Title>
                        <Text className="footer-text">
                            Your one-stop destination for all shopping needs. Quality products at affordable prices.
                        </Text>
                        <Space size="middle" className="footer-social">
                            <Button type="text" icon={<FacebookOutlined />} />
                            <Button type="text" icon={<TwitterOutlined />} />
                            <Button type="text" icon={<InstagramOutlined />} />
                            <Button type="text" icon={<YoutubeOutlined />} />
                            <Button type="text" icon={<LinkedinOutlined />} />
                        </Space>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Quick Links</Title>
                        <div className="footer-links">
                            <Link href="/">Home</Link>
                            <Link href="/products">Products</Link>
                            <Link href="/categories">Categories</Link>
                            <Link href="/deals">Today's Deals</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Customer Service</Title>
                        <div className="footer-links">
                            <Link href="/faq">FAQ</Link>
                            <Link href="/shipping">Shipping Policy</Link>
                            <Link href="/returns">Return Policy</Link>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms & Conditions</Link>
                            <Link href="/track-order">Track Order</Link>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Contact Us</Title>
                        <div className="footer-contact">
                            <Space direction="vertical" size="small">
                                <Text><EnvironmentOutlined /> 123 Main Street, Dhaka, Bangladesh</Text>
                                <Text><PhoneOutlined /> +1 (234) 567-8900</Text>
                                <Text><MailOutlined /> support@DailyBazaar24.com</Text>
                            </Space>
                        </div>
                    </Col>
                </Row>

                <Divider className="footer-divider" />

                <Row justify="space-between" align="middle">
                    <Col xs={24} sm={12} md={6}>

                        <Space size="middle" className="footer-bottom-text">
                            <Text className="white-text"><GiftOutlined /> 30-Day Return</Text>
                            <Text className="white-text"><SafetyCertificateOutlined /> Secure Payment</Text>
                            <Text className="white-text"><CreditCardOutlined /> Multiple Payment Options</Text>
                        </Space>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <Text className="footer-copyright white-text">
                            © {new Date().getFullYear()} DailyBazaar. All rights reserved.
                        </Text>
                    </Col>
                </Row>

            </div>
        </Footer>
    );
};

export default AppFooter;