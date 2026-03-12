import { RouteName } from "../../../app/routeNames";
import type { NavItem } from "./nav";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: RouteName.HOME },

  {
    label: "About Us",
    items: [
      { label: "About MoveCo", path: RouteName.ABOUT_US },
      { label: "Our Insurance", path: RouteName.OUR_INSURANCE },
      { label: "Our Standards", path: RouteName.OUR_STANDARD },
      { label: "Job Application", path: RouteName.JOB_APPLICATION },
      {
        label: "Associate Code of Conduct",
        path: RouteName.ASSOCIATE_CODE_OF_CONDUCT,
      },
      { label: "Supported Charity", path: RouteName.SUPPORTED_CHARITY },
    ],
  },

  {
    label: "Product & Services",
    items: [
      { label: "Instant Online Estimate", path: RouteName.ONLINE_ESTIMATE },
      { label: "In-Home Move Estimate", path: RouteName.IN_HOME_ESTIMATE },
      { label: "Moving & Packing Supplies", path: RouteName.PRODUCT },
      {
        label: "Professional Packing Services",
        path: RouteName.PROFESSIONAL_PACKING,
      },
      { label: "Storage", path: RouteName.STORAGE },
    ],
  },

  {
    label: "Resources",
    items: [
      { label: "Add Testimonial", path: RouteName.ADD_TESTIMONIAL },
      { label: "Client Testimonial", path: RouteName.CLIENT_TESTIMONIAL },
      { label: "Video Review", path: RouteName.VIDEO_REVIEW },
    ],
  },
];
