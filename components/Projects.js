import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  UsersIcon,
} from "@heroicons/react/outline";

import CLImg from "../public/img/ChipLink.png";
import MNIImg from "../public/img/MNI.png";

const benefitOne = {
  title: "Chip Link",
  desc: "The Chip Link System offers a way to move past just an identification and make each microchip a secure key for horses and their handlers.",
  image: CLImg,
  bullets: [
    {
      title: "App",
      desc: "iOS and Android app",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "xD",
      desc: "xxxx.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "xxxx",
      desc: "xx xx",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Music not impossible",
  desc: "Creating Music Equality for All. Música: Not Impossible es una tecnología portátil Vibrotextile™ que traduce el sonido en la piel a través de la vibración. Inspirada en la comunidad sorda, esta tecnología brinda a todos los usuarios una experiencia musical única y matizada.",
  image: MNIImg,
  bullets: [
    {
      title: "xx",
      desc: "hola.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "hoa",
      desc: "asd",
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
