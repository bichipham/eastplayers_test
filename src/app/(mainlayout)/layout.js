"use client";

import NavBar from "@/components/NavBar";
import { createContext } from "react";
import "./style.css";
import { Layout } from "antd";
import { StoreProvider } from "@/service//StoreContext";
import Image from "next/image";
import ico_back from "@/assets/images/iconBack.png";

const MainContext = createContext();

export default function RootLayout({ children }) {
  return (
    <Layout className="layout-cols">
      <StoreProvider>
        <section>
          <div className="layout-cols-inner">
            <NavBar />
            <div className="center-cnt">
              <div className="div__back">
                <Image src={ico_back} width={30} height={30} alt="back" />
                <span>Create Appointment</span>
              </div>
              {children}
            </div>
          </div>
        </section>
      </StoreProvider>
    </Layout>
  );
}
