function load() {
    the_timer=setInterval(do_timer, 50)
    elem = document.getElementById("stopph");
    elem.addEventListener("click", pausephoenix, false);
}

//to handle submit button click and add the text entered to the paragraph
function addtxt(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("parabox").innerHTML += userInput + " ";
	document.getElementById('userInput').value='';
}

//to handle enter key press to go to nextline
function handle(e){
        if(e.keyCode === 13){
            var userInput = document.getElementById("userInput").value;
			document.getElementById("parabox").innerHTML += userInput + "<br>";
			document.getElementById('userInput').value='';
        }
        return false;
}

//move phoenix
var the_timer, x_position = 0, x_position_left = 0, the_image, paused = false, x_flag_right = true;
function do_timer(){
	if(!paused){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(x_position <= (width-80)){
            if(x_flag_right){
                document.getElementById("phoenix").className = "";
                x_position_left = width-80;
                the_image = document.getElementById("phoenix");
                x_position = x_position + 1;
                the_image.style.right = x_position;
            }
            else {
                if(x_position_left >= 0){
                    document.getElementById("phoenix").className = "imgflip";
                    the_image = document.getElementById("phoenix");
                    x_position_left = x_position_left - 1;
                    the_image.style.right = x_position_left;   
                }
                else {
                    x_position_left = 0;
                    x_flag_right = true;    
                }
            }
        }
        else {
            x_position = 0;
            x_flag_right = false;
        }
	}
}

//pause phoenix
function pausephoenix(event){
	event.stopPropagation();
	var strbtn = "Start Phoenix";
	if(paused){
		strbtn = "Stop Phoenix";	
	}
	document.getElementById("stopph").innerHTML = strbtn;
    paused = !paused;	
}

//current time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
    return i;
}