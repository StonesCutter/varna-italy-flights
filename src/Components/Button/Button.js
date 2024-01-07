import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../Utils/localStorageUtils";
import "./button.css";
import { useTranslation } from "react-i18next";

const URL_FORM_IT_BG =
  "https://docs.google.com/forms/d/e/1FAIpQLSdh4eI0xO_d1JO42x5Xpxmss0BPkmjgl5fL94OCCBvgIMx86Q/viewform?usp=sf_link";
const URL_FORM_EN =
  "https://docs.google.com/forms/d/e/1FAIpQLSfoUU-7xugj4bOqoYEZL_N-udpDwueO6SKv7NdKtIXV5WWxAA/viewform?usp=sf_link";

const Button = () => {
  const [state, setState] = useState({
    lang: "it",
  });

  const { t } = useTranslation();

  const redirectToForm = () => {
    const formUrl = state.lang === "en" ? URL_FORM_EN : URL_FORM_IT_BG;

    window.open(formUrl, "_blank");
  };

  useEffect(() => {
    // Adding an event listener for the custom event
    const eventListener = (event) => {
      //console.log("Event received:", event.detail);
      setState({
        ...state,
        lang: event.detail,
      });
    };

    document.addEventListener("languageChanged", eventListener);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("languageChanged", eventListener);
    };
  }, []);

  return (
    <div
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      onClick={redirectToForm}
    >
      <div className="button-petition">
        <h3>{t("compile")}</h3>
      </div>
    </div>
  );
};

export default Button;
