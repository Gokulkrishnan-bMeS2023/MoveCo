import { FiPackage, FiFileText } from "react-icons/fi";

export const PACKING_OPTIONS = [
  {
    id: 1,
    icon: FiPackage,
    title: "Option 1",
    description:
      "A flat rate based on all items being seen in person by one of our drivers. We will come out to your home/office and provide a guaranteed price.",
  },
  {
    id: 2,
    icon: FiFileText,
    title: "Option 2",
    description:
      "We can pack your house/office on a per box basis. All paper, tape and labor is included in the flat rate per box.",
  },
];

export const PACKING_RATES = [
  { boxType: "Book box", size: "1.5 cu/ft", rate: "$8.00 per box" },
  { boxType: "Medium box", size: "3 cu/ft", rate: "$9.00 per box" },
  { boxType: "Dish pack", size: "5.2 cu/ft", rate: "$25.00 per box" },
  { boxType: "Wardrobe box", size: "N/A", rate: "$18.00 per box" },
  { boxType: "Picture boxes", size: "N/A", rate: "$15.00 per box" },
  { boxType: "Unpacking a box", size: "N/A", rate: "$7.00 per box" },
];
