// $(document).ready(function(){

// $('#check').click(function(){
//     let validName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-z àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž'] +([-] [a-zA-Z] [a-z]+)?$/gm;//+ means what comes before is mandatory
//     let email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
//     let tel = /^(06|07)[0-9]{8}$/;


//     if(validName.test($('#firstName').val()) == false){
//         $('firstName').css('border', '2px solid red' );
//     }
//         else{
//             $('#firstName').css('border', '2px solid green');
//         }
//             if(validName.test($('#lastName').val()) == false){
//             $('lastName').css('border', '2px solid red' );
//             }
//                 else{
//                 $('#lastName').css('border', '2px solid green');
//                 }
//                 if(email.test($('#email').val()) == false){
//                 $('email').css('border', '2px solid red' );
//             }
//                 else{
//                     $('#email').css('border', '2px solid green');
//                 }
//                 if(tel.test($('#tel').val()) == false){
//                     $('tel').css('border', '2px solid red' );
//                 }
//                     else{
//                         $('#tel').css('border', '2px solid green');
//                     }
//             });
//     });


    $(function(){
        $('#verifier').click(function(){
             var ValidFirstName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+([-][A-Z][a-z]+)?$/;
             var Mail = /^[a-z0-9.-]+@[a-z0-9-]{2,}[.][a-z]{2,4}$/;
             var Telephone = /^(06|07)[0-9]{8}$/;
             if(ValidFirstName.test($('#name').val()) == false) {
                 $('#name').css('border', '2px solid red');
             } else {
                 $('#name').css('border', '2px solid green');
             }
             if(Mail.test($('#mail').val()) == false) {
                 $('#mail').css('border', '2px solid red');
             } else {
                 $('#mail').css('border', '2px solid green');
             }
             if(Telephone.test($('#phone').val()) == false) {
                 $('#phone').css('border', '2px solid red');
             } else {
                 $('#phone').css('border', '2px solid green');
             }
        });
    });

// gestion de deux inputs
    // if((name.test($('#firstName').val())== false)||(name.test($('#lastName').val())== false)){
    //     $('#firstName , #lastName').css("border","3px solid red");
    // }else{
    //     $('#firstName ,#lastName').css("border","3px solid green")
    // }






