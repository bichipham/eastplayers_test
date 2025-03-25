
import { Layout, Space, Menu, Dropdown, Affix, Switch } from "antd";
import Link from "next/link";
import ico_propersal from "@/assets/images/propersal.svg";
import ico_service from "@/assets/images/services.svg";
import ico_rules from "@/assets/images/dollar.svg";
import ico_appointment from "@/assets/images/CalendarBlank.svg";
import ico_inventory from "@/assets/images/package.svg";
import ico_contact from "@/assets/images/User.svg";
import ico_transaction from "@/assets/images/dollar.svg";
import ico_invoice from "@/assets/images/Newspaper.svg";
import ico_logo from "@/assets/images/Logo.png";
import Image from "next/image";
import "./style.css";

const NavBar = () => {
  const items = [
    {
      key: "propersal",
      icon: <Image src={ico_propersal} width={20} height={20} />,
      label: <span>Propersal</span>,
    },
    {
      key: "service",
      icon: <Image src={ico_service} width={20} height={20} />,
      label: <span>Services</span>,
    },
    {
      key: "rule",
      icon: <Image src={ico_rules} width={20} height={20} />,
      label: <span>Verhicle Rules</span>,
    },
    {
      key: "appointment",
      icon: <Image src={ico_appointment} width={20} height={20} />,
      label: <Link href="/appointment">Appointments</Link>,
    },
    {
      key: "inventory",
      icon: <Image src={ico_inventory} width={20} height={20} />,
      label: <span>Inventory</span>,
    },
		{
      key: "contact",
      icon: <Image src={ico_contact} width={20} height={20} />,
      label: <span>Contacts</span>,
    },
		// {
    //   key: "transaction",
    //   icon: <Image src={ico_contact} width={20} height={20} />,
    //   label: <span>Transaction</span>,
    // },
		{
      key: "invoice",
      icon: <Image src={ico_invoice} width={20} height={20} />,
      label: <span>Invoices</span>,
    },
  ];
  return (
    <div className="left-menu">
      <div className="logo" ><Image src={ico_logo} width={250} /></div>
      <Menu className="nav_menu" items={items} mode="vertical" style={{marginTop: '10px'}} />
    </div>
  );
};

export default NavBar;
