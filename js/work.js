var workProjects = [
  {
    title: "My first website",
    pic: "img/supspeechsol.jpg",
    link: "http://supspeechsolfirstsite.bitballoon.com",
    about: "This is the first website I designed and coded.  I also set up hosting and linked the site email with my client's gmail account."
  },
  {
    title: "CareerFoundry Portfolio Website",
    pic: "img/cf-portfolio-site.png",
    link: "http://tracylynhall.bitballoon.com",
    about: "This is the portfolio website I designed and coded during the front end portion of my CareerFoundry course."
  },
  {
    title: "Updated Website",
    pic: "img/supspeechsol-update.jpg",
    link: "http://www.superiorspeechsolutions.com/",
    about: "After completing the front end portion of my CareerFoundry course I redesigned this site using the new skills I had learned."
  },
  {
    title: "Yummy Cookies! is an ecommerce web app",
    pic: "img/yummy-cookies.png",
    link: "https://yummycookies.herokuapp.com/",
    about: "This is the ecommerce web app I designed and coded during the back end portion of my CareerFoundry course."
  }
];

for (var i = 0; i < workProjects.length; ++i) {
  $("#projects").append('\
    <div class="portfolio col-sm-6">\
      <a class="work-img" href="' + workProjects[i].link + '" target="_blank">\
        <img class="port-img img-responsive" src="'+ workProjects[i].pic +'" >\
        <span class="info"> ' + workProjects[i].title + ' </span>\
        <p class="about"> ' + workProjects[i].about + ' </p>\
      </a>\
    </div>\
      ');
};
