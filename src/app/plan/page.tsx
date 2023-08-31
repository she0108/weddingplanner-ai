import Image from "next/image";

import planBg from "public/images/plan_bg_3.png";
import WeddingPlanInitiation from "../sections/plan/WeddingPlanInitiation";

export default function PlanSettingPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Image src={planBg} fill objectFit={"cover"} alt="배경화면" />
      <WeddingPlanInitiation />
    </div>
  );
}
