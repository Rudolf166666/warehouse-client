import { combineReducers } from "redux";
import { warehouseApi } from "./warehouseApi";

const reducers = combineReducers({
  [warehouseApi.reducerPath]: warehouseApi.reducer,
});

export const apiMiddleware = [warehouseApi.middleware];
export default reducers;
