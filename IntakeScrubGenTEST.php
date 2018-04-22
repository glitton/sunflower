<?php
session_start();
$DebugOn = TRUE;

include ("../Include/checksumerror.inc");



$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$LastName = mysqli_real_escape_string($cxn,stripslashes($LastName));
$Email = $_POST['Email'];
$Phone = $_POST['Phone'];

$Street = $_POST['Street'];
$Street2 = $_POST['Street2'];
$City = $_POST['City'];
$State = $_POST['State'];
$Zip = $_POST['Zip'];
$Gender = $_POST['radioGender'];
$Birthdate = $_POST['DateOfBirth'];
$TreatDate = $_POST['TreatDate'];
$CancerType = $_POST['CancerType'];
$RxCode = $_POST['RxCode'];
$Comments = $_POST['Comments'];
$Comments = mysqli_real_escape_string($cxn,stripslashes($Comments));
if ($RxCode != "") $Comments = "RxPad code: " . $RxCode . "; Comments: " . $Comments;

$userid = $_SESSION['UserPerson']['UserID'];
if ($userid != "") $SourceUser = $_SESSION['UserPerson']['Dear'] . " " . $_SESSION['UserPerson']['LastName'];
else $SourceUser = "";

if ($DebugOn)
	{
		echo "FirstName: $FirstName<br>
			LastName: $LastName<br>Email: $Email<br>Phone: $Phone<br>Street: $Street<br>Street2: $Street2<br>
			City: $City<br>State: $State<br>Zip: $Zip<br>
			Gender: $Gender<br>Birthdate: $Birthdate<br>
			Last Treatment: $TreatDate<br>CancerType: $CancerType<br>RxCode: $RxCode<br>
			Comments: $Comments<br>UserID: $userid<br>SourceUser: $SourceUser<br>";
	}



	if (!$DebugOn)
		{
			$url = "https://www.sunflowerwellness.org/Generosa/ex-counseling-location.html?Loc=UCSF";
			header("Location: ".$url);
		}
	else echo "<br>End.";





?>
