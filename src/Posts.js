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
        description.innerHTML = "<p> &emsp; It has been a month since I started my journey with The Odin Project. I had a dillema which learning platform to choose. The choice was between FreeCodeCamp and TOP. I went with the latter as it was described as more difficult - in a sense that you have to do more reasearch on your own. I knew that if I was able to learn effectively this way, I would be on a road to success. And of course, I would get to know if this road is even for me.</p><p>&emsp;Fast forward one month later, im beginning my To Do List project. I dedicate every spare moment I have to coding and solidifying my knowledge. I probably average on about 4 hours a day. And it is going different than in school. College felt like I had to do something somebody expects me to do, and not because i felt like doing it. Or not becuase I really need it. But now, I genuinly feel passion for coding - and deep satisfaction with every challenge I manage to overcome, every little project I make. I am honestly excited everytime I get to do this. I am sure that is why I keep going so far effortlessly.</p><p>&emsp;HTML and CSS were quite digestible for me. First uncomfortable moments came of course with JavaScript. But it is always a motivation, to see yourself push through the discomfort and slowly understand the things that once felt like black magick.</p> <p>&emsp;I feel confident so far, maybe I discovered my preferred career path and definitely a new hobby. I believe in myself. Of course I google a lot, I do not like memorizing stuff so all the syntax is slowly but steady being remembered with every project and excercise. What drives the syntax is a thought process, I really enjoy breaking problems into smaller pieces and analyzing how to fit them all together.</p><p>&emsp;I have some ideas for the main projects I want to make for my portfolio. Let me write them here, so we will see how these ideas have changed overtime. Im am waiting till I have enough knowledge to build them effectively. Here they go:</p><p>1. Soul Journal - based on my personal concept of journaling and tracking daily changes, helping me accomplish goals and work on myself. </p><p>2. Music File Transer kind of site - allowing you to send files with a short url and create non-permanent cloud repository. If you work on a project with someone, you will be able to store all your song changes in one place, compare them quickly, and track changes like on github. </p><p>My long term goals:</p><p>&emsp;11 months from now - so one year since the beginning of my journey - I am in a place where I am actively looking for my first job. Or I already have one. I finished The Odin Project and I completed at least one of my own projects. </p><p>Goals for next month:</p><p>&emsp;To be in the second half of Computer Science chapter. Quite a few projects there so i will keep myself humble with expectations.</p>";
    

        container.appendChild(title);
        container.appendChild(description)
        right.appendChild(container);
    }

    return {
        post_one
    }
})();


export default postAction;