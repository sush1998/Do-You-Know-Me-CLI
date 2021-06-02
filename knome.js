//imports
//resdlinesync
const readlineSync=require("readline-sync");
//chalk
const chalk=require('chalk');
//
const rainbow=require('chalk-rainbow')
//animation


//chalk var
const right=chalk.bold.green;
const rightBG=chalk.bgGray ;
const error=chalk.bold.red;
const blue=chalk.underline.bold.blue;
const magentaBG=chalk.bgMagentaBright;
const black=chalk.bold.black;
const grey=chalk.bold.blackBright ;
const yellowBg=chalk.yellowBright;
const blueBg=chalk.bgBlue;
const yellow=chalk.yellow;
const greenBG=chalk.bgGreen;
const redBg=chalk.bgRed;
const bgBlack=chalk.bold.bgBlack;
const whiteBg=chalk.bgWhiteBright;






//intro
console.clear();
console.log("Please use Desktop Mode for better User-experience")
console.log();
console.log(rightBG(yellowBg("+-------------------------------------------------+")));
console.log(rightBG(yellowBg("|              Welcome to KNOME game              |")));        
console.log(rightBG(yellowBg("+-------------------------------------------------+")));
//create user
const users=[{username:"Mark",score:2},{username:"Jhon",score:3},{username:"test",score:4}];
console.log();
const username=readlineSync.question(blueBg('Please Enter Name')+' :  ');
console.log();
console.log(rainbow(`               Let's play ${username} !!`));
console.log();
//displaying question animation


const questionBank=[];
var score=0;
const question1=
{
    question:"Where do I stay ?",
    options:["Hyderbad","Akola","Mumbai","Kolkata"],
    answer:2
};

const question2={
    question:"Where do I work ?",
    options:["Apple","Google","Netflix","TCS"],
    answer:4
};

const question3=
{
    question:"One thing I love the most.",
    options:["Gyming","Reading","Solo-travelling","Binge Watching"],
    answer:3
};
const question4=
{
    question:"Whom do I idolise the most ?",
    options:["Elon Musk","Virat Kohli","Narendra Modi","Salman Khan"],
    answer:2
};
const question5=
{
    question:"Which is most fav. desertt",
    options:["Rasmalai","Gulab Jamun","Rabdi","Jalebi"],
    answer:1
};
questionBank.push(question1,question2,question3,question4,question5);
//console.log(questionBank);

//diplay 5 question + update score + error handling
displayQuestion();
users.sort();
users.reverse();
if(score>users[0].score)
{
    console.log("+-------------------------------------------------+");
   
    console.log(redBg("                NEW HIGH SCORE SET                 "))
    console.log()
    console.log()
    console.log("+-------------------------------------------------+");
     console.log((rainbow(`            Congratulations ${username}!!          `)));
     console.log()
     console.log()
}

users.unshift({username:username,score:score});
users.sort();
//users.reverse();
//users.sort()
//console.log(users);

//final score
console.log("              "+greenBG(black("+---+")));
console.log(blueBg("Final Score")+" : "+greenBG(black("| "+score+" |")));
console.log("              "+greenBG(black("+---+")));
//top 3 players)
console.log();console.log();
console.log(redBg(bgBlack("*****  TOP SCORES *****")));
console.log()
//users.sort();
//users.reverse();
for(let i=0;i<3;i++)
{
    console.log(yellowBg.bold(`${users[i].score} [${users[i].username}] `));
}
console.log()
console.log(redBg(bgBlack("*****  THANK-YOU  *****")));




function displayQuestion(array)
{
    
    
    for(ques in questionBank)
    {
        console.log("+-------------------------------------------------+");
        const{question,options,answer}=questionBank[ques];
        console.log(magentaBG(black(question)));
        displayOptions(ques);
        const userAnswer=readlineSync.question();
        let res=answerCheck(userAnswer,ques);
        if(res==true)//
        {
            score++;
            console.log(right("Correct !!")+"                               Score : "+blue(score));
        }
        else
        {
          console.log(yellow(`Correct answer => ${answer}`))
            console.log(error("Wrong !!")+"                                 Score : "+blue(score));
            
        }
       // console.log("Score : "+blue(score));
       
    }
    console.log("+-------------------------------------------------+");

}

function answerCheck(userAnswer,questionNumber)
{
    return questionBank[questionNumber].answer==userAnswer ? true :false;
}

function displayOptions(questionNumber)
{
    for(let i=0;i<4;i++)
    {
        console.log(i+1+". "+questionBank[questionNumber].options[i]);
    }
}