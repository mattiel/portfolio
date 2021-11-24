import Phone from "@/components/Phone";

const Blockers = () => {
  return (
    <section
      className="layout full-bleed bg-black"
      data-toc-title="Protection"
      id="section-4"
    >
      {/*<section className="my-32">*/}
      {/*  <h4 className="font-semibold text-blue-500 mb-2 text-lg">Blockers</h4>*/}
      {/*  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">*/}
      {/*    How can users be safe from companies trying to track what they do*/}
      {/*    online?*/}
      {/*  </h3>*/}
      {/*  <p className="text-gray-700 text-xl mb-8 max-w-prose">*/}
      {/*    Without having to install extra extensions and applications,*/}
      {/*    blockers on a router level protect users from unwanted trackings,*/}
      {/*    privacy-invasive elements, and even malicious webistes while*/}
      {/*    browsing on the internet or using applications.*/}
      {/*  </p>*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">*/}
      {/*    <div className="block pr-4">*/}
      {/*      <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">*/}
      {/*        One time setup*/}
      {/*      </p>*/}
      {/*      <div className="pl-[1.125rem]">*/}
      {/*        <p className="text-gray-700 mb-4">*/}
      {/*          <a*/}
      {/*            href="https://github.com/gorhill/uBlock"*/}
      {/*            className="text-blue-600 underline font-medium"*/}
      {/*          >*/}
      {/*            uBlock origin*/}
      {/*          </a>*/}
      {/*          , an ad blocker for browsers, have set of rules that block*/}
      {/*          trackers, ads, and maleware sites. It needs to be installed*/}
      {/*          via extensions from supported browsers. However, this means*/}
      {/*          everytime a user gets a new device, they need to install the*/}
      {/*          extension. Bridge solve this problem because it handles web*/}
      {/*          requests and is handled on the router level as long as the*/}
      {/*          device is connected, it's protected.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="block pr-4">*/}
      {/*      <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">*/}
      {/*        Lack of responsibilities from data holders*/}
      {/*      </p>*/}
      {/*      <div className="pl-[1.125rem]">*/}
      {/*        <p className="text-gray-700 mb-4">*/}
      {/*          Companies have to deal with securities to keep numerous data*/}
      {/*          about users. No servers are completely protected and even big*/}
      {/*          companies are getting hacked and users' information gets*/}
      {/*          leaked online. Are the users really getting compensated from*/}
      {/*          these attacks?*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <div className="layout full-bleed my-32">
        <div className="md:mx-12 my-32">
          <h2 className="text-pink-500 font-bold text-6xl max-w-4xl mb-8">
            Block anything unwanted while browsing on the web
          </h2>
          <p className="max-w-4xl text-2xl text-gray-300 font-semibold">
            Without having to install extra extensions and applications,
            blockers on a router-level protect users from unwanted tracking,
            privacy-invasive elements, and even malicious websites while
            browsing on the internet or using applications.
          </p>
        </div>
        <div className="layout bg-gradient-to-br from-pink-300 to-purple-700 full-bleed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3 w-full flex flex-col-reverse md:flex-row">
              <div className="h-[48rem] flex-1 relative w-full flex justify-center items-center my-16">
                <div className="inline-flex items-center justify-end">
                  <img
                    src="/bridge/blockers-custom-main.webp"
                    className="mt-[20%] md:inline-block h-full max-w-[20rem] ml-6"
                  />
                  <img
                    src="/bridge/blockers-filters.png"
                    className="hidden md:inline-block h-full -mt-[20%] max-w-[20rem] ml-6"
                  />
                </div>
              </div>
              <div className="px-16 mb-16 md:mt-16 w-full md:w-[36rem] flex flex-col justify-center items-start flex-shrink-0">
                <img
                  src="/bridge/section-icons/blocker.svg"
                  width="48"
                  height="48"
                  alt="Permit Icon"
                  className="mb-4"
                />
                <h3 className="text-black text-opacity-70 text-4xl font-bold mb-4 leading-tight">
                  A content blocker at router level which requires no additional setup
                </h3>
                <p className="font-medium text-white text-opacity-80 text-xl">
                  <strong className="text-white mr-0.5">Peace. </strong>
                  {/* Companies can use Bridge's API to receive personal data without storing it in their servers. */}
                  Blockers protect users from unwanted tracks, malicious websites and privacy-invasive elements while
                  browsing on the internet or using applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-3xl bg-gray-900 w-full drop-shadow-sm relative overflow-hidden md:row-span-2">
            <div className="px-12 pt-12">
              <h4 className="font-semibold text-lg text-pink-600 mb-2">
                Custom filters
              </h4>
              <p className="font-medium text-gray-300 text-opacity-80 text-xl">
                <strong className="text-white mr-0.5">Block whatever. </strong>
                Users have freedom to block anything they want to keep their web experience the exactly way they want.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/blockers-custom-rules.webp"
                alt="Permit requests"
                height="329"
                className="w-full max-h-[810px] object-cover object-top"
              />
            </div>
          </div>
          <div className="rounded-3xl bg-gray-900 w-full drop-shadow-sm relative overflow-hidden">
            <div className="px-12 pt-12">
              <h4 className="font-semibold text-lg text-pink-600 mb-2">
                Protection from the web
              </h4>
              <p className="font-medium text-gray-300 text-opacity-80 text-xl">
                <strong className="text-white mr-0.5">Protected. </strong>
                Powerful rules gives users freedom from unwanted substances while browsing the web.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/blockers-website-blocked.webp"
                alt="Permit requests"
                height="291"
                className="w-full max-h-[291px]"
              />
            </div>
          </div>
          <div className="rounded-3xl bg-gray-900 w-full drop-shadow-sm relative overflow-hidden">
            <div className="px-12 pt-12">
              <h4 className="font-semibold text-lg text-pink-600 mb-2">
                Keeps growing
              </h4>
              <p className="font-medium text-gray-300 text-opacity-80 text-xl">
                <strong className="text-white mr-0.5">Noticed. </strong>
                There are thousands of unwanted substances - users will become more aware of their safety on the web.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/blockers-graph.webp"
                alt="Permit requests"
                height="291"
                className="w-full max-h-[291px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockers;