import { Button, Result } from 'antd';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const containerStyle: CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" size="large" onClick={() => navigate('/')}>
                        Back Home
                    </Button>
                }
                style={{ width: '100%', maxWidth: '500px' }}
            />
        </div>
    );
};

export default NotFound;