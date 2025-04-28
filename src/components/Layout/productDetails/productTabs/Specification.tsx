import { Descriptions } from 'antd';
import { IProduct } from '../../../types/ProductTypes';

const Specification = ({ product }: { product: IProduct }) => {
    return (

        <Descriptions bordered column={1} style={{ margin: '16px' }}>
            <Descriptions.Item label="Brand">{product?.brand}</Descriptions.Item>
            <Descriptions.Item label="Category">{product?.category}</Descriptions.Item>
            <Descriptions.Item label="Dimensions">
                {product?.dimensions?.width}mm (W) × {product?.dimensions?.height}mm (H) × {product?.dimensions?.depth}mm (D)
            </Descriptions.Item>
            <Descriptions.Item label="Weight">{product?.weight}g</Descriptions.Item>
            <Descriptions.Item label="Barcode">{product?.meta.barcode}</Descriptions.Item>
            <Descriptions.Item label="SKU">{product?.sku}</Descriptions.Item>
            <Descriptions.Item label="Minimum Order Quantity">{product?.minimumOrderQuantity}</Descriptions.Item>
        </Descriptions>
    )
}

export default Specification