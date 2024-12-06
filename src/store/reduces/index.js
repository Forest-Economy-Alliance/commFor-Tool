import { combineReducers } from "redux";
import AppUtils from "./AppUtils";
import AuthReducers from "./AuthReducers";
import TripUtils from "./TripUtils";

const reducers = combineReducers({
    appInfo:AppUtils,
    userInfo:AuthReducers,
    tripInfo:TripUtils
})

export default reducers;