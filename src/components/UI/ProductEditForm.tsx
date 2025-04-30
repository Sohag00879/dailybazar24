import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import { useEffect } from 'react';
import '../../styles/ProductEditForm.css';
import { ICategory } from '../../types/CategoriesTypes';
import { IProduct } from '../../types/ProductTypes';

const { TextArea } = Input;

const ProductEditForm = ({ productData, categoriesData }: { productData: IProduct, categoriesData: ICategory }) => {
    console.log(categoriesData)
    const [form] = Form.useForm();

    useEffect(() => {
        if (productData) {
            form.setFieldsValue(productData);
        }
    }, [productData]);

    const handleFinish = (values) => {
        console.log(values)
    }

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

                        <Form.Item name="sku" label="SKU">
                            <Input />
                        </Form.Item>

                        <Form.Item name="category" label="Category">
                            <Select>
                                {categoriesData?.map(cat => (
                                    <Select.Option key={cat._id} value={cat.name}>
                                        {cat.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item name="price" label="Price">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="discountPercentage" label="Discount (%)">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="stock" label="Stock">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name="availabilityStatus" label="Availability Status">
                            <Input />
                        </Form.Item>

                        <Form.Item name="minimumOrderQuantity" label="Min Order Quantity">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </div>
                    <div className='grid-3col'>
                        <Form.Item name="image" label="Upload Image" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
                            <Upload listType="picture" maxCount={1} beforeUpload={() => false}>
                                <Button icon={<UploadOutlined />}>Select File</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item name="tags" label="Tags (comma separated)">
                            <Input />
                        </Form.Item>
                        <Form.Item name="warrantyInformation" label="Warranty Info">
                            <Input />
                        </Form.Item>

                    </div>

                    <Form.Item name="description" label="Description">
                        <TextArea rows={3} />
                    </Form.Item>

                    <div className="grid-3col">
                        <Form.Item name={['meta', 'barcode']} label="Barcode">
                            <Input />
                        </Form.Item>
                        <Form.Item name="returnPolicy" label="Return Policy">
                            <Input />
                        </Form.Item>
                        <Form.Item name="shippingInformation" label="Shipping Info">
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="grid-3col">
                        <Form.Item name={['dimensions', 'width']} label="Width">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name={['dimensions', 'height']} label="Height">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name={['dimensions', 'depth']} label="Depth">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </div>

                    <div className='grid-3col'>
                        <Form.Item name="thumbnail" label="Thumbnail URL">
                            <Input />
                        </Form.Item>
                        <Form.Item name="weight" label="Weight">
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
                                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} className="add-button">
                                        Add Review
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <div className="submit-section">
                        <Button type="primary" htmlType="submit" className="submit-button">
                            Save Changes
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default ProductEditForm;
