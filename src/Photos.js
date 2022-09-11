const photoAction = (() => {
  const makePhotos = () => {
    right.innerHTML = "";
    backIcon.style.display = "none";


    nav_contact.classList.remove("chosenLi");
    nav_home.classList.remove("chosenLi")
    nav_blog.classList.remove("chosenLi");
    nav_photos.classList.add("chosenLi");

    const container = document.createElement("div");
    //container.classList.add("opacity");
    container.classList.add("flex-column");
    container.classList.add("change");
    //container.style.outline = "2px solid white"
    container.style.height = "60%";
    container.style.width = "60%";
    container.style.marginTop = "2%";
    container.style.marginLeft = "5%";
    container.style.padding = "5%";
    right.appendChild(container);   

    const photo = document.createElement("img");
    photo.style.width = "90%";
    photo.style.height = "90%";
    photo.style.margin = "5px";
    photo.style.display = "none";
    container.appendChild(photo);


    async function getGif () {
      const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=AB1Q7N5UIzTk5LDFiN5WQkWvm9H3P7iL&s=cats", { mode: "cors" });
      const responseToJson = await response.json();
      photo.src = responseToJson.data.images.original.url;
      photo.style.display = "block";
      photo.classList.add("height");
    }

    const button = document.createElement("button");
    button.classList.add("kitty-button");
    button.textContent = "MEOW!"
    button.style.fontSize = "clamp(0.5rem, 1vw, 1.5rem)";
    button.addEventListener('click', getGif);
    container.appendChild(button);
  };

  return {
    makePhotos,
  };
})();

export default photoAction;
