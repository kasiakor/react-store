import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

//functions that create action object, must have type property to specify the type of action
export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});
