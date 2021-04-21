function check(){
    var score = 0;
    const right_answer_1 = document.getElementById('q1-a1');
    const q1_answer_2 = document.getElementById('q1-a2');
    const q1_answer_3 = document.getElementById('q1-a3');
    const q1_answer_4 = document.getElementById('q1-a4');
    if(right_answer_1.checked ==true){
        score++
        alert('Question 01 answer is right')
    }
    else{
        alert('Question 01 answer is wrong')
    }


    const right_answer_2 = document.getElementById('q2-a2');
    const q2_answer_2 = document.getElementById('q2-a1');
    const q2_answer_3 = document.getElementById('q2-a3');
    const q2_answer_4 = document.getElementById('q2-a4');
    if(right_answer_2.checked ==true){
        score++
        alert('Question 02 answer is right')
    }
    else{
        alert('Question 02 answer is wrong')
    }
    
    const right_answer_3 = document.getElementById('q3-a4');
    const q3_answer_2 = document.getElementById('q3-a1');
    const q3_answer_3 = document.getElementById('q3-a2');
    const q3_answer_4 = document.getElementById('q3-a3');
    if(right_answer_3.checked ==true){
        score++
        alert('Question 03 answer is right')
    }
    else{
        alert('Question 03 answer is wrong')
    }
    
    // FOR UNCHECK ALL RADIO BUTTON AFTER SUBMIT
    var elements=document.getElementsByClassName('check');
    Array.prototype.forEach.call(elements, 
        function(element) {
       element.checked = false;
    }
    );
   
// right_answer_1.checked = false;
// right_answer_2.checked = false;
// right_answer_3.checked = false;
// q1_answer_2.checked = false;
// q1_answer_3.checked = false;
// q1_answer_4.checked = false;
// q2_answer_2.checked = false;
// q2_answer_3.checked = false;
// q2_answer_4.checked = false;
// q3_answer_2.checked = false;
// q3_answer_3.checked = false;
// q3_answer_4.checked = false;

    alert('Your Score is '+ score)

}