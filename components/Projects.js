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

import CLImg from "../public/img/ChipLink.png";
import MNIImg from "../public/img/MNI.png";

{
  /*  Chip Link */
}
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
    {
      title: "Crahslytics",
      desc: "Monitoreo del comprtamiento de la app",
      icon: <CubeTransparentIcon />,
    },
    {
      title: "Analitycs",
      desc: "Monitoreo del comprtamiento de la app",
      icon: <CubeTransparentIcon />,
    },
    {
      title: "Analitycs",
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
  desc: "Creating Music Equality for All. Música: Not Impossible es una tecnología portátil Vibrotextile™ que traduce el sonido en la piel a través de la vibración. Inspirada en la comunidad sorda, esta tecnología brinda a todos los usuarios una experiencia musical única y matizada.",
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
