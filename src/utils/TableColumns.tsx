import { Button, Image, Space, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Text } = Typography;
export const columns = [
  {
    title: "Image",
    dataIndex: "thumbnail",
    key: "thumbnail",
    responsive: ["xs", "sm"],
    render: (thumbnail) => (
      <Image
        src={thumbnail}
        alt="product"
        width={80}
        height={80}
        className="product-image"
      />
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (title) => (
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
    render: (brand) => (
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
    render: (price) => <Text className="product-price">${price}</Text>,
  },
  {
    title: "Discount",
    dataIndex: "discountPercentage",
    key: "discountPercentage",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (discountPercentage) => <Text className="product-price">${discountPercentage}</Text>,
  },
  {
    title: "Availability",
    dataIndex: "availabilityStatus",
    key: "availability",
    responsive: ["md", "lg", "xl"],
    render: (availability) => (
      <Text className="product-availability">{availability}</Text>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (_, record) => (
      <Space size="small">
        <Link to={`products/${record.id}`}>
          <Button type="primary" size="medium">
            View
          </Button>
        </Link>
        <Link to={`products/edit/${record.id}`}>
          <Button type="default" size="medium">
            Edit
          </Button>
        </Link>
      </Space>
    ),
  },
];
