function brothers (name,age,task){
    console.log('hello brother',name);
    console.log ('your age',age);
    task();
}
function washHand(){
    console.log('wash your hand');
}
function takeShower(){
    console.log('take your shower');
}
function homeWork(){
    console.log('Do your homework');
}
brothers('raju',14, takeShower);
brothers('kamal',16,washHand);
brothers('mubin',15,homeWork);
function welcomeGuest(name,greetHandler){
    greetHandler(name);
}

function goodMorning(name){
    console.log('good morning',name)
}
welcomeGuest('shabana',goodMorning);
function goodEvening(name){
    console.log('good evening',name)
}
welcomeGuest('purnima',goodEvening);

