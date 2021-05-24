$(document).ready(function(){
    
    let Math = Number($('#Math').val());
    let History = Number($('#History').val());
    let French = Number($('#French').val());
    let Art = Number($('#Art').val());
    let Science = Number($('#Science').val());
    let clear = false;

    let total=  Math + History + French + Art + Science ;
    let average = (total/5);
    console.log(total);

    if (average>=16) {
        $("#message").html('Unbelievable!')
    }
    else if (average>=12) {
        $("#message").html('Not too shabby!' )
    }
    else if (average>=10) {
        $("#message").html('You made it!' )
    }
    else if (average<=9) {
        $("#message").html('Sorry no cigar!')
    }
    else if (average<=5) {
        $("#message").html('Did you even show up?')
    }
      
    $('#getResult').click(function(){
        $("#averageResult").html('Your average is ' + average).css("display", "block");
       
        $('#reset').click(function(){
        $(":reset").css("background-color", "red");
        });
});

   
});


