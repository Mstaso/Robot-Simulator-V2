document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  //add listener to cap keyboard press
  // if key is up/down/left/right than call move function accordingly
  // create Li and add it to the DOM
  // add a click listener on the move button to move the robot according to li at top of list
  // remove the li from teh list

  const movesContainer = document.querySelector('#moves-container')
  const moveButton = document.querySelector('#move-button')

  function createLi(direction){
    const li = document.createElement("li")
    li.textConent = direction
    movesContainer.append(li)
  }

  document.addEventListener("keydown", function(e){
    console.log(e)
    if(e.key === "ArrowLeft"){
      createLi("left")
    } else if(e.key === "ArrowRight"){
      createLi("right")
    } else if(e.key === "ArrowDown"){
      createLi("down")
    } else if(e.key === "ArrowUp"){
      createLi("up")
    } else if(e.key === "Backspace"){
      console.log('delete')
    }
    if (directionsPresent()){
    movesContainer.lastChild.remove()
    } else {
      alert("No Directions Present")
    }
  })

  moveButton.addEventListener("click", function (e){
    if (directionsPresent()){
      const directionli = document.querySelector("li")
      const direction = directionli.textContent
      directionli.remove()
      moveButton(direction)
    } else {
      alert("No Directions Present")
    }
  })

  function directionsPresent(){
    return !!document.querySelector('li')
  }
})
