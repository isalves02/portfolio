import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";
import {
  NavStyled,
  MenuListStyled,
  MenuToggleStyled,
  ButtonLangStyled,
  MenuOpenedStyled,
} from "./Header.styles";
import logoWhite from "../../assets/icons/logo-isabel.svg";
import logoBlack from "../../assets/icons/logo-isabel-black.svg";
import { DataContentProps } from "../../model";

export function Header({
  lang,
  setLang,
  content,
}: {
  lang: string;
  setLang: (val: string) => void;
  content: DataContentProps;
}) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "dark";
  });
  const isDarkMode = mode == "dark" ? true : false;

  useEffect(() => {
    const handlePopState = () => {
      setIsMenuActive(false);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function handleToggleLang() {
    const newLang = lang === "EN" ? "PT" : "EN";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }

  useEffect(() => {
    localStorage.getItem("mode");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (mode == "dark") {
      root.style.setProperty("--primary", "#131313");
      root.style.setProperty("--secondary", "#FFDD6D");
      root.style.setProperty("--white", "#FFFFFF");
      root.style.setProperty("--gray", "#ACACAC");
      root.style.setProperty("--gray-700", "#222222");
      root.style.setProperty("--bg-translucent", "rgba(0,0,0,.5)");
    } else {
      root.style.setProperty("--primary", "#EEEEEE");
      root.style.setProperty("--secondary", "#9E7900");
      root.style.setProperty("--white", "#000000");
      root.style.setProperty("--gray", "#3F3F3F");
      root.style.setProperty("--gray-700", "#CFCFCF");
      root.style.setProperty("--bg-translucent", "rgba(255,255,255,.8)");
    }
  }, [mode]);

  function handleToggleTheme() {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  }

  return (
    <>
      <NavStyled>
        <img
          src={isDarkMode ? logoWhite : logoBlack}
          alt="Isabel Alves"
          width={24}
          height={24}
        />

        <MenuListStyled>
          <button
            aria-label={
              isDarkMode
                ? lang == "PT"
                  ? "Mudar para o modo claro"
                  : "Switch to light mode"
                : lang == "PT"
                ? "Mudar para o modo escuro"
                : "switch to dark mode"
            }
            onClick={() => handleToggleTheme()}
          >
            {isDarkMode ? (
              <Moon size={20} color="#FFF" />
            ) : (
              <Sun size={20} color="#131313 " />
            )}
          </button>

          <ButtonLangStyled onClick={() => handleToggleLang()}>
            {lang}
          </ButtonLangStyled>
          <MenuToggleStyled
            isMenuActive={isMenuActive}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuToggleStyled>
        </MenuListStyled>

        <MenuOpenedStyled isMenuActive={isMenuActive}>
          <ul className="nav">
            {content.menu.nav.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <footer>
            <ul>
              {content.menu.links.map((link) => (
                <li>
                  <a href={link.url} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </MenuOpenedStyled>
      </NavStyled>
    </>
  );
}
