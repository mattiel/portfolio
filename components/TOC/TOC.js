import { useEffect, useState, useRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

import Menu from "./Menu";
import List from "./List";
import ProgressBar from "./ProgressBar";
import clsx from "clsx";

const twConfig = resolveConfig(tailwindConfig);

const TOC = () => {
  const [scroll, setScroll] = useState({
    isTiny: false,
    isMenuOpen: false,
    isAtTop: false,
    min: 0,
    max: 0,
    progress: 0,
  });
  const [sections, setSections] = useState([]);
  const navRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll(`[data-toc-title]`);
    const sections = [];

    // initialize
    elements.forEach((content) => {
      sections.push({
        title: content.getAttribute("data-toc-title"),
        id: content.id,
        startPosition: content.offsetTop,
        endPosition: content.offsetTop + content.getBoundingClientRect().height,
        isVisible: false,
      });
    });

    setScroll({
      ...scroll,
      isTiny: window.innerWidth <= parseInt(twConfig.theme.screens.md),
      min: sections[0].startPosition,
      max: sections[0].endPosition,
    });
    setSections(sections);

    function handleResize() {
      setScroll({
        ...scroll,
        isTiny: window.innerWidth <= parseInt(twConfig.theme.screens.md),
      });
    }

    function handleProgress() {
      // @TODO: Fix progress calculation
      const progress = scroll.isTiny
        ? (window.scrollY / this.scroll.max) * 100
        : (window.scrollY / sections[sections.length - 1].endPosition) * 100;
      console.log(window.scrollY, scroll.max);
      if (progress < 100 && progress > 0)
        setScroll((scroll) => ({
          ...scroll,
          progress,
        }));
    }

    function handleScroll() {
      if (scroll.min > 0 && scroll.max > 0) {
        let min = scroll.min;
        let max = scroll.max;
        setScroll((scroll) => ({
          ...scroll,
          min,
          max,
        }));
      }

      const toChange = sections.slice();
      const isAtTop = navRef.current?.getBoundingClientRect().top < 2;

      if (
        window.scrollY > scroll.max &&
        window.scrollY < sections[sections.length - 1].endPosition
      ) {
        toChange.forEach((section) => {
          if (
            window.scrollY >= section.startPosition &&
            window.scrollY <= section.endPosition
          ) {
            section.isVisible = true;
            let min = section.startPosition;
            let max = section.endPosition;
            setScroll((scroll) => ({
              ...scroll,
              min,
              max,
            }));
          } else {
            section.isVisible = false;
          }
        });
      }

      setSections(toChange);
      setScroll((scroll) => ({
        ...scroll,
        isAtTop,
      }));
      handleProgress();
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  function handleMenuOpen() {
    setScroll({ ...scroll, isMenuOpen: !scroll.isMenuOpen });
  }

  const tocClassName = clsx(
    "w-full full-bleed h-12 sticky top-0 left-0 z-10 overflow-visible opacity-0 transition-opacity duration-500",
    scroll.isAtTop && "opacity-100"
  );

  return (
    <nav className={tocClassName} ref={navRef}>
      <div className="w-full h-full bg-gray-100 shadow-sm border-b bg-opacity-50 backdrop-blur-lg border-gray-200 relative">
        <ProgressBar progress={scroll.progress} />
        <List
          sections={sections}
          onClick={handleMenuOpen}
          isTiny={scroll.isTiny}
        />
      </div>
      <Menu
        sections={sections}
        isVisible={scroll.isMenuOpen}
        onClose={handleMenuOpen}
      />
    </nav>
  );
};

export default TOC;
