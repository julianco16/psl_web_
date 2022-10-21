import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "xx",
  desc: "xx.",
  image: benefitOneImg,
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
  title: "Services",
  desc: "xxx.",
  image: benefitTwoImg,
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
