$(document).ready(function() {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }
  $("#sidebar").html(
    "<nav class='navbar navbar-inverse navbar-fixed-top' id='sidebar-wrapper' role='navigation'> <ul class='nav sidebar-nav'><li class='sidebar-brand'><a href='./index.html'><p><span style='color:#BFBFBF; font-size: 30px;'>S</span><span style='color: #F46100; font-size: 30px;'><sup>+</sup></span></a></li><li class='dropdown'><a href='' class='dropdown-toggle' data-toggle='dropdown'>College Selector<span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li class='dropdown-header'>Selector Information</li><li id='tbcp'><a href='College%20Selector%20(R1.1%202017).pdf' target='_blank'>Information</a></li><li id='tbcp'><a href='./downloads.html'>Download</a></li><li id='tbcp'> <a href='mailto:info@splusgroup.net'>Contact Us</a></li></ul></li><li><a href='./calculator.html'>Acceptence Calculator</a></li><li class='dropdown'><a href='' class='dropdown-toggle' data-toggle='dropdown'>College Reference<span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li class='dropdown-header'>Reference Sites</li><li id='cr'><a href='http://www.educationuk.org/global/'>Education UK &#45; UK</a></li><li id='cr'><a href='https://www.collegeboard.org/'>CollegeBoard &#45; US &amp; SAT</a></li><li id='cr'><a href='http://www.act.org/content/act/en.html'>ACT</a></li><li id='cr'><a href='./college-math.html'>College Acceptence Probability</a></li></ul></li>                <li class='dropdown'><a href='' class='dropdown-toggle' data-toggle='dropdown'>S Plus Information<span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li class='dropdown-header'>Information</li><li id='spi'><a href='http://www.splusgroup.net'>S Plus Main Page</a></li><li id='spi'><a href='mailto:info@splusgroup.net'>Contact</a></li></ul></li></ul></nav>"
  );

  $("#button").html(
    "<button type='button' class='hamburger is-closed' data-toggle='offcanvas'><span class='hamb-top'></span><span class='hamb-middle'></span><span class='hamb-bottom'></span><h4 style='margin-left: 30px; position: relative;vertical-align:bottom;'>Menu</h4></button>"
  )
  $('[data-toggle="offcanvas"]').click(function() {
    $("#wrapper").toggleClass("toggled");
  });
});
