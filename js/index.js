$(function() {
  var $tabs = $('.responsive-tabs');
  
  /**
   * Calculates the height of the responsive tabs.
   * This is necessary because of the absolute position
   * of the content when the window is wider than 768px
   */
  function calculateHeight() {    
    // Calculate the heights of all the responsive-tabs
    // in the page
    $tabs.each(function() {
      $(this).height('auto');
      var tallestContent = $(this).height();
      
      var $contents = $(this).find('.content');
     
      $contents.each(function() {
        var elHeight = $(this).outerHeight();
        if (tallestContent < elHeight) {
          tallestContent = elHeight;
        }
      });

      $contents.height(tallestContent);
      $(this).height(tallestContent);
    })
  }
  
  calculateHeight();
  
  // We need to recalculate the heights if the window is resized
  $(window).resize(function() {
    calculateHeight();
  });
  
  $tabs.find('.content').first().show();
});