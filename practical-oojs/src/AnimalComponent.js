import { client } from './FetchClient.js'

class AnimalComponent {
  constructor(animalObj) {
    this.animal = animalObj
  }

  handleDonate = () => {
    this.animal.donations += 10
    const span = this.findChildElement(".donation-count")
    span.textContent = this.animal.donations

    client.patch(`/animals/${this.animal.id}`, {
      donations: this.animal.donations
    })
  }

  handleDelete = () => {
    this.element.remove()
    client.delete(`/animals/${this.animal.id}`)
  }

  findChildElement(selector) {
    return this.element.querySelector(selector)
  }

  render(parentElement) {
    this.element = document.createElement("li")
    this.element.classList.add("card")
    this.element.innerHTML = `
      <div class="image">
        <img src="${this.animal.imageUrl}" alt="${this.animal.name}">
        <button class="button delete-button" data-action="delete">X</button>
      </div>
      <div class="content">
        <h4>${this.animal.name}</h4>
        <div class="donations">
          $<span class="donation-count">${this.animal.donations}</span> Donated
        </div>
        <p class="description">${this.animal.description}</p>
      </div>
      <button class="button donate-button" data-action="donate">
        Donate $10
      </button>
    `

    const dontateButton = this.findChildElement(".donate-button")
    dontateButton.addEventListener("click", this.handleDonate)

    const deleteButton = this.findChildElement(".delete-button")
    deleteButton.addEventListener("click", this.handleDelete)

    parentElement.append(this.element)
  }
}

export default AnimalComponent