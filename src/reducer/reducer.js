import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as watch} from "./watch/watch";
import {reducer as user} from "./user/user";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.WATCH]: watch,
  [NameSpace.USER]: user,
});
