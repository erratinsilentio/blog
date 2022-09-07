const postAction = (() => {

    const post_one = () => {
        right.innerHTML = "";
        backIcon.style.display = "block";

        const container = document.createElement("div");
        container.classList.add("flex-column");
        container.style.justifyContent = "flex-start"
        container.style.width = "clamp(300px ,80%, 80%)";
        container.style.height = "90%";
        container.style.marginTop = "2%"
        container.style.marginLeft = "5%"

        const title = document.createElement("h1");
        title.classList.add("post-style")
        title.textContent = "#1 month report"
        title.style.marginBottom = "2%";
        title.style.opacity = "0";
        title.classList.add("opacity");

        const description = document.createElement("div");
        description.classList.add("flex-column");
        description.style.justifyContent = "flex-start"
        description.classList.add("post-style");
        description.classList.add("height");
        description.style.overflow = "auto";
        description.style.paddingTop = "2%";
        description.style.width = "clamp(300px ,80%, 80%)";
        description.innerHTML = "<p> &emsp; It has been a month since i started my journey with The Odin Project. I had a dillema which learning platform to choose. The choice was between FreeCodeCamp and TOP. I went with the latter as it was described as more difficult, in a sense that you have to do more reasearch on your own. I knew that if I was able to learn effectively this way on my own, i would be on a road to success. And of course, i would get to know if this road is even for me.</p><p>&emsp;Fast forward one month later, im beginning my To Do List project. I dedicate every moment i can to coding and solidifying my knowledge. I probably average on about 4 hours a day. And it is going different than in school. Because on school i felt i had to do something somebody expects me to do, and not because i felt like doing it. But now, i quickly felt passion for coding and deep satisfaction with every challenge i overcome, every little project i make. I am genuinly excited everytime i get to do this. I am sure that is why I feel rapidly expanding, and learning this stuff so naturally.<p<p>&emsp;HTML and CSS were quite digestible for me. First uncomfortable moments came of course with JavaScript. But it is always a motivation, to see yourself push through the discomfort and slowly understand the things that once felt like black magick.</p> <p>&emsp;I feel confident even as a beginner, i feel like i discovered my preferred career path and a new hobby. I believe in my success. Of course i google a lot, i do not like memory learning so all the syntax is slowly but steady being remembered more with every project and excercise. What drives the syntax is a thought process, i really enjoy breaking problems into smaller pieces and analyze how to fit them all together to make an application.</p><p>&emsp;I have some ideas for the main projects i want to make for my portfolio. Let me write them here, so we will see how the ideas changed overtime. Im am waiting till i have enough knowledge to build them effectively. Here they go:</p><p>1. Soul Journal - based on my private concept of journaling to track changes in my life, help me accomplish goals and work on myself. </p><p>2. Music File Transer kind of site - you can send files with a short url, that creates repository. If you work on a project, you will be able to store all your song changes in one place, to compare them quick, or share a repository with someone you are working with. </p><p>My long term goals:</p><p>&emsp;11 months from now - so one year since the beginning of my journey - I am in a place where i am actively looking for my first job. Or i already have one. I finished The Odin Project and I completed at least one of my own projects. </p><p>Goals for next month:</p><p>&emsp;To be in the second half of Computer Science chapter. Quite a few projects there so i will keep myself humble with expectations.</p>";
    

        container.appendChild(title);
        container.appendChild(description)
        right.appendChild(container);
    }

    return {
        post_one
    }
})();


export default postAction;