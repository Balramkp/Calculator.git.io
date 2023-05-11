let answer = document.getElementById('answer')

const appendButton= (Event)=>{
    answer.innerHTML += Event;
}

const clearAnswer = ()=>{
    answer.innerHTML = ''
}

const solveAnswer = ()=>{
    try{
        answer.innerHTML = eval(answer.innerHTML)
    } catch{
        alert("Invalid expression")
    }
} 