import { client } from "./FetchClient.js"
import AnimalComponent from "./AnimalComponent.js"

const animalList = document.querySelector("#animal-list")

const initialize = () => {
  client.get("/animals")
    .then(animalArray => {
      animalArray.forEach(animalObj => {
        // create a new instance of an AnimalComponent
        const animalComponent = new AnimalComponent(animalObj)
        
        // render the component to the page
        animalComponent.render(animalList)
      })
    })
}

initialize()
