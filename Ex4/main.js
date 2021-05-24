
$(function(){
    $('#check').click(function(){  

        let fullName = $('#fullName').val();
        let birthDate = $('#birthDate').val();
        let birthPlace = $('#birthPlace').val();
        let profession = $('#profession').val();
        let employer = $('#employer').val();
    
        //regex () c'est pour les sous classes
        let validName = /^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð][a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+([-][A-Z][a-z]+)?$/;
        let validBirthDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        //.test method to check if a string matches
       
           if(!validName.test(fullName)){
               $('#fullName').css('border', '2px solid red');
               $('#errorName').html('Enter full name please').css('color', 'red');
           } 
               else {
                   $('#fullName').css('border', '2px solid green');
               }
               if(!validBirthDate.test(birthDate)){
                $('#birthDate').css('border', '2px solid red');
                $('#errorName').html('Enter full name please').css('color', 'red');
            } 
                else {
                    $('#birthDate').css('border', '2px solid green');
                }     
                          
               
   });      
});



/^[0-9]{2}/[0-9]{2}/[0-9]{4}$/ ;


// prénom, date de naissance, lieu de naissance, emploi et société. 
// Le nom et le prénom doivent commencer par une majuscule, peuvent être composés et ne pas comporter de chiffre. 
// La date de naissance doit être sous le format jj/mm/aaaa. 
// Au clic sur un bouton, les informations apparaissent dans une modale.

 
    
    // $('#show').click(function(){
    //     fullName = ('#name').val()
    //     birthDate = ('#datepicker').val()
    //     birthPlace = ('#birth').val()
    //     profession = ('#profession').val()
    //     employment = ('#employment').val()
    //     alert(fullName + birthDate + birthPlace + employment + profession);
    // });

    // /^((0[1-9]|[12][0-9]|3[01])(/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(/)(02))|((0[1-9]|[12][0-9]|3[0])(/)(19|20)[0-9])(/)\d{4}$/;