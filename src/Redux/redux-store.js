import {combineReducers, createStore} from "redux";
import firstReducer from "./first-reducer";
import fourthReducer from "./fourth-reducer";
import secondReducer from "./second-reducer";
import thirdReducer from "./third-reducer";

let reducers = combineReducers({
    fourthPage: fourthReducer,
    firstPage: firstReducer,
    secondPage: secondReducer,
    thirdPage: thirdReducer,
})

let store = createStore(reducers)
export default store;