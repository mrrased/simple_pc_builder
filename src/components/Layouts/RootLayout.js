import React, { useState } from "react";
import {
  ProfileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = (e) => {
    if (e.key === "7") {
      setOpen(false);
    }
  };

  const handleItemClick = (routeName) => {
    router.push(`/${routeName}`);
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "1",
      routeName: "cpu",
    },
    {
      label: "Motherboard",
      key: "2",
      routeName: "motherboard",
    },
    {
      label: "RAM",
      key: "3",
      routeName: "ram",
    },
    {
      label: "Power Supply Unit",
      key: "4",
      routeName: "power",
    },
    {
      label: "Storage Device",
      key: "5",
      routeName: "storage",
    },
    {
      label: "Monitor",
      key: "6",
      routeName: "monitor",
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC_Builder
            </Link>
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="vertical"
          className="text-white text-sm no-underline uppercase"
        >
          <Link href="/builder" className="ml-9">
            <items>PC Builder</items>
          </Link>
          <button className="mx-5">
            <Dropdown
              menu={{
                items: items.map((item) => ({
                  ...item,
                  onClick: () => {
                    handleItemClick(item.routeName);
                    handleMenuClick({ key: item.key });
                  },
                })),
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  Component
                  <DownOutlined />
                </Space>
              </span>
            </Dropdown>
          </button>

          {session?.user?.email ? (
            <items>
              <Button onClick={() => signOut()} type="primary" className="ml-5">
                Logout
              </Button>
            </items>
          ) : (
            <Link href="/login" className="ml-5">
              <items>Login</items>
            </Link>
          )}
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC-Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="*">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="*">
            <GoogleSquareFilled />
          </Link>
          <Link href="*">
            <LinkedinFilled />
          </Link>
        </p>
        © copyright 2023 by pc-builder
      </Footer>
    </Layout>
  );
};

export default RootLayout;
