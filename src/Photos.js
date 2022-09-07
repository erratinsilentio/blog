const photoAction = (() => {
  const makePhotos = () => {
    right.innerHTML = "";
    backIcon.style.display = "none";


    nav_contact.classList.remove("chosenLi");
    nav_home.classList.remove("chosenLi")
    nav_blog.classList.remove("chosenLi");
    nav_photos.classList.add("chosenLi");

   
  };

  return {
    makePhotos,
  };
})();

export default photoAction;
