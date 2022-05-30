import { combineReducers } from "redux";
import app_reducer from "./app_reducer";
import auth_reducer from "./auth_reducer";
import reducer from "./reducer";

export default combineReducers( // function
    {                           // object
        reducer: reducer,
        app: app_reducer,
        auth: auth_reducer,

    }
)

