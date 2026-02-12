interface PackingOption {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number }>;
}

export type { PackingOption };
