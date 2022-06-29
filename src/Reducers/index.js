import { combineReducers } from "redux";
import PlayerOneReducer from "./PlayerOne";
import PlayerTwoReducer from "./PlayerTwo";

const reducer = combineReducers({
    playerOne: PlayerOneReducer,
    playerTwo: PlayerTwoReducer
})

export default reducer