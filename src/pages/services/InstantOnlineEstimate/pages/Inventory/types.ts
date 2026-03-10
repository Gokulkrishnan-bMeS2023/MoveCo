// sections/Inventory/types.ts
// ✅ All TypeScript types extracted from Inventory.tsx

import type { InventorySection, MoveInformationDTO } from "../../types/DTOs";

// quantities keyed by inventoryID (as string for sessionStorage compatibility)
export type Quantities = Record<string, number>;

export interface InventoryErrors {
  quantities?: string;
}

export interface InventoryState {
  quantities: Quantities;
  openItems: string[];
  errors: InventoryErrors;
  successMessage: string;
  inventorySections: InventorySection[];
  isLoading: boolean;
  values: MoveInformationDTO;
}

// Re-export for convenience so index.tsx only imports from "./types"
export type { InventorySection, MoveInformationDTO };