import type { MoveInformationDTO, MoveInformationErrors } from "../../types/DTOs";
import type { SelectOption } from "../../../InHomeMoveEstimate/selectOptionUtils";

export interface MoveInformationState {
  values: MoveInformationDTO;
  errors: MoveInformationErrors;
  moveSizeOptions: SelectOption[];
  timeOptions: SelectOption[];
  hearAboutOptions: SelectOption[];
  stateOptions: SelectOption[];
  stairsOptions: SelectOption[];
  doortoTruckOptions: SelectOption[];
}

export type { MoveInformationDTO, MoveInformationErrors, SelectOption };