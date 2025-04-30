import { Table, Typography } from 'antd';
import { useState } from 'react';
import { useAllProductsQuery } from "../../redux/features/products/getAllProductsApi";
import '../../styles/ProductLists.css';
import { columns } from '../../utils/TableColumns';

const ProductLists = () => {
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 8,
        total: 0,
    });
    const { data, isLoading } = useAllProductsQuery({
        limit: pagination.pageSize,
        skip: (pagination.current - 1) * pagination.pageSize,
    });

    const handleTableChange = (pagination) => {
        setPagination({
            ...pagination,
            current: pagination.current,
        });
    };

    return (
        <div className="product-lists-container">
            <Typography.Title level={2} className="product-list-title">Products</Typography.Title>
            <Table
                columns={columns}
                dataSource={data?.products}
                rowKey={(record) => record.id}
                bordered
                loading={isLoading}
                pagination={{
                    ...pagination,
                    total: data?.products?.total || 0,
                    showSizeChanger: true,
                    responsive: true,
                }}
                onChange={handleTableChange}
                className="product-table"
                scroll={{ x: true }}
                size="middle"
            />
        </div>
    );
};

export default ProductLists;