import { useEffect, useRef, useState } from "react";
import style from "./home.module.css";
import Navigate from "../../widget/navigate";
import MobileNav from "../../shared/components/MobileNav";
import logoSmall from "../../assets/svg/logo-small.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "../../shared/components/Card";

const Home = () => {
  const [windowResize, setWindowResize] = useState(window.innerWidth);
  const inputRef = useRef();

  useEffect(() => {
    const autoWindowResize = () => {
      setWindowResize(window.innerWidth);
    };
    window.addEventListener("resize", autoWindowResize);

    return () => {
      window.removeEventListener("resize", autoWindowResize);
    };
  }, []);

  const handleRefClicker = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <>
        <div className={style.container_home}>
          <div className={style.searchParams}>
            <div className={style.logotype}>
              <div>
                <p>С Любовью, ваш</p>
              </div>
              <div>
                <img src={logoSmall} alt="" />
              </div>
            </div>
            <form
              onClick={handleRefClicker}
              className={style.form_search}
              action=""
              id="search"
            >
              <FontAwesomeIcon icon={faSearch} />
              <input ref={inputRef} id="search" type="text" />
            </form>
          </div>
        </div>
        {windowResize >= 740 ? <Navigate /> : <MobileNav />}
      </>
      <div className={style.card_container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
