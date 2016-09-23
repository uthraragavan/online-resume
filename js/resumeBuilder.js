/*
Project: Online Resume
Author: Uthra Vijayaragvan
Date: 09/18/2016
 */
//Schema for populating the html. Each object has an associated display function with it.
//name,role.welcome message, skills, and picture.
var bio = {
    name: "Uthra Vijayaragavan",
    role: "Front-end Web Developer",
    contacts: {
        "mobile": "123-456-7890",
        "email": "uthra.ragavan@gmail.com",
        "github": "uthraragavan",
        "blog": "https://mycareerblogweb.wordpress.com/",
        "location": "Seattle, WA"
    },
    welcome: "Welcome to my web page!",
    skills: [
        "C/C++",
        "MS Visual Studio/Eclipse",
        "Oracle/SQL",
        "HTML/CSS/JavaScript/jQuery/Bootstrap",
        "Git/SVN/CVS"
    ],
    biopic: "images/mypic.png",
    display: function() {
        displayheader();
        displaycontacts();
        displayskills();
    }
};

// Array of schools and online courses.
var education = {
    schools: [{
        name: "The University of Texas at Austin",
        location: "Austin, TX",
        degree: "Master of Science",
        majors: "Operations Research and Industrial Engineering",
        dates: "Sep 2008 - May 2010",
        url: "http://www.utexas.edu"
    }, {
        name: "University of Madras",
        location: "Chennai, India",
        degree: "Bachelor of Technology",
        majors: "Information Technology",
        dates: "Sep 2000 - May 2004",
        url: "http://www.unom.ac.in"
    }],
    onlineCourses: [{
        title: "Udacity Front End Nanodegree",
        school: "Udacity",
        dates: "Sep 2016 - Present",
        url: "http://udacity.com"
    }, {
        title: "Project Management Training",
        school: "Whizlabs",
        dates: "Sep 2015 - Dec 2015",
        url: "http://www.whizlabs.com"
    }],
    display: function() {
        displayschool();
        displayonlineclasses();
    }
};

//Array of jobs
var work = {
    jobs: [{
        employer: "Goldman Sachs",
        title: "Analyst",
        location: "Salt Lake City, UT",
        dates: "July 2010 - April 2012",
        description: "<ul class='work-desc'><li>Global stakeholder management ensuring smooth operation of GS’s production and QA order management systems for cross-continental trading markets.</li><li>Led production and QA teams supporting end-end trading software systems (including Futures, Options and Equities) from client order submission, through order management systems within GS, until order execution in the exchange.</li><li>Managed the 24x7 availability of critical trading software components.</li><li>Project lead for automating the manual procedures of morning and evening checkouts in order to maintain a defect-free order flow environment.</li><li>Led deployment projects for individual software components in production and QA.</li></ul>"
    }, {
        employer: "Burlington Northern Santa Fe Railway",
        title: "Intern Fellow",
        location: "Fortworth, TX",
        dates: "May 2009 - May 2010",
        description: "<ul class='work-desc'><li>Formulated and implemented optimization models for locomotive assignment and train scheduling.</li><li>Spreadsheet modeling for building model prototypes.</li><li>Data analysis, processing and clean-up to form model inputs.</li><li>Developed front end GUI as an interface to the model.</li></ul>"
    }, {
        employer: "The University of Texas at Austin",
        title: "Graduate Research Assistant",
        location: "Austin, TX",
        dates: "Spring 2009",
        description: "<ul class='work-desc'><li>Project lead for the design and development of multimedia enabled tutorial software for the Austin Independent School district.</li></ul>"
    }, {
        employer: "Hewlett Packard",
        title: "Software Engineer",
        location: "Bangalore, India",
        dates: "June 2005 - Jan 2008",
        description: "<ul class='work-desc'><li>Team lead for design and development of SAN and NAS (Storage Area Network and Network Attached Storage) software solutions for small and medium businesses.</li><li>Prototype development for new ideas and concepts in the domain of SAN solutions as part of the idea demonstration events.</li><li>Performed Software Quality Assurance for the team.</li><li>Mentor for junior project team members.</li><li>Coordinator for weekly project presentations to global partner teams.</li>"
    }, {
        employer: "Sify Ltd",
        title: "Software Engineer",
        location: "Chennai, India",
        dates: "June 2004 - June 2005",
        description: "<ul class='work-desc'><li>Development of application software and front-end GUI for broadband Internet solutions.</li><li>Design and development of software for automatic application of Windows patches to internal network hosts</li></ul>"
    }],
    display: function() {
        displaywork();
    }
};

//Array of projects
var projects = {
    projects: [{
        title: "Animal Trading Cards",
        url: "https://github.com/uthraragavan/animal-trading",
        dates: "2016",
        description: "Project demosntrating knowledge HTML and CSS.",
        images: [
            "images/bengal-tiger.jpg",
            "images/animalproto.jpg"
        ]
    }, {
        title: "Mockup to Article",
        url: "https://github.com/uthraragavan/frontend-mockup-to-article-master",
        dates: "2016",
        description: "Project usage of HTML and CSS.",
        images: [
            "images/mockup.gif",
            "images/mockupproto.jpg"
        ]
    }, {
        title: "Portfolio",
        url: "https://github.com/uthraragavan/portfolio",
        dates: "2016",
        description: "Extensive usage of HTML,CSS and Bootstrap.",
        images: [
            "images/web.jpg",
            "images/portproto.jpg"
        ]
    }],
    display: function() {
        displayprojects();
    }
};

//Function to display the header
function displayheader() {
    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(HTMLheaderName);
}

//Function to display contacts in header and footer
function displaycontacts() {
    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(HTMLmobile);
    $("#footerContacts").append(HTMLmobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(HTMLemail);
    $("#footerContacts").append(HTMLemail);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(HTMLgithub);
    $("#footerContacts").append(HTMLgithub);
    HTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
    $("#topContacts").append(HTMLblog);
    $("#footerContacts").append(HTMLblog);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(HTMLlocation);
    $("#footerContacts").append(HTMLlocation);
}

//Function to display skills
function displayskills() {
    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(HTMLbioPic);
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(HTMLwelcomeMsg);
    $("#header").append(HTMLskillsStart);
    var formattedHTMLskills = [];
    var i;
    for (i = 0; i < bio.skills.length; i++) {
        formattedHTMLskills.push(HTMLskills.replace("%data%", bio.skills[i]));
        console.log(formattedHTMLskills[i]);
        $("#skills").append(formattedHTMLskills[i]);
    }
}

//Function to display work experience
function displaywork() {
    $("#workExperience").append(HTMLworkStart);
    var formattedHTMLwork, worktitle;
    var i;
    for (i = 0; i < work.jobs.length; i++) {
        formattedHTMLwork = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        worktitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry").append(formattedHTMLwork + worktitle);
        formattedHTMLwork = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry").append(formattedHTMLwork);
        formattedHTMLwork = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry").append(formattedHTMLwork);
        formattedHTMLwork = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry").append(formattedHTMLwork);
    }
}

//Function to display education - schools
function displayschool() {
    $("#education").append(HTMLschoolStart);
    var formattedHTMLschool, schooldeg;
    var i;
    for (i = 0; i < education.schools.length; i++) {
        formattedHTMLschool = HTMLschoolName.replace("%data%", education.schools[i].name);
        schooldeg = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(formattedHTMLschool + schooldeg);
        formattedHTMLschool = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry").append(formattedHTMLschool);
        formattedHTMLschool = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry").append(formattedHTMLschool);
        formattedHTMLschool = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry").append(formattedHTMLschool);
    }

}

//Function to display education - online classes
function displayonlineclasses() {
    $("#education").append(HTMLonlineClasses);
    var formattedHTMLonline, onlineschool;
    var i;
    for (i = 0; i < education.onlineCourses.length; i++) {
        formattedHTMLonline = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        onlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $("#online-entry").append(formattedHTMLonline + onlineschool);
        formattedHTMLonline = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $("#online-entry").append(formattedHTMLonline);
        formattedHTMLonline = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $("#online-entry").append(formattedHTMLonline);
    }
}

//Function to display projects
function displayprojects() {
    $("#projects").append(HTMLprojectStart);
    var formattedProject;
    var i;
    for (i = 0; i < projects.projects.length; i++) {
        var j;
        formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        formattedProject = formattedProject.replace("%urldata%", projects.projects[i].url);
        $(".project-entry").append(formattedProject);
        formattedProject = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry").append(formattedProject);
        formattedProject = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry").append(formattedProject);
        $(".project-entry").append(HTMLprojectFigure);
        for (j = 0; j < projects.projects[i].images.length; j++) {
            formattedProject = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".proj-fig").last().append(formattedProject);
        }
    }
}

//Function to display education
function displayeducation() {
    displayschool();
    displayonlineclasses();
}

//Function to display Where I have Lived and Worked
function displaymap() {
    $("#mapDiv").append(googleMap);
}

//Actual calling of the above function through their objects
bio.display();
education.display();
work.display();
projects.display();
displaymap();