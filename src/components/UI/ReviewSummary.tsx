import { Button, Modal, Space, Statistic } from "antd";
import Title from "antd/es/skeleton/Title";
import { useState } from 'react';

const ReviewSummary = ({ reviews, rating }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Title level={3}>Customer Reviews</Title>
            <Space size="large">
                <Statistic
                    title="Average Rating"
                    value={rating}
                    precision={2}
                    suffix="/5"
                />
                <Statistic
                    title="Total Reviews"
                    value={reviews?.length}
                />
            </Space>
            <div style={{ marginTop: '16px' }}>
                <Button type="primary" onClick={showModal}>Write a Review</Button>
            </div>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </div>
    )
}

export default ReviewSummary