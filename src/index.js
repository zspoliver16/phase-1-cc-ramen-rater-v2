function displayRamens() {
  fetch("http://localhost:3000/ramens")
   .then((resp) => resp.json())
   .then((data) => {
    const imgContainer = document.querySelector('#ramen-menu')
    

    data.forEach((ramenObj) => {
      const card = document.createElement('div')
      card.classList.add('ramen-card')

      const name = document.createElement('h5')
      name.textContent = ramenObj.name
      card.appendChild(name)

      const rest = document.createElement('h6')
      rest.textContent = ramenObj.restaurant;
      card.appendChild(rest)

      const rat = document.createElement('h7')
      rat.textContent = `Rating: ${ramenObj.rating}`
      card.appendChild(rat)

      const comment = document.createElement('h8')
      comment.textContent = `Comment: ${ramenObj.comment}`
      card.appendChild(comment)

      const img = document.createElement('img')
      img.src = ramenObj.image 
      card.appendChild(img)

      img.addEventListener('click', () => handleClick(ramenObj))

      imgContainer.appendChild(card)


    })
   })

}

function handleClick(ramenObj) {
  const ramenDetail = document.querySelector('#ramen-detail')
  ramenDetail.innerHTML = `
    <h2>${ramenObj.name}</h2>
    <p><b>Restaurant:</b> ${ramenObj.restaurant}</p>
    <p><b>Rating:</b> ${ramenObj.rating}</p>
    <p><b>Comment:</b> ${ramenObj.comment}</p>
    <img src="${ramenObj.image}" alt="${ramenObj.name}">`
}

function addSubmitListener() {
  const form = document.querySelector('#new-ramen')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.elements['name'].value
    const restaurant = form.elements['restaurant'].value
    const rating = form.elements['rating'].value
    const comment = form.elements['comment'].value
    const image = form.elements['image'].value

    const newRamen = {
      name: name,
      restaurant: restaurant,
      rating: rating,
      comment: comment,
      image: image
    }

    displayNewRamen(newRamen)

  })
}

function main() {

displayRamens()
addSubmitListener()
}

document.addEventListener('DOMContentLoaded', main)