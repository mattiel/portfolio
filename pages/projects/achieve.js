import TOC from '@/components/TOC'
import Hero from '@/components/Achieve/Hero'
import Insights from '@/components/Tribe/Insights'
import Opportunity from '@/components/Tribe/Opportunity'

import Layout from '@/components/Layout'
import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'
import { useRef, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const Achieve = () => {

  return (
    <Layout>
      <Hero/>

      <FullBleed className="py-32 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project Team</h3>
              <p className="text-gray-700">
                Mattie Lee<br/>
                Stacey Jang<br/>
                Akshay Agrawal<br/>
                Joyce Chiu
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Roles</h3>
              <p className="text-gray-700">
                UI/UX Design<br/>
                UX Research<br/>
                User Research<br/>
                User Testing<br/>
              </p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Date</h3>
              <p className="text-gray-700">Summer 2017</p>
            </div>
            <div className="">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">Project</h3>
              <p className="text-gray-700">
                ArtCenter College of Design, Interaction Design 3 (User Research)
              </p>
            </div>
          </div>
        </Container>
      </FullBleed>

      <FullBleed className="py-32 bg-gray-900">
        <Container>
          <h4 className="font-semibold text-indigo-500 mb-2 text-lg">Our challange</h4>
          <h3 className="text-white text-4xl font-bold leading-snug mb-4">
            How can we use an media platform to solve problems for low-income Americans?
          </h3>
          <p className="text-gray-300 mb-9 text-lg">
            This was a team project for Interaction Design 3 (UX research) class and we were looking to find out how the media platform 
            can be used by low-income Americans through research and testing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="block pr-4">
              <p className="font-semibold text-white border-l-2 border-indigo-600 pl-4 mb-2">Why</p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-300 mb-4">
                  We wanted to know what kind of struggles the low-income individuals are facing and find suitable educational media platform for them.
                </p>
              </div>
            </div>

            <div className="block pr-4">
              <p className="font-semibold text-white border-l-2 border-indigo-600 pl-4 mb-2">Target Audience</p>
              <div className="pl-[1.125rem]">
                <p className="text-gray-300 mb-4">
                  American citizens who earn minimum wage or below.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </FullBleed>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-4xl text-gray-800 mb-8">Preliminary Research</h2>
        <img src="/achieve/qualitative-data-1.jpg" alt="Quantitative research summary" className="mb-2 max-h-[32rem] w-full object-cover"/>
        <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">What we learned from quantatative research</figcaption>

        <p className="text-gray-700">
          We analyzed unemployment rates and earnings by educational attainment and found out that the higher degree a person has
          it's likely for them to have higher median weekly earnings. We assumed that a lot of the people were stuck with lower
          income because they don't have a degree.
        </p>
      </section>


      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-indigo-700 mb-2 text-lg">Our First Assumption</h4>
        <quote className="text-gray-900 font-bold text-3xl md:text-4xl md:leading-normal mb-8">
          "Americans with low income are stuck with minimum wage because they cant't get higher education"
        </quote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Problem</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                A degree is required for higher income therefore our target users would want at least bachelors degree.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Possible Solutions</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                We thought of brining educational media platform like Youtube for degree earning and networking with current professionals in their area of interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-4xl text-gray-800 mb-8">Qualitative Research</h2>
        <img src="/achieve/behavior-continuum.jpg" alt="Behavior analysis of interviewees struggling with low income" className="mb-2 max-h-[32rem] w-full object-cover"/>
        <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">We mapped out interviewee's behaviors and grouped similarities</figcaption>

        <p className="text-gray-700 mb-12">
          We interviewed 8 individuals with low income and mapped out their common behaviors to find similarities. 
          This helped us figure out their common pain points so that we would have clear target audiance for the project.
        </p>

      </section>

      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-indigo-700 mb-6 text-lg">Insights from behavior analysis</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="block pr-4">
            <div className="space-x-2 flex mb-4">
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Mi</div>
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">So</div>
            </div>
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Michael, Sophie</p>
            <div className="pl-[1.125rem]">
              <ul className="text-gray-700 mb-4 list-disc leading-loose">
                <li>Doesn't think higher education level is important to get more money</li>
                <li>Very  open to learn new skills</li>
                <li>Does a lot of side jobs and even work on weekends; no free time</li>
                <li>Worried about future because current job is unstable</li>
              </ul>
            </div>
          </div>

          <div className="block pr-4">
            <div className="space-x-2 flex mb-4">
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Ke</div>
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">To</div>
            </div>
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Kelly, Tom</p>
            <div className="pl-[1.125rem]">
            <ul className="text-gray-700 mb-4 list-disc leading-loose">
                <li>Doesn't think higher education level is what they need for better job</li>
                <li>Doesn't have busy schedule</li>
                <li>Not satisfied with their current job</li>
                <li>Given up looking for jobs</li>
              </ul>
            </div>
          </div>
          <div className="block pr-4">
            <div className="space-x-2 flex mb-4">
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Ar</div>
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Br</div>
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Sa</div>
              <div className="w-8 h-8 font-medium bg-indigo-100 text-indigo-900 grid place-items-center">Em</div>
            </div>
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Arina, Bryan, Sarah, Emily</p>
            <div className="pl-[1.125rem]">
            <ul className="text-gray-700 mb-4 list-disc leading-loose">
                <li>They think occasionally, a degree helps to get a job but comes with a lot of debt</li>
                <li>Open to learn new skills and seek to get trained</li>
                <li>Frequent job searches</li>
                <li>Work multiple jobs to pay for their expenses</li>
                <li>Worried about their current and future</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-indigo-700 mb-2 text-lg">Insights from Interviewing Employers</h4>
        <quote className="text-gray-900 font-bold text-3xl md:text-4xl md:leading-normal mb-6">
          "It will be better for us to hire people with good reputation and is willing to work on this job. 
          Also, it is time consuming for us to train new employees with budget and time limitation."<br/>
          <div className="text-gray-400 text-lg text-right font-medium">David, an owner of shoe company</div>
        </quote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Pain points</p>
            <div className="pl-[1.125rem]">
              <ul className="text-gray-700 mb-4 list-disc leading-loose">
                <li>Employees tend to leave mid-training</li>
                <li>Limited employee training time and budget</li>
                <li>Lack of alignment between applicant skills and job requirements</li>
              </ul>
            </div>
          </div>
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Goals</p>
            <div className="pl-[1.125rem]">
              <ul className="text-gray-700 mb-4 list-disc leading-loose">
                <li>To recruit employees with passion or pre-existing experience of the job</li>
                <li>To recruit employees willing to get trained prior to start working</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h4 className="font-semibold text-indigo-700 mb-2 text-lg">Our Pivot</h4>
        <quote className="text-gray-900 font-bold text-3xl md:text-4xl md:leading-normal mb-6">
          “Good education background means more chance to get a job at better place and better position but it doesn’t mean a lot of money.”<br/>
          <div className="text-gray-400 text-lg text-right font-medium">Michael, a worker at pet adoption center</div>
        </quote>
        <p className="text-gray-700 mb-12">
          Our target audience had goals to earn a higher income, but aren't sure how to achieve that goal. They are open to learn new skills,
          however don't want to pay for college education because it would put them into debt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Real problem</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Many Americans with low income can't advance from current economical status because they are unsure of what to do.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Our mission</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                To inspire and encourage low-income individuals to get trained and be employed with higher and satisfying income.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-4xl text-gray-800 mb-8">Proposed solution</h2>
        <h3 className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-indigo-600 to-indigo-700 text-3xl md:text-4xl md:leading-normal mb-12">
          Teach technical skills that don't require a college degree or apprenticeships.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">No financial obligation</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                Free for every training services including training videos, tests, and interviews.
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Subcontract with companies</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
                We subcontract with many companies and offer jobs from those companies
              </p>
            </div>
          </div>

          <div className="block pr-4">
            <p className="font-semibold text-gray-800 border-l-2 border-indigo-700 pl-4 mb-2">Flexible time management</p>
            <div className="pl-[1.125rem]">
              <p className="text-gray-700 mb-4">
               Finish training on your own schedule and get ready for tests and interviews in a period of time given.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col my-32">
        <h2 className="font-bold text-2xl text-gray-800 mb-8">Testing and Refinements</h2>
        <img src="/achieve/testing.jpg" alt="User testing and feedback" className="mb-2 max-h-[32rem] w-full object-cover"/>
        <figcaption class="text-gray-500 italic text-sm mb-4 w-full text-center">Photos of our team testing possible users</figcaption>

        <p className="text-gray-700">
          
        </p>
      </section>

      {/* <FullBleed>
        <section 
          className="bg-gray-900 transform skew-y-6 overflow-hidden"
          // style={{backgroundImage: "url(/tomato/globe.png)"}}
        >
          <div className="transform -skew-y-6 h-[40rem] flex justify-center">
            <Container>
              <div className="flex flex-col-reverse md:flex-row gap-3 place-items-center h-full">
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
      </FullBleed> */}


    </Layout>
  )
}

export default Achieve