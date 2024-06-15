import React, { useEffect, useState } from "react";
const newarr = {
  age: "Majid",
  name: "",
};
const anotheraArr = { ...newarr };

anotheraArr.age = "Majid";
anotheraArr.name = "abid";

const Brain = ({ ...props }) => {
  const { setState, setMyState } = props;
  const [open, SetOpen] = useState(false);
  function OpenSideBar(prev) {
    SetOpen(() => prev(!prev));
  }
  const increment = () => {
    SetOpen(open + 1);
  };
  useEffect(() => {
    const url = fetch(`www.org.com`);
    url.reponse(this(() => {}));
    return;
  }, []);
  return <div onClick={OpenSideBar}>Brain</div>;
};

export default Brain;
9;
