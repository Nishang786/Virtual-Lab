

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const tryagain_btn = document.querySelector(".tryagain.btn");
var array = questions_A
console.log(array);
// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuestions_A(0); //calling showQestions function
  //   queCounter(1); //passing 1 parameter to queCounter
  //    startTimer(30); //calling startTimer function
  //   startTimerLine(0); //calling startTimerLine function
};

let timeValue = 30;
let queA_count = 0;
let queB_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let que2_count = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// // if restartQuiz button clicked
// restart_quiz.onclick = ()=>{
//     quiz_box.classList.add("activeQuiz"); //show quiz box
//     result_box.classList.remove("activeResult"); //hide result box
//     timeValue = 30;
//     queA_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     que2_count = 0;
//     showQuestions_A(queA_count); //calling showQestions function
//     //queCounter(que_numb); //passing que_numb value to queCounter
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine); //clear counterLine
//    // startTimer(timeValue); //calling startTimer function
//    // startTimerLine(widthValue); //calling startTimerLine function
//     timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//     next_btn.classList.remove("show"); //hide the next button
//     check.classList.remove("show")
// }

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const check = document.querySelector("footer .check");
const Try_again = document.querySelector("footer .Try_again");

// if Next Que button clicked
next_btn.onclick = () => {
  if (queA_count < questions_A.length - 1) {
    //if question count is less than total question length
    queA_count++; //increment the queA_count value
    que_numb++; //increment the que_numb value
    type = questions_A[0].type
    showQuestions_A(queA_count,type); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    //  clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    //  startTimer(timeValue); //calling startTimer function
    //  startTimerLine(widthValue); //calling startTimerLine function
    //  timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else if (queB_count < 1) {
    console.log("Que - 2");
    showQuestions_B(queB_count);
    queB_count++;
  }  
   else if(false){}
   else {
    //  clearInterval(counter); //clear counter
    //  clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

//========================================================================================

// getting questions_A and options from array

function showQuestions_A(indexA,type) {
  if(type == 'A'){
    array = questions_A
  }
  console.log(array)

  // document.getElementById('que').innerHTML +=
  //           "<div class='queA_text'> </div>";
  // document.getElementById('que').innerHTML +=
  //           "<div class='option_list'>  </div>";
  // console.log(document.getElementById("que"))

  const queA_text = document.querySelector(".queA_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let queA_tag =
    "<span>" +
    array[indexA].numb +
    ". " +
    array[indexA].question +
    "</span>";
  queA_text.innerHTML = queA_tag; //adding new span tag inside que_tag
  document.getElementById("queA").innerHTML +=
    '<div class="option_list"><div class = "table" id = "Table">';
  var opt_id = 0;
  for (i = 0; i < 3; i++) {
    document.getElementById("Table").innerHTML += '<div class = "row">';
    for (j = 0; j < 3; j++) {
      //console.log(array[indexA].options[opt_id])
      if(array[indexA].options[opt_id] != null){
      document.getElementById("Table").innerHTML +=
        '<div class="option" id = "' +
        opt_id +
        '"><img src = "' +
        array[indexA].options[opt_id] +
        '"></div>';
      opt_id++;
    }}
    document.getElementById("Table").innerHTML += "</div>";
  }
  document.getElementById("queA").innerHTML += "</div></div>";
  // +'<div class = "row">'
  // +'<div class="option" id = "0"><span><img src = "' + questions_A[index].options[0]+'"></span></div>'
  // + '<div class="option" id = "1"><span><img src = "' + questions_A[index].options[1]+'"></span></div>'
  // +'</div>'
  // +'<div class = "row">'
  // + '<div class="option" id = "2"><span><img src = "' + questions_A[index].options[2]+'"></span></div>'
  // + '<div class="option" id = "3"><span><img src = "' + questions_A[index].options[3]+'"></span></div>'
  // +'</div>'
  // +'</div></div>';

  // option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = document.querySelectorAll(".option");
  
  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this,array)");
  }
}
// creating the new div tags which for icons
//let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
//let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
var ans_array = [];
function optionSelected(answer,array) {

    Try_again.classList.remove("show");
  var items = document.querySelectorAll(".option");
  //   items.forEach(function (item) {
  //    //item.className = item.className.replace("selected"," ");
  //    console.log(item.className)
  //    if(item.className == "selected"){
  //     item.className = item.className.replace("selected"," ");
  //    }
  //   });


  if (answer.className === "option selected") {
    console.log(ans_array.includes(parseInt(answer.id)));
    answer.className = answer.className.replace("selected", " ");
    if (ans_array.includes(parseInt(answer.id)) == true) {
      var value = parseInt(answer.id);
      var index = ans_array.indexOf(value);
      ans_array.splice(index, 1);
    }
  } else {
    answer.classList.add("selected");
    console.log(ans_array.includes(answer.id));
    if (ans_array.includes(parseInt(answer.id)) === false) {
      console.log(answer.id);
      ans_array.push(parseInt(answer.id));
    }
  }

  //  clearInterval(counter); //clear counter
  //    clearInterval(counterLine); //clear counterLine
  let userAns = ans_array.sort(); //getting user selected option
  //console.log(answer.id)
  console.log(userAns);
  let correcAns = array[queA_count].answer; //getting correct answer from array
  console.log(correcAns);
  const allOptions = option_list.children.length; //getting all option items
  console.log(allOptions);

  //next_btn.classList.add("show"); //show the next button if user selected any option
  check.classList.add("show");
  check.onclick = () => {
    if ((userAns.toString() == correcAns.toString()) == true) {
      //if user selected option is equal to array's correct answer
      next_btn.classList.add("show");
      userScore += array[queA_count].marks; //upgrading score value with 1
      for (i = 0; i < correcAns.length; i++) {
        var ans_temp = document.getElementById(correcAns[i]);
        ans_temp.classList.add("correct");
        //answer.classList.add("correct"); //adding green color to correct selected option
      }
      // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);

      for (i = 0; i < 9; i++) {
        // console.log(questions_A.options.length)
        var dis = document.getElementById(i);
        dis.classList.add("disabled");
        // option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
    } else {
      console.log("else executed");

      Try_again.classList.add("show");
      Try_again.onclick = () => {
        optionSelected(answer);
      };

      //answer.classList.add("incorrect"); //adding red color to correct selected option
      // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      // console.log("Wrong Answer");

      // for(i = 0;i<correcAns.length;i++){
      //     var ans_temp = document.getElementById(correcAns[i])
      //     ans_temp.classList.add("correct")
      //     //answer.classList.add("correct"); //adding green color to correct selected option
      //     }
    }
    //console.log(questions_A[index].options.length)

    check.classList.remove("show");
  };
}

//=============================================================================================================

function showQuestions_B(index) {
  next_btn.classList.remove("show");
  if (document.getElementById("queA") != null) {
    var queA_section = document.getElementById("queA");
    queA_section.remove(queA_section.selectedIndex);
  }

  //creating a new span and div tag for question and option and passing the value using array index
  // let queB_tag = '<span>'+ questions_B[index].numb + ". " + questions_B[index].question +'</span>';
  // console.log('QB - ',queB_tag)
  // queB_text.innerHTML = queB_tag; //adding new span tag inside que_tag
  for (i = 0; i <= questions_B.length - 1; i++) {
    document.getElementById("queB").innerHTML +=
      "<div>" +
      "<span>" +
      questions_B[i].numb +
      ". " +
      questions_B[i].question +
      "</span>" +
      '<label for = "answer"></label>' +
      "<input class = 'inputs' id = " +
      "answer" +
      i +
      ' name="answer" type = "text" >' +
      "</div>";
      text_ans()
  }}
var text_user_array = []
var text_ans_array = []
var totalmarkB = 9
function text_ans(){  
  check.classList.add("show");
  Try_again.classList.remove('show')
  check.onclick = () => {
    check.classList.remove("show");
    for (i = 0; i <= questions_B.length - 1; i++) {
      var ID = "answer" + i;
      var ans = document.getElementById(ID)

      text_user_array.push(parseInt(ans.value))
      text_ans_array.push(parseInt(questions_B[i].answer))
      
    }
    console.log('total marks b - ',totalmarkB)

     text_user_array = text_user_array.sort()
     text_ans_array = text_ans_array.sort()
     console.log("user ans - ",text_user_array);
     console.log("correct ans - ",text_ans_array);
 
      if ((text_user_array.toString() == text_ans_array.toString()) == true) {
        userScore += totalmarkB ;
        console.log("Correct Answer");
        next_btn.classList.add("show");
      }
      else{
          Try_again.classList.add('show')
          for(i=0;i< questions_B.length;i++){
            var id = 'answer'+i;
            document.getElementById(id).disabled = true;
          }
          Try_again.onclick = () => {
            for(i=0;i< questions_B.length;i++){
              var id = 'answer'+i;
              document.getElementById(id).value = ''
              document.getElementById(id).disabled = false
            }

          
             text_user_array = []
             text_ans_array = []
              text_ans()
          }

         
      }
    
    check.classList.remove("show");
    //next_btn.classList.add("show");
  };
}

//================================================================================================================

function showResult() {
  let Total_marks = 0;
  for (i = 0; i < questions_A.length; i++) {
    Total_marks += questions_A[i].marks;
  }
  for (i = 0; i < questions_B.length; i++) {
    Total_marks += questions_B[i].marks;
  }

  console.log("Total Marks - ", Total_marks);

  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! 🎉, You got <p>" +
      userScore +
      "</p> out of <p>" +
      Total_marks +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice 😎, You got <p>" +
      userScore +
      "</p> out of <p>" +
      Total_marks +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>and sorry 😐, You got only <p>" +
      userScore +
      "</p> out of <p>" +
      Total_marks +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

// function startTimer(time){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if(time < 9){ //if timer is less than 9
//             let addZero = timeCount.textContent;
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if(time < 0){ //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correcAns = questions_A[queA_count].answer; //getting correct answer from array
//             for(i=0; i < allOptions; i++){
//                 if(option_list.children[i].id == correcAns){ //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }

//             }
//             for(i=0; i < allOptions; i++){
//                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//             }
//             next_btn.classList.add("show"); //show the next button if user selected any option
//         }
//     }
// }

// function startTimerLine(time){
//     counterLine = setInterval(timer, 59);
//     function timer(){
//         time += 1; //upgrading time value with 1
//         time_line.style.width = time + "px"; //increasing width of time_line with px by time value
//         if(time > 549){ //if time value is greater than 549
//             clearInterval(counterLine); //clear counterLine
//         }
//     }
// }

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    (questions_A.length + questions_B.length) +
    "</p> questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}

// checking
