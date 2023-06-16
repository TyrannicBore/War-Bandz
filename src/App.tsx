import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import data from "../../war_bandz_data/classes.json";
import ClassCard from "./components/ClassCard";

function App() {
  const classData = data.Classes;
  const classes: any = [];
  classData.forEach(c => {
      classes.push(ClassCard(c))
  });

  return (
    <>
      <div>{classes}</div>
    </>
  );
}

export default App;
