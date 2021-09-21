function showBlinker(){
    document.getElementById("blink_me").style.display = "block"; 
  }
  function clearAll(){
    display.innerHTML = "";
    answerDiv.innerHTML ="";
    showBlinker();
    
  }
  
  function removeLastChar(){
    var display = document.getElementById("display")
    var answer = document.getElementById("answer")
    var displayValue = display.innerHTML
    var answerValue = answer.innerHTML
    if(displayValue.length > 0){
      display.innerHTML = displayValue.substring(0, displayValue.length - 1)
      answer.innerHTML = answerValue.substring(0, answerValue.length - 1)
    }
    else{
      showBlinker();
    }
  }
  function removeWhiteSpaceFromArray(array){
      return array.filter((item) => item != ' ');
  }
  
  function arrayRemove(arr, value) { 
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr
  }
  
  
  const display = document.getElementById('display');
  const answerDiv = document.getElementById('answer');
  var answer = 0;
  var parsedAnswer = parseInt(answer)
  
  const noAllowedAsFirst = ['+','/','*']
  
  var answerGiven = false;
  
  
  const addValueToDisplay = (e) => {
  
    if(display.innerHTML.length === 0 && noAllowedAsFirst.includes(e.innerHTML)){
      console.log(e.innerHTML)
      alert(`${e.innerHTML} not allowed`)
      location.reload()
    }
  
    if(answerGiven){
      display.innerHTML = ""
      answerDiv.innerHTML =""
      answerGiven = false
    }
    
    document.getElementById("blink_me").style.display = "none"; 
    display.innerHTML += e.innerHTML;
  }
  
  
   
  const add = (num2) =>{
   
    return  parseFloat(answer) + num2;

  }
  
  
  const minus = (num2) => {
    return parseFloat(answer) - num2
  }
  
  const multiply = (num2) => {
    return (parseFloat(answer)) * (num2)
  }
  
  const divide = (num2) => {
    return parseFloat(answer) / num2
  }
  
  // const an = add(1,2)
  
  // console.log(an)
  const test = [ "", "-", "3", "+", "6", "+", "3" ]
  
  for (let index = test.length - 1; index > 0; index--) {
    const element = test[index];
    // console.log(element)
    
  }
  // console.log(parseFloat('10') / parseFloat('/5'),);
  
  
  
  
  const perFormOperation = () =>{
    const expression = display.innerHTML;
  
    var splitUpArray = expression.split(/([-+*\/ ])/g);
  
    splitUpArray =  splitUpArray.filter(function(str) {
          return /\S/.test(str);
      });
    answer = parseFloat(splitUpArray[0]);
  
    if(!parseFloat(splitUpArray[0])){
      answer = splitUpArray[0] + parseFloat(splitUpArray[1]);
      splitUpArray = arrayRemove(splitUpArray, splitUpArray[0]);
   
  
      splitUpArray = arrayRemove(splitUpArray, splitUpArray[0]);
    }
  
  
    for (let index = 0; index < splitUpArray.length; index++) {
      const element = splitUpArray[index];
      
      if(element =="+" ){
        answer = add(parseFloat(splitUpArray[index + 1]));
        
        // console.log(answer,'newAn');
      }
      if(element == "-"){
        answer = minus(parseFloat(splitUpArray[index + 1]));
        
      }
      if(element ==  '*'){
        answer = multiply(parseFloat(splitUpArray[index + 1]));
        
      }
      if(element == "/"){
        answer = divide(parseFloat(splitUpArray[index + 1]));
        
      }
      answerDiv.innerHTML = answer;
      answerGiven = true
  
  
    }
  
  }