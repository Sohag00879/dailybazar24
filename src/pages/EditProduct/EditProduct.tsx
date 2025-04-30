import { useParams } from 'react-router-dom';
import ProductEditForm from '../../components/UI/ProductEditForm';
import { useAllCategoriesQuery } from '../../redux/features/categories/getAllCategoriesApi';
import { useSingleProductQuery } from '../../redux/features/products/getSingleProductApi';

const EditProduct = () => {
    const { productId } = useParams()
    console.log(productId)
    const { data, isLoading } = useSingleProductQuery(productId);
    const { data: categories } = useAllCategoriesQuery(undefined)
    return (
        <>
            <ProductEditForm productData={data} categoriesData={categories} />
        </>
    )
}

export default EditProduct