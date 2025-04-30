import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Avatar, Button, Dropdown, Layout, Menu, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
    const { user, isSignedIn } = useUser();

    const userMenu = (
        <Menu
            items={[
                {
                    key: "profile",
                    label: <Text strong>{user?.fullName}</Text>,
                },
                {
                    key: "signout",
                    label: <SignOutButton><Button type="text">Sign out</Button></SignOutButton>,
                },
            ]}
        />
    );

    return (
        <Header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                padding: "0 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                zIndex: 10,
            }}
        >
            <Link to="/">
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>DailyBazaar24</Text>
            </Link>

            <Space>
                {isSignedIn ? (
                    <Dropdown overlay={userMenu} placement="bottomRight" arrow>
                        <Space style={{ cursor: "pointer" }}>
                            <Avatar src={user?.imageUrl} alt="User Avatar" />
                            <Text>{user?.firstName}</Text>
                        </Space>
                    </Dropdown>
                ) : (
                    <SignInButton>
                        <Button type="primary">Sign In</Button>
                    </SignInButton>
                )}
            </Space>
        </Header>
    );
};

export default Navbar;
