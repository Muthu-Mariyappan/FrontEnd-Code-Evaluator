//All the error lines

var logRegErr = document.getElementById('logRegnoErr');
var logPassErr = document.getElementById('logPassErr');
var regRegErr = document.getElementById('regRegnoErr');
var regEmailErr = document.getElementById('regEmailErr');
var regPassErr = document.getElementById('regPassErr');
var regRepassErr = document.getElementById('regRepassErr');
var adminPassErr = document.getElementById('adminEntText');
var secErr = document.getElementById('secErr');


//flags for reporting accurate login errors

var validRegno = false;
var validEmail = false;


//section selector flags

var sectionFlag;


function mitchange(item)
{
	
	var list=document.querySelectorAll(".menuitem");
		if(item==1)
		{
			list[0].style.backgroundColor="white";
			list[0].style.borderBottom="solid 2px white";
			list[0].style.color="black";
			list[1].style.backgroundColor="deepskyblue";
			list[1].style.borderBottom="solid 2px deepskyblue";
			list[1].style.color="white";
		}
		else
		{
			list[0].style.backgroundColor="deepskyblue";
			list[0].style.borderBottom="solid 2px deepskyblue";
			list[0].style.color="white";
			list[1].style.backgroundColor="white";
			list[1].style.borderBottom="solid 2px white";
			list[1].style.color="black";
		}
	changetab(item);
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


//Functions for active error reporting



function checkLogReg(regno)  
{
	radioStat = document.getElementById('radio2').checked;
	if(radioStat)
	{
		checkStaffEmail(regno);
		return;
	}
	if(regno.value != '')
	{
		if((regno.value).toUpperCase() == '15C136')
		{
			logRegErr.style.color = 'green';
			validRegno = true;
			logRegErr.innerHTML = 'Register Number valid';
		}
		else
		{
			logRegErr.style.color = 'red';
			validRegno = false;
			logRegErr.innerHTML = 'Register Number not found!!';
		}
		setTimeout(function(){
			logRegErr.innerHTML=" ";
			logRegErr.style.color = 'white';
		}, 2000);		
	}
}


function checkStaffEmail(email)  
{
	if(email.value != '')
	{
		if((email.value) == 'ggmm.albus@gmail.com'||(email.value) == 'admin@tce.edu')
		{
			logRegErr.style.color = 'green';
			validEmail = true;
			logRegErr.innerHTML = 'Email found';
		}
		else
		{
			logRegErr.style.color = 'red';
			validEmail = false;
			logRegErr.innerHTML = 'Email not found';
		}
		setTimeout(function(){
			logRegErr.innerHTML=" ";
			logRegErr.style.color = 'white';
		}, 2000);		
	}
}



function radioChange(rno)
{
	var name=document.getElementById('login');
	if(rno == 1)
	{
		name.placeholder = 'Register Number';
	}
	else
		name.placeholder = 'Email address';
}

function checkRegReg(regno)
{
	if(regno.value != '')
	{
		if((regno.value).toUpperCase() == '15C136')
		{
			regRegErr.style.color = 'green';
			regRegErr.innerHTML = 'Register Number valid';
		}
		else
		{
			regRegErr.style.color = 'red';
			regRegErr.innerHTML = 'Register Number not found!!';
		}
		setTimeout(function(){
			regRegErr.innerHTML=" ";
			regRegErr.style.color = 'white';
		}, 2000);		
	}
}

function checkRegEmail(email)
{
	if(email.value != '')
	{
		if((email.value) == 'ggmm.muthu@gmail.com')
		{
			regEmailErr.style.color = 'green';
			regEmailErr.innerHTML = 'Email found.';
		}
		else
		{
			regEmailErr.style.color = 'red';
			regEmailErr.innerHTML = 'Email not found. Please use your registered email!';
		}
		setTimeout(function(){
			regEmailErr.innerHTML=" ";
			regEmailErr.style.color = 'white';
		}, 2000);		
	}
	checkRegPass(document.getElementById('sec_reg_pass'));
}




function checkRegPass(pass)
{
	var repass = document.getElementById('sec_reg_repass');
	if(pass.value != '')
	{
		if((pass.value).length >= 6)
		{
			regPassErr.style.color = 'green';
			repass.disabled = false;
			regPassErr.innerHTML = 'Password accepted';
		}
		else
		{
			regPassErr.style.color = 'red';
			repass.disabled = true;
			regPassErr.innerHTML = 'Password has less than 6 characters';
		}
		setTimeout(function(){
			regPassErr.innerHTML=" ";
			regPassErr.style.color = 'white';
		}, 2000);		
	}
	else
		repass.disabled = true;
}



function checkRegRepass(Repass)
{
	var pass = document.getElementById('sec_reg_pass').value;
	
	if(Repass.value != ''&& pass != '')
	{
		if(Repass.value == pass)
		{
			regRepassErr.style.color = 'green';
			regRepassErr.innerHTML = 'Passwords match';
		}
		else
		{
			regRepassErr.style.color = 'red';
			regRepassErr.innerHTML = 'Passwords dont match';
		}
		setTimeout(function(){
			regRepassErr.innerHTML=" ";
			regRepassErr.style.color = 'white';
		}, 2000);		
	}
}

//End of checker functions


















function validate()
{
	var name=document.getElementById('login').value;
	var pass=document.getElementById('password').value;
	var utype1=document.getElementById('radio1');
	
	if(name == '' || pass == '')
	{
		logPassErr.style.color = 'red';
		logPassErr.innerHTML = 'Please fill all the fields';
		setTimeout(function(){
		logPassErr.style.color = 'white';
		logPassErr.innerHTML=" ";
		}, 2000);	
		return false;
	}
	
	
	if(utype1.checked==true)
	{
		if(name.toUpperCase()=="15C136"&&pass=="darkrai")
		{
			logPassErr.style.color = 'green';
			logPassErr.innerHTML = 'Login successful! Welcome Student!';
			setTimeout(function(){
			logPassErr.style.color = 'white';
			logPassErr.innerHTML=" ";		
			location.assign('Student_win/stud_index.html');			
			}, 2000);
			
			return false;//false to prevent self page posting remove when servering
		}
		else
		{
			logPassErr.style.color = 'red';
			logPassErr.innerHTML = 'password is incorrect';
			setTimeout(function(){
			logPassErr.style.color = 'white';
			logPassErr.innerHTML=" ";
			}, 2000);		
			return false;
		}
	}
	else
	{
		if(name=="ggmm.albus@gmail.com"&&pass=="darkrai")
		{
			logPassErr.style.color = 'green';
			logPassErr.innerHTML = 'Login successful! Welcome Professor!';
			setTimeout(function(){
			logPassErr.style.color = 'white';
			logPassErr.innerHTML=" ";
			location.assign('Staff_win/Staff_index.html');
			}, 1500);	
			
			return false;
		}
		else if(name=="admin@tce.edu"&&pass=="enter")
		{
			logPassErr.style.color = 'green';
			logPassErr.innerHTML = 'Admin Login attempt.Opening Entry check';
			
			setTimeout(function(){
			logPassErr.style.color = 'white';
			logPassErr.innerHTML=" ";	
			showAdminTrap();
			}, 1500);
			return false;
		}
		else
		{
			logPassErr.style.color = 'red';
			logPassErr.innerHTML = 'Authentication error. Please check your login details!';
			setTimeout(function(){
			logPassErr.style.color = 'white';
			logPassErr.innerHTML=" ";
			}, 1500);	
			return false;
		}
	}
	return true;
}


function check_reg()
{
	var name=document.getElementById('sec_reg_user').value;
	var email=document.getElementById('sec_reg_email').value;
	var pass=document.getElementById('sec_reg_pass').value;
	var repass=document.getElementById('sec_reg_repass').value;
	if(name==""||email==""||pass==""||repass=="")
	{
		regRepassErr.style.color = 'red';
		regRepassErr.innerHTML = 'Please fill all the fields!';
		setTimeout(function(){
			regRepassErr.innerHTML=" ";
			regRepassErr.style.color = 'white';
			return false;
		}, 2000);		
		
	}
	else
		return check_pass();
}

function check_pass()
{
	var pass=document.getElementById('sec_reg_pass').value;
	var repass=document.getElementById('sec_reg_repass').value;
	if(pass.length<6)
	{
		regRepassErr.style.color = 'red';
		regRepassErr.innerHTML = 'Password has less than 6 characters!';
		setTimeout(function(){
			regRepassErr.innerHTML=" ";
			regRepassErr.style.color = 'white';
			return false;
		}, 2000);			
	}
	
	if(pass!=repass)
	{	regRepassErr.style.color = 'red';
		regRepassErr.innerHTML = 'Passwords don\'t match!';
		setTimeout(function(){
			regRepassErr.innerHTML=" ";
			regRepassErr.style.color = 'white';
			return false;
		}, 2000);
	}
	else
	{
		regRepassErr.style.color = 'green';
		regRepassErr.innerHTML = 'Registration success!';
		setTimeout(function(){
			regRepassErr.innerHTML=" ";
			regRepassErr.style.color = 'white';
			mitchange(1);
			return true;		
		}, 2000);		
	}
}



//code for modal window

function modal()
{
	
	document.getElementById('radio1').checked = true;
	document.getElementById('passretext').innerHTML="";	
	window.onclick = function(event) {
		if (event.target == document.getElementById('myModal')) {
			hidePasswordReset();
		}
	}
}

function showPasswordReset()
{
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
}

function hidePasswordReset()
{
	var modal = document.getElementById('myModal');
	document.getElementById('passretext').innerHTML="";
	document.getElementById('reset_email').value=" ";
	modal.style.display = "none";
}

function passreset(){
	var email=document.getElementById('reset_email').value;
	var restext=document.getElementById('passretext');
	if(email == '') return;
	restext.style.display="flex";
	if(email!="ggmm.muthu@gmail.com"){
		restext.style.color="red";
		restext.innerHTML="Entered email is not registered!"
		setTimeout(function(){
			restext.innerHTML=" ";
			restext.style.color="white";
		}, 2000);	
	}
	else
	{	
		restext.style.color="green";
		restext.innerHTML="Password reset link successfully sent"
		setTimeout(function(){
			restext.innerHTML=" ";
			restext.style.color="white";
			hidePasswordReset();
		}, 2000);	
	}
}

function showAdminTrap()
{
	var modal = document.getElementById('passModal');
	modal.style.display = "block";
}

function hideAdminTrap()
{
	var modal = document.getElementById('passModal');
	modal.style.display = "none";
}

function doEntryCheck()
{
		var pass = document.getElementById('adminSecPass').value;
		if(pass == 'meadmin')
		{
			adminPassErr.style.color = 'green';
			adminPassErr.innerHTML = "Password Accepted. Welcome Admin!!";
			setTimeout(function(){
			adminPassErr.innerHTML=" ";
			adminPassErr.style.color="white";
			hideAdminTrap();
			location.assign('Admin_win/admin_index.html');
			}, 2500);	
		}
		else if(pass == '') 
		{
			adminPassErr.style.color = 'green';
			adminPassErr.innerHTML = "Please enter your entry password!";
			setTimeout(function(){
			adminPassErr.innerHTML=" ";
			adminPassErr.style.color="white";
		}, 2000);	
		}
		else 
		{
			adminPassErr.style.color = 'red';
			adminPassErr.innerHTML = "Suspicious Login. Attempt logged.";
			setTimeout(function(){
			adminPassErr.innerHTML=" ";
			adminPassErr.style.color="white";
			hideAdminTrap();
			}, 2000);	
		}
}

function glow(element)
{
	element.parentNode.style.boxShadow = "0px 0px 5px deepskyblue";
}


function selectBut(sec)
{
	var a = document.getElementById('secButA');
	var b = document.getElementById('secButB');
	if(sec == 'A')
	{
		sectionFlag = 'A';
		a.style.color = 'black';
		a.style.backgroundColor = 'white';
		a.style.borderColor = 'white';
		b.style.color = 'white';
		b.style.backgroundColor = '#4CAF50';
		b.style.borderColor = '#4CAF50';
		secErr.innerHTML = 'Enrolling in section '+sectionFlag;
	}
	else
	{
		sectionFlag = 'B';
		b.style.color = 'black';
		b.style.backgroundColor = 'white';
		b.style.borderColor = 'white';
		a.style.color = 'white';
		a.style.backgroundColor = '#4CAF50';
		a.style.borderColor = '#4CAF50';
		secErr.innerHTML = 'Enrolling in section '+sectionFlag;
	}
}

function closeFoot(foot)
{
	foot.parentNode.style.display = 'none';
}



