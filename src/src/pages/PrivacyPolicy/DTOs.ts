import { type ReactNode } from "react";

interface PolicySectionProps {
  title: string;
  image: string;
  reverse?: boolean;
  children: ReactNode;
  pt?: any;
}
interface PolicyItem {
  title: string;
  image: string;
  reverse?: boolean;
  content: string[];
}

export type { PolicySectionProps, PolicyItem };
