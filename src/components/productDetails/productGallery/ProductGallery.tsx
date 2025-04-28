import { BarcodeOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Image } from 'antd';
import { IProduct } from '../../../types/ProductTypes';

const ProductGallery = ({ product }: { product: IProduct }) => {
    const mainImage = product?.images[0] ?? 'https://via.placeholder.com/600x600?text=Product+Image';
    const qrCode = product?.meta?.qrCode;

    return (
        <Col xs={24} md={10}>
            <Badge.Ribbon
                text={product?.availabilityStatus}
                color={product?.stock < 10 ? 'red' : 'orange'}
                placement="start"
            >
                <div className="product-gallery-image-wrapper">
                    <Image
                        width="100%"
                        src={mainImage}
                        preview={{ src: mainImage }}
                        fallback="https://via.placeholder.com/600x600?text=Product+Image"
                        alt={product?.title}
                    />
                </div>
            </Badge.Ribbon>

            <div className="product-gallery-qr-button">
                <Button
                    type="link"
                    icon={<BarcodeOutlined />}
                    onClick={() => window.open(qrCode, '_blank')}
                    disabled={!qrCode}
                >
                    View QR Code
                </Button>
            </div>
        </Col>
    );
};

export default ProductGallery;
