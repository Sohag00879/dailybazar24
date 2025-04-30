
import { FrownOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
const ProductNotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            padding: '24px'
        }}>
            <Result
                icon={<FrownOutlined style={{ fontSize: '48px', color: '#ff4d4f' }} />}
                title="Product Not Found"
                subTitle="We couldn't find the product you're looking for."
                extra={[
                    <Button
                        type="primary"
                        key="home"
                        onClick={() => navigate('/')}
                        style={{ marginRight: '8px' }}
                    >
                        Back to Home
                    </Button>,
                    <Button
                        key="products"
                        onClick={() => navigate('/')}
                    >
                        Browse All Products
                    </Button>
                ]}
                style={{ maxWidth: '600px' }}
            />
        </div>
    )
}

export default ProductNotFound