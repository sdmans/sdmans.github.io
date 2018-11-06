$(document).ready(function(){
  console.log('Document is ready');
  const navButton = $('button.navbar-toggle');
  const collapsingDiv = $('div.navbar-collapse');
  const input = $('div.input-group > input, textarea');
  const shortcutBtn = $('button.anchor-btn');
  const anchorLinks = $('p.anchor');
  const topButton = $('button.fixed-top-btn');


  /*Logic for top scroll button */
  /* Create functions that add or remove buttons */
  const displayBtn =  function() {
    topButton.css("display", "block")
  }

  const removeBtn = function() {
    topButton.css("display", "none");
  }

  /*Source for function below https://stackoverflow.com/questions/17441065/how-to-detect-scroll-position-of-page-using-jquery */
  $(window).scroll(function(){
    /* Code below checks for position and stores it in height variable */
    let height = $(window).scrollTop();
    if (height > 1) {
      displayBtn();
    } else if (height === 0) {
      removeBtn();
    }
  });

  topButton.click(function(){
  });

  /* Top scroll button ends here */


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
 }//nav click function ends

/*When you scroll the code below runs */
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

 })



/* Clear placeholder text when user clicks into the textbox and add it when they exit it*/
 input.focus(function(){
   const placeholderText = this.placeholder;
   this.placeholder = "";
    input.blur(function(){
     this.placeholder = placeholderText;
   })
 })

})//document.ready ends
