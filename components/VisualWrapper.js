const VisualWrapper = ({ children, bgUrl, right, justify }) => {
    const getJustify = () => {
        if (justify === "start" || justify === "end") return justify;
        return "center";
    };

    const alignment = getJustify();

    return (
        <div className="inline-block relative order-1 h-[24rem] md:h-[38rem] min-w-0">
            <div
                className={`
                  inline-block h-[22rem] w-full max-w-screen-lg rounded-2xl overflow-hidden bg-cover bg-top-left p-8 ${
                            right ? `absolute right-0` : ""
                        }
                  md:h-[38rem] md:right-8
                  lg:w-[60vw]
                `}
                style={{ backgroundImage: `url(${bgUrl})` }}
            >
                <div
                    className={`inline-flex space-x-4 w-full relative h-full items-start justify-center lg:justify-${alignment}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default VisualWrapper