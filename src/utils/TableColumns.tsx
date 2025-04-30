import { Button, Image, Space, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

const { Text } = Typography;

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  availabilityStatus: string;
}

export const columns: ColumnsType<Product> = [
  {
    title: "Image",
    dataIndex: "thumbnail",
    key: "thumbnail",
    responsive: ["xs", "sm"],
    render: (thumbnail: string) => (
      <Image
        src={thumbnail}
        alt="product"
        width={80}
        height={80}
        className="product-image"
        preview={false}
      />
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (title: string) => (
      <Text strong className="product-title">
        {title}
      </Text>
    ),
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    responsive: ["sm", "md", "lg", "xl"],
    render: (brand: string) => (
      <Tag className="product-brand" color="blue">
        {brand}
      </Tag>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (price: number) => <Text className="product-price">${price.toFixed(2)}</Text>,
  },
  {
    title: "Discount",
    dataIndex: "discountPercentage",
    key: "discountPercentage",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (discountPercentage: number) => (
      <Text className="product-discount">{discountPercentage}%</Text>
    ),
  },
  {
    title: "Availability",
    dataIndex: "availabilityStatus",
    key: "availability",
    responsive: ["md", "lg", "xl"],
    render: (availabilityStatus: string) => (
      <Text className="product-availability">{availabilityStatus}</Text>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (_: unknown, record: Product) => (
      <Space size="small">
        <Link to={`products/${record.id}`}>
          <Button type="primary" size="large">
            View
          </Button>
        </Link>
        <Link to={`products/edit/${record.id}`}>
          <Button type="default" size="large">
            Edit
          </Button>
        </Link>
      </Space>
    ),
  },
];