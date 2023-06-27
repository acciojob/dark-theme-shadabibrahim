//your code here
let main = document.querySelector("#app");
let btn = document.querySelector("#swap");
function swapTheme(){
	btn.addEventListener('click',function(e){
		e.preventDefault();
		main.className = "night"
		btn.className = "button_night";
	
	})
	
}
swapTheme();
