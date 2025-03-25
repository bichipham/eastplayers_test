import NavBar from "@/components/NavBar";
import "./style.css";
import { Layout } from "antd";

export default function RootLayout({ children }) {
  return (
    <Layout className="layout-cols">
      <section >
        <div className="layout-cols-inner">
          <NavBar />
          <div className="center-cnt">{children}</div>
        </div>
      </section>
    </Layout>
  );
}
