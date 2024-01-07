import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, FormControl, Select } from "@mui/material";
import "./languagemanager.css";
import enFlag from "../../Assets/images/languageIcons/gb.svg";
import itFlag from "../../Assets/images/languageIcons/it.svg";
import bgFlag from "../../Assets/images/languageIcons/bg.svg";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../Utils/localStorageUtils";

const LANGS = [
  { value: "it", label: "Italian" },
  { value: "bg", label: "Bulgarian" },
  { value: "en", label: "English" },
];

const LanguageManager = () => {
  const { i18n } = useTranslation();
  const languageKey = "language"; // Define the variable 'languageKey'

  const [state, setState] = useState({
    lang: i18n.language || "it",
  });

  const chooseLanguage = (event) => {
    const selectedLanguage = event.target.value;

    setLocalStorage(languageKey, selectedLanguage);

    if (i18n.changeLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }

    eventSender(selectedLanguage);

    setState({
      ...state,
      lang: selectedLanguage,
    });
  };

  function eventSender(languageChosen) {
    // Triggering a custom event named "customEvent"
    document.dispatchEvent(
      new CustomEvent("languageChanged", { detail: languageChosen })
    );
  }

  useEffect(() => {
    let languagePreSet = getLocalStorage(languageKey);
    if (languagePreSet == null || !i18n.languages?.includes(languagePreSet)) {
      languagePreSet = "it";
      setLocalStorage(languageKey, languagePreSet);
    }

    setState({
      ...state,
      lang: languagePreSet,
    });
  }, [i18n.languages, languageKey]);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={state.lang}
        onChange={chooseLanguage}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="language-select"
        sx={{ color: "white", width: "100%" }} // Adjust the width here
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className="menu-item-content"
          >
            {option.value === "en" && (
              <img src={enFlag} alt={option.label} className="flag-logo" />
            )}
            {option.value === "it" && (
              <img src={itFlag} alt={option.label} className="flag-logo" />
            )}
            {option.value === "bg" && (
              <img src={bgFlag} alt={option.label} className="flag-logo" />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageManager;
