function myFunction() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var dropdownContent = this.nextElementSibling;
         if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
         } else {
         dropdownContent.style.display = "block";
         }
         });
      }
      $('.dropdown-item').on('click','a', function(){
        $(this).addClass('active').siblings().removeClass('active');
     });
  }

/*Visa Status*/
  function hideVisa() {
    var x = document.getElementById("myVisa");
      x.style.display = "none";
    
  }
  function showVisa() {
    var x = document.getElementById("myVisa");
      x.style.display = "block";
  }

  
/*Different Postal Address*/ 
  function showPostal() {
    var x = document.getElementById("myPostal");
      x.style.display = "block"; 
  }
  function hidePostal() {
    var x = document.getElementById("myPostal");
      x.style.display = "none";
  }
  
/*Student disabiltity*/ 
function showStudentDisability() {
  var x = document.getElementById("studentdisability");
    x.style.display = "block"; 
}
function hideStudentDisability() {
  var x = document.getElementById("studentdisability");
    x.style.display = "none";
}


/*School Type*/ 
function showschltype() {
  var x = document.getElementById("schltype");
    x.style.display = "block"; 
}
function hideschltype() {
  var x = document.getElementById("schltype");
    x.style.display = "none";
}


 