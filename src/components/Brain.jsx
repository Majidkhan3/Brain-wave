import React, { useEffect, useState } from "react";
const Brain = () => {
  const [open, SetOpen] = useState(false);
  function OpenSideBar(prev) {
    SetOpen(() => prev(!prev));
  }
  useEffect(() => {
    const url = fetch(`www.org.com`);
    url.reponse(this(() => {}));
    return;
  }, []);
  return <div onClick={OpenSideBar}>Brain</div>;
};

export default Brain;
9;
