"use client";

import { GetPanditDeviceShowcaseComposition } from "@/components/getpandit/GetPanditDeviceShowcaseComposition";
import { GetPanditHeroJourneyAtmosphere } from "@/components/getpandit/GetPanditHeroJourneyAtmosphere";
import { GetPanditShowcaseConnection } from "@/components/getpandit/GetPanditShowcaseConnection";

type GetPanditHeroInteractiveMockupProps = {
  urlBar: string;
};

export function GetPanditHeroInteractiveMockup({ urlBar }: GetPanditHeroInteractiveMockupProps) {
  return (
    <div
      className="getpandit-hero-showcase relative mx-auto w-full max-w-[40rem]"
      aria-label="GetPandit product story — search and compare on web, confirm on mobile"
    >
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-36 rounded-full bg-gradient-to-br from-electric-violet/12 via-electric-blue/8 to-electric-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 sm:hidden">
        <GetPanditHeroJourneyAtmosphere variant="horizontal" className="mb-4" />
        <ShowcaseDevices urlBar={urlBar} />
      </div>

      <div className="relative z-10 hidden items-start gap-3 sm:grid sm:grid-cols-[minmax(0,5.5rem)_minmax(0,1fr)] sm:gap-4">
        <GetPanditHeroJourneyAtmosphere variant="vertical" className="pt-0" />
        <ShowcaseDevices urlBar={urlBar} />
      </div>
    </div>
  );
}

function ShowcaseDevices({ urlBar }: { urlBar: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[23rem] sm:mx-0">
      <GetPanditShowcaseConnection />
      <GetPanditDeviceShowcaseComposition url={urlBar} variant="hero" />
    </div>
  );
}
