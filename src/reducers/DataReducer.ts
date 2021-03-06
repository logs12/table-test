import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "@/constants/data";

import * as DataModel from "@/models/DataModel";
import { TDataAction } from "@/actions/DataActionTypes";

export function dataReducer(
  state: DataModel.DataState = DataModel.initialState.state,
  action: TDataAction
): DataModel.DataState {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.data],
        isPending: false,
      };
    }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isPending: false,
      };
    default:
      return state;
  }
}
