import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barra from "../components/Barra";

export function Home() {
  const navigate = useNavigate();
  return (<Barra></Barra>)
}
