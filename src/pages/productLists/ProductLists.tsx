import { Table, Typography } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import { useAllProductsQuery } from "../../redux/features/products/getAllProductsApi";
import '../../styles/ProductLists.css';
import { columns } from '../../utils/TableColumns';

const ProductLists = () => {
    const [pagination, setPagination] = useState<TablePaginationConfig>({
        current: 1,
        pageSize: 8,
        total: 0,
        showSizeChanger: true,
        responsive: true,
    });

    const { data, isLoading } = useAllProductsQuery({
        limit: pagination.pageSize || 8,
        skip: ((pagination.current || 1) - 1) * (pagination.pageSize || 8),
    });

    const handleTableChange = (
        newPagination: TablePaginationConfig,
    ) => {
        setPagination({
            ...pagination,
            current: newPagination.current,
            pageSize: newPagination.pageSize,
        });
    };

    return (
        <div className="product-lists-container">
            <Typography.Title level={2} className="product-list-title">
                Products
            </Typography.Title>
            <Table
                columns={columns}
                dataSource={data?.products}
                rowKey={(record) => record.id}
                bordered
                loading={isLoading}
                pagination={{
                    ...pagination,
                    total: data?.products?.total || 0,
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