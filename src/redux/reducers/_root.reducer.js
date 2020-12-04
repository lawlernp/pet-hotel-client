import { combineReducers } from "redux";
import pets from "./pets.reducer";



const rootReducer = combineReducers({
  pets,
});

export default rootReducer;
