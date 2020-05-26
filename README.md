# Landing Page Project

## Table of Contents

* [Introduction](#Introduction)
* [Navigation Menu](#navigation-menu)
* [Event Listener 1](#event-listener1-click-event-for-scrolling)
* [Event Listener 2](#event-listerner2-scrolling-and-active-section-display)

## Introduction

This is a landing page project to practice manipulating DOM and working with browser events. This page employs dynamically generated navigation menu based on the HTML sections. The page also works with events such as mouse click for scrolling effect to a section, as well as scrolling event to apply special style to indicate the active page currently being worked on.

## Navigation Menu

The navigation menu is dynamically generated based on what is already available in the HTML. This is done by the getElementsByTagName function to get all of the sections which currently exists in the HTML, and by creating a li element for each Section. Each section contains the data-nav which can be used as the values of the navigation section names.

## Event Listener1: Click Event for Scrolling

The click even invokes the scrolling behavior to the section. The navigation is done by the scrollTo function by using the offsetTop property of the section intended to travel. The scrollTo function scrolls the window to the location indicated by the offsetTop, which is the location of the section from the top.

Since the default beavior of the links is to make the jump to the section, the default behavior is disabled. This is all accomplished by adding the Event Listener to the navigation menu items which gets invoked by the clicks.

## Event Listerner2: Scrolling and active section display

The second event listener employed is the scrolling effect. A helper function stores the location of all of the sections. Using the location of all of the sections, a comparison is made with the window.scrollY property which keeps track of the current scrolling location. A variable active is used to keep track of which section is currently active, and by using the location of all of the sections as the threshold values, it can dynamically change the css for the section which are currently active to emphasize the current content being viewed in the window.
