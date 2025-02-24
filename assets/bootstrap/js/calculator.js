var button = document.getElementById("tapMe");	
	
var showNever = document.getElementById("est");

function calculated(){

if(showNever.style.display =="" ||showNever.style.display =="none" )
	{
		showNever.style.display ="block";
	
	button.textContent ="Hide details";
}

else{
	showNever.style.display ="none";
	
	button.textContent ="Estimate value";
	
	}
}




function hideMe(){
	showNever.style.display ="none";
	
	button.textContent ="Estimate value";
	
	
}