import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "./staff";
import { Departments } from "./department";
import { StaffsSalary } from "./staffSalary";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsSalary: StaffsSalary,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
