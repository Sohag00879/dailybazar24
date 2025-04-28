

import { Button, Image, Space, Table, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useAllProductsQuery } from "../../redux/features/products/getAllProductsApi";

const { Text } = Typography;

const ProductLists = () => {
    const { data, isLoading } = useAllProductsQuery(undefined);
    console.log(data)

    const columns = [
        {
            title: 'Image',
            dataIndex: 'images',
            key: 'images',
            render: (images) => {
                return (
                    <Image
                        src={images[0]}
                        alt="product"
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    />
                );
            }

        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (title) => (
                <Text strong style={{ fontSize: '16px' }}>{title}</Text>
            ),
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand) => (
                <Tag color="blue" style={{ fontSize: '14px', padding: '4px 8px' }}>
                    {brand}
                </Tag>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => (
                <Text style={{ color: '#52c41a', fontWeight: 'bold' }}>${price}</Text>
            ),
        },
        {
            title: 'Availability',
            dataIndex: 'availabilityStatus',
            key: 'availability',
            render: (availability) => (
                <Text style={{ color: 'black', fontWeight: 'bold' }}>{availability}</Text>
            ),
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock) => (
                <Text style={{ color: 'black', fontWeight: 'bold' }}>{stock}</Text>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Link to={`${record.id}`}><Button type="primary" size="small">View</Button></Link>
                    <Button type="default" size="small">Edit</Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Table
                columns={columns}
                dataSource={data?.products}
                rowKey={(record) => record.id}
                bordered
                loading={isLoading}
                pagination={{ pageSize: 8 }}
                style={{
                    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}
            />
        </div>
    );
};

export default ProductLists;
