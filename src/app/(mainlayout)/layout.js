import NavBar from "@/components/NavBar";
import "./style.css";
import { Layout } from "antd";

export default function RootLayout({ children }) {
  return (
    <Layout>
      <p>header</p>
      <section className="layout-cols">
        <div className="layout-cols-inner">
          <NavBar />
          <div className="center-cnt">{children}</div>
        </div>
      </section>
    </Layout>
  );
}
