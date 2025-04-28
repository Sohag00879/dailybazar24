import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Row, Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import ProductGallery from '../../components/Layout/productDetails/productGallery/ProductGallery';
import ProductInfo from '../../components/Layout/productDetails/productInfo/ProductInfo';
import ProductDescription from '../../components/Layout/productDetails/productTabs/ProductDescription';
import ProductReviews from '../../components/Layout/productDetails/productTabs/ProductReviews';
import Specification from '../../components/Layout/productDetails/productTabs/Specification';
import { useSingleProductQuery } from '../../redux/features/products/getSingleProductApi';
const { TabPane } = Tabs;


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
                    <ProductGallery product={product} />
                    <ProductInfo product={product} />
                </Row>
                <Tabs defaultActiveKey="1" style={{ marginTop: '32px' }}>
                    <TabPane tab="Description" key="1">
                        <ProductDescription description={product?.description} />
                    </TabPane>
                    <TabPane tab="Specifications" key="2">
                        <Specification product={product} />
                    </TabPane>
                    <TabPane tab={`Reviews (${product?.reviews?.length})`} key="3">
                        <ProductReviews product={product} />
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    );
};

export default ProductDetails;

