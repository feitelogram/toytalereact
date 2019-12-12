import React, { Component } from 'react'

export default class ToyForn extends Component {
    render() {
      let styleAndy = {
        textAlign: "center"
      }
        return (
          <div>
            <div id='toy-header'>
    <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" alt="toy-header"/>
  </div>

  <div className="container">
    <form className="add-toy-form" >
      <h3>Create a toy!</h3>

      <input type="text" name="name" value="" placeholder="Enter a toy's name..." class="input-text"/>
      <br/>
      <input type="text" name="image" value="" placeholder="Enter a toy's image URL..." class="input-text"/>
      <br/>
      <input type="submit" name="submit" value="Create New Toy" class="submit"/>
    </form>
  </div>
  <p style={styleAndy} >Andy needs your help! <button id='new-toy-btn'>Add a new toy!</button></p>

  </div>
        )
    }
}
