import Section from "@/components/Section";
import {
  BadgeCheckIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";

const Why = () => {
  return (
    <Section
      options={{
        id: "section-2",
        dataTitle: "Why Bridge",
      }}
      className="bg-black"
    >
      <section className="py-32 relative">
        <div className="mb-12">
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-bold text-5xl max-w-4xl bg-clip-text text-center text-transparent bg-gradient-to-br from-blue-400 to-pink-600 mb-8">
              Meet Bridge. A trustworthy personal server at home for privacy.
            </h2>
            <p className="mx-auto text-center font-medium text-gray-400 text-xl max-w-prose">
              <strong className="text-white">
                Bridge lives at home and is a trusted personal server and a
                router that is designed to protect users' privacy.{" "}
              </strong>
              Everything's transparent with Bridge. Data is completely owned by
              the user, protects their privacy, and most importantly, it helps
              them feel secure on the internet.
            </p>
          </div>
          <img
            src="/bridge/router-living-room.jpg"
            className="rounded-2xl mx-auto"
            style={{
              imageMask:
                "linear-gradient(to right, black 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="rounded-3xl flex flex-col space-between bg-gray-900 text-white w-full relative overflow-hidden col-span-1">
            <div className="px-12 pt-12">
              <BookOpenIcon className="h-12 w-12 mb-4 text-green-400" />
              <h5 className="font-semibold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-green-400">
                Open-Sourced for trust
              </h5>
              <p className="text-gray-300">
                All the development is open-sourced and available to the public.
                Which means users can trust the software that runs inside Bridge
                to protect their privacy.
              </p>
            </div>
            <img
              src="/bridge/intro-oss.webp"
              alt="Text editor and terminal"
              className="w-full mt-auto"
            />
          </div>
          <div className="rounded-3xl flex flex-col space-between bg-gray-900 text-white w-full relative overflow-hidden md:col-span-2">
            <div className="px-12 pt-12">
              <BadgeCheckIcon className="h-12 w-12 mb-4 text-yellow-300" />
              <h5 className="font-semibold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-500">
                Private data permissions
              </h5>
              <p className="text-gray-300">
                Third parties can request to use user's personal data which is
                securely stored in Bridge. Bridge acts a host for
                sensitive data. It is end-to-end encrypted and API only allows
                requesters to view the data which is only accessible at the time of request with the
                one-time key that is given by the protocol. Which means that the data is read-only,
                and cannot be stored in third-party servers.
              </p>
            </div>
            <img
              src="/bridge/intro-permits.webp"
              alt="Permit requests"
              className="max-h-[329px] max-w-none object-cover object-left"
            />
          </div>
          <div className="rounded-3xl flex flex-col space-between bg-gray-900 text-white w-full relative overflow-hidden md:col-span-2">
            <div className="px-12 pt-12">
              <DatabaseIcon className="h-12 w-12 mb-4 text-blue-500" />
              <h5 className="font-semibold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600">
                Network attached storage
              </h5>
              <p className="text-gray-300">
                Any data can be stored in the Bridge and is encrypted by
                default. The files can be accessed from anywhere just like any
                other cloud storage service providers like Google Drive or
                Dropbox. However, only whitelisted users are allowed to access
                the data. Even if the data is somehow breached, the hacker will
                never have access to the file because it's encrypted.
              </p>
            </div>
            <img
              src="/bridge/intro-nas.webp"
              alt="NAS "
              className="max-h-[329px] max-w-none object-cover object-left"
            />
          </div>
          <div className="rounded-3xl flex flex-col space-between bg-gray-900 text-white w-full relative overflow-hidden shadow-inner">
            <div className="px-12 pt-12">
              <ShieldCheckIcon className="h-12 w-12 mb-4 text-pink-600" />
              <h5 className="font-semibold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-purple-600">
                Blocking at a router level
              </h5>
              <p className="text-gray-300">
                No additional installation of apps required. Any device that
                connects to Bridge is protected by the router because web
                requests are handled at the router level.
              </p>
            </div>
            <img
              src="/bridge/intro-blocker.webp"
              alt="Webpage blocked example from blocker"
              className="w-full mt-auto"
            />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Why;
