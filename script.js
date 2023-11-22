let statistika_js = document.querySelector('.statistika') 
let question1 = document.querySelector('.question') 
let answer0 = document.querySelectorAll('.answer') 
let start_cont = document.querySelector('.start')
let btn = document.querySelector('.start_btn')
let main = document.querySelector('.bolshoy')
function randint(min,max){ 
    return Math.round(Math.random()*(max-min)+min)
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) { 
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [   
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

let signs =['+','-','*','/'] 
function randomSign(){ 
         return signs[randint(0,3)]
}
class Question{
    constructor(){
        let a = randint(1, 30)
        let b = randint(1, 30)
        let sign = randomSign()
        this.question = `${a} ${sign} ${b}`
        if(sign=='+') {this.correct = a + b}
        else if(sign=='-') {this.correct = a - b}
        else if(sign=='*') {this.correct = a * b}
        else if(sign=='/') {this.correct = a / b}
        this.answers=[
        randint(this.correct - 15, this.correct - 1),
        randint(this.correct - 15, this.correct - 1),
        this.correct,
        randint(this.correct + 1, this.correct + 15),
        randint(this.correct + 1, this.correct + 15),
         ]
    shuffle (this.answers)
        }        
    display() {
        question1.innerHTML=this.question
        for (let i=0; i< this.answers.length; i+=1)
        {
           answer0[i].innerHTML=this.answers[i]
        }
      }
        } 
    main.style.display='none'
    start_cont.style.display='flex'
    let counter_correct  
    let counter 
    let current_quetion 
     btn.addEventListener('click', function(){
     main.style.display='flex'
     start_cont.style.display='none'
    counter_correct= 0
    counter= 0 
    current_quetion= new Question()
     current_quetion.display()
     setTimeout(function(){
       main.style.display='none'
       start_cont.style.display='flex'
                statistika_js.innerHTML= 
     `Вы дали ${counter_correct} правильных ответов из ${counter}.
      Точность - ${Math.round(counter_correct*100/counter)}% `},10000)
})
     for(let i = 0;i<answer0.length; i+=1){
         answer0[i].addEventListener('click', function() {
    if(answer0[i].innerHTML==current_quetion.correct){
       console.log("Правильно")
       answer0[i].style.background='green'
       setTimeout(()=>{answer0[i].style.background= 'white'},200)
      counter_correct+=1
    }
    else{
       console.log("Неправильно")
        answer0[i].style.background='red'
        setTimeout(()=>{answer0[i].style.background= 'white'},200)
    }
    counter+=1 
    current_quetion=new Question() 
    current_quetion.display() 
    }) 
    }
    
     
     
