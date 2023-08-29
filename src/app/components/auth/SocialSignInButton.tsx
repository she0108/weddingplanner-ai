"use client";

import { useSearchParams } from "next/navigation";
import { ClientSafeProvider, signIn } from "next-auth/react";
import Image from "next/image";

import naverLogo from "public/images/naverLogo.png";

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

export default function SocialSigninButton({ providers }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  console.log(searchParams);
  console.log(callbackUrl);

  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, { callbackUrl: callbackUrl || undefined })
            }
            className="flex flex-row justify-around items-center bg-[#03C75A] text-white font-base pl-16 pr-28 py-6 text-18 rounded-lg gap-x-10"
          >
            <Image src={naverLogo} width={36} alt="네이버 로고" />
            <span>네이버로 시작하기</span>
          </button>
        </div>
      ))}
    </div>
  );
}
