import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  UsersIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";

import CLImg from "../public/img/CL.png";
import MNIImg from "../public/img/MNI.png";

{
  /*  Chip Link */
}
<div className="flex items-center justify-center w-full lg:w-1/2">
  <div className="">
    <Image src={CLImg} width="516" height="400" alt="Hero Illustration" layout="intrinsic" loading="eager" placeholder="blur" />
  </div>
</div>;

const benefitOne = {
  title: "Chip Link",
  desc: "The Chip Link System offers a way to move past just an identification and make each microchip a secure key for horses and their handlers.",
  image: CLImg,

  bullets: [
    {
      title: "App",
      desc: "Web platform, iOS and Android app",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Hardware",
      desc: "Design with bluetooth low energy technology.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Analitycs and crashlytics",
      desc: "Monitoreo del comprtamiento de la app",
      icon: <CubeTransparentIcon />,
    },
  ],
};

{
  /*  Music not impossible */
}
const benefitTwo = {
  title: "Music not impossible",
  desc: "Music: Not Impossible is a Vibrotextile™ wearable technology that translates sound onto the skin through vibration. Inspired by the deaf community, this technology provides all users a unique and nuanced music experience.",
  image: MNIImg,
  bullets: [
    {
      title: "Hardware",
      desc: "Diseño e integracion de tecnologia inalambrica, ",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Wireless",
      desc: "",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "asd",
      desc: "XD. ",
      icon: <UsersIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
