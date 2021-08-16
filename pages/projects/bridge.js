import React from 'react';
import Mockup from '@/components/Mockup'
import Layout from '@/components/Layout'
import Scroller from '@/components/Scroller'
import Card from '@/components/Card'
import Contact from '@/components/Contact'
import Hero from '@/components/Bridge/Hero'

import Link from 'next/link'

import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

const bridge = () => {
  return (
    <Layout>
      <Hero/>

      <section className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:py-8 relative inline-block">
           <div className="w-full lg:w-[60vw] h-[22rem] md:h-[32rem] max-w-screen-lg rounded-2xl overflow-hidden lg:absolute md:right-8 lg:transform -translate-y-1/2 top-1/2 p-8">
              <img src="/bridge/gradient-2.png" className="absolute left-0 top-0 w-full h-full"/>
              {/* <img src="/bridge/blockers-filters.png" className="absolute lg:right-[calc((425px*0.66666)+3vw)] top-[28%] h-full"/>
              <img src="/bridge/blockers-blocked.png" className="absolute lg:right-8 top-[10%] h-full"/> */}
              <div className="inline-flex absolute space-x-4 right-8 w-full h-full justify-center lg:justify-end items-start">
                <img src="/bridge/permissions-main.png" className="mt-[10%] h-full"/>
                <img src="/bridge/permissions-revoke-short.png" className="h-full"/>
              </div>"
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
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">Permits</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Share personal data without storing in third-party servers
                </h3>
                <p className="font-medium text-gray-500 text-xl mr-20">
                  <strong className="text-gray-800 mr-0.5">Checkout. </strong> 
                  {/* Companies can use Bridge's API to recieve personal data without storing it in their servers. */}
                  Users don't have to worry about how their data is stored and used by the requestors because it's end-to-end encrypted,
                  and provides clear information of what's being shared.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <Mockup source="/bridge/permit-request.mov"/>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:py-8 relative inline-block">
            <div className="w-full lg:w-[60vw] h-[22rem] md:h-[32rem] max-w-screen-lg rounded-2xl overflow-hidden lg:absolute md:right-8 lg:transform -translate-y-1/2 top-1/2 p-8">
              <img src="/bridge/gradient-1.png" className="absolute left-0 top-0 w-full h-full"/>
              {/* <img src="/bridge/blockers-filters.png" className="absolute lg:right-[calc((425px*0.66666)+3vw)] top-[28%] h-full"/>
              <img src="/bridge/blockers-blocked.png" className="absolute lg:right-8 top-[10%] h-full"/> */}
              <div className="inline-flex absolute space-x-4 right-8 w-full h-full justify-center lg:justify-end items-start">
                <img src="/bridge/blockers-filters.png" className="mt-[10%] h-full"/>
                <img src="/bridge/blockers-blocked.png" className="h-full"/>
              </div>"
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">Blockers</h4>
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
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="py-8">
            <Mockup source="/bridge/privacy-report.mov"/>
          </div>
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">Privacy Report</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Clear overview of how Bridge is protecting privacy
                </h3>
                <p className="font-medium text-gray-500 text-xl mr-20">
                  <strong className="text-gray-800 mr-0.5">Checkout. </strong> 
                  A summary of blockers and permits provides brief overview of how Bridge is protecting your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex">
            <div className="flex justify-center h-full items-center relative">
              <div className="block">
                <h4 className="font-semibold text-blue-500 mb-2 text-lg">Dashboard</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Widgets to help protect privacy and server
                </h3>
                <p className="font-medium text-gray-500 text-xl mr-20">
                  <strong className="text-gray-800 mr-0.5">Management. </strong> 
                  Bridge can be more than just cloud storage service and an escrow. Widgets help users manage their data and Bridge with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:py-8 relative inline-block">
            <div className="w-full lg:w-[60vw] h-[22rem] md:h-[32rem] max-w-screen-lg rounded-2xl overflow-hidden lg:absolute md:left-8 lg:transform -translate-y-1/2 top-1/2 p-8">
              <img src="/bridge/gradient-3.png" className="absolute right-0 top-0 w-full h-full"/>
              {/* <img src="/bridge/blockers-filters.png" className="absolute lg:right-[calc((425px*0.66666)+3vw)] top-[28%] h-full"/>
              <img src="/bridge/blockers-blocked.png" className="absolute lg:right-8 top-[10%] h-full"/> */}
              <div className="inline-flex absolute left-16 w-full h-full justify-center lg:justify-start items-start">
                <img src="/bridge/desktop-files-dark.png" className="ml-[10vw] h-full"/>
                <img src="/bridge/desktop-dashboard-light.png" className="absolute top-[20%] h-full"/>
              </div>"
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="flex mb-8">
          <div className="flex justify-center h-full items-center relative md:px-[10%]">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-blue-500 mb-2 text-lg text-center">Data Management</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4 text-center">
                More than just a cloud storage
              </h3>
              <p className="font-medium text-gray-500 text-xl text-center">
                The server will suggest file organization and space optimizations to keep the server running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="lg:py-8 relative inline-block h-[38.5rem] w-full overflow-hidden rounded-2xl mb-8">
            <div 
              className="w-full h-[26rem] md:h-[40rem] rounded-2xl overflow-hidden p-8 bg-cover flex"
              style={{backgroundImage: "url('/bridge/gradient-4.png')"}}
            >
              <div className="flex-1 w-full h-full overflow-hidden rounded-md"
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
                      <source src="/bridge/desktop-optimize.mov" type="video/mp4"></source>
                    </video>`
                  }}
                />
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
              Guidelines provide clear communication with developers, stakeholders or with designers to ensure quality and to ship features fast.
              Consistency in interfaceshelps users be more familiarized with the product as well.
            </p>
            <figure class="mb-2">
              <Zoom>
                <img src="/bridge/ds-spatial-system.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
              <Zoom>
                <img src="/bridge/ds-layout-system.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
              <Zoom>
                <img src="/bridge/ds-typography.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
              <Zoom>
                <img src="/bridge/ds-glyphs.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
              <Zoom>
                <img src="/bridge/ds-components-light.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
              <Zoom>
                <img src="/bridge/ds-components-dark.jpg" className="max-h-[32rem] w-full object-cover"/>
              </Zoom>
            </figure>
          </div>
        </div>
      </section>


      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Why</h4>
        <h3 className="text-gray-900 font-bold text-3xl md:text-4xl md:leading-normal mb-6">
          "Majority of Americans feel as if they have little control over data collected about them by companies and the government”<br/>
          <a 
            className="text-gray-400 text-lg text-right font-medium underline"
            href="https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/"
          >
            Pew Research Center
          </a>
        </h3>
        <p className="text-gray-700 text-xl mb-12">
          Companies collect and use users' data. Since everything is stored on servers users don't own, it's hidden from them and they can't see what companies do with it.
          Even if they are trustworthy and have been using data as mentioned on their policies, there are other issues to be dealt with such as attacks from hackers, data loss, etc.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Lack of trust</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                News articles sometimes reveal companies who failed to follow privacy laws and get penalized. 
                This is just a tip of the iceberg. Nobody knows what companies are exactly doing with users' data until they are busted.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Lack of responsibilities from data holders</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Companies have to deal with securities to keep numerous data about users. 
                No servers are completely protected and even big companies are getting hacked by hackers and users' information gets leaked online.
                Are the users really getting compensated from these attacks?
              </p>
            </div>
          </div>
        </div> */}
      </section>

      <section className="my-48">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Insights</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          Americans want their privacy to be respected, but there aren't any transparent solutions out in the market to solve these problems.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Lack of trust</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                News articles sometimes reveal companies who failed to follow privacy laws and get penalized. 
                This is just a tip of the iceberg. Nobody knows what companies are exactly doing with users' data until they are busted.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Lack of responsibilities from data holders</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Companies have to deal with securities to keep numerous data about users. 
                No servers are completely protected and even big companies are getting hacked by hackers and users' information gets leaked online.
                Are the users really getting compensated from these attacks?
              </p>
            </div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-700 mb-2 text-lg">What people say</h4>
        <Scroller>
          <div className="inline-flex flex-col w-[30rem] h-56 p-4 bg-white shadow-md rounded-xl">
            <div className="flex items-start">
              <div className="rounded-full w-12 h-12 mr-3 self-start flex-shrink-0">
                <img src="/bridge/avatar-michelle.jpg" className="w-full h-full"/>
              </div>
              <div className="w-full">
                <h3 className="text-gray-900 font-semibold text-lg">Michelle Lee</h3>
                <p className="text-gray-600 font-medium mb-4">Graduate Student</p>
                <p className="w-full whitespace-normal text-gray-700 text-lg">
                  “I don’t know how companies are using my data but <strong>it’s not something I can avoid because I have to use their services</strong>”
                </p>  
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col w-[30rem] h-56 p-4 bg-white shadow-md rounded-xl">
            <div className="flex items-start">
              <div className="rounded-full w-12 h-12 mr-3 self-start flex-shrink-0">
                <img src="/bridge/avatar-empty.jpg" className="w-full h-full"/>
              </div>
              <div className="w-full">
                <h3 className="text-gray-900 font-semibold text-lg">Anonymous</h3>
                <p className="text-gray-600 font-medium mb-4">Software Developer</p>
                <p className="w-full whitespace-normal text-gray-700 text-lg">
                  “Although I got nothing to hide, <strong>I feel insecure about storing and sharing data because I never know what they exactly do with it.</strong>”
                </p>  
              </div>
            </div>
          </div>
          
          <Link href="https://arstechnica.com/gadgets/2021/05/96-of-us-users-opt-out-of-app-tracking-in-ios-14-5-analytics-find/">
            <div className="inline-flex flex-col w-[30rem] h-56 p-4 bg-white shadow-md rounded-xl cursor-pointer">
              <div className="flex items-start">
                <div className="rounded-full w-12 h-12 mr-3 self-start flex-shrink-0">
                  <img src="/bridge/arstechnica.webp" className="w-full h-full"/>
                </div>
                <div className="w-full">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    ArsTechnica
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">c|net</p>
                  <p className="w-full whitespace-normal text-gray-700 text-lg">
                    “96% of US users opt out of app tracking in iOS 14.5, analytics find.”
                  </p>  
                </div>
              </div>
            </div>
          </Link>
          <div className="inline-flex flex-col w-[30rem] h-56 p-4 bg-white shadow-md rounded-xl invisible">
              <div className="flex items-start">
                <div className="rounded-full w-12 h-12 mr-3 self-start flex-shrink-0">
                  <img src="/bridge/arstechnica.webp" className="w-full h-full"/>
                </div>
                <div className="w-full">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    ArsTechnica
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">c|net</p>
                  <p className="w-full whitespace-normal text-gray-700 text-lg">
                    “96% of US users opt out of app tracking in iOS 14.5, analytics find.”
                  </p>  
                </div>
              </div>
            </div>
        </Scroller>
      </section>

      <section className="my-48">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Goals</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          Have transparency over how data is collected by the requesting companies and give users sense of security by providing options to own their personal data.
        </h3>
      </section>

      <section className="my-48">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Secure sharing</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          What if users take complete ownership of their data and only allow requestors to use when it's needed?
        </h3>
        <p className="text-gray-700 text-xl mb-8">
          Personal data is stored on the Bridge instead of being stored at a third party server. 
          This way, companies don't have to secure each and everyone's personal data and gives users sense of security of holding their data within a space they trust.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Permits</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Show users a list of permissions they have permitted and let them decide which ones they want to grant when the it's been requested.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">End-to-end encrpytion</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                What about when permits are handed off to the requestors? They still cannot access the data because of end-to-end encryption. 
                Many modern chat applications already use end-to-end encryption to ensure that the data is safe and secure because cannot be eavesdropped on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-48">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Blockers</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          How can users be safe from companies trying to track what they do online?
        </h3>
        <p className="text-gray-700 text-xl mb-8">
          Without having to install extra extensions and applications, blockers on a router level protect users from unwanted trackings, 
          privacy-invasive elements, and even malicious webistes while browsing on the internet or using applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">One time setup</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                <a href="https://github.com/gorhill/uBlock" className="text-blue-600 underline font-medium">uBlock origin</a>, an ad blocker for browsers,
                have set of rules that block trackers, ads, and maleware sites. It needs to be installed via extensions from supported browsers. However, this means
                everytime a user gets a new device, they need to install the extension. Bridge solve this problem because it handles web requests and is handled on the router level as long
                as the device is connected, it's protected.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Lack of responsibilities from data holders</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Companies have to deal with securities to keep numerous data about users. 
                No servers are completely protected and even big companies are getting hacked by hackers and users' information gets leaked online.
                Are the users really getting compensated from these attacks?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-48">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Secure Ownership</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          How can users be safely store their personal data and files?
        </h3>
        <p className="text-gray-700 text-xl mb-8">
          Since everything is stored in Bridge, there are no other services that users have to trust. It gives users transparencies on how the data lives on the server,
          what information is exactly being shared, and how it's being used.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Decentralization of Servers</p>
            <div className="pl-[1.125rem]">
              Bridge is only connected to home network and only allowed users can connect to it. Since there are servers that Bridge connects to, hackers can't attack a central
              server and retrieve many users' data.
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">Encrpytions</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                All files are encrypted with AES-256 in the storage. Even if someone is able to get physical copy of the storage, it’s impossible for them to decrypt it.
                Files are also sandboxed in a container, which prevents any malicious codes to execute within the server without you knowing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </Layout>
  );
};

export default bridge;