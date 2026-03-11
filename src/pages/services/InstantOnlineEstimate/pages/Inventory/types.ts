import type { InventorySection, MoveInformationDTO } from "../../types/DTOs";
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

export type { InventorySection, MoveInformationDTO };