import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    SafetyCertificateOutlined,
    StockOutlined,
    TagOutlined
} from '@ant-design/icons';
import { Col, Divider, Rate, Space, Tag, Typography } from 'antd';
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
                {product.discountPercentage > 0 ? (
                    <>
                        <Text
                            strong
                            delete
                            className="original-price"
                            style={{ color: '#999', fontSize: '16px' }}
                        >
                            ${product.price.toFixed(2)}
                        </Text>
                        <Text
                            strong
                            className="discounted-price"
                            style={{ marginLeft: '8px', color: '#f5222d', fontSize: '18px' }}
                        >
                            ${(
                                product.price -
                                (product.price * product.discountPercentage) / 100
                            ).toFixed(2)}
                        </Text>
                    </>
                ) : (
                    <Text
                        strong
                        className="current-price"
                        style={{ color: '#000', fontSize: '18px' }}
                    >
                        ${product.price.toFixed(2)}
                    </Text>
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