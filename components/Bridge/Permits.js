import Phone from "@/components/Phone";
import VisualWrapper from "@/components/VisualWrapper";
import Image from 'next/image'

const Permits = () => {
  return (
    <section
      className="layout full-bleed"
      data-toc-title="Permits"
      id="section-3"
    >
      {/*<section className="my-32">*/}
      {/*  <h4 className="font-semibold text-blue-500 mb-2 text-lg">*/}
      {/*    Secure sharing*/}
      {/*  </h4>*/}
      {/*  <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-8">*/}
      {/*    What if users take complete ownership of their data and only allow*/}
      {/*    requestors to use when it's needed?*/}
      {/*  </h3>*/}
      {/*  <p className="text-gray-700 text-xl mb-8 max-w-prose">*/}
      {/*    Personal data is stored on the Bridge instead of being stored at a*/}
      {/*    third party server. This way, companies don't have to secure each*/}
      {/*    and everyone's personal data and gives users sense of security of*/}
      {/*    holding their data within a space they trust.*/}
      {/*  </p>*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">*/}
      {/*    <div className="block pr-4">*/}
      {/*      <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">*/}
      {/*        Permits*/}
      {/*      </p>*/}
      {/*      <div className="pl-[1.125rem]">*/}
      {/*        <p className="text-gray-700 mb-4">*/}
      {/*          Show users a list of permissions they have permitted and let*/}
      {/*          them decide which ones they want to grant when the it's been*/}
      {/*          requested.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="block pr-4">*/}
      {/*      <p className="font-semibold text-gray-800 border-l-2 border-blue-500 pl-4 mb-2">*/}
      {/*        End-to-end encrpytion*/}
      {/*      </p>*/}
      {/*      <div className="pl-[1.125rem]">*/}
      {/*        <p className="text-gray-700 mb-4">*/}
      {/*          What about when permits are handed off to the requestors? They*/}
      {/*          still cannot access the data because of end-to-end encryption.*/}
      {/*          Many modern chat applications already use end-to-end*/}
      {/*          encryption to ensure that the data is safe and secure because*/}
      {/*          cannot be eavesdropped on.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="layout full-bleed">
        <div className="md:mx-12 mb-16 mt-32">
          <h2 className="text-green-600 font-bold text-6xl max-w-4xl mb-8">
            Complete awareness and ownership of personal information
          </h2>
          <p className="max-w-prose text-2xl text-gray-700 font-semibold">
            People want to take care of their sensitive data and want to be in control of it.
            Most people hate having to give out their information because it can be stolen and abused.
            What if requesters have to ask for permits whenever they need to access it and the users can revoke permits
            whenever they feel like it?
          </p>
        </div>
        <div className="full-bleed layout bg-gradient-to-br from-green-500 to-teal-600 mb-6">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="px-16 mb-16 md:mt-16 w-full md:w-[36rem] flex flex-col justify-center items-start flex-shrink-0">
              <img
                src="/bridge/section-icons/permit.svg"
                width="48"
                height="48"
                alt="Permit Icon"
                className="mb-4"
              />
              <h3 className="text-black text-opacity-70 text-4xl font-bold mb-4 leading-tight">
                Personal data sharing without storing in third-party servers
              </h3>
              <p className="font-medium text-white text-opacity-80 text-xl">
                <strong className="text-white mr-0.5">Checkout. </strong>
                {/* Companies can use Bridge's API to receive personal data without storing it in their servers. */}
                Users don't have to worry about how their data is stored and
                used by the requesters because it's end-to-end encrypted and APIs makes sure that it cannot be decrypted
                and stored without knowledge. It also provides clear information of what's being shared.
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
                  src="/bridge/permissions-detail.webp"
                  className="hidden md:inline-block mt-[10%] h-full max-w-[20rem] ml-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white w-full drop-shadow-sm relative overflow-hidden">
            <div className="px-12 pt-12">
              <h4 className="font-semibold text-lg text-green-600 mb-2">
                Decentralization
              </h4>
              <p className="font-medium text-gray-700 text-opacity-80 text-xl">
                <strong className="text-black mr-0.5">Self Hosted. </strong>
                Data is stored on Bridge instead of being stored elsewhere.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/data-permissions.webp"
                alt="Permit requests"
                height="329"
                className="w-full max-h-[329px]"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white w-full flex flex-col justify-between drop-shadow-sm relative overflow-hidden md:col-span-2">
            <div className="px-12 pt-12 flex-1">
              <h4 className="font-semibold text-lg text-green-600 mb-2">
                Clarity over what's being shared
              </h4>
              <p className="font-medium text-gray-700 text-opacity-80 text-xl">
                <strong className="text-black mr-0.5">Transparent. </strong>
                After giving permits to requesters, permissions show exactly what data is being shared and how it's
                being used by the requesters.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/permissions-control.webp"
                alt="Permit requests"
                height="329"
                className="max-h-[329px] max-w-none object-cover object-left"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white w-full flex flex-col justify-between drop-shadow-sm relative overflow-hidden md:col-span-2">
            <div className="px-12 pt-12 flex-1">
              <h4 className="font-semibold text-lg text-green-600 mb-2">
                Complete histories
              </h4>
              <p className="font-medium text-gray-700 text-opacity-80 text-xl">
                <strong className="text-black mr-0.5">Backtrack. </strong>
                After giving permits to requesters, permissions show exactly
                what data is being shared and how it's being used by the requesters.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/permissions-history.webp"
                alt="Permit grant histories"
                height="400"
                className="max-h-[329px] max-w-none object-cover object-left"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white w-full drop-shadow-sm relative overflow-hidden">
            <div className="px-12 pt-12">
              <h4 className="font-semibold text-lg text-green-600 mb-2">
                Easy revoke
              </h4>
              <p className="font-medium text-gray-700 text-opacity-80 text-xl">
                <strong className="text-black mr-0.5">Done. </strong>
                Don't feel like sharing? Revoke and done.
              </p>
            </div>
            <div className="mt-8">
              <img
                src="/bridge/permissions-revoke.webp"
                alt="Permit requests"
                height="400"
                className="w-full max-h-[400px]"
              />
            </div>
          </div>
        </div>
        {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
        {/*  <div className="flex">*/}
        {/*    <div className="flex justify-center h-full items-center relative">*/}
        {/*      <div className="block">*/}
        {/*        <h4 className="font-semibold text-blue-500 mb-2 text-lg">*/}
        {/*          Permits*/}
        {/*        </h4>*/}
        {/*        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">*/}
        {/*          Share personal data without storing in third-party servers*/}
        {/*        </h3>*/}
        {/*        <p className="font-medium text-gray-500 text-xl mr-20">*/}
        {/*          <strong className="text-gray-800 mr-0.5">Checkout. </strong>*/}
        {/*          /!* Companies can use Bridge's API to recieve personal data without storing it in their servers. *!/*/}
        {/*          Users don't have to worry about how their data is stored and*/}
        {/*          used by the requestors because it's end-to-end encrypted,*/}
        {/*          and provides clear information of what's being shared.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="py-8 flex justify-center">*/}
        {/*    <Phone isVideo source="/bridge/permit-request.webm" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>

      {/*<section className="my-32">*/}
      {/*  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">*/}
      {/*    <div className="flex lg:order-2">*/}
      {/*      <div className="flex justify-center h-full items-center relative">*/}
      {/*        <div className="block">*/}
      {/*          <h4 className="font-semibold text-blue-500 mb-2 text-lg">*/}
      {/*            Permissions*/}
      {/*          </h4>*/}
      {/*          <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">*/}
      {/*            Control grants given to requesters*/}
      {/*          </h3>*/}
      {/*          <p className="font-medium text-gray-500 text-xl mr-20">*/}
      {/*            <strong className="text-gray-800 mr-0.5">*/}
      {/*              Transparent.*/}
      {/*            </strong>*/}
      {/*            After giving permits to requesters, permissions show exactly*/}
      {/*            what data is being shared and how it's being used by the*/}
      {/*            requesters.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <VisualWrapper bgUrl="/bridge/gradient-2.png" justify="end" right>*/}
      {/*      <img*/}
      {/*        src="/bridge/permissions-main.png"*/}
      {/*        className="mt-[10%] h-full"*/}
      {/*      />*/}
      {/*      <img*/}
      {/*        src="/bridge/permissions-revoke-short.png"*/}
      {/*        className="h-full"*/}
      {/*      />*/}
      {/*    </VisualWrapper>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </section>
  );
};

export default Permits;