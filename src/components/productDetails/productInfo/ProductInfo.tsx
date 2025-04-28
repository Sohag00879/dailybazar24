import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    HeartOutlined,
    SafetyCertificateOutlined,
    ShareAltOutlined,
    ShoppingCartOutlined,
    StockOutlined,
    TagOutlined
} from '@ant-design/icons';
import { Button, Col, Divider, Flex, Rate, Space, Tag, Typography } from "antd";
import { IProduct } from '../../../types/ProductTypes';
const { Text, Title } = Typography;
const ProductInfo = ({ product }: { product: IProduct }) => {
    // const originalPrice = product?.price / (1 - product?.discountPercentage / 100);
    // const discountAmount = originalPrice - product?.price;
    return (
        <Col xs={24} md={14}>
            <div style={{ marginBottom: '16px' }}>
                <Tag color="purple" icon={<TagOutlined />}>{product?.brand}</Tag>
                <Tag color="blue">{product?.category}</Tag>
                {product?.tags.map(tag => (
                    <Tag >{tag}</Tag>
                ))}
            </div>

            <Title level={2} style={{ marginBottom: '8px' }}>{product?.title}</Title>

            <div style={{ marginBottom: '16px' }}>
                <Rate
                    disabled
                    allowHalf
                    value={product?.rating}
                    style={{ color: '#faad14', fontSize: 20 }}
                />
                <Text style={{ marginLeft: 8 }}>{product?.rating?.toFixed(1)}</Text>

                <Text type="secondary">({product?.reviews?.length} reviews)</Text>
            </div>


            <Flex gap="small" align="center">
                <Text strong style={{ fontSize: '24px', color: '#52c41a' }}>
                    ${product?.price}
                </Text>
                {product?.discountPercentage > 0 && (
                    <Tag color="red">-{product?.discountPercentage}%</Tag>
                )}
            </Flex>

            <div style={{ marginBottom: '24px' }}>
                <Space size="middle">
                    <Tag icon={<StockOutlined />} color={product?.stock < 10 ? 'red' : 'green'}>
                        {product?.stock} in stock
                    </Tag>
                    <Tag icon={<CheckCircleOutlined />} color="blue">
                        SKU: {product?.sku}
                    </Tag>
                    <Tag icon={<ClockCircleOutlined />} color="orange">
                        Min. order: {product?.minimumOrderQuantity}
                    </Tag>
                </Space>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <Title level={5}>Product Description</Title>
                <Text>{product?.description}</Text>
            </div>

            <Divider />

            <Space size="middle" style={{ marginBottom: '24px' }}>
                <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    disabled={product?.stock === 0}
                >
                    Add to Cart
                </Button>
                <Button
                    size="large"
                    icon={<HeartOutlined />}
                >
                    Wishlist
                </Button>
                <Button
                    size="large"
                    icon={<ShareAltOutlined />}
                >
                    Share
                </Button>
            </Space>

            <div style={{ background: '#f6f6f6', padding: '12px', borderRadius: '4px' }}>
                <Space direction="vertical" size="small">
                    <Space>
                        <SafetyCertificateOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                        <Text strong>{product?.warrantyInformation}</Text>
                    </Space>
                    <Space>
                        <ClockCircleOutlined style={{ color: '#faad14', fontSize: '20px' }} />
                        <Text strong>{product?.returnPolicy}</Text>
                    </Space>
                    <Space>
                        <CheckCircleOutlined style={{ color: '#1890ff', fontSize: '20px' }} />
                        <Text strong>{product?.shippingInformation}</Text>
                    </Space>
                </Space>
            </div>
        </Col>
    )
}

export default ProductInfo