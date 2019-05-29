$(document).ready(function () {
  $('.image-link').magnificPopup({ type: 'image' });
});
// Exit intent
function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, fn, false);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + evt, fn);
  }
}

// Exit intent trigger
addEvent(document, 'mouseout', function (evt) {
  if (evt.toElement === null && evt.relatedTarget === null && !localStorage.getItem('exitintent_show')) {
    $.magnificPopup.open({
      items: {
        src: '#newsletter-form' //ID of inline element
      },
      type: 'inline',
      removalDelay: 500, //Delaying the removal in order to fit in the animation of the popup
      mainClass: 'mfp-fade mfp-fade-side', //The actual animation
    });
    localStorage.setItem('exitintent_show', 'true'); // Set the flag in localStorage
  }
});
//to handle the mail_to such that it doesn't open in the same tab
$(document).on('click', 'a[href^=mailto]', function (e) {
  var checkClose, checkLoaded, event, href, i, len, loadEvents, results, t, wndw;
  e.preventDefault();
  href = this.href;
  wndw = window.open(href, 'mail');
  checkClose = function () {
    console.log('checkClose');
    try {
      wndw.location.href;
      return wndw.close();
    } catch (error) {
      return console.log('webmail');
    }
  };
  t = setTimeout(checkClose, 5000);
  try {
    checkLoaded = function () {
      console.log('loaded');
      clearTimeout(t);
      return t = setTimeout(checkClose, 2000);
    };
    wndw.onload = checkLoaded;
    loadEvents = ["DomContentLoaded", "load", "beforeunload", "unload"];
    results = [];
    for (i = 0, len = loadEvents.length; i < len; i++) {
      event = loadEvents[i];
      results.push(wndw.addEventListener(event, checkLoaded));
    }
    return results;
  } catch (error) {
    return checkLoaded();
  }
});