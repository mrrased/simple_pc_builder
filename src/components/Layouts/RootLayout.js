import React, { useEffect, useState } from "react";
import {
  ProfileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "7") {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "1",
    },
    {
      label: "Motherboard",
      key: "2",
    },
    {
      label: "RAM",
      key: "3",
    },
    {
      label: "Power Supply Unit",
      key: "4",
    },
    {
      label: "Storage Device",
      key: "5",
    },
    {
      label: "Monitor",
      key: "6",
    },
    {
      label: "Others",
      key: "7",
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
          <Link href="/allNews">
            <items>
              <ProfileOutlined />
              All News
            </items>
          </Link>
          <Link href="/about" className="mx-5">
            <Dropdown
              menu={{
                items,
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
          </Link>
          <Link href="/builder">
            <items>PC Builder</items>
          </Link>
          <Link href="/login" className="ml-5">
            <items>Login</items>
          </Link>
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
          PH-NEWS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};

export default RootLayout;
