var contentCount = 0; // Variable for global iteration count of showEvents()


function showEvents(data) {                           // Callback when JSON loads
    var newContent = '';                                // Variable to hold HTML
    
      // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
      for (var i = 0; i < data.events.length; i++) {    // Loop through object
        newContent += '<div class="event">';
        newContent += '<img src="' + data.events[i].map + '" ';
        newContent += 'alt="' + data.events[i].location + '" />';
        newContent += '<p><b>' + data.events[i].location + '</b><br>';
        newContent += data.events[i].date + '</p>';
        newContent += '</div>';
        
      }
      if (contentCount == 0) { // checks to see if the content loop is at the beginning 
            contentCount += 1; // iterates the content loop
            document.getElementById('content').innerHTML = newContent; // Updates first section
            }
        else {
            document.getElementById('content2').innerHTML = newContent;} // If the loop has been iterated once, results go to content2 instead
      
  }


  