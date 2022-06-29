export const incPlayerOne = () => async dispatch => {
    dispatch({
        type: 'INC_PLAYER_ONE_SCORE'
    })
}

export const decPlayerOne = () => async dispatch => {
    dispatch({
        type: 'DEC_PLAYER_ONE_SCORE'
    })
}

export const incPlayerTwo = () => async dispatch => {
    dispatch({
        type: 'INC_PLAYER_TWO_SCORE'
    })
}

export const decPlayerTwo = () => async dispatch => {
    dispatch({
        type: 'DEC_PLAYER_TWO_SCORE'
    })
}