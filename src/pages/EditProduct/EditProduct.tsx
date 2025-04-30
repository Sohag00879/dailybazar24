import { useParams } from 'react-router-dom';
import Loader from '../../components/UI/Loader';
import ProductEditForm from '../../components/UI/ProductEditForm';
import ProductNotFound from '../../components/UI/ProductNotFound';
import { useAllCategoriesQuery } from '../../redux/features/categories/getAllCategoriesApi';
import { useSingleProductQuery } from '../../redux/features/products/getSingleProductApi';

const EditProduct = () => {
    const { productId } = useParams()
    const { data: product, isError, isLoading: isProductLoading } = useSingleProductQuery(productId);
    const { data: categories, isLoading: isCategoryLoading } = useAllCategoriesQuery(undefined);

    if (isProductLoading || isCategoryLoading) {
        return <Loader />
    }

    if (isError || !product) {
        return <ProductNotFound />
    }

    return (
        <>
            <ProductEditForm productData={product} categoriesData={categories} />
        </>
    )
}

export default EditProduct