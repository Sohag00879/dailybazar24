import { Typography } from "antd";

const { Text, Title } = Typography;

const ProductDescription = ({ description }: { description: string }) => {
    return (
        <div style={{ padding: '16px' }}>
            <Title level={4}>Detailed Description</Title>
            <Text>{description}</Text>

            <Title level={4} style={{ marginTop: '24px' }}>Features</Title>
            <ul>
                <li>Volumizing and lengthening effects</li>
                <li>Long-lasting formula</li>
                <li>Cruelty-free</li>
                <li>Dramatic lash look</li>
            </ul>
        </div>
    )
}

export default ProductDescription