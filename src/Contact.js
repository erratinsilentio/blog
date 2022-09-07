const contactAction = (() => {
  const makeForm = () => {
    right.innerHTML = "";
    right.style.justifyContent = "center";
    backIcon.style.display = "none";


    nav_home.classList.remove("chosenLi");
    nav_photos.classList.remove("chosenLi")
    nav_blog.classList.remove("chosenLi");

    nav_contact.classList.add("chosenLi");

    const container = document.createElement("div");
    container.classList.add("flex-row");
    container.classList.add("opacity");
    container.style.flexDirection = "wrap";
    container.style.width = "clamp(30vw, 70%, 90vw)";
    container.style.height = "30%";
    container.style.marginLeft = "5%";

    const github = document.createElement("img");
    github.classList.add("contactIcon");
    github.classList.add("opacity");
    github.src = "https://www.svgrepo.com/show/332084/github.svg";
    github.onclick = () => { window.open("https://github.com/erratinsilentio", '_blank') };
    github.style.width = "clamp(30%, 5vw, 10vw)";
    github.style.height = "clamp(30%, 5vw, 10vw)";
    github.style.margin = "10%";

    const linkedin = document.createElement("img");
    linkedin.classList.add("contactIcon");
    linkedin.classList.add("opacity2s")
    linkedin.src = "https://www.svgrepo.com/show/144550/linkedin.svg";
    linkedin.onclick = () => { window.open("https://www.linkedin.com/in/kacper-kondracki-0619a3245/", "_blank") };
    linkedin.style.width = "clamp(30%, 5vw, 10vw)";
    linkedin.style.height = "clamp(30%, 5vw, 10vw)";
    linkedin.style.margin = "10%";


    const email = document.createElement("img");
    email.classList.add("contactIcon");
    email.classList.add("opacity1s")
    email.src = "https://www.svgrepo.com/show/274406/email-mail.svg";
    email.onclick = () => { window.open("mailto:kacper.kondracki@wp.pl") };
    email.style.width = "clamp(30%, 5vw, 10vw)";
    email.style.height = "clamp(30%, 5vw, 10vw)";
    email.style.margin = "10%";


    container.appendChild(github);
    container.appendChild(email);
    container.appendChild(linkedin);

    right.appendChild(container);

  };
  return {
    makeForm,
  };
})();

export default contactAction;
