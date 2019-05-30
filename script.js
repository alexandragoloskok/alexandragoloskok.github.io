let imgs=['img/jijik1.png', 'img/jijik2.png', 'img/jijik3.png',  'img/jijik5.png', 'img/jijik5.png', 'img/jijik4.png'];

let text=["<p>- Привет!</p><p>Люди в моих краях не частые гости. Я вижу, что ты заблудился. Не пугайся, я хочу тебе помочь. Меня зовут Жижик.</p><p>Как мне тебя называть?</p>",
", я расскажу тебе, как выбратся отсюда.</p><p>Все очень просто. Просто нажимаешь на крестик на вкладке, или на окне твоего браузера.</p><p>Вот и все.</p>",
"<p>- Пока!</p>"];

let answer=["<p>- Эм, меня зовут", "<p>- Спасибо, понял"];
let i=0;
let right=document.getElementById("right");
let left=document.getElementById("left");
let who = document.getElementById("who");

let timerId;

let next_button = document.createElement("input");
next_button.type="button";
next_button.value="->";
next_button.id="next";

scene_1();


//первая сцена
function scene_1() {

//текст
  right.innerHTML = text[0]+answer[0];

  let input_name=document.createElement("input");
  input_name.id="name_start";
  right.appendChild(input_name);

  right.appendChild(next_button);

//анимация
	timerId = setInterval(function() {
    who.src=imgs[i]
    i++;
    if(i==3){
    	i=0;
    }
  }, 700);

  document.getElementById("next").onclick = function() {
  	name=document.getElementById("name_start").value;
    clearInterval(timerId);
    scene_2();
  };
}



function scene_2() {

  right.innerHTML = "- "+name+ text[1]+answer[1];
  i=3;
  timerId = setInterval(function() {
    who.src=imgs[i]
    i++;
    if(i==6){
      i=3;
    }
  }, 500);

  right.appendChild(next_button);

  document.getElementById("next").onclick = function() {
    clearInterval(timerId);
    scene_3();
  };

}



function scene_3(){
	right.innerHTML = text[2];

i=0;
timerId = setInterval(function() {
    who.src=imgs[i]
    i++;
    if(i==2){
      i=0;
    }
  }, 500);

setTimeout(function() {
    clearInterval(timerId);
    right.remove();
    left.remove();
  }, 3000);

}






