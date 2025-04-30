import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import { useEffect } from 'react';
import { useEditProductMutation } from '../../redux/features/products/editProductApi';
import '../../styles/ProductEditForm.css';
import { ICategory } from '../../types/CategoriesTypes';
import { IProduct } from '../../types/ProductTypes';

const { TextArea } = Input;

const ProductEditForm = ({ productData, categoriesData }: { productData: IProduct, categoriesData: ICategory }) => {
    const [form] = Form.useForm();
    const [editProduct] = useEditProductMutation()

    useEffect(() => {
        if (productData) {
            form.setFieldsValue(productData);
        }
    }, [productData]);

    const handleFinish = async (values: IProduct) => {
        try {
            const tagsArray = Array.isArray(values.tags)
                ? values.tags
                : values.tags?.split(',').map((tag: string) => tag.trim()) || [];


            const imageFile = values.image?.[0]?.originFileObj;
            const imageUrl = imageFile ? imageFile.name : productData.image;

            const updateData = {
                ...values,
                tags: tagsArray,
                image: imageUrl,
            };

            //output the updated data
            console.log(updateData)

            const res = await editProduct({
                id: productData.id,
                data: updateData,
            }).unwrap();

            console.log(res);
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

    return (
        <div className="container">
            <h1 className='title'>Edit Product</h1>
            <Card className="card">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className="form"
                >
                    <div className="grid-3col">
                        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Title is required' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="sku" label="SKU" rules={[{ required: true, message: 'SKU is required' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Category is required' }]}>
                            <Select>
                                {categoriesData?.map(cat => (
                                    <Select.Option key={cat._id} value={cat.name}>
                                        {cat.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Price is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="discountPercentage" label="Discount (%)" rules={[{ required: true, message: 'Discount is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="stock" label="Stock" rules={[{ required: true, message: 'Stock is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="availabilityStatus" label="Availability Status" rules={[{ required: true, message: 'Availability is required' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="minimumOrderQuantity" label="Min Order Quantity" rules={[{ required: true, message: 'Min Order is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </div>
                    <div className='grid-3col'>
                        <Form.Item name="image" label="Upload Image" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
                            <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
                                <Button icon={<UploadOutlined />}>Select File</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item name="tags" label="Tags (comma separated)" rules={[{ required: true, message: 'Tags is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="warrantyInformation" label="Warranty Info" rules={[{ required: true, message: 'Waranty is required' }]}>
                            <Input />
                        </Form.Item>

                    </div>

                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Description is required' }]}>
                        <TextArea rows={3} />
                    </Form.Item>

                    <div className="grid-3col">
                        <Form.Item name={['meta', 'barcode']} label="Barcode" rules={[{ required: true, message: 'Barcode is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="returnPolicy" label="Return Policy" rules={[{ required: true, message: 'Return Policy is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="shippingInformation" label="Shipping Info" rules={[{ required: true, message: 'Shipping Info is required' }]}>
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="grid-3col">
                        <Form.Item name={['dimensions', 'width']} label="Width" rules={[{ required: true, message: 'Width is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name={['dimensions', 'height']} label="Height" rules={[{ required: true, message: 'Dimension  is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name={['dimensions', 'depth']} label="Depth" rules={[{ required: true, message: 'Depth is required' }]}>
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </div>

                    <div className='grid-3col'>
                        <Form.Item name="thumbnail" label="Thumbnail URL" rules={[{ required: true, message: 'Thumbnail is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="weight" label="Weight" rules={[{ required: true, message: 'Weight is required' }]}>
                            <Input />
                        </Form.Item>
                    </div>


                    {/* Reviews */}
                    <h3 className="section-title">Product Reviews</h3>
                    <Form.List name="reviews">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} className="review-row" align="baseline">
                                        <Form.Item {...restField} name={[name, 'reviewerName']} rules={[{ required: true, message: 'Name required' }]}>
                                            <Input placeholder="Name" />
                                        </Form.Item>
                                        <Form.Item {...restField} name={[name, 'reviewerEmail']} rules={[{ type: 'email', message: 'Invalid email' }]}>
                                            <Input placeholder="Email" />
                                        </Form.Item>
                                        <Form.Item {...restField} name={[name, 'rating']} rules={[{ required: true }]}>
                                            <InputNumber placeholder="Rating" min={1} max={5} />
                                        </Form.Item>
                                        <Form.Item {...restField} name={[name, 'comment']}>
                                            <Input placeholder="Comment" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} className="remove-button" />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="secondary" onClick={() => add()} icon={<PlusOutlined />} className="add-button">
                                        Add Review
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <div className="submit-section">
                        <Button type="primary" htmlType="submit" className="submit-button">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default ProductEditForm;
