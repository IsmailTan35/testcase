import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Actions from "../components/actions";
import Completed from "../components/completed";
import Tabs from "../components/tabs";

import testdata from "../data/test.json";
import axios from "axios";

const About = () => {
  const [data, setData] = useState(testdata.data);
  const [selectedTab, setSelectedTab] = useState(0);
  async function getActions() {
    try {
      const res = await axios.get(
        "https://cdn.mallconomy.com/testcase/actions.json"
      );
      setData(res);
    } catch (error) {}
  }
  useEffect(() => {
    getActions();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Tabs onChange={setSelectedTab} selectedTab={selectedTab} />
      {selectedTab === 0 ? <Actions data={data} /> : <Completed data={data} />}
    </div>
  );
};

export default About;
