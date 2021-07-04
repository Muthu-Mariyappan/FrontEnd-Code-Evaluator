//variables for flagging
	
	var currentLabYear = 1;
	var currentLeftButton = 1;
	var currentStudentYear = 1;
	var removeEvent = 0;
	var toBeRemoved = 0;
	
	var Remove = {
		dept : 1,
		lab : 2,
		studLab : 3,
		stud : 4,
		staff : 5,
		none : 0,
	};
	
/*
// This is best method for browser compatibility adjust to it

function getCssValuePrefix()
{
    var rtrnVal = '';//default to standard syntax
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++)
    {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background)
        {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    return rtrnVal;
}

// Setting the gradient with the proper prefix
dom.style.backgroundImage = getCssValuePrefix() + 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')';





*/


	
function logoff()
{
	location.assign('../index.html');
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

//Functions for generalized confirm box


function showConfirmBox()
{
	var modal = document.getElementById('confirmBoxModal');
	modal.style.display = "block";
}


function hideConfirmBox()  //Overloading for resetting event flags
{
	removeEvent = 0;  //Resetting
	toBeRemoved = 0;
	var modal = document.getElementById('confirmBoxModal');
	modal.style.display = "none";
}


function raiseRemoveQuery(evenT,element)   //Event setter
{
	removeEvent = evenT;
	toBeRemoved = element;
	showConfirmBox();	
}


function doAction()
{
	
	switch(removeEvent)
	{
		case Remove.dept:
			removeDept();
			break;
		case Remove.lab:
			removeLab();
			break;
		case Remove.studLab:
			removeStudentFromLab(toBeRemoved);
			break;
		case Remove.stud:
			removeStudentFromDept(toBeRemoved);
			break;
		case Remove.staff:
			removeStaff(toBeRemoved);
			break;
		case Remove.none:
			hideConfirmBox();
			break;
		default:
			hideConfirmBox();
	}
	hideConfirmBox(); //should be last since it is resetting event flags
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

		if (event.target == modal||event.target==document.getElementById('confirmBoxModal')||event.target==document.getElementById('editStudentModal')||event.target==document.getElementById('addStudToLabModal')||event.target==document.getElementById('deptEditModal')||event.target==document.getElementById('createStaffModal')||event.target==document.getElementById('deptCreateModal')||event.target==document.getElementById('adminLabcreateModal')||event.target==document.getElementById('adminLabEditModal')||event.target==document.getElementById('listViewStudentModal')||event.target==document.getElementById('createStudentModal')) 
		{
			modal.style.display = "none";			
			document.getElementById('deptCreateModal').style.display="none";
			document.getElementById('deptEditModal').style.display="none";
			document.getElementById('adminLabcreateModal').style.display="none";
			document.getElementById('adminLabEditModal').style.display="none";
			document.getElementById('listViewStudentModal').style.display="none";
			document.getElementById('createStudentModal').style.display="none";
			document.getElementById('createStaffModal').style.display="none";
			document.getElementById('addStudToLabModal').style.display="none";
			document.getElementById('editStudentModal').style.display="none";
			document.getElementById('confirmBoxModal').style.display="none";

		}		
	}
}


//Admin home

function adEmups()  //These are for password email updates
{
	
}

function adpassups()
{
	
}

function showAdminHome()
{
	var home = document.getElementById('adminhome');
	var bar = document.getElementById('adminbar');
	bar.innerHTML='Departments';
	home.style.display='flex';
	hideAdminContent();
}


function hideAdminHome()
{
	var home = document.getElementById('adminhome');
	home.style.display='none';
}



//Department Creation

function showDeptCreate()
{
	var modal = document.getElementById('deptCreateModal');
	modal.style.display = "block";
}

function hideDeptCreate()
{
	var modal = document.getElementById('deptCreateModal');
	modal.style.display = "none";
}

function createDept()
{
	var home = document.getElementById('adminhome')
	var node = document.querySelectorAll('.admdeptbox')[0].cloneNode(true);
	var button = document.getElementById('addeptcretbutton');
	hideDeptCreate();
	button = button.parentNode.removeChild( button );
	home.appendChild(node);
	home.appendChild(button);
	
}

function removeDept()
{
	var node = document.querySelectorAll('.admdeptbox')[0];
	hideDeptEdit();
	node.parentNode.removeChild( node );
}


//Department Editing


function showDeptEdit()
{
	var modal = document.getElementById('deptEditModal');
	modal.style.display = "block";
}

function hideDeptEdit()
{
	var modal = document.getElementById('deptEditModal');
	modal.style.display = "none";
}

function editDept()
{
	alert("Edited successfully");	
	hideDeptEdit();
}



//Admin contents window


function showAdminContent()
{
	var bar = document.getElementById('adminbar');
	bar.innerHTML='Computer Science and Engineering';
	hideAdminHome();
	var adcon = document.getElementById('admincontent');
	adcon.style.display='flex';
	showAdminLabRoom(1);
	changeLeftButton(1);
	changeAdminSpace(1);
}

function hideAdminContent()
{
	var adcon = document.getElementById('admincontent');
	showAdminLabRoom(1);
	adcon.style.display='none';
}

function changeYearButton(buttonno)//Changes the inner menu year button colors
{
	var yearButtons = document.querySelectorAll('.adRightNavButton');
	var i=0;
	for(i=0;i<yearButtons.length;i++)
	{
		if(i==(buttonno-1))
		{
			yearButtons[i].style.backgroundColor='White';
			yearButtons[i].style.color='Black';
		}
		else
		{
			yearButtons[i].style.backgroundColor='lightgreen';
			yearButtons[i].style.color='darkgreen';
		}
	}
}

function showAdminLabRoom(roomno)
{
	var rooms = document.querySelectorAll('.adminLabRoom');
	var i=0;
	changeYearButton(roomno);
	currentLabYear = roomno;
	for(i=0;i<rooms.length;i++)
	{
		if(i==(roomno-1))
		{
			rooms[i].style.display='block';
		}
		else
		{
			rooms[i].style.display='none';
		}
	}
}

// Admin lab creations

function showLabCreate()
{
	var modal = document.getElementById('adminLabcreateModal');
	modal.style.display = "block";
}

function hideLabCreate()
{
	var modal = document.getElementById('adminLabcreateModal');
	modal.style.display = "none";
}

function createLab()
{
	var home = document.getElementById('adminLabRoom_'+currentLabYear)
	var node = document.querySelectorAll('.adminLabBox')[0].cloneNode(true);
	hideLabCreate();
	home.appendChild(node);
}

//Admin Lab edit functions


function showLabEdit()
{
	var modal = document.getElementById('adminLabEditModal');
	modal.style.display = "block";
}

function hideLabEdit()
{
	var modal = document.getElementById('adminLabEditModal');
	modal.style.display = "none";
}

function editLab()
{
	alert("Lab modified");
	hideLabEdit();
}

function removeLab()
{
	var node = document.querySelectorAll('.adminLabBox')[0];
	hideLabEdit();
	node.parentNode.removeChild( node );
}





function changeLeftButton(leftbutno)
{
	var leftbuts = document.querySelectorAll('.adLeftButton');
	var i;
	currentLeftButton = leftbutno;
	for(i=0;i<leftbuts.length;i++)
	{
		if(i==(leftbutno-1))
		{
			leftbuts[i].style.backgroundColor = 'white';
		}
		else
		{
			leftbuts[i].style.backgroundColor = 'lightgreen';	
		}
	}
}

function changeAdminSpace(spaceno)
{
	currentLeftButton = spaceno;
	changeLeftButton(spaceno);
	changeYearButton(1);
	var lsp = document.querySelectorAll('.rightLabSpace');
	var i;
	setYearBar(1);
	for(i=0;i<lsp.length;i++)
	{
		if(i==(spaceno-1))
		{
			lsp[i].style.display = 'block';
		}
		else
		{
			lsp[i].style.display = 'none';
		}
	}
	if(spaceno == 1)
		showAdminLabRoom(1);
	else if(spaceno == 2)
		showAdminStudentYear(1);
	else if(spaceno == 3)
		setYearBar(0);
}

function showAdminStudentYear(year)
{
	var lsp = document.querySelectorAll('.adminStudentRoom');
	var i;
	currentStudentYear = year;
	changeYearButton(year);
	for(i=0;i<lsp.length;i++)
	{
		if(i==(year-1))
		{
			lsp[i].style.display = 'block';
		}
		else
		{
			lsp[i].style.display = 'none';
		}
	}
}





//View student modal window

function showListViewStudentModal()
{
	var modal = document.getElementById('listViewStudentModal');
	modal.style.display = "block";
}

function hideListViewStudentModal()
{
	var modal = document.getElementById('listViewStudentModal');
	modal.style.display = "none";
}

function removeStudentFromLab(student)
{
	var node = student.parentNode;
	node.parentNode.removeChild( node );
}

function removeStudentFromDept(student)
{
	var node = student.parentNode;
	node.parentNode.removeChild( node );
}

function removeStaff(staff)
{
	var node = staff.parentNode;
	node.parentNode.removeChild( node );
}




function showCreateStudentModal()
{
	var modal = document.getElementById('createStudentModal');
	modal.style.display = "block";
}

function hideCreateStudentModal()
{
	var modal = document.getElementById('createStudentModal');
	modal.style.display = "none";
}


function addStudentToDept()
{
	var home = document.getElementById('adminStudRoom_'+currentStudentYear)
	var node = document.querySelectorAll('.studentRecord')[0].cloneNode(true);
	hideCreateStudentModal();
	home.appendChild(node);
}



function showEditStudentModal()
{
	var modal = document.getElementById('editStudentModal');
	modal.style.display = "block";
}

function hideEditStudentModal()
{
	var modal = document.getElementById('editStudentModal');
	modal.style.display = "none";
}


function updateStudent(stud)
{
	hideEditStudentModal();
	alert(stud);
	
}













function showCreateStaffModal()
{
	var modal = document.getElementById('createStaffModal');
	modal.style.display = "block";
}

function hideCreateStaffModal()
{
	var modal = document.getElementById('createStaffModal');
	modal.style.display = "none";
}


function addStaffToDept()
{
	var home = document.getElementById('adminStaffRoom')
	var node = document.querySelectorAll('.staffRecord')[0].cloneNode(true);
	hideCreateStaffModal();
	home.appendChild(node);
}





function showEditStaffModal()
{
	var modal = document.getElementById('editStaffModal');
	modal.style.display = "block";
}

function hideEditStaffModal()
{
	var modal = document.getElementById('editStaffModal');
	modal.style.display = "none";
}


function updateStaff()
{
	alert('update success');
	hideEditStaffModal();
}













function showAddStudToLabModal()
{
	var modal = document.getElementById('addStudToLabModal');
	modal.style.display = "block";
}

function hideAddStudToLabModal()
{
	var modal = document.getElementById('addStudToLabModal');
	modal.style.display = "none";
}


function addStudentToLab(lab)
{
	alert('successfully added.');
}

function setYearBar(bool)
{
	var bar = document.getElementById('adminYearBar');
	if(bool==1)
	{
		bar.style.visibility = 'visible';
	}
	else
		bar.style.visibility = 'hidden';
}




function showOVAdminRoom(room)
{	
	if(currentLeftButton==1)
		showAdminLabRoom(room);
	else if(currentLeftButton==2)
		showAdminStudentYear(room);
}





//Needed functions for profile


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
	
	if(oldpass.value==newpass.value)
		alert("New password same as old password");
	else if(retpass.value!=newpass.value)
		alert('Passwords dont match!');
	else
		alert('Password successfully Updated');
}

