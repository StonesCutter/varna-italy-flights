import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchCSVData from "./Components/FetchCSVData/FetchCSVData";
import { useTranslation } from "react-i18next";
import LanguageManager from "./Components/LanguageManager/LanguageManager";
import Button from "./Components/Button/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/Email";
import PictureArticle1 from "./Assets/images/article1.jpg";
import PictureConsulate from "./Assets/images/consulate.jpg";

const App = () => {
  const fetchData = () => {
    FetchCSVData.fetchCSVData();
  };

  const URL_ARTICLE =
    "https://bgtourism.bg/novini-italianskata-obshtnost-iska-poleti-ot-varna-do-italia/?fbclid=IwAR12ox9ICHtEDby4Itnqg1Lo7YN2vTmZfpESB5xdlzYJs8WQRENY1LX1tcM";
  const redirectToArticle = () => {
    const formUrl = URL_ARTICLE;
    window.open(formUrl, "_blank");
  };

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h1> {t("title")}</h1>
        </div>
        <LanguageManager />
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h3>{t("didNotPartecipate")}</h3>
        </div>
        <Button />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h3>{t("signatures")}</h3>
        </div>
        <FetchCSVData />
        <p style={{ fontSize: "15px" }}>** {t("messageCounter")}**</p>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h3>{t("about")}</h3>
        </div>
        <div
          style={{
            paddingLeft: "5vw",
            paddingRight: "5vw",
            marginTop: "-20px",
          }}
        >
          <p
            style={{
              padding: "5vw",
              borderRadius: "25px",
              border: "2px solid",
            }}
          >
            {t("description")}
          </p>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h3>{t("insights")}</h3>
        </div>
        <img
          src={PictureArticle1}
          className="article-picture"
          onClick={redirectToArticle}
        />
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h3>{t("contacts")}</h3>
        </div>
        <div
          style={{
            paddingLeft: "5vw",
            paddingRight: "5vw",
            marginTop: "-20px",
          }}
        >
          <p
            style={{
              padding: "5vw",
              borderRadius: "25px",
              border: "2px solid",
            }}
          >
            <b>{t("consul")} Antonio Tarquinio</b>
            <br />
            <br />
            <LocalPhoneIcon /> (+359) 52 699557
            <br />
            <Email /> consolato.varna@esteri.it
            <br />
            <br />
            <img
              src={PictureConsulate}
              style={{ width: "300px" }}
              onClick={redirectToArticle}
            />
          </p>
        </div>
        <p style={{ marginTop: "50px", marginBottom: "50px" }}>
          {t("madeBy")} Martino Manzolini
        </p>
      </header>
    </div>
  );
};

export default App;
