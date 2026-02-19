import { type ReactNode } from "react";

import type { IconType } from "react-icons/lib";

interface PolicySectionProps {
  icon: IconType;
  title: string;
  image: string;
  reverse?: boolean;
  children: ReactNode;
  pt?:any
}
interface PolicyItem {
  icon: IconType;
  title: string;
  image: string;
  reverse?: boolean;
  content: string[];
}

export type { PolicySectionProps, PolicyItem };
