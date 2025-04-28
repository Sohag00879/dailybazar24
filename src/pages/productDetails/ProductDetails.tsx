import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Row } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import ProductGallery from '../../components/productDetails/productGallery/ProductGallery';
import ProductInfo from '../../components/productDetails/productInfo/ProductInfo';
import { useSingleProductQuery } from '../../redux/features/products/getSingleProductApi';


interface ProductDetailsParams {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ProductDetailsParams>();
    const { data: product, isLoading, isError } = useSingleProductQuery(productId);
    console.log(product)
    const navigate = useNavigate();
    if (!productId) {
        return <h1>Invalid product ID!</h1>;
    }

    if (isLoading) {
        return <p>Loading product…</p>;
    }
    if (isError || !product) {
        return <h1>No Product Found!</h1>;
    }

    return (
        <div
            className="product-details-page"
            style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}
        >
            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                style={{ marginBottom: '16px' }}
                onClick={() => navigate(-1)}
            >
                Back to Products
            </Button>

            <Card bordered={false}>
                <Row gutter={[32, 32]}>
                    {/* TypeScript knows `product` is a `Product` here */}
                    <ProductGallery product={product} />
                    <ProductInfo product={product} />
                </Row>
            </Card>
        </div>
    );
};

export default ProductDetails;
