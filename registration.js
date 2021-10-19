function validateemail(email) {
    var x = email;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        return false;
    }
}

function clearData(){
    var a =document.getElementById("form").reset() 
  }

  function validation(){ 

    var pswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    var myname = document.getElementById("name").value
    var mypswd = document.getElementById("pd").value
    var myemail = document.getElementById("email").value
    var mydob = document.getElementById("Dob").value
    var myct = document.getElementById("city").value


    if(myname.length==0 || myemail.length==0 || mypswd.length==0){
        alert("Please Fill All The Fields")   
    }
    else if(myname.length>20){
        alert("UserName Should Contain Maximum Of 20 Characters")   
    }
    else if(validateemail(myemail)==false){
        alert("Email-id Is Not Valid")  
    }
    else if(!mypswd.match(pswd)){
        alert("Invalid Password!! Password Length Should Be Atleast 8 And It Should Atleast Contain One Uppercase,lowercase,Numeric And Special Character Respectively") 
    }
    else if(myct == "NA"){
        alert("Select Your City")  
    }
    else if (!document.getElementById("p1").checked && !document.getElementById("p2").checked){
        alert("Please Select Atleast One Choicebox") ;
    }
    else{
    alert("Thank You For Registering With Us " + myname)
    //window.location.href="login.html";
}
}