import type { SelectOption } from "../../../../../utils/selectOptionUtils";
import type {
  MoveInformationDTO,
  MoveInformationErrors,
} from "../../types/DTOs";

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
