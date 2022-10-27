import { useState } from "react";
import { useLayoutEffect } from "react";
import About from "../components/about";
import Intro from "../components/intro";
import { useDispatch } from "react-redux";
import { pointsActions } from "../store";
import { getCookie, setCookie } from "../services";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const res = getCookie("intro");
    if (res !== null) {
      const res2 = getCookie("points");
      setShowIntro(false);
      if (res2 === null) return;
      dispatch(pointsActions.refresh(JSON.parse(res2)));
    }
  }, []);

  const handleClick = () => {
    setShowIntro(false);
    // setCookie("intro", false, 9999);
  };

  return <>{showIntro ? <Intro btnClick={handleClick} /> : <About />}</>;
}
