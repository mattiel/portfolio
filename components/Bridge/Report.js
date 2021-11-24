import Phone from "@/components/Phone";

import React from 'react';

const Report = () => {
  return (
    <section className="my-32">
      {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
      {/*  <div className="py-8 flex justify-center order-2 lg:order-1">*/}
      {/*    <Phone isVideo source="/bridge/privacy-report.webm" />*/}
      {/*  </div>*/}
      {/*  <div className="flex">*/}
      {/*    <div className="flex justify-center h-full items-center relative">*/}
      {/*      <div className="block">*/}
      {/*        <h4 className="font-semibold text-blue-500 mb-2 text-lg">*/}
      {/*          Privacy Report*/}
      {/*        </h4>*/}
      {/*        <h3 className="text-gray-800 text-4xl font-bold leading-snug mb-4">*/}
      {/*          Clear overview of how Bridge is protecting privacy*/}
      {/*        </h3>*/}
      {/*        <p className="font-medium text-gray-500 text-xl mr-20">*/}
      {/*          <strong className="text-gray-800 mr-0.5">Relief. </strong>A*/}
      {/*          summary of blockers and permits provides brief overview of how*/}
      {/*          Bridge is protecting your privacy.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="flex relative flex-col w-[calc(100%-3rem)] h-[64rem]">
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="absolute w-[64rem] h-[64rem] bg-purple-300 rounded-full"></div>
          <div className="absolute w-[44rem] h-[44rem] bg-purple-400 rounded-full"></div>
          <div className="absolute w-[26rem] h-[26rem] bg-purple-500 rounded-full"></div>
          <Phone isVideo source="/bridge/privacy-report.webm" />
        </div>
        <div className="py-8 flex justify-center order-2 lg:order-1">
        </div>
      </div>
    </section>
  );
};

export default Report;