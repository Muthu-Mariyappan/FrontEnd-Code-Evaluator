
function mitchange(item)
{
	
	var list=document.querySelectorAll(".menuitem");
	var i;
	for(i=0;i<list.length;i++)
	{
		if(item-1==i)
		{
			list[i].style.backgroundColor="white";
			list[i].style.borderBottom="solid 2px white";
			list[i].style.color="black";
		}
		else
		{
			list[i].style.backgroundColor="deepskyblue";
			list[i].style.borderBottom="solid 2px deepskyblue";
			list[i].style.color="white";
		}
	}
	changetab(item);
	document.getElementById('sec_class').style.display="none";
	document.getElementById('sec_exp').style.display="none";
	
}

function changetab(item)
{
	var list=document.querySelectorAll(".ind_sec");
	for(var i=0;i<list.length;i++)
	{
		if(i==item-1)
		{
			list[i].style.display="-webkit-box";
			list[i].style.display="-moz-box";
			list[i].style.display="-ms-flexbox";
			list[i].style.display="-webkit-flex";
			list[i].style.display="flex";
		}
		else
		{
			list[i].style.display="none";
		}
	}
}


function show_exp(record)
{
	var list=document.querySelectorAll(".ind_sec");
	for(var i=0;i<list.length;i++)
	{
		list[i].style.display="none";
	}
	document.getElementById('sec_class').style.display="none";
	var exp=document.getElementById('sec_exp');
	exp.style.display="-webkit-box";
	exp.style.display="-moz-box";
	exp.style.display="-ms-flexbox";
	exp.style.display="-webkit-flex";
	exp.style.display="flex";
}

function logoff()
{
	location.assign('../index.html');
}

function loadMore()
{
	var box=document.getElementById('availexp');
	var node = document.getElementById("lmore");
	node.parentNode.removeChild( node );
	box.innerHTML+="<div class=\"record\" onclick=\"show_exp(this)\"><span class=\"recorditem\"> Ex 1 </span><span class=\"recorditem\"> Software Engineering </span><span class=\"recorditem\"> ER diagrams </span><span class=\"recorditem\"> 12/07 </span><span class=\"recorditem\"> Not viewed </span></div>";    
	box.appendChild(node);
}


function showProfile()
{
	showModal();
}

function showModal()
{
	var modal = document.getElementById('ProModal');
	modal.style.display = "block";
}

function modal()
{
	
	var modal = document.getElementById('ProModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	
	span.onclick = function() {
		modal.style.display = "none";
		showBaseinfo();
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal||event.target == document.getElementById('subSumModal')) {
			modal.style.display = "none";
			hidesubSum();
			showBaseinfo();
		}
	}

}

function enrol(cls)
{
	cls.className = 'leaveButton';
	cls.innerHTML = 'Leave';
	cls.onclick = 
	function ()
	{
		leave(cls);
	}
}


function leave(cls)
{
	cls.className = 'enrollButton';
	cls.innerHTML = 'Enrol';
	cls.onclick = 
	function ()
	{
		enrol(cls);
	}	
}



function submitcode()
{
	var file = document.getElementsByName('myfile')[0];
	if(file.value=='')	
		alert("Select a file to upload");
	else
		alert("Succssfully uploaded.");
}

function showNext(item)
{
	var lab1=document.getElementById('labbox-2');
	lab1.style.display="-webkit-box";
	lab1.style.display="-moz-box";
	lab1.style.display="-ms-flexbox";
	lab1.style.display="-webkit-flex";
	lab1.style.display="flex";
	document.getElementById('labbox-1').style.display="none";
}

function showPrev(item)
{
	var lab1=document.getElementById('labbox-1');
	lab1.style.display="-webkit-box";
	lab1.style.display="-moz-box";
	lab1.style.display="-ms-flexbox";
	lab1.style.display="-webkit-flex";
	lab1.style.display="flex";
	document.getElementById('labbox-2').style.display="none";
}

function showSubSummary()
{
	var modal = document.getElementById('subSumModal');
	modal.style.display = "block";
}

function hidesubSum()
{
	var modal = document.getElementById('subSumModal');
	modal.style.display = "none";
}

function showCode()
{
	window.open('bracs.txt', '_blank');
}






function showClass(classItem)
{
	var classes=document.getElementById('sec_lab');
	var classroom=document.getElementById('sec_class');
	classroom.style.display="-webkit-box";
	classroom.style.display="-moz-box";
	classroom.style.display="-ms-flexbox";
	classroom.style.display="-webkit-flex";
	classroom.style.display="flex";
	classes.style.display='none';
	
}

function showClasses(classItem)
{
	var classes=document.getElementById('sec_lab');
	var classroom=document.getElementById('sec_class');
	classes.style.display="-webkit-box";
	classes.style.display="-moz-box";
	classes.style.display="-ms-flexbox";
	classes.style.display="-webkit-flex";
	classes.style.display="flex";
	classroom.style.display='none';
}


function showBaseinfo()
{
	var leftbutt= document.querySelectorAll(".profleftbutton");
	leftbutt[0].style.borderLeft="solid 5px lime";
	leftbutt[0].style.backgroundColor="rgba(173,255,47,0.2)";
	leftbutt[1].style.borderLeft="none";
	leftbutt[1].style.backgroundColor="white";
	var bin=document.querySelectorAll('.profrightcontent');
	bin[0].style.display="-webkit-box";
	bin[0].style.display="-moz-box";
	bin[0].style.display="-ms-flexbox";
	bin[0].style.display="-webkit-flex";
	bin[0].style.display="flex";
	bin[1].style.display='none';
}	


function showChangePass()
{
	var leftbutt= document.querySelectorAll(".profleftbutton");
	leftbutt[1].style.borderLeft="solid 5px lime";
	leftbutt[1].style.backgroundColor="rgba(173,255,47,0.2)";
	leftbutt[0].style.borderLeft="none";
	leftbutt[0].style.backgroundColor="white";
	var bin=document.querySelectorAll('.profrightcontent');
	bin[1].style.display="-webkit-box";
	bin[1].style.display="-moz-box";
	bin[1].style.display="-ms-flexbox";
	bin[1].style.display="-webkit-flex";
	bin[1].style.display="flex";
	bin[0].style.display='none';
		//to stop auto filling of password
	document.getElementById('profoldpass').value="";
}	

function profuppass()
{
	var oldpass = document.getElementById('profoldpass');
	var newpass = document.getElementById('profnewpass');
	var retpass = document.getElementById('profretpass');
	
	if(oldpass.value==''||newpass.value==''||retpass.value=='')
		alert('Enter all the fields!');	
	else if(oldpass.value==newpass.value)
		alert("New password same as old password");
	else if(retpass.value!=newpass.value)
		alert('Passwords dont match!');
	else
		alert('Password successfully Updated');
}


