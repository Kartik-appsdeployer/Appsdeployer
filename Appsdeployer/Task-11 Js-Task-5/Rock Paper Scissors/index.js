const RPSGame = () => {
    let MyScore = 0;
    let ComputerScore = 0;


    //Ye wala function, play wali button se game chalu krne ke liye
    const MainGame = () => {
        const Play = document.querySelector('.middleSec button');
        const MiddleScreen = document.querySelector('.middleSec');
        const Content = document.querySelector('.content');

        Play.addEventListener('click', () => {
            MiddleScreen.classList.add('fadeOut');
            Content.classList.add('fadeIn');
        })
    };


    // Ye function pura match ke liye rahega
    const Match = () =>{
        const Options = document.querySelectorAll('.Options button');
        const My = document.querySelector('.Player');
        const Computer = document.querySelector('.Computer');

        const ComputerOptions = ['rock', 'paper', 'scissors'];

        Options.forEach(option => {

            // Yaha pe humne jo bhi button click kiya hai uske hisab se changes honge
            option.addEventListener('click', function(){
                const ComputerNumber = Math.floor(Math.random() * 3);
                const ComputerChoice = ComputerOptions[ComputerNumber];


                // Isme this.textContent ka mtlb hai ki humne jo bhi button click ki hai wo
                // yaha pe aa jaega
                HandComparison(this.textContent, ComputerChoice);

                My.src = `${this.textContent}.png`;
                Computer.src = `${ComputerChoice}.png`;
            });
        });
    };


    // Is function mein points update honge
    const UpdatePoints = () =>{
        const PlayerScore = document.querySelector('.PlayerScore p');
        const Computerscore = document.querySelector('.ComputerScore p');
        PlayerScore.textContent = MyScore;
        Computerscore.textContent = ComputerScore;
    }



    // Is function ke through comparison hoga
    const HandComparison = (MyChoice, ComputerChoice) =>{
        const res = document.querySelector('.context');
        if(MyChoice === ComputerChoice){
            res.textContent = 'Its a Dram Match';
            return;
        }

        if(MyChoice === 'rock'){
            if(ComputerChoice === 'scissors'){
                res.textContent = 'You Win!!!';
                MyScore++;
                UpdatePoints();
                return;
            }
            else{
                res.textContent = 'Computer Win!!!';
                ComputerScore++;
                UpdatePoints();
                return;
            }
        }
        if(MyChoice == 'paper'){
            if(ComputerChoice === 'rock'){
                res.textContent = "You Win!!!";
                MyScore++;
                UpdatePoints();
                return;
            }
            else{
                res.textContent = 'Computer Win!!!';
                ComputerScore++;
                UpdatePoints();
                return;
            }
        }
        if(MyChoice === 'scissors'){
            if(ComputerChoice === 'paper'){
                res.textContent = 'You Win!!!';
                MyScore++;
                UpdatePoints();
                return;
            }
            else{
                res.textContent = "Computer Win!!!";
                ComputerScore++;
                UpdatePoints();
                return;
            }
        }
    };

    MainGame();
    Match();
};
RPSGame();
