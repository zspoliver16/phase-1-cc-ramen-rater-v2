// index.js

///DELIVERABLES
//See all ramen images in the div with the id of ramen-menu. When the page loads, fire a function called displayRamens that requests the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

fetch("http:localhost:3000/ramens")
     .then((resp) => resp.json())
     .then((data) => displayRamens(data))

  //Callbacks
// Click on an image from the #ramen-menu div and fire a callback called handleClick to see all the info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).//

const handleClick = (ramenArr) => {
  // Add code
  const ramenArr = document.querySelector("#new-ramen");

//console.log(ramenDetail)

  ramenDetail.innerHTML = `
  <p>${ramen.comment}<p>
  <p>Rating: ${ramen.rating}</p>
  `
};

//Attach a submit even listener to the new-ramen form using a function called addSubmitListener. After the submission, create a new ramen and add it to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.//

const addSubmitListener = () => {
  // Add code
  const form = document.querySelector("#submit-button")
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamen = {
      image: e.target.image.value,
      comment: e.target.comment.value,
      rating: e.target.rating.value,
      restaurant: e.target.restaurant.value,
      name: e.target.name.value
    };

    const ramenContainer = document.querySelector("#ramen-menu");
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.addEventListener("click", () => handleClick(newRamen));
    ramenContainer.appendChild(img);

  });
};

const displayRamens = (ramenArr) => {
  // Add code
  const ramenContainer = document.querySelector("#ramen-menu");
  ramenArr.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.addEventListenere("click", () => handleClick(ramen));
    ramenContainer.appendChild(img);

  });
};

const main = () => {
  
  };

displayRamens();
addSubmitListener();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
