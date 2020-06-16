import React from "react";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector({ darkStyle }) {
  return (
    <select value="ru" className={darkStyle || styles.languageSelect}>
      <option value="ru">Рус</option>
      <option value="uk">Укр</option>
      <option value="en">Eng</option>
    </select>
  );
}
