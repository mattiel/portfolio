import Scroller from "@/components/Scroller";
import QuoteCard from "@/components/QuoteCard";
import Section from "@/components/Section";
import Link from "next/link";
import Fade from "react-reveal/Fade";

import {
  BanIcon,
  ExclamationCircleIcon,
  DotsCircleHorizontalIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";

const Background = () => {
  return (
    <Section
      options={{
        id: "section-1",
        dataTitle: "Background",
        dataDesc:
          "Here's why I've started a project on designing Bridge to relieve concerns which might arise when sharing sensitive information with the third parties, browsing the internet, and storing data in a trustworthy location.",
        number: "01",
      }}
    >
      <Fade bottom cascade>
        <section className="my-32">
          <h4 className="font-semibold text-blue-500 mb-2 text-lg">
            Quantatative data
          </h4>
          <blockquote className="text-gray-900 font-bold text-3xl md:text-4xl mb-6">
            <q className="leading-snug">
              Majority of Americans feel as if they have little control over data
              collected about them by companies and the government
            </q>
            <br />
            <a
              className="text-gray-500 text-lg text-right font-medium underline"
              href="https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/"
            >
              Pew Research Center
            </a>
          </blockquote>
          <p className="text-gray-700 text-xl mb-12 max-w-prose">
            Companies collect and use users' data. Since everything is stored on
            servers users don't own, it's hidden from them and they can't see what
            companies do with it. Even if they are trustworthy and have been using
            data as mentioned on their policies, there are other issues to be
            dealt with such as attacks from hackers, data loss, etc.
          </p>
          <h4 className="font-semibold text-lg text-gray-700 mb-4">
            Responders of the survey by Pew Research Center say
          </h4>
          <Scroller>
            <div className="inline-block max-w-full w-[26rem] p-8 bg-white shadow-md rounded-xl">
              <div className="text-gray-900 mb-6 whitespace-normal">
                <DotsCircleHorizontalIcon className="w-9 h-9 mb-4" />
                <h5 className="font-semibold text-xl">
                  Lack of understanding about data use
                </h5>
                <p className="text-gray-600">
                  They have very little/no understanding about what ___ do/does
                  with the data collected.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Companies</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-700">
                    59%
                  </data>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Government</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-800">
                    78%
                  </data>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-full w-[26rem] p-8 bg-white shadow-md rounded-xl">
              <div className="text-gray-900 mb-6 whitespace-normal">
                <BanIcon className="w-9 h-9 mb-4" />
                <h5 className="font-semibold text-xl">Lack of control</h5>
                <p className="text-gray-600">
                  They have very little/no control over the data ____ collect(s)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Companies</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-800">
                    81%
                  </data>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Government</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-800">
                    84%
                  </data>
                </div>
              </div>
            </div>
            <div className="inline-block max-w-full w-[26rem] p-8 bg-white shadow-md rounded-xl">
              <div className="text-gray-900 mb-6 whitespace-normal">
                <ExclamationCircleIcon className="w-9 h-9 mb-4" />
                <h5 className="font-semibold text-xl">Concern over data use</h5>
                <p className="text-gray-600">
                  They are very/somewhat concerned about how ___ use(s) the data
                  collected
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Companies</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-800">
                    79%
                  </data>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500">Government</h6>
                  <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-800">
                    65%
                  </data>
                </div>
              </div>
            </div>
          </Scroller>
      </section>
      </Fade>

      <section className="my-32">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Insights</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          Americans want their privacy to be respected, but there aren't any
          transparent solutions out in the market to solve these problems.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">
              Lack of trust
            </p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                News articles sometimes reveal companies who failed to follow
                privacy laws and get penalized. This is just a tip of the
                iceberg. Nobody knows what companies are exactly doing with
                users' data until they are busted.
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
                companies are getting hacked by hackers and users' information
                gets leaked online. Are the users really getting compensated
                from these attacks?
              </p>
            </div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-700 mb-2 text-lg">
          What people say
        </h4>
        <Scroller>
          <QuoteCard
            quote="I don't know how companies are using my data but"
            emph="it's not something I can avoid because I have to use their services."
            avatar="/bridge/avatar-michelle.jpg"
            name="Michelle Lee"
            occupation="Graduate Student"
          />
          <QuoteCard
            quote="I don’t use DNA insight services because the government"
            emph="can access my personal information without my consent."
            avatar="/bridge/avatar-jimmy.jpg"
            name="Jimmy Ong"
            occupation="Accountant"
          />
          <QuoteCard
            quote="I got nothing to hide. But"
            emph="I feel insecure about storing and sharing data because I never know what they exactly do with it."
            avatar="/bridge/avatar-empty.jpg"
            name="Anonymous"
            occupation="Software Developer"
          />

          <Link href="https://arstechnica.com/gadgets/2021/05/96-of-us-users-opt-out-of-app-tracking-in-ios-14-5-analytics-find/">
            <QuoteCard
              quote="96% of US users opt out of app tracking in iOS 14.5, analytics find."
              avatar="/bridge/arstechnica.webp"
              name="ArsTechnica"
              occupation="Software Developer"
            />
          </Link>
        </Scroller>
      </section>

      <section className="my-32">
        <h4 className="font-semibold text-blue-500 mb-2 text-lg">Goals</h4>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">
          Have transparency over how data is collected by the requesting
          companies and give users sense of security by providing options to own
          their personal data.
        </h3>
      </section>
    </Section>
  );
};

export default Background;
