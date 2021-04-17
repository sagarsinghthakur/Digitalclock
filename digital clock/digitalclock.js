
let clicked = false;
function changemode(){
  if (!clicked) {
      clicked = true;
      document.getElementById("btn").innerHTML="light mode"
  }else{
    clicked = false;
    document.getElementById("btn").innerHTML="dark mode"
}

let element = document.body;
  element.classList.toggle("light-mode");
}


let digitalclock =() =>{

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "am";

  if(hour == 0){
    hour = 12;
  }

  if(hour > 12){
    hour = hour-12;
    ampm = "pm";
  }

  document.getElementById("hour").innerHTML= hour;
  document.getElementById("minute").innerHTML= minute;
  document.getElementById("second").innerHTML= second;
  document.getElementById("ampm").innerHTML= ampm;

  setTimeout(digitalclock,1000);

}

digitalclock();

