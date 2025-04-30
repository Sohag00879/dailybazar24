import { Button, Input, Modal, Rate, Space, Statistic, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from 'react';
import { useAddReviewMutation } from "../../redux/features/reviews/addReviewApi";
import { IProduct } from "../../types/ProductTypes";
const { Title } = Typography;


interface Review {
    comment: string;
    date?: string | Date;
    rating: number;
    reviewerName: string;
    reviewerEmail: string;
}

type Reviews = Review[];

const ReviewSummary = ({ reviews, rating, product }: { reviews: Reviews, rating: number, product: IProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRating, setNewRating] = useState<number>(0);
    const [newComment, setNewComment] = useState<string>('');
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [addReview] = useAddReviewMutation();

    const handleSubmit = async () => {
        if (!newComment || newRating === 0) return;
        const review = {
            rating: newRating,
            comment: newComment,
            reviewerName: name,
            reviewerEmail: email
        };
        const updateData = {
            review,
            id: product.id,
            product
        }

        try {
            const res = await addReview(updateData)
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        handleSubmit()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Title>Customer Reviews</Title>
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

            <Modal title="Add a Review" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Rate
                    value={newRating}
                    onChange={(value) => setNewRating(value)}
                />
                <Input placeholder="Your Name" style={{ marginTop: '10px' }} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Your Email" style={{ marginTop: '10px' }} onChange={(e) => setEmail(e.target.value)} />

                <TextArea
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your review..."
                    style={{ marginTop: '10px' }}
                />

            </Modal>
        </div>
    )
}

export default ReviewSummary