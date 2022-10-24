import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import CLImg from "../public/img/ChipLink.png";
import MNIImg from "../public/img/MNI.png";

const benefitOne = {
  title: "Chip Link",
  desc: "xx.",
  image: CLImg,
  bullets: [
    {
      title: "=D",
      desc: "XD",
      icon: <EmojiHappyIcon />,
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
  desc: "Creating Music Equality for All.",
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
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
