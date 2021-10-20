import React from "react";
import Layout from "@/components/Layout";
import Scroller from "@/components/Scroller";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero from "@/components/Bridge/Hero";
import TOC from "@/components/TOC";
import Phone from "@/components/Phone";

import Background from "@/components/Bridge/Background";
import Why from "@/components/Bridge/Why";
import WorkInProgress from "@/components/WorkInProgress";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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

const bridge = () => {
  return (
    <Layout dark>
      <WorkInProgress />
      <Hero />
      <TOC />
      <Background />
      <Why />

      <section
        className="layout full-bleed"
        data-toc-title="Data Ownership"
        id="section-3"
      >
        <section className="my-32">
          <h4 className="font-semibold text-blue-500 mb-2 text-lg">
            Secure sharing
          </h4>
          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
            What if users take complete ownership of their data and only allow
            requestors to use when it's needed?
          </h3>
          <p className="text-gray-700 text-xl mb-8 max-w-prose">
            Personal data is stored on the Bridge instead of being stored at a
            third party server. This way, companies don't have to secure each
            and everyone's personal data and gives users sense of security of
            holding their data within a space they trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                Permits
              </p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  Show users a list of permissions they have permitted and let
                  them decide which ones they want to grant when the it's been
                  requested.
                </p>
              </div>
            </div>

            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                End-to-end encrpytion
              </p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  What about when permits are handed off to the requestors? They
                  still cannot access the data because of end-to-end encryption.
                  Many modern chat applications already use end-to-end
                  encryption to ensure that the data is safe and secure because
                  cannot be eavesdropped on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex justify-center h-full items-center relative">
                <div className="block">
                  <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                    Permits
                  </h4>
                  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                    Share personal data without storing in third-party servers
                  </h3>
                  <p className="font-medium text-gray-500 text-xl mr-20">
                    <strong className="text-gray-800 mr-0.5">Checkout. </strong>
                    {/* Companies can use Bridge's API to recieve personal data without storing it in their servers. */}
                    Users don't have to worry about how their data is stored and
                    used by the requestors because it's end-to-end encrypted,
                    and provides clear information of what's being shared.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 flex justify-center">
              <Phone isVideo source="/bridge/permit-request.webm" />
            </div>
          </div>
        </section>

        <section className="my-32">
          <div className="bg-gradient-to-br flex flex-col-reverse from-green-400 to-blue-700 rounded-3xl md:flex-row">
            <div className="px-16 my-16 w-full md:w-[28rem] flex flex-col justify-center">
              <img
                src="/bridge/section-icons/permit.svg"
                width="48"
                height="48"
                alt="Permit Icon"
                className="mb-4"
              />
              <h3 className="text-black text-opacity-70 text-4xl font-bold mb-4 leading-tight">
                Share personal data without storing in third-party servers
              </h3>
              <p className="font-medium text-white text-opacity-80 text-xl">
                <strong className="text-white mr-0.5">Checkout. </strong>
                {/* Companies can use Bridge's API to recieve personal data without storing it in their servers. */}
                Users don't have to worry about how their data is stored and
                used by the requestors because it's end-to-end encrypted, and
                provides clear information of what's being shared.
              </p>
            </div>
            <div className="h-[48rem] flex-1 relative w-full flex justify-center items-center my-16">
              <div className="inline-flex items-center justify-end">
                <Phone
                  isVideo
                  source="/bridge/permit-request.webm"
                  maxWidth="max-w-[18rem]"
                  className="w-[20rem]"
                />
                <img
                  src="/bridge/permissions-main.png"
                  className="hidden md:inline-block mt-[10%] h-full max-w-[20rem] ml-6"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex justify-center h-full items-center relative">
                <div className="block">
                  <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                    Permits
                  </h4>
                  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                    Share personal data without storing in third-party servers
                  </h3>
                  <p className="font-medium text-gray-500 text-xl mr-20">
                    <strong className="text-gray-800 mr-0.5">Checkout. </strong>
                    {/* Companies can use Bridge's API to recieve personal data without storing it in their servers. */}
                    Users don't have to worry about how their data is stored and
                    used by the requestors because it's end-to-end encrypted,
                    and provides clear information of what's being shared.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 flex justify-center">
              <Phone isVideo source="/bridge/permit-request.webm" />
            </div>
          </div>
        </section>

        <section className="my-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex lg:order-2">
              <div className="flex justify-center h-full items-center relative">
                <div className="block">
                  <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                    Permissions
                  </h4>
                  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                    Control grants given to requestors
                  </h3>
                  <p className="font-medium text-gray-500 text-xl mr-20">
                    <strong className="text-gray-800 mr-0.5">
                      Transparent.{" "}
                    </strong>
                    After giving permits to requestors, permissions show exactly
                    what data is being shared and how it's being used by the
                    requestors.
                  </p>
                </div>
              </div>
            </div>
            <VisualWrapper bgUrl="/bridge/gradient-2.png" justify="end" right>
              <img
                src="/bridge/permissions-main.png"
                className="mt-[10%] h-full"
              />
              <img
                src="/bridge/permissions-revoke-short.png"
                className="h-full"
              />
            </VisualWrapper>
          </div>
        </section>
      </section>
      {/* <section className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:py-8 relative inline-block">
            <div className="w-full lg:w-[60vw] h-[22rem] md:h-[32rem] max-w-screen-lg rounded-2xl overflow-hidden lg:absolute md:right-8 lg:transform -translate-y-1/2 top-1/2 p-8">
              <img src="/bridge/gradient-2.png" className="absolute left-0 top-0 w-full h-full"/>
              <div className="inline-flex absolute space-x-4 right-8 w-full h-full justify-center lg:justify-end items-start">
                <img src="/bridge/permissions-main.png" className="mt-[10%] h-full"/>
                <img src="/bridge/permissions-revoke-short.png" className="h-full"/>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">Permissions</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  A content blocker at router level which requires no additional setup
                </h3>
                <p className="font-medium text-gray-500 text-xl mr-20">
                  <strong className="text-gray-800 mr-0.5">Peace. </strong> 
                  Blockers protect you from unwanted trackings and privacy-invasive elements while browsing on the internet or using applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className="layout full-bleed"
        data-toc-title="Protection"
        id="section-4"
      >
        <section className="my-32">
          <h4 className="font-semibold text-blue-500 mb-2 text-lg">Blockers</h4>
          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
            How can users be safe from companies trying to track what they do
            online?
          </h3>
          <p className="text-gray-700 text-xl mb-8 max-w-prose">
            Without having to install extra extensions and applications,
            blockers on a router level protect users from unwanted trackings,
            privacy-invasive elements, and even malicious webistes while
            browsing on the internet or using applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                One time setup
              </p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  <a
                    href="https://github.com/gorhill/uBlock"
                    className="text-blue-600 underline font-medium"
                  >
                    uBlock origin
                  </a>
                  , an ad blocker for browsers, have set of rules that block
                  trackers, ads, and maleware sites. It needs to be installed
                  via extensions from supported browsers. However, this means
                  everytime a user gets a new device, they need to install the
                  extension. Bridge solve this problem because it handles web
                  requests and is handled on the router level as long as the
                  device is connected, it's protected.
                </p>
              </div>
            </div>

            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                Lack of responsibilities from data holders
              </p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  Companies have to deal with securities to keep numerous data
                  about users. No servers are completely protected and even big
                  companies are getting hacked and users' information gets
                  leaked online. Are the users really getting compensated from
                  these attacks?
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="py-32 full-bleed">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VisualWrapper bgUrl="/bridge/gradient-1.png">
              <img
                src="/bridge/blockers-filters.png"
                className="mt-[10%] h-full"
              />
              <img src="/bridge/blockers-blocked.png" className="h-full" />
            </VisualWrapper>
            <div className="flex">
              <div className="flex justify-center h-full items-center relative">
                <div className="block">
                  <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                    Blockers
                  </h4>
                  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                    A content blocker at router level which requires no
                    additional setup
                  </h3>
                  <p className="font-medium text-gray-500 text-xl mr-20">
                    <strong className="text-gray-800 mr-0.5">Peace. </strong>
                    Blockers protect you from unwanted trackings and
                    privacy-invasive elements while browsing on the internet or
                    using applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="py-8 flex justify-center order-2 lg:order-1">
            <Phone isVideo source="/bridge/privacy-report.webm" />
          </div>
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                  Privacy Report
                </h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Clear overview of how Bridge is protecting privacy
                </h3>
                <p className="font-medium text-gray-500 text-xl mr-20">
                  <strong className="text-gray-800 mr-0.5">Relief. </strong>A
                  summary of blockers and permits provides brief overview of how
                  Bridge is protecting your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 full-bleed">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex justify-center h-full items-center relative">
                <div className="block">
                  <h4 className="font-semibold text-blue-500 mb-2 text-lg">
                    Dashboard
                  </h4>
                  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                    Widgets to help protect privacy and server
                  </h3>
                  <p className="font-medium text-gray-500 text-xl mr-20">
                    <strong className="text-gray-800 mr-0.5">
                      Management.{" "}
                    </strong>
                    Bridge can be more than just cloud storage service and an
                    escrow. Widgets help users manage their data and Bridge with
                    ease.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:py-8 relative inline-block">
              <VisualWrapper bgUrl="/bridge/gradient-3.png">
                <img
                  src="/bridge/desktop-files-dark.png"
                  className="max-w-none ml-[15vw] h-full"
                />
                <img
                  src="/bridge/desktop-dashboard-light.png"
                  className="max-w-none absolute top-[20%] h-full"
                />
              </VisualWrapper>
            </div>
          </div>
        </Container>
      </section>

      <section className="flex justify-center flex-col py-32">
        <div className="flex mb-8">
          <div className="flex justify-center h-full items-center relative md:px-[10%]">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-blue-500 mb-2 text-lg text-center">
                Data Management
              </h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4 text-center">
                More than just a cloud storage
              </h3>
              <p className="font-medium text-gray-500 text-xl text-center">
                The server will suggest file organization and space
                optimizations to keep the server running smoothly and
                efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:py-8 relative inline-flex justify-center overflow-hidden rounded-2xl mb-8">
          <div className="inline-block relative order-1 h-[24rem] md:h-[38rem] min-w-0">
            <div
              className={`
                inline-block w-full max-w-screen-lg rounded-2xl overflow-hidden bg-cover bg-top-left p-8
                md:right-8
                lg:w-[60vw]
              `}
              style={{ backgroundImage: `url('/bridge/gradient-4.png')` }}
            >
              <div
                className={`inline-flex space-x-4 w-full relative h-full items-start justify-center`}
              >
                <div
                  className="flex-1 w-full h-full overflow-hidden webkit-fix-overflow rounded-md"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <video 
                      webkit-playsinline 
                      playsinline
                      width="960"
                      height="512"
                      preload="auto"
                      autoplay
                      muted
                      loop
                      className="max-h-full rounded-md object-scale-down overflow-hidden flex-1"
                    >
                      <source src="/bridge/desktop-optimize.webm" type="video/webm"></source>
                    </video>`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Design System
            </h3>
            <p className="text-gray-700 text-lg mb-12 lg:pr-[33%]">
              Guidelines provide clear communication with developers,
              stakeholders or with designers to ensure quality and to ship
              features fast. Consistency in interfaceshelps users be more
              familiarized with the product as well.
            </p>
            <figure className="mb-2">
              <Zoom>
                <img
                  src="/bridge/ds-spatial-system.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
              <Zoom>
                <img
                  src="/bridge/ds-layout-system.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
              <Zoom>
                <img
                  src="/bridge/ds-typography.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
              <Zoom>
                <img
                  src="/bridge/ds-glyphs.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
              <Zoom>
                <img
                  src="/bridge/ds-components-light.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
              <Zoom>
                <img
                  src="/bridge/ds-components-dark.jpg"
                  className="w-full object-cover"
                />
              </Zoom>
            </figure>
          </div>
        </div>
      </section>

      <section className="my-32">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">
          Secure Ownership
        </h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          How can users safely store and share their personal data and files?
        </h3>
        <p className="text-gray-700 text-xl mb-8 max-w-prose">
          Since everything is stored in Bridge, there are no other services that
          users have to trust. It gives users transparencies on how the data
          lives on the server, what information is exactly being shared, and how
          it's being used.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
              Decentralization of Servers
            </p>
            <div className="pl-[1.125rem]">
              Bridge is only connected to home network and only allowed users
              can connect to it. Since there are servers that Bridge connects
              to, hackers can't attack a central server and retrieve many users'
              data.
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
              Encrpytions
            </p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                All files are encrypted with AES-256 in the storage. Even if
                someone is able to get physical copy of the storage, it’s
                impossible for them to decrypt it. Files are also sandboxed in a
                container, which prevents any malicious codes to execute within
                the server without you knowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
          Next Steps
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <p className="text-gray-700 text-xl mb-8 max-w-prose">
            There are still many things that can be done to make Bridge better.
            There should be ways for other developers to join in and ship
            extensions for the Bridge users. Exploring ways of authentication
            process without a confirmation email, or even without a password
            seems like a good start.
          </p>
          <div className="grid grid-cols-1 gap-8">
            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                Extensibility
              </p>
              <div className="pl-[1.125rem]">
                Provide Software Development Kits (SDKs) to allow developers to
                build and ship extensions to Bridge. This will provide broader
                range of tools for data on the server. There are infinite
                possibilities.
              </div>
            </div>

            <div className="block pr-4">
              <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
                Credentials
              </p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-700 mb-4">
                  Logins are still very old school - users need to use a
                  password to log in. Bridge will provide a way to store
                  credentials in a secure way, and find a way to perhaps
                  authenticate users without a password by having unique
                  passwords for each unique users and have the authentication
                  process seamlessly done on the router, without having to enter
                  a login screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </Layout>
  );
};

export default bridge;
