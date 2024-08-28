
var app = new Vue({
    el: '#app',
    data: {
      displayContent: 0,
      displayContentfeature: 0,
      username: '',
      uname: false,
      email: '',
      mailvalue: '',
      umail: false,
      companyname: '',
      ucname: false,
      entervalid: false,
      invalidmsg: false,
      successEmail: false,
      message: '',
      Submit: true,
      Submitloader: false,
      alreadysub: false,
      subcribeloader: false,
      specialCharacter:false,
      specialCharacter2:false
  
  
    },
    methods: {
      submit() {

        // Check if username is empty
        if (username.value.length == 0) {
          this.uname = true;
        } else {
          this.uname = false;
        }
      
        // Check if email is empty
        if (email.value.length == 0) {
          this.umail = true;
        } else {
          this.umail = false;
        }
      
        // Check if company name is empty
        if (companyname.value.length == 0) {
          this.ucname = true;
        } else {
          this.ucname = false;
        }
      
        // Email format validation
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value != '') {
          if (email.value.match(mailformat)) {
            this.entervalid = false;
          } else {
            this.entervalid = true;
          }
        }
      
        // Restrict special characters in username
        var usernameFormat = /^[a-zA-Z0-9_]+$/; // Only allows alphanumeric characters and underscores
        if (username.value != '' && !username.value.match(usernameFormat)) {
          this.uname = true; // Set this to true to show error message
          console.log("Username contains invalid characters.");
          this.specialCharacter=true
          return; // Stop form submission
        }

        var usernameFormat2 = /^[a-zA-Z0-9_.-]+$/; // Only allows alphanumeric characters and underscores
        if (companyname.value != '' && !companyname.value.match(usernameFormat2)) {
          this.ucname = true; // Set this to true to show error message
          console.log("compny name contains invalid characters.");
          this.specialCharacter2=true
          return; // Stop form submission
        }
      
        // Check if any validation errors exist
        if (this.uname == true || this.umail == true || this.ucname == true || this.entervalid == true) {
          return;
        }
      
        // If validation passes, proceed with submission
        if (username.value != "") {
          var actvcls = document.getElementsByClassName("activess")[0].innerHTML;
          this.Submit = false;
          this.Submitloader = true;
      
          $.post("https://app.xrmeet.io/ar_connect/xrmeet_contact",
            {
              username: username.value,
              contact_user_email: email.value,
              company_name: companyname.value,
              message: this.message,
              technician_number: actvcls,
            },
            function (result) {
              var parse_data = JSON.parse(result);
              var show = document.getElementById("submitted");
              
              if (parse_data.status == true) {
                app.message = '';
                app.username = '';
                app.email = '';
                app.companyname = '';
                show.style.display = "block";
                username.value = '';
                email.value = '';
                companyname.value = '';
      
                if (show.style.display == "block") {
                  setTimeout(function () {
                    var show = document.getElementById("submitted");
                    show.style.display = "none";
                    app.Submit = true;
                    app.Submitloader = false;
                  }, 5000);
                }
              } else {
                console.log("Error in submission");
              }
            });
        } else {
          console.log("Error in submission");
        }
      },
      
     
      reset() {
        setTimeout(function () {
  
          var show = document.getElementById("submitted");
          show.style.display = "none";
        }, 5000)
        username.value = '';
        email.value = '';
        companyname.value = '';
        this.message = '';
      },
    
  
    },
  })
 
  var header = document.getElementById("mydiv");
  if (header) {
    var btns = header.getElementsByClassName("btnss");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activess");
        current[0].className = current[0].className.replace(" activess", "");
        this.className += " activess";
      });
    }
  }
  function myFunction() {
    document.getElementById("myForm").reset();
  }
  $(document).ready((function () {
    $(".boxw").slice(0, 56).hide(),
  
      $(".boxw").slice(0, 16).show(),
      // alert($(".blog-box").length)
      $("#loadMore").on("click", (function (e) {
        e.preventDefault(),
          $(".boxw:hidden").slice(0, 8).slideDown(), 0 == $(".boxw:hidden").length && $("#loadMore").text("No Content").addClass("noContent")
      }))
  }));