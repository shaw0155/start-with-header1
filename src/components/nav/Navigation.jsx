import "./Navigation.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Select } from "antd";
import franceImg from "../../icons/france.png";
import usaImg from "../../icons/usa.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const workflowItems = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#a">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#a">
        2nd menu item
      </a>
    ),
    icon: <SmileOutlined />,
  },
];

const enContent = (
  <div className="lang-content">
    <img src={usaImg} alt="English" className="lang-img" />
    English
  </div>
);
const frContent = (
  <div className="lang-content">
    <img src={franceImg} alt="English" className="lang-img" />
    Français
  </div>
);

function getItem(label, key, children, type) {
  return {
    key,

    children,
    label,
    type,
  };
}

export default function Navigation() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const items = [
    getItem(`${t("nav_home")}`, "home"),
    {
      type: "divider",
    },
    getItem(`${t("nav_services")}`, "services"),
    {
      type: "divider",
    },
    getItem(`${t("nav_workflow")}`, "workflow", [
      getItem(`${t("nav_workflow")}`, "5"),
      getItem(`${t("nav_workflow")}`, "6"),
    ]),
    {
      type: "divider",
    },
    getItem(`${t("nav_careers")}`, "careers"),
    {
      type: "divider",
    },
    getItem(`${t("nav_contact")}`, "contact"),
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };
  function langHandle(value) {
    i18n.changeLanguage(value);
  }
  return (
    <div className="nav-bar">
      <h1>Logo</h1>
      <div className="nav-links">
        <a className="nav-link" href="#a">
          {t("nav_home")}
        </a>

        <a className="nav-link" href="#a">
          {t("nav_services")}
        </a>
        <Dropdown
          menu={{
            items: workflowItems,
          }}
        >
          <a className="nav-link" href="#a" onClick={(e) => e.preventDefault()}>
            <Space>
              {t("nav_workflow")}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <a className="nav-link" href="#a">
          {t("nav_careers")}
        </a>
        <a className="nav-link" href="#a">
          {t("nav_contact")}
        </a>
      </div>

      <Select
        className="lang-select"
        defaultValue="en"
        style={{ width: 120 }}
        onChange={langHandle}
        options={[
          {
            value: "en",
            label: enContent,
          },
          {
            value: "fr",
            label: frContent,
          },
        ]}
      />
      {show ? (
        <MenuFoldOutlined
          className={"nav-icon"}
          onClick={() => setShow(!show)}
        />
      ) : (
        <MenuUnfoldOutlined
          className={"nav-icon "}
          onClick={() => setShow(!show)}
        />
      )}
      <Menu
        className={show ? "side__nav" : "side__nav hidden"}
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
