import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    HeartOutlined,
    SafetyCertificateOutlined,
    ShareAltOutlined,
    ShoppingCartOutlined,
    StockOutlined,
    TagOutlined,
} from '@ant-design/icons';
import { Button, Col, Divider, Rate, Space, Tag, Typography } from 'antd';
import React from 'react';
import '../../../../styles/ProductInfo.css';
import { IProduct } from '../../../../types/ProductTypes';

const { Text, Title } = Typography;

interface ProductInfoProps {
    product: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <Col xs={24} md={14} className="product-info">
            <div className="product-info-tags">
                <Tag className="tag-brand" icon={<TagOutlined />}>
                    {product.brand}
                </Tag>
                <Tag className="tag-category">{product.category}</Tag>
                {product.tags.map((tag) => (
                    <Tag key={tag} className="tag-item">
                        {tag}
                    </Tag>
                ))}
            </div>

            <Title level={2} className="product-info-title">
                {product.title}
            </Title>

            <div className="product-info-rating">
                <Rate disabled allowHalf value={product.rating} className="rating-stars" />
                <Text className="rating-value">{product.rating.toFixed(1)}</Text>
                <Text type="secondary" className="rating-count">
                    ({product.reviews.length} reviews)
                </Text>
            </div>

            <div className="product-info-price">
                <Text strong className="current-price">
                    ${product.price}
                </Text>
                {product.discountPercentage > 0 && (
                    <Tag className="discount-tag">-{product.discountPercentage}%</Tag>
                )}
            </div>

            <div className="product-info-stock">
                <Space size="middle" className='prouct-info-stock-items'>
                    <Tag
                        className="stock-tag"
                        icon={<StockOutlined />}
                        color={product.stock < 10 ? 'red' : 'green'}
                    >
                        {product.stock} in stock
                    </Tag>
                    <Tag className="sku-tag" icon={<CheckCircleOutlined />}>
                        SKU: {product.sku}
                    </Tag>
                    <Tag className="moq-tag" icon={<ClockCircleOutlined />}>
                        Min. order: {product.minimumOrderQuantity}
                    </Tag>
                </Space>
            </div>

            <div className="product-info-description">
                <Title level={5}>Product Description</Title>
                <Text>{product.description}</Text>
            </div>

            <Divider />

            <Space size="middle" className="product-info-actions">
                <Button
                    type="primary"
                    size="large"
                    icon={<ShoppingCartOutlined />}
                    disabled={product.stock === 0}
                >
                    Add to Cart
                </Button>
                <Button size="large" icon={<HeartOutlined />}>
                    Wishlist
                </Button>
                <Button size="large" icon={<ShareAltOutlined />}>
                    Share
                </Button>
            </Space>

            <div className="product-info-extra">
                <Space direction="vertical" size="small">
                    <Space className="extra-item">
                        <SafetyCertificateOutlined className="extra-icon" />
                        <Text strong>{product.warrantyInformation}</Text>
                    </Space>
                    <Space className="extra-item">
                        <ClockCircleOutlined className="extra-icon" />
                        <Text strong>{product.returnPolicy}</Text>
                    </Space>
                    <Space className="extra-item">
                        <CheckCircleOutlined className="extra-icon" />
                        <Text strong>{product.shippingInformation}</Text>
                    </Space>
                </Space>
            </div>
        </Col>
    );
};

export default ProductInfo;