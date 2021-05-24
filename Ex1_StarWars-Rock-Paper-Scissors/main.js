//Rey beats Anakin      1 beats 2
//Anakin beats Obiwan   2 beats 3
//Obiwan beats Rey      3 beats 1

// number of victories * 100 / number of matches

$(document).ready(function(){
    let user_score = 0;
    let comp_score = 0;
    let ties = 0;
    let games =0;
    let wins = 0;
    let percentage = 0;
    //set computer options in an array
    //use Math.floor(), to get a random choice from the array and assign a variable
    //Return this value to whatever variable called          
    let compOptions = ['rock', 'paper', 'scissors'];
    let compPlay = compOptions [Math.floor(compOptions.length * Math.random())];
    // let compChoice = getCompPlay();
        function playGame(userInput){
            // getCompPlay();

            $('#userPlay').removeClass('rock paper scissors winner draw loser');
            $('#userPlay').addClass(userInput);

            $('#compPlay').removeClass('rock paper scissors winner draw loser');
            $('#compPlay').addClass(compPlay);

            if((userInput == 'rock') && (compPlay == 'paper')){
                $('#compPlay').addClass('winner');
                alert('you lose')
                comp_score++; 
                games++;
            }
            else if((userInput == 'rock') && (compPlay == 'scissors')){
                $('#userPlay').addClass('winner');
                $('#compPlay').addClass('loser');
                alert('you win')
                user_score++;
                wins++;
                games++;
            }
            else if((userInput == 'paper') && (compPlay == 'rock')){
                $('#userPlay').addClass('winner');
                $('#compPlay').addClass('loser');
                alert('you win')
                user_score++;
                wins++;
                games++;
            }
            else if ((userInput == 'paper') && (compPlay == 'scissors')){
                $('#compPlay').addClass('winner');
                $('#userPlay').addClass('loser');
                comp_score++; 
                games++;
            }
            else if ((userInput == 'scissors') && (compPlay == 'paper')){
                $('#userPlay').addClass('winner');
                $('#compPlay').addClass('loser');
                user_score++;
                wins++;
                games++;
            }
            else if ((userInput == 'scissors') && (compPlay == 'rock')){
                $('#compPlay').addClass('winner');
                $('#userPlay').addClass('loser');
                comp_score++; 
                games++;
            }
            else{
                alert('It\'s a draw!');
                $('#userPlay').addClass('draw');
                $('#compPlay').addClass('draw');
                ties++;
                games++;
            } 
            $('#score1').html('User Score: ' + user_score + ' || Computer Score: ' + comp_score + ' || Ties: ' + ties);
            percentage = wins *100/games;
              alert(percentage + 'victory');
        }
              
       
            
           

            //Button click handlers
            $('#rock').click(function(){
                    playGame('rock');
                    
                    
            });
       
            $('#paper').click(function(){
                playGame('paper');
                
                
            });
          

            $('#scissors').click(function(){
                playGame('scissors');
                
                
            });
        
});