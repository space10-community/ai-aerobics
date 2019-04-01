

// turn on/off debug prints to the console
var consoleDebug = true;

//Operating System 
// options are --> windows, android, iOS, opera, chrome, safari, firefox, edge, IE
// boild down to --> mobile, chrome, safarie, otherBrowser
var OS;

$(document).ready(function () {

	if(consoleDebug)console.log("--> document ready");    
    
    OS = getBrowserOS();
    if(consoleDebug)console.log("OS/Browser: " + OS);

    setTimeout(function () {
        if( OS =="chrome" || OS =="safari"){
          // yes we are right
          if(consoleDebug)console.log("--> show welcome screen");
          $("#welcome").fadeIn(0);
        } else if( OS =="mobile") {
          // we don't run on mobile devices, sorry
          if(consoleDebug)console.log("--> show mobile screen");
          $("#mobile").fadeIn(0);
        }
        else {  // other browsers
          // we don't run on other browsers, sorry
          if(consoleDebug)console.log("--> show otherBrowser screen");
          $("#otherBrowser").fadeIn(0);
        }
    }, 500); 

});

// called by the start button 
function startPrototype(){
  
  $("#welcome").fadeOut(1500);
  setTimeout(function () {
    startP5();
  }, 1000); 
}


function getBrowserOS() {

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var _os;

  if (/windows phone/i.test(userAgent)) {   // most come bevor other phones
      _os = "mobile";
  } 
  else if (/android/i.test(userAgent)) {
      _os = "mobile";
  } 
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      _os = "mobile";
  }
   else if(userAgent. indexOf("Edge") != -1 ) {   // most come bevor other browser
    _os = 'otherBrowser'; 
  }  
  else if((userAgent.indexOf("Opera") || userAgent.indexOf('OPR')) != -1 ) {
      _os = 'otherBrowser';
  }
  else if(userAgent.indexOf("Chrome") != -1 ) {
      _os = 'chrome';
  }
  else if(userAgent.indexOf("Safari") != -1) {
      _os = 'safari';
  }
  else if(userAgent.indexOf("Firefox") != -1 ) {
       _os = 'otherBrowser';
  }
  else if((userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) /*IF IE > 10 */ {
    _os = 'otherBrowser'; 
  } 
  else {
    _os = 'otherBrowser'; 
    if(consoleDebug)console.log("alert --> couldn't not figure which browser you are using. sorry");    
  }

  return _os;
}


