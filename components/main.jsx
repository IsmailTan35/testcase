import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Actions from "./actions";
import Completed from "./completed";
import Tabs from "./tabs";
import testdata from "../data/test.json";
import axios from "axios";

const About = () => {
  const [data, setData] = useState(
    process.env.NODE_ENV === "development" ? testdata.data : []
  );
  // localde cors hatasından dolayı boyle yapmak zorunda kaldım.
  const [selectedTab, setSelectedTab] = useState(0);

  async function getActions() {
    try {
      const res = await axios.get(
        "https://cdn.mallconomy.com/testcase/actions.json"
      );
      setData(res);
    } catch (error) {}
  }

  const handleChange = tabID => {
    setSelectedTab(tabID);
  };

  useEffect(() => {
    getActions();
  }, []);

  return (
    <div className="layout-container">
      <Navbar />
      <Tabs onChange={handleChange} selectedTab={selectedTab} />
      {selectedTab === 0 ? <Actions data={data} /> : <Completed data={data} />}
    </div>
  );
};

export default About;
