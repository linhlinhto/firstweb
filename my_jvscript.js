function SetupEventForDiv(){
	var obj = document.getElementById('div1');
	obj.onmouseover = Over;
	obj.onmouseout = Out;
}

function Over(){
	var obj = document.getElementById('div1');
	obj.setAttribute('style','border:10px solid #F0F0F0');
	obj.setAttribute('style','background-color:#F0F0F0');
}

function Out(){
	var obj = document.getElementById('div1');
	obj.setAttribute('style','background-color:none');
}