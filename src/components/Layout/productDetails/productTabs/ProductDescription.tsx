import { Typography } from "antd";

const { Text, Title } = Typography;

const ProductDescription = ({ description }: { description: string }) => {
    return (
        <div style={{ padding: '16px' }}>
            <Title level={4}>Detailed Description</Title>
            <Text>{description}</Text>
        </div>
    )
}

export default ProductDescription