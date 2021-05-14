   // Get modalmb
   var modalmb = document.getElementById('mymodalmb');

   // Get pseudoelement to open modalmb
   var btn = document.getElementById("sizedmb");

   // Get the <span> element to close modalmb
   var span = document.getElementsByClassName("close")[0];

   // When user clicks button, open modalmb
   btn.onclick = function() {
       modalmb.style.display = "block";
   };

   // When user clicks Close (x), close modalmb
   span.onclick = function() {
       modalmb.style.display = "none";
   };

   // When user clicks anywhere outside of the modalmb, close modalmb
   window.onclick = function(event) {
       if (event.target == modalmb) {
           modalmb.style.display = "none";
       }
   }