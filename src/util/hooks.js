"use client"
import { useState } from "react";

export const useCustomModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [data, setData] = useState();

  function show() {
    setIsShowing(true);
  }

  function hide() {
    setIsShowing(false);
  }

  return {
    isShowing,
    data,
    show,
    hide,
    setData,
  };
};
