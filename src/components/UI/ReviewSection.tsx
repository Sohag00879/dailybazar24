import { Avatar, List, Rate, Space, Typography } from "antd";
import { format } from 'date-fns';
const { Text } = Typography;

interface Review {
    comment: string;
    date: string | Date;
    rating: number;
    reviewerName: string;
    reviewerEmail: string;
}

type Reviews = Review[];

const ReviewSection = ({ reviews }: { reviews: Reviews }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={reviews}
            renderItem={(item: Review) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://joesch.moe/api/v1/random?key`} />}
                        title={
                            <Space direction="vertical" size={0} style={{ display: 'flex', marginBottom: 16 }}>
                                <Space size="middle" align="baseline">
                                    <Text strong style={{ fontSize: 15 }}>{item.reviewerName}</Text>
                                    <Rate
                                        disabled
                                        defaultValue={item.rating}
                                        allowHalf
                                        style={{
                                            fontSize: 14,
                                            color: '#faad14',
                                            marginLeft: 8,
                                            verticalAlign: 'middle'
                                        }}
                                    />
                                </Space>
                                <Text italic type="secondary" style={{ fontSize: 13, marginTop: -4 }}>
                                    {item.reviewerEmail}
                                </Text>
                            </Space>

                        }
                        description={
                            <>
                                <Text>{item.comment}</Text>
                                <br />
                                <Text type="secondary" style={{ fontSize: 12 }}>
                                    {format(new Date(item.date), 'yyyy-MM-dd')}
                                </Text>
                            </>
                        }
                    />
                </List.Item>
            )}
        />
    )
}

export default ReviewSection