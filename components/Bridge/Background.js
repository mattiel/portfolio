import Scroller from "@/components/Scroller";
import QuoteCard from "@/components/QuoteCard";
import Section from "@/components/Section";
import Link from "next/link";
import Chat from "@/components/Chat"

import {
  BanIcon,
  ExclamationCircleIcon,
  DotsCircleHorizontalIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline"

const UserInsights = () => {
  const trustMessages = [
    {
      sender: "Mattie",
      text: "Do you believe that the companies who hold your data are using it soley for your expected purposes?",
      avatar: {
        path: "/avatars/mattie.webp"
      },
      isSelf: true,
    },
    {
      sender: "Michelle Lee",
      text: "I don't think so. I don't trust them.",
      avatar: {
        path: "/bridge/avatar-michelle.jpg"
      },
      isSelf: false
    },
    {
      sender: "Mattie",
      text: "Why don't you trust them?",
      avatar: {
        path: "/avatars/mattie.webp"
      },
      isSelf: true,
    },
    {
      sender: "Michelle Lee",
      text: "I read on the news that a lot of the companies are selling my information.",
      avatar: {
        path: "/bridge/avatar-michelle.jpg"
      },
      isSelf: false
    },
    {
      sender: "Mattie",
      text: "How does that make you feel?",
      avatar: {
        path: "/avatars/mattie.webp"
      },
      isSelf: true,
    },
    {
      sender: "Michelle Lee",
      text: "I feel invaded. I don't want anyone to access my private data and also be monetized.",
      avatar: {
        path: "/bridge/avatar-michelle.jpg"
      },
      isSelf: false
    }
  ]
  
  const resMessages = [
    {
      sender: "Mattie",
      text: "Where do you keep your private data? Do you use any cloud storage services?",
      avatar: {
        path: "/avatars/mattie.webp"
      },
      isSelf: true,
    },
    {
      sender: "Steven Ryuske",
      text: "I use iCloud and don't upload anything private on it. I keep everything sensitive stored on paper at home.",
      avatar: {
        path: "/avatars/steven.webp"
      },
      isSelf: false
    },
    {
      sender: "Mattie",
      text: "Why are you keeping sensitive information in physical forms at home?",
      avatar: {
        path: "/avatars/mattie.webp"
      },
      isSelf: true,
    },
    {
      sender: "Steven Ryuske",
      text: "I’ve never been hacked and had personal information leaked before. I do it as a preventative measure to keep my data private.",
      avatar: {
        path: "/avatars/steven.webp"
      },
      isSelf: false
    }
  ]

  return (
    <div className="my-32">
      <div className="md:mx-12">
        <h6 className="font-semibold text-gray-500 mb-4">
          User Insights
        </h6>
        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8 max-w-3xl">
          People want their privacy to be protected and be in control of their data.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="rounded-3xl bg-white w-full drop-shadow-sm relative overflow-hidden smooth-edge-b">
          <div className="px-12 pt-12">
            <p className="font-semibold text-lg text-gray-800 mb-2">
              Lack of trust
            </p>
            <div className="">
              <p className="text-gray-700 text-lg mb-4">
                News articles sometimes reveal companies which have failed to follow
                privacy laws and get penalized. This is just a tip of the
                iceberg. Nobody knows what companies are exactly doing with
                users' data until they are busted.
              </p>
            </div>
          </div>
          <Chat messages={trustMessages}/>
        </div>

        <div className="rounded-3xl bg-white w-full drop-shadow-sm relative overflow-hidden smooth-edge-b">
          <div className="px-12 pt-12">
            <p className="font-semibold text-lg text-gray-800 mb-2">
              Fear of hacks
            </p>
            <div className="">
              <p className="text-gray-700 text-lg mb-4">
                Companies have to keep their servers scure. However, no servers are completely protected and even big
                companies are getting hacked which results in users' information getting leaked. Are the users really getting compensated
                from these attacks?
              </p>
            </div>
          </div>
          <Chat messages={resMessages}/>
        </div>
      </div>
      <h4 className="font-semibold text-gray-700 mx-12 mb-2 text-lg">
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
          quote="Sometimes I feel like companies give out information to the government and government can use that to track you."
          emph="They could use those information against you."
          avatar="/avatars/steven.webp"
          name="Steven Ryuske"
          occupation="Restaurant Server"
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
    </div>
  )
}

const QuantativeData = () => {
  return (
    <section className="my-32">
      <div className="md:ml-12">
        <h4 className="font-semibold text-gray-500 mb-4">
          Quantitative data
        </h4>
        <blockquote className="text-gray-900 font-bold text-3xl md:text-4xl mb-6 max-w-4xl">
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

      </div>
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
              <data className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-800">
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
  )
}

const Background = () => {
  return (
    <Section
      options={{
        id: "section-1",
        dataTitle: "Background",
        dataDesc:
          "Here's why I've started a project on designing Bridge to relieve concerns which might arise when sharing sensitive information with the third parties, browsing the internet, and storing data in a trustworthy location.",
      }}
    >
      <QuantativeData />
      <UserInsights />
    </Section>
  );
};

export default Background;
