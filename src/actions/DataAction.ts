import { DataItem } from "@/models/DataModel";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "@/constants/data";
import {
  DataActionPayload,
  GetDataSuccessActionPayloadType,
  GetDataErrorActionPayloadType,
} from "@/actions/DataActionTypes";

export const getDataAction = (
  page: number,
  limits = 10
): DataActionPayload => ({
  type: FETCH_DATA,
  page,
  limits,
});

export const getDataSuccessAction = (
  data: DataItem[]
): GetDataSuccessActionPayloadType => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const getDataErrorAction = (
  error: string
): GetDataErrorActionPayloadType => ({
  type: FETCH_DATA_ERROR,
  error,
});
