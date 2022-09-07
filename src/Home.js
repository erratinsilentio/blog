const homeAction = (() => {
  const makeHome = () => {
    right.innerHTML = "";
    right.style.justifyContent = "center";
    backIcon.style.display = "none";

    nav_contact.classList.remove("chosenLi");
    nav_photos.classList.remove("chosenLi")
    nav_blog.classList.remove("chosenLi");

    nav_home.classList.add("chosenLi");

    const background_container = document.createElement("div");
    background_container.classList.add("pattern");
    background_container.classList.add("opacity");
    background_container.classList.add("flex-row");
    background_container.style.height = "60%";
    background_container.style.width = "60%";
    background_container.style.marginTop = "2%";
    background_container.style.marginLeft = "5%";
    background_container.style.padding = "5%";
    right.appendChild(background_container);

    const home_container = document.createElement("div");
    home_container.classList.add("welcomeFromBottom")
    home_container.classList.add("flex-column");
    home_container.style.overflow = "auto";
    home_container.style.height = "max(80%, 100%)";
    home_container.style.width = "90%";
    home_container.style.backgroundColor = "#27272a";
    home_container.style.filter = "drop-shadow(1px 1px 5px rgb(39 39 42 / 1))";


    const home_text = document.createElement("div");
    home_text.style.opacity = "0";
    home_text.classList.add("opacity2s");
    home_text.innerHTML = "&emsp;Welcome to my blog!";
    home_text.style.fontSize = "clamp(1rem, 2vw, 2rem)";
    home_text.style.lineHeight = "1.6";
    home_text.style.alignSelf = "flex-start";
    home_text.style.marginBottom = "10%";
    home_text.style.margin = "5%";

    const home_description = document.createElement("div");
    home_description.style.opacity = "0";
    home_description.classList.add("opacity2s");
    home_description.innerHTML =
      "Here you can read about my journey in web development. <br> I will also attempt to explain beginner topics, so we can both understand them better and learn something from each other.";
    home_description.style.fontSize = "clamp(0.75rem, 1.2vw, 1.5rem)";
    home_description.style.lineHeight = "1.6";
    home_description.style.width = "90%";

    const home_thanks = document.createElement("div");
    home_thanks.style.opacity = "0";
    home_thanks.classList.add("opacity2s");
    home_thanks.innerHTML = "Thank you, <br> erratinsilentio";
    home_thanks.style.fontSize = "clamp(0.75rem, 1.2vw, 1.5rem)";
    home_thanks.style.textAlign = "left";
    home_thanks.style.width = "auto";
    home_thanks.style.alignSelf = "flex-end";
    home_thanks.style.marginTop = "50px";
    home_thanks.style.marginBottom = "10%";
    home_thanks.style.margin = "5%";

    home_thanks.style.lineHeight = "1.4";

    home_container.appendChild(home_text);
    home_container.appendChild(home_description);
    home_container.appendChild(home_thanks);
    background_container.appendChild(home_container);
  };

  return {
    makeHome,
  };
})();

export default homeAction;
