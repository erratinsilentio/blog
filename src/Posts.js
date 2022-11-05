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

    const post_two = () => {
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
        title.textContent = "#2 month report"
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
        description.innerHTML = "<p>hello everyone</p><p>&emsp; It has been two months since I've started my programming journey. In the last 30 days I learned about algorithms and data structures, which was VERY challenging at first. I could not wrap my head around topics like recursion. It became easier with time, but definitely I have some work to do on this topic. </p><p>&emsp; After algorithms I went straight after React, and oh my god - such a breeze of fresh air, especially after javascript DOM manipulation. React workflow really resonates with me, and so far I am able to make quick progress. I am now able to programm a simple fullstack todo application. I decided to learn backend as well, to start thinking about projects in a real-world way. I was kinda scared of backend, but so far Node Express seems quite straightforward and logical - guess we will see in the future,  when more advanced topics come into play! </p><p>&emsp; I set for myself a new challenge - I am going to develop a fullstack ecommerce website as my first real portfolio project. Its going to be a site centered around my cat - shop with his pictures, where you can sign up and log in using different methods, then add stuff to the cart and actually place an order with a few different payment options to choose. I love my cat so it will be a fun project, but definitely very challenging! Im still excited about constantly learning new things, but it slowly gets to me - how much there is still to learn! Even for a basic sites like that. I have a lot of work to do, but im getting there slowly. I already never would have thought, that after only two months Id be learning all this new stuff.</p><p>&emsp; Goals for next month:</p><p>1. Have my ecommerce site done </p><p>2. Be able to develop a simple backend without looking stuff up</p><p>3. Be comfortable with solid react project structure</p><p>4. Further my react foundations</p><p>&emsp; That is what I focus on - strong foundations, everything else is already extra for me. </p>";
    

        container.appendChild(title);
        container.appendChild(description)
        right.appendChild(container);
    }

    const post_three = () => {
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
        description.innerHTML = "<p>&emsp; This month went a bit unexpected. I stumbled upon a part time job offer titled „React trainee”, for people without work experience. I thought to myself - why not apply - if I can gain work experience and earn money on a side with a second job, that sounds like a good idea. My skills may be lacking, but I still love challenges, so why not try. I got the reply from that company and they reached to me with an assignment - to build an ecommerce site based on a figma design in one month time. I went with it, and it went quite well. But I did have some knowledge gaps when it came to data fetching and managing application state, so the project started to become more and more chaotic. I had to do it using class components too - they did not feel comfortable at first, but I learned them anyway. Many simple solutions did not work in class components - like querying data using Apollo Client - and I stopped the project to learn more about working with data generally in React. </p><p>&emsp; For the second half of September I have focused on doing my first big portfolio project I had planned - that is a site for trading cat pictures. Naming it Only Cats seemed like a funny idea too. I stumbled upon a nice course on Next.js and GraphQL - and it turned out to be a great resource of information about many topics that came to me when doing the previous work assignment. So far I am going forward almost everyday, averaging on about 18 hours / week. I still have a lot to do, but I think I’ll have it finished by the end of next month. Right now it’s about adding functionality, like signing up or adding products, but polishing this project will surely take time. </p><p>So let’s review my goals from previous month:</p><p>1. Have my ecommerce site done - this one will definitely take more time, but im going forward and that’s what matters.</p><p>2. Be able to develop a simple backend without looking stuff up - right now I am working with GraphQL instead of REST, but I will definitely go back to Node.js in my next project. </p><p>3. Be comfortable with solid react project structure - this is where I really see my progress - I feel way more comfortable now, I am able to really go into the zen mode with no need to constantly look something up. Great feeling when you can actually focus on creating.</p><p>4. Further my React foundations - that is what Im doing, and what I will do for quite some time for sure! </p><p>My goals for next month:</p><p>1. Finish Only Cats project</p><p>2. Work on my Github profile</p><p>3. Start rewriting my portfolio website</p><p>4. Create a nicer CV</p><p>5. Keep learning about web3</p><p>&emsp;  As you can see in my last goal, I also got interested in web3 development. It’s good to be more specialized, and i definitely see myself in this niche. I already have some interesting ideas for my personal projects, how doing them with Ethereum Smart Contracts could be a good idea.</p><p>I really like how the future looks!</p>";
    

        container.appendChild(title);
        container.appendChild(description)
        right.appendChild(container);
    }

    return {
        post_one,
        post_two,
        post_three,
    }
})();


export default postAction;