import clsx from "clsx";
import { ArrowDownIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/fade";

const TOCSectionIntro = ({
  options = {
    id,
    dataTitle,
    dataDesc,
    number,
  },
}) => {
  return (
    <section className="layout full-bleed pt-24 pb-12 bg-gray-100">
      {options.number && (
        <span className="block font-semibold text-gray-500 mb-2 text-3xl">
          <Fade bottom text cascade>
            {options.number}
          </Fade>
        </span>
      )}
      <h2 className="font-bold text-5xl text-gray-900 mb-8">
        <a href={`#${options.id}`}>
          <Fade bottom text cascade opposite>
            {options.dataTitle}
          </Fade>
        </a>
      </h2>
      <p className="text-2xl text-gray-700 max-w-prose mb-12">
        <Fade bottom>
          {options.dataDesc}
        </Fade>
      </p>
      <Fade bottom>
        <ArrowDownIcon className="w-12 h-12 text-gray-700" />
      </Fade>
    </section>
  );
};

const Section = ({
  children,
  className,
  options = {
    id: null,
    dataTitle: null,
    dataDesc: null,
    number: null,
    marginY: false,
  },
}) => {
  const classes = clsx(
    "layout full-bleed",
    options.marginY && "my-24",
    className
  );

  return (
    <section
      className={classes}
      data-toc-title={options.dataTitle}
      id={`#${options.id}`}
    >
      {options.dataTitle && <TOCSectionIntro options={options} />}
      {children}
    </section>
  );
};

export default Section;
