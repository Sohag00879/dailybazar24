
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const NavbarWrapper = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout.Content style={{ padding: "24px" }}>
                <Outlet />
            </Layout.Content>
        </Layout>

    )
}
export default NavbarWrapper