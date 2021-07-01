import TOC from '@/components/TOC'
import Hero from '@/components/Tribe/Hero'
import Insights from '@/components/Tribe/Insights'
import Opportunity from '@/components/Tribe/Opportunity'

import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'
import { useRef, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const Tomato = () => {

  return (
    <Layout>
      {/* <TOC /> */}
      <Hero />

      <FullBleed className="py-32 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project Team</h3>
              <p className="text-gray-700">
                Nico Ramirez (Product Design)<br/>
                Nishit Gupta (Product Design)<br/>
                Ophelia Chiu (Graphic Design)<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Roles</h3>
              <p className="text-gray-700">
                UI/UX Design<br/>
                Functional Prototyping<br/>
                Storyboarding<br/>
                User Flow<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Date</h3>
              <p className="text-gray-700">April 13, 2020 - Present</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Company</h3>
              <p className="text-gray-700">Sponsored Project <br/> ArtCenter x HP</p>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed>
        <section 
          className="bg-gray-900 transform skew-y-6 overflow-hidden"
          // style={{backgroundImage: "url(/tomato/globe.png)"}}
        >
          <div className="transform -skew-y-6 h-[40rem] flex justify-center">
            <Container>
              <div className="flex flex-col-reverse md:flex-row gap-3 place-items-center h-full">
                <div className="flex-1 grid place-items-center relative rotate-loop -bottom-1/4 md:bottom-0">
                    <div className="absolute left border-4 border-pink-500 w-64 h-64 rounded-3xl"></div>
                    <div className="absolute left border-4 border-blue-500 w-64 h-64 rounded-3xl rotate-[18deg]"></div>
                    <div className="absolute left border-4 border-yellow-500 w-64 h-64 rounded-3xl rotate-[36deg]"></div>
                    <div className="absolute left border-4 border-green-500 w-64 h-64 rounded-3xl rotate-[48deg]"></div>
                    <div className="absolute left border-4 border-red-500 w-64 h-64 rounded-3xl rotate-[66deg]"></div>
                </div>
                <div className="flex-1 mt-32 md:mt-0">
                  <h4 className="font-semibold text-green-500 mb-2 text-lg">Why</h4>
                  <h3 className="text-white text-4xl font-bold leading-snug mb-4">
                    Generation-Z is becoming more accustomed to interacting digitally
                  </h3>
                  <p className="text-gray-200">
                    We are targeting specific users who are losing physical connection with the environment and other people.
                    Tribe aims to represent a leap in neutralizing digital device interactions and breaking free from screens 
                    and mobile phone addiction.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </FullBleed>

      <Insights/>
      <Opportunity/>

      <FullBleed className="my-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-green-500 mb-2 text-lg">Beacon</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                A pin for self expression
              </h3>
              <p className="text-gray-600">
                Beacon collects interactions to show daily recaps and highlights of the day. 
                Our proposed app presents a summary of the user’s interactions that can be reviewed at the end of the day, 
                silencing the stream of constant notifications throughout the day.
              </p>
            </div>
            <div className="grid grid-cols-2 place-items-center items-stretch overflow-hidden p-8">
              <img src="/tribe/beacon-1.webp" className="object-scale-down"/>
              <img src="/tribe/beacon-2.webp" className="object-scale-down"/>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed className="my-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-green-500 mb-2 text-lg">Halo</h4>
              <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                A jewelry in disguise
              </h3>
              <p className="text-gray-600">
                Halo displays important notifications and exchanges contact information during 
                handshakes with haptic feedback for confirmation.
              </p>
            </div>
            <div className="flex items-center p-8">
              <img src="/tribe/halo.png" className="object-scale-down"/>
            </div>
          </div>
        </Container>
      </FullBleed>


      <section class="my-32">
        <div className="grid grid-cols-1 gap-8 mb-8 items-center">
          <div className="flex-1">
            <h4 className="font-semibold text-green-500 mb-2 text-lg">Interactions</h4>
            <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
              Natural Contact Exchange
            </h3>
            <img src="/tribe/handshake.jpg" className="max-h-[32rem] w-full object-cover mb-8"/>
            <p className="text-gray-700 text-lg mb-4">
              Through natural human interactions such as handshakes and fist bumps, contacts can exchange information seamlessly. 
            </p>
          </div>
        </div> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Detection</p>
            <div className="pl-[1.125rem]">
              {/* <strong className="text-2xl text-green-600 font-bold mb-4 leading-loose">40+</strong> */}
              <p className="text-gray-700 mb-4">
                Halo detects handshake gesture
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Notification</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Halo vibrates and displays an icon for confirmation.
              </p>
            </div>
          </div>

          <div className="block">
            <p className="font-semibold text-gray-800 border-l-2 border-green-500 pl-4 mb-2">Confirmation</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Beacon shows contact exchange icon to confirm both of their contacts have been exchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div class="flex justify-center h-full items-center relative">
              <div className="flex items-center justify-center flex-0 h-full mr-16 absolute -left-12">
                <div className="absolute w-1 bg-green-600 rounded-full rounded-b-none h-full items-center justify-center"></div>
                <div className="absolute bg-white w-6 h-6 border-4 border-green-600 rounded-full mb-12"></div>
              </div>
              <div className="block">
                <h4 className="font-semibold text-green-500 mb-2 text-lg">Connect</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Daily recap and timestamps
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  A summary of interactions, the people you meet and the verbal commitments you make are saved on a timeline. 
                </p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <img src="/tribe/recap-2.png" className="w-full flex-0"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex">
            <div class="flex justify-center h-full items-center relative">
              <div className="flex items-center justify-center flex-0 h-full mr-16 absolute -left-12">
                <div className="absolute w-1 bg-green-600 rounded-full rounded-b-none h-full items-center justify-center"></div>
                <div className="absolute bg-white w-6 h-6 border-4 border-green-600 rounded-full mb-12"></div>
              </div>
              <div className="block">
                <h4 className="font-semibold text-green-500 mb-2 text-lg">Represent</h4>
                <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
                  Connected
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  A summary of interactions, the people you meet and the verbal commitments you make are saved on a timeline. 
                </p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <img src="/tribe/badges.png" className="w-full"/>
          </div>
        </div>
      </section>

      <section className="my-32">
        <div className="flex-1 mb-6">
          <h4 className="font-semibold text-green-500 mb-2 text-lg">Outreach</h4>
          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">
            Managing customers without a problem
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Saepe quo ab sequi illo aut vero eaque, assumenda laboriosam et iusto sunt, 
            necessitatibus maxime! Nemo, eius! Quod molestiae culpa eveniet natus!
          </p>
        </div>
        <img src="/tomato/slip.png"/>
      </section>
    </Layout>
  )
}

export default Tomato