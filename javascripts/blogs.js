// BLOG JAVASCRIPT

var blogs = [
  {
    id:   "blog1",
    title: "A beginning... of the end?!?!?",
    date: "Wednesday, 21 February 2018",
    post: "Here we are in the middle of the second week of Evening Cohort 7 at Nashville Software School. Already I have learned a great deal and the trepidation I felt at the start of classes is starting to melt away. Coming into the course, I had some idea of what to expect from the Jumpstart course I had taken the year before, but still, people are continuously talking about how hard it is, how painful the next year is going to be, how little sleep we are going to have and so on and so on. So perhaps this is a false sense of hope, but I am feeling really good about this. In the first couple days of the class, we ran through the basics of html and general structure of a webpage. I am feeling rather comfortable with that. It was one of the first things I had taught myself when I first started getting into web development. I had done the courses in codecademy.com and been through the jumpstart, and then did the treehouse courses. So, html is not a big deal. So far the biggest challenge with html is remembering to close all tags and whether to use href or src when linking files to the html document. CSS is another beast altogether. While I am slowly getting more comfortable with remembering what attributes to use, remembering the different positioning properties is difficult. I understand the basics of absolute, fixed, and relative positioning. However, in practice, to put this bluntly, this sucks. I swear, these properties only work while on school property, as soon as I get home, everything breaks. I return to the school, turn on the computer, hey look, it's working again. I don't know how to ask a question at this point, because there isn't a problem, I'm just losing my mind. Then we started learning Git Bash and git hub commands. This is virgin territory, so to speak. Treehouse covered this topic briefly, but those lessons were completely worthless without being able to actually do the thing they were teaching. The first couple of times I created a repo, I was lost. I typed letters into git bash and prayed it worked. Sometimes it did, sometimes it didn't. Now that I have had a chance to slow down and pick apart the different commands and actually utilize the tool, it's much more comfortable. I am by no means an expert, but if someone were to come up to me and start talking about it, I may actually be able to follow the conversation and hopefully add to it. I cannot begin to tell you how much just simple repetition has helped when it comes to learning the git commands. When I signed up for the program, the only true goal I had was to gain the knowledge necessary to make a career change, to get out of manufacturing, and into a job where I can actually make a difference. Now that I have been to a few classes, that desire has really blossomed. I can see the challenges that lay before me. This is going to hurt. But it will be so worth it in the end."
  },
  {
    id:   "blog2",
    title: "Just a small grain of sand",
    date: "Friday, 2 March 2018",
    post: "JavaScript! We've done the rough review of HTML and CSS and done our homework, now on to the next challenge, which is... yep, javscript. I've heard people going back and forth about the merits of javascript and its uses. However, javascript is everywhere and like it or not, that's what we are using and are going to be using.This week I learned a new shortcut, ctrl + shift + R. It is my new best friend. This shortcut reloads the page, ignoring the cache. Every time I made a change to my code, I would tab back into chrome to see the result of my change, and nothing would happen. Refresh the page using the key in the navbar, same. No change. Ctrl + shift + r, works like magic. The three-key button press is annoying, but it works.   For actual javascript itsself, we have gone from baby javascript to full-on running-face-first-into-a-brick-wall javascript. I've got the syntax of the thing, it's just wielding it in a way that actually works. I have crashed my computer several times this week with nested loops. Nested loops are a very bad idea and should be avoided whenever possible. Things will be easier once we are allowed to use functions. I don't know why, but functions just make more sense to me when completing our assignments and it took all my willpower to not use them.I did have one problem I was working on that knocked me for a loop. I just couldn't get it. Rubber Duck debugging did not help, I was stuck. I fell asleep, dreaming about evil out-of-control computers, when I woke up the next morning, I looked at the problem and solved it like I actually knew what I was doing. Going into the coming week, I pray we start doing functions. I really like functions. Although I do believe that faith in them is going to be severely tested."
  },
  {
    id:   "blog3",
    title: "Cue small panic attacks and zero sleep",
    date:"Wednesday, 7 March 2018",
    post:""
  }
];

function createBlogPost(anArray){
  var createAString = "";
  for(var i = 0; i < anArray.length; i++){
    createAString += "<article>";
    createAString += "<h3>" + anArray[i].date + "<h3>";
    createAString += "<h5>" + anArray[i].title + "<h5>";
    createAString += "<p>" + anArray[i].post + "</p>";
    createAString += "</article>";
  };
  return createAString;
};

function writeToDom(myInnerds, placeToPutIt){
  var myElement = document.getElementById(placeToPutIt);
  myElement.innerHTML = myInnerds;
};

writeToDom(createBlogPost(blogs),"blog-post-container");