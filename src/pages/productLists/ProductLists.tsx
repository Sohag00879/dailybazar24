import { Button, Image, Space, Table, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useAllProductsQuery } from "../../redux/features/products/getAllProductsApi";
import '../../styles/ProductLists.css';


const ProductLists = () => {
    const { data, isLoading } = useAllProductsQuery(undefined);
    console.log(data);
    const { Text } = Typography
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
                        className="product-image"
                    />
                );
            },
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (title) => (
                <Text strong className="product-title">{title}</Text>
            ),
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand) => (
                <Tag className="product-brand" color="blue">
                    {brand}
                </Tag>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => (
                <Text className="product-price">${price}</Text>
            ),
        },
        {
            title: 'Availability',
            dataIndex: 'availabilityStatus',
            key: 'availability',
            render: (availability) => (
                <Text className="product-availability">{availability}</Text>
            ),
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock) => (
                <Text className="product-stock">{stock}</Text>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Link to={`${record.id}`}>
                        <Button type="primary" size="small">View</Button>
                    </Link>
                    <Button type="default" size="small">Edit</Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="product-lists-container">
            <Table
                columns={columns}
                dataSource={data?.products}
                rowKey={(record) => record.id}
                bordered
                loading={isLoading}
                pagination={{ pageSize: 8 }}
                className="product-table"
            />
        </div>
    );
};

export default ProductLists;
