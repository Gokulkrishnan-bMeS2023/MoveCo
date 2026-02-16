import AshleyImg from "../../../assets/ashley-watrous.jpg";
import SensImg from "../../../assets/SENS.jpg";
import ScottishImg from "../../../assets/scottish-rite.jpg";

export const SUPPORTED_CHARITY_DATA = [
  {
    title: "The Ashley Watrous Foundation",
    description: `Dedicated to America’s positive future. Our children are our future. The problems of tomorrow can 
     only be confronted with well-educated, responsible, courageous and trustworthy people. A generation that does 
     not want what others have, but wants to create for themselves.`,
    image: AshleyImg,
    linkText: "Read more",
    linkHref: "/the-ashley-watrous-foundation",
    reverse: false,
  },
  {
    title: "SENS Research Foundation",
    description: `At SENS Research Foundation, we believe that a world free of age-related disease is possible. 
      That’s why we’re funding work at universities across the world and at our own Research Center in Mountain View, CA.
      Our research emphasizes the application of regenerative medicine to age-related disease, with the intent of repairing 
      underlying damage to the body’s tissues, cells, and molecules. Our goal is to help build the industry that will cure the diseases of aging.`,
    image: SensImg,
    linkText: "Read more",
    linkHref: "/sens-research-foundation",
    reverse: true,
  },
  {
    title: "Scottish Rite Hospital",
    description: `Every day world-renowned experts provide care, guidance and innovation to help kids run, jump and play.
      The Scottish Rite Hospital’s orthopedic specialists are at the forefront of their profession and are recognized globally for their leadership in:
      Providing extraordinary patient care. Treating a complete range of pediatric orthopedic conditions. Solving many of the world’s most complex orthopedic cases.
      Pioneering research and innovation of leading-edge technologies. Discovering genetic breakthroughs. Educating future leaders in pediatric orthopedics.`,
    image: ScottishImg,
    linkText: "Read more",
    linkHref: "/scottish-rite-hospital",
    reverse: false,
  },
];
