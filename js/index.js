$(document).ready(function(){
  console.log('Document is ready');
  const navButton = $('button.navbar-toggle');
  const collapsingDiv = $('div.navbar-collapse');
  const input = $('div.input-group > input, textarea');
  const shortcutBtn = $('button.anchor-btn');
  const anchorLinks = $('p.anchor');
  const fixedLinkTop = $('a.fixed-top');
  const introSection = $('section.intro');
  const contactForm = $('.contact-form');

  /*Fade In properties, trying out the $ because I saw someone smart use it :D */
  const $myName = $('h2.my-name');
  const $myTitle = $('p.my-title');
  const $specialtyList = $('ul.specialty-list');
  const $socialList = $('ul.social-menu');

/* Find a way to display work items at a delay */
/* Name, Title, Specialties, an Social Menu will fade in at the beginning with a timed interval */
 
const displayElements = function () {
/* Link to article that might help fix the fadein issue with IE */
  $myName.delay(300).fadeIn();
  $myTitle.delay(600).fadeIn();
  $specialtyList.delay(1000).fadeIn();
  $socialList.delay(1500).fadeIn();
}

displayElements();

  /* If you click on the top intro section, it will check if the hamburger navbar is open and click to close if it is */
  introSection.click(function() {
    if(collapsingDiv.hasClass('in')) {
      /* Clicks and returns when criteria is met */
    navButton.trigger('click');
    return;
    } else {
      return;
    }
  });

  /* Logic for top scroll button */
  /* Create functions that add or remove buttons */
  const displayBtn =  function() {
    fixedLinkTop.css("display", "block");
  }

  const removeBtn = function() {
    fixedLinkTop.css("display", "none");
  }

  /*Source for function below https://stackoverflow.com/questions/17441065/how-to-detect-scroll-position-of-page-using-jquery */
  $(window).scroll(function(){
    /* Code below checks for position and stores it in height variable */
    let height = $(window).scrollTop();
    // console.log(height);
    if (height > 1) {
      /* Toggle fixedLinkTop class so that the button is either displayed or removed based on position */
      displayBtn();
      /* Attempting to hide work items */
    } else if (height === 0) {
      removeBtn();
    }
  });// Top scroll button functionality ends here


  /* Get Work History to display based on window position. The position seems to be 4397 according to the log above. */


anchorLinks.fadeOut();//Links fade out at the beginning

 /* When user scrolls, the nav tab disappears */
 navButton.click(function(){
   const changeClass = function(){
   /* Checks if css is set certain class when menu is displaying */
    if(collapsingDiv.hasClass('in')) {
      /*Clicks and returns when criteria is met*/
      navButton.trigger('click');
      return;
    }
 }

/* When you scroll the code below runs */
    $(window).scroll(changeClass)

 })//navButton Click event ends

/* Create a function that displays shortcut anchor links */
 shortcutBtn.click(function() {
   if (shortcutBtn.hasClass('begone-anchors')) {
     console.log("Fading Out")
     console.log(shortcutBtn.innerText)
     shortcutBtn.innerText = "Try a shortcut!"
     anchorLinks.fadeOut();
     shortcutBtn.removeClass('begone-anchors');

   } else {
     console.log('Fading in');
     anchorLinks.fadeIn();
     shortcutBtn.toggleClass('begone-anchors');
   }
 })//shortcut anchor link display function ends here.





/* Clear placeholder text when user clicks into the textbox and add it when they exit it*/
 input.focus(function(){
   const placeholderText = this.placeholder;
   this.placeholder = "";
    input.blur(function(){
     this.placeholder = placeholderText;
   })
 });

 /* Prevent contact form from resetting and log message for now */
contactForm.submit(function(e){
  e.preventDefault();
  console.log('Submitting form...');
  /* Stores values to message object and console log it */
  const message = {
    name: contactForm[0].elements[0].value, 
    email: contactForm[0].elements[1].value,
    subject: contactForm[0].elements[2].value,
    message: contactForm[0].elements[3].value
  };

  console.log(message);

})

})//document.ready ends
