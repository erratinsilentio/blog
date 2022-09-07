import { toggleMenu, showheader } from "./Display";

const introAction = (() => {
  const makeIntro = () => {
    const welcomeInput = document.createElement("input");
    window.welcomeInput = welcomeInput;
    welcomeInput.type = "text";
    welcomeInput.classList.add("welcome-input");
    welcomeInput.placeholder = "what's your name?...";
    welcomeInput.style.textAlign = "center";

    const submitWelcome = document.createElement("button");
    window.submitWelcome = submitWelcome;
    submitWelcome.classList.add("welcome-button");
    submitWelcome.textContent = "Let's go!";
    submitWelcome.style.fontSize = "clamp(0.5rem, 0.5vw, 1rem)";


    right.appendChild(welcomeInput);
    right.appendChild(submitWelcome);

    //MAKE SUBMIT BUTTON SHOW HOMEPAGE AND STORE INPUT VALUE
    submitWelcome.addEventListener("click", () => {
      localStorage.setItem("Name", welcomeInput.value);
      console.log(localStorage);
    });

    submitWelcome.addEventListener("click", transtitionToHome);
  };

  const transtitionToHome = () => {
    right.removeChild(welcomeInput);
    right.removeChild(submitWelcome);
    showheader();
    header.classList.add("welcomes");
    header.style.opacity = "1";
    title.classList.add("welcome");
    menu_button.classList.add("welcomeFromLeft");
    menu.addEventListener("click", toggleMenu);

    const home_text = document.createElement("div");
    home_text.textContent = `Hello, ${localStorage.getItem("Name")}`;
    home_text.classList.add("welcome");
    home_text.classList.add("opacity1s");
    home_text.style.opacity = "0";
    home_text.style.fontSize = "3rem";
    right.appendChild(home_text);
  };

  return {
    makeIntro,
    transtitionToHome,
  };
})();

export default introAction;
