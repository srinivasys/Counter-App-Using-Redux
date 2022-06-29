const initialState = {
    name: 'Leo',
    score: 90
}

export default function PlayerTwoReducer(state=initialState, action){
    const {type, payload} = action

    switch(type) {
        case 'INC_PLAYER_TWO_SCORE':
            return {...state, score: state.score + 1}
        case 'DEC_PLAYER_TWO_SCORE':
            return {...state, score: state.score - 1}
        default:
            return state
    }
}