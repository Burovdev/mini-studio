"use cleint";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="h-[450px] w-[384px] relative flex flex-col justify-end rounded-r-2xl items-center bg-card-gradient">
      <span
        className="absolute top-10 w-[267px] bg-title-gradient p-5 rounded-tl-2xl rounded-br-2xl"
        style={{
          boxShadow: `
            0px 2px 4px -1px #0000000F,
            0px 4px 6px -1px #7828C866
        `,
        }}
      >
        <h1 className="font-bold text-[16px] text-[#3E3ED8]">Hi, I am Purp!</h1>
        <p className="font-normal italic text-[16px] text-[#3E3ED8]">
          Your character will appear here as soon as it is ready!
        </p>
      </span>
      <Image
        src="/purp.png"
        className="w-[306px] object-contain"
        width={308}
        height={333}
        alt="Purp"
      />
    </section>
  );
};
