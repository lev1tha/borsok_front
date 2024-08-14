import { useEffect, useState } from "react";
import Navigate from "../../widget/navigate";
import MobileNav from "../../shared/components/MobileNav";

const Home = () => {
  const [windowResize, setWindowResize] = useState(window.innerWidth);

  useEffect(() => {
    const autoWindowResize = () => {
      setWindowResize(window.innerWidth);
    };

    window.addEventListener("resize", autoWindowResize);
  });

  return <div>{windowResize >= 740 ? <Navigate /> : <MobileNav />}</div>;
};

export default Home;
