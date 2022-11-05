import postAction from "./Posts";

const blogAction = (() => {

    const blogPost = (id, title, post) => {
        const post_container = document.createElement("div");
        post_container.classList.add("outline");
        post_container.classList.add("flex-row");
        post_container.classList.add("width");
        post_container.style.width = "clamp(300px ,80%, 80%)";
        post_container.style.height = "15%";
        post_container.style.marginTop = "2%"
        post_container.style.marginLeft = "5%"

        const post_id = document.createElement("div");
        post_id.classList.add("outline");
        post_id.classList.add("flex-row")
        post_id.classList.add("opacity1s");
        post_id.textContent = id;
        post_id.style.width = "20%";
        post_id.style.height = "100%";
        post_id.style.fontSize = "clamp(1rem, 2vw, 2rem)"
        post_id.style.opacity = "0";

        const post_content = document.createElement("div");
        post_content.classList.add("flex-column");
        post_content.classList.add("outline");
        post_content.classList.add("opacity1s");
        post_content.style.width = "80%";
        post_content.style.height = "100%";
        post_content.style.opacity = "0";

        const post_title = document.createElement("div");
        post_title.classList.add("flex-row")
        post_title.textContent = title;
        post_title.style.fontSize = "clamp(0.75rem, 1.2vw, 1.5rem)"
        post_title.style.width = "100%";
        post_title.style.height = "70%";

        const post_footer = document.createElement("div");
        post_footer.classList.add("outline");
        post_footer.classList.add("readMore")
        post_footer.classList.add("flex-row")
        post_footer.textContent = "<read more>"
        post_footer.style.fontSize = "clamp(0.5rem, 0.75vw, 1rem)"
        post_footer.style.width = "100%";
        post_footer.style.height = "30%";
        post_footer.addEventListener('click', post)
        

        post_container.appendChild(post_id);
        post_container.appendChild(post_content);

        post_content.appendChild(post_title);
        post_content.appendChild(post_footer);

        return post_container;
    }

    const makeBlog = () => {
        right.innerHTML = "";
        backIcon.style.display = "none";

        nav_contact.classList.remove("chosenLi");
        nav_photos.classList.remove("chosenLi");
        nav_home.classList.remove("chosenLi");
        nav_blog.classList.add("chosenLi");

        right.style.justifyContent = "flex-start";

        const postOne = blogPost('#1', '1 month report', postAction.post_one);
        right.appendChild(postOne);

        const postTwo = blogPost('#2', '2 month report', postAction.post_two);
        right.appendChild(postTwo);

        const postThree = blogPost('#3', '3 month report', postAction.post_three);
        right.appendChild(postThree);
        
    }

    return {
        makeBlog
    }

})();

export default blogAction;