"use client";

import dynamic from "next/dynamic";

const DRCMap = dynamic(() => import("./DRCMap"), { ssr: false });

export default function DRCMapClient() {
  return <DRCMap />;
}
