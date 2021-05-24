$(document).ready(function(){
    $("#btn_submit").click(function(){
        let nameReg =/^[a-zA-Z ]$/;
        let phoneNumbReg = /^0[6-7][0-9]{8}$/;//06 07 portables francais to add
        let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let firstname = $('#firstname').val();
        let lastname = $('#lastname').val();
        let phoneNumber = $('#phoneNumber').val();
        let email = $('#email').val();
    
        let errors=false;

       if(firstname == '' &&  !nameReg.test(firstname)){
           $('#firstname').css('border', '5px solid red');   
           errors=true;
       }

       else{
        $('#firstname').css("border","5px solid green");
        errors=false;
        }

       if(lastname == '' &&  !nameReg.test(lastname)){
        $('#lastname').css('border', '5px solid red');   
        errors=true;
       }

       else{
        $('#lastname').css("border","5px solid green");
        errors=false;
        }

       if(email == '' && !emailReg.test(email)){
           $('#email').css('border', '5px solid red');   
           errors=true;
       }

       else{
        $('#email').css("border","5px solid green");
        errors=false;
        }
       if(phoneNumber == '' && !phoneNumbReg.test(phoneNumber)){
        $('#phoneNumber').css('border', '5px solid red');   
        errors=true;
       }
       else{
        $('#phoneNumber').css("border","5px solid green");
        errors=false;
        }
       if(errors==true){
           return false;
       }
       else{
           return true;
       }
    });
});