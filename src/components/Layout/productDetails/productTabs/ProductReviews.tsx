
import { IProduct } from "../../../types/ProductTypes";
import ReviewSection from "../../../UI/ReviewSection";
import ReviewSummary from "../../../UI/ReviewSummary";


const ProductReviews = ({ product }: { product: IProduct }) => {
    return (

        <div style={{ padding: '16px' }}>
            <ReviewSummary rating={product.rating} reviews={product.reviews} product={product} />
            <ReviewSection reviews={product?.reviews} />

        </div>
    )
}

export default ProductReviews