"use client";

import NavBar from "@/components/NavBar";
import { createContext } from "react";
import "./style.css";
import { Layout } from "antd";
import { StoreProvider } from '@/service//StoreContext';
const MainContext = createContext();

export default function RootLayout({ children }) {
  return (
    <Layout className="layout-cols">
      <StoreProvider>
        <section>
          <div className="layout-cols-inner">
            <NavBar />
            <div className="center-cnt">{children}</div>
          </div>
        </section>
      </StoreProvider>
    </Layout>
  );
}
