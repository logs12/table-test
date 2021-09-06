import { DataItem } from "@/models/DataModel";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "@/constants/data";

export type DataActionPayload = {
  readonly type: typeof FETCH_DATA;
  readonly page: number;
  readonly limits?: number;
};
export interface DataAction {
  (page: number, limits?: number): DataActionPayload;
}

export type GetDataSuccessActionPayloadType = {
  readonly type: typeof FETCH_DATA_SUCCESS;
  readonly data: DataItem[];
};
export interface DataSuccessAction {
  (data: DataItem[]): GetDataSuccessActionPayloadType;
}

export type GetDataErrorActionPayloadType = {
  readonly type: typeof FETCH_DATA_ERROR;
  readonly error: string;
};
export interface DataErrorAction {
  (error): GetDataErrorActionPayloadType;
}

export type TDataAction =
  | DataActionPayload
  | GetDataSuccessActionPayloadType
  | GetDataErrorActionPayloadType;
