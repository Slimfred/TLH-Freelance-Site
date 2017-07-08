var certificates = [
  {
    title: "CareerFoundry Web Developer Course",
    pic: "img/cf-webdev-cert.png",
    link: "",
    about: "CareerFoundry is a 6-month intensive training program for web developers, specializing in Ruby on Rails and front-end development. With over 400 hours in coding, I built a fluency in Ruby on Rails, JavaScript, HTML5, and CSS3. I built two projects from scratch, using MVC, RESTful, and object-oriented design patterns, learned the value of version control while using Git and GitHub, and implemented unit and functional tests using RSpec and FactoryGirl."
  },
  {
    title: "Google Analytics for Beginners",
    pic: "img/ga-beginner-cert.png",
    link: "",
    about: "Learn the basic features of Google Analytics including how to create an account, implement tracking code, analyze basic reports, and set up goals and campaign tracking."
  }
];

for (var i = 0; i < certificates.length; ++i) {
  $("#certs").append('\
    <div class="col-sm-5">\
        <img class="img-responsive" src="'+ certificates[i].pic +'" >\
        <span class="info"> ' + certificates[i].title + ' </span>\
        <p class="about"> ' + certificates[i].about + ' </p>\
    </div>\
      ');
};
