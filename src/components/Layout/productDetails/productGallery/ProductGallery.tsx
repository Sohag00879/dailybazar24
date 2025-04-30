import { BarcodeOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Image } from 'antd';

const ProductGallery = ({ product }) => {
    const mainImage = product?.images?.[0] || 'https://via.placeholder.com/600x600?text=Product+Image';
    const qrCode = product?.meta?.qrCode || '#';
    return (
        <Col xs={24} md={10}>
            <Badge.Ribbon
                text={product?.availabilityStatus || 'Loading...'}
                color={product?.stock < 10 ? 'red' : 'orange'}
                placement="start"
            >
                <div style={{ marginBottom: '16px' }}>
                    <Image
                        width="100%"
                        src={mainImage}
                        preview={{
                            src: mainImage
                        }}
                        fallback="https://via.placeholder.com/600x600?text=Product+Image"
                        alt={product?.title || 'Product image'}
                    />
                </div>
            </Badge.Ribbon>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Button
                    type="link"
                    icon={<BarcodeOutlined />}
                    onClick={() => window.open(qrCode, '_blank')}
                    disabled={!product?.meta?.qrCode}
                >
                    View QR Code
                </Button>
            </div>
        </Col>
    );
};

export default ProductGallery;