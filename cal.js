var ans = Math.floor(Math.random() * 100) + 1;
var count = 0;
var his = new Array(10);
document.forms["calculation"].onsubmit = function(){
    console.log(ans);
    var c = document.getElementById("a").value;

    if(count == 10){
        alert("You lose !!");
        count = 0;
        ans = Math.floor(Math.random() * 100) + 1;
    }
    else if(c == ans){
        alert("congratulation!! you win!");
        alert(c);
       count = 0;
    }else if(c < ans){
        his[count] = c;
        alert("Wrong!! the number is smaller than the your answer!");
        alert("Hint: there is the number you used!\n"+his);
        count ++;
    }else if(c > ans){
        his[count] = c;
        alert("So close! the number is greater than your answer!");
        alert("Hint: there is the number you used!\n"+his);
        count ++;
    }
 
    return false;






}