/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//First we declare the variables to store the section names
var sectionNames = document.getElementsByTagName('section');

//we store the navbarList so we can add the values
var navbarList= document.querySelector('#navbar__list');

//We can also start the navbar menu to update the style of the navbar menu
var navbarMenu= document.querySelector('.navbar__menu');

var navNames = document.getElementsByClassName('menu__link');


//To store the location of the sections
let sectionLocs = [];
//let sectionLocsHeight = [];
let active = 0; //Keeps track of the active section


/*Create navigation bar items*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function addSectionNames() {

    const menuOptions = document.createDocumentFragment() //Create document fragment for efficiency.

    for (let i=0; i<sectionNames.length; i++) {
        var menuaddition = document.createElement('li'); //For each section, create an element.
        //menuaddition.style.height="50px"
        //menuaddition.style.width="120px" //Large enough to be apart from each other
        //menuaddition.style.marginBlockStart="15px" //So that it doesn't stick to the top.
        
        

        //To add the link
        var linkaddition = document.createElement("a");
        linkaddition.setAttribute("href", `#${sectionNames[i].id}`); //Add the link name based on the id
        linkaddition.textContent = sectionNames[i].dataset.nav; //Add the text information from the sections.
        linkaddition.setAttribute("class","menu__link");
        

        menuaddition.appendChild(linkaddition); //Add the link to the menu item

        menuOptions.appendChild(menuaddition); //Add the newly created menu option onto the document fragmentation.
    }

    navbarList.appendChild(menuOptions); // Add the document fragmentation to the navBar to reflow and repaint once.
    
    //Store the list of the menus
}

function styleNavbar() {
    navbarList.style.width = '100vw';
    navbarList.style.listStyleType = 'none';
    navbarList.style.display = 'flex';
    navbarList.style.flexDirection = 'row';
    navbarList.style.alignItems = 'flex-start';
    navbarList.style.justifyContent = 'center';
    //navbarList.style.height ="80px"
    navNames[0].classList.add("active-menu");
}

function styleNavmenu(){
    let menus=document.querySelectorAll('li')
    for (let i=0;menus.length;i++){
        document.querySelectorAll('li')[i].style.height="50px"
        document.querySelectorAll('li')[i].style.width="100px"
    }   
} //Not used anymore because the functionality moved into the creation for efficiency.

// build the nav

//navbarMenu.style.background='black' //Make the navigation menu bar black


//Helper function to get the location of all sections
function sectionLocations(){
    sectionLocs[0]=0;
    for (let i=0; i<sectionNames.length; i++) {
        sectionLocs[i+1] = sectionNames[i].offsetTop;
        //sectionLocsHeight[i] = sectionNames[i].offsetHeight;
    }
    console.log(sectionLocs)
    //console.log(sectionLocsHeight);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function addClickNavigation(){

    var sectionLists = document.querySelectorAll('li');
    for (let i=0; i<sectionLists.length;i++){
        //let sectionText = document.querySelectorAll('li')[i].innerHTML;
        //Not going to be used since I shouldn't pass on any arguments?
        sectionLists[i].addEventListener("click",navigationFunction);
        
    }
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
function navigationFunction(e){
    e.preventDefault(); //Avoid jumping with the hyperlink.
    //console.log("event triggered!"); //Sanity check
    targetSection = document.querySelector("#"+e.target.href.split("#")[e.target.href.split("#").length-1]);
    //Get the section of the document via query selector

    window.scrollTo({
        top: targetSection.offsetTop-52, //This computes the location of the top and scrolls over to the section
        //Use 100 for the navbar offset
        behavior: 'smooth'
    });
}

function addScrollEffects(){
    window.addEventListener("scroll",scrollFunction);
}

function scrollFunction() {
    //console.log(document.querySelector('body').offsetTop);
    
    //Change active section depending on where the scroll is
     // First handle when we go beyond a section
    if (sectionLocs[active+2]<window.scrollY && active<sectionLocs.length-2){
        //Add -2 to the length because we don't want to transition beyond the last section.
        //This is -2 because of the extra element in sectionLocs to account for starting and end locations
        active=active+1
        sectionNames[active].classList.add("your-active-class");
        sectionNames[active-1].classList.remove("your-active-class");
        
        navNames[active].classList.add("active-menu");
        navNames[active-1].classList.remove("active-menu");
    }
    // Also handle when we go back to a previous section.
    if (sectionLocs[active+1]>window.scrollY){
        active=active-1
        sectionNames[active].classList.add("your-active-class");
        sectionNames[active+1].classList.remove("your-active-class");

        navNames[active].classList.add("active-menu");
        navNames[active+1].classList.remove("active-menu");
    }

     
    //For sanity check
    if (sectionLocs[active]<=window.scrollY && sectionLocs[active+1]>window.scrollY){
        console.log("In section "+active)
        console.log("WINDOW "+window.scrollY);
        console.log("active section location "+sectionLocs[active])
        console.log("active section +2 location "+sectionLocs[active+2])
        //console.log("SECTION1 "+document.querySelector('#section1').offsetTop);
    }
    
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
//First create the section names, and style the navbar
addSectionNames();
styleNavbar();

sectionLocations(); //Helper for the scroll effects

// Scroll to section on link click
//Add event lister to navbar list
addClickNavigation();
addScrollEffects(); //For effects of scrolling

// Set sections as active



