import React from 'react'
import { connect } from 'react-redux'
import { incPlayerOne, decPlayerOne, incPlayerTwo, decPlayerTwo } from './Actions'

const App = ({playerOne, playerTwo}) => {
  return (
    <div>
      <h1>Player One Details</h1>
      <p>Name: {playerOne.name} | {' '} Score: {playerOne.score}</p> <br />
      <button onClick={() => incPlayerOne()}>Increment</button>
      <button onClick={() => decPlayerOne()}>Decrement</button>
       <hr />
      <h1>Player Two Details</h1>
      <p>Name: {playerTwo.name} | {' '} Score: {playerTwo.score}</p> <br />
      <button onClick={() => incPlayerTwo()}>Increment</button>
      <button onClick={() => decPlayerTwo()}>Decrement</button>
       <hr />
    </div>
  )
}

const mapStateToProps = state => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo
})


export default connect(mapStateToProps, {incPlayerOne, decPlayerOne, incPlayerTwo, decPlayerTwo})(App);