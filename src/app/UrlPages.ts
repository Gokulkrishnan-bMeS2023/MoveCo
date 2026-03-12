import { lazy } from "react";
import type { AppRoute } from "./routes";
import { RouteName } from "./routeNames.ts";

export const UrlPages: AppRoute[] = [
  { path: RouteName.HOME, component: lazy(() => import("../pages/Home/Home")) },

  // About
  {
    path: RouteName.PRIVACY_POLICY,
    component: lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy")),
  },
  {
    path: RouteName.ABOUT_US,
    component: lazy(() => import("../pages/AboutUs/AboutMoveCo/AboutUs")),
  },
  {
    path: RouteName.OUR_INSURANCE,
    component: lazy(() => import("../pages/AboutUs/OurInsurance/OurInsurance")),
  },
  {
    path: RouteName.OUR_STANDARD,
    component: lazy(() => import("../pages/AboutUs/OurStandards/OurStandard")),
  },
  {
    path: RouteName.ASSOCIATE_CODE_OF_CONDUCT,
    component: lazy(
      () =>
        import("../pages/AboutUs/AssociateCodeofConduct/AssociateCodeofConduct"),
    ),
  },
  {
    path: RouteName.SUPPORTED_CHARITY,
    component: lazy(
      () => import("../pages/AboutUs/SupportedCharity/SupportedCharity"),
    ),
  },
  {
    path: RouteName.ASHLEY_WATROUS_FOUNDATION,
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/TheAshleyWatrousFoundation/TheAshleyWatrousFoundation"),
    ),
  },
  {
    path: RouteName.SENS_RESEARCH_FOUNDATION,
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/SensResearchFoundation/SensResearchFoundation"),
    ),
  },
  {
    path: RouteName.SCOTTISH_RITE_HOSPITAL,
    component: lazy(
      () =>
        import("../pages/AboutUs/SupportedCharity/ScottishRiteHospital/ScottishRiteHospital"),
    ),
  },
  {
    path: RouteName.JOB_APPLICATION,
    component: lazy(
      () => import("../pages/AboutUs/JobApplication/JobApplication"),
    ),
  },

  // Services
  {
    path: RouteName.PROFESSIONAL_PACKING,
    component: lazy(
      () =>
        import("../pages/services/ProfessionalPackingServices/ProfessionalPackingServices"),
    ),
  },
  {
    path: RouteName.STORAGE,
    component: lazy(() => import("../pages/services/Storage/Storage")),
  },
  {
    path: RouteName.IN_HOME_ESTIMATE,
    component: lazy(
      () => import("../pages/services/InHomeMoveEstimate/InHomeMoveEstimate"),
    ),
  },
  {
    path: RouteName.ONLINE_ESTIMATE,
    component: lazy(
      () =>
        import("../pages/services/InstantOnlineEstimate/InstantOnlineEstimate"),
    ),
  },
  {
    path: RouteName.PRODUCT_AND_SERVICES,
    component: lazy(
      () => import("../pages/services/ProductandServices/ProductandServices"),
    ),
  },

  // Shop
  {
    path: RouteName.PRODUCT,
    component: lazy(
      () => import("../pages/services/MovingPackingSupplies/Product"),
    ),
  },
  {
    path: RouteName.CART,
    component: lazy(
      () => import("../pages/services/MovingPackingSupplies/Cart"),
    ),
  },

  // Resources
  {
    path: RouteName.ADD_TESTIMONIAL,
    component: lazy(
      () => import("../pages/Resources/AddTestimonial/AddTestimonial"),
    ),
  },
  {
    path: RouteName.CLIENT_TESTIMONIAL,
    component: lazy(
      () => import("../pages/Resources/ClientTestimonial/ClientTestimonial"),
    ),
  },
  {
    path: RouteName.VIDEO_REVIEW,
    component: lazy(() => import("../pages/Resources/VideoReview/VideoReview")),
  },

  // Contact
  {
    path: RouteName.CONTACT_US,
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
  },

  // Protected
  {
    path: RouteName.MOVE_INFORMATION,
    protected: true,
    component: lazy(
      () =>
        import("../pages/services/InstantOnlineEstimate/pages/MoveInformation"),
    ),
  },
  {
    path: RouteName.INVENTORY,
    protected: true,
    component: lazy(
      () => import("../pages/services/InstantOnlineEstimate/pages/Inventory"),
    ),
  },
  {
    path: RouteName.CONFIRMATION,
    protected: true,
    component: lazy(
      () =>
        import("../pages/services/InstantOnlineEstimate/pages/Confirmation/index"),
    ),
  },
];
