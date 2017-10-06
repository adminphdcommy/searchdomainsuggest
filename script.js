document.getElementById("searchDomDomainInput").addEventListener("keyup", checkinput);


var avext = ["com", "co.id", "com.my", "my"]
var avextlengthcount = 0

var inputwidth = document.getElementById("searchDomDomainInput").offsetWidth
console.log(inputwidth)

function avextlength (){
	for (i=0;i<avext.length;i++){
		for(j=0;j<avext[i].length;j++){
			if(avext[i].charAt(j) !== "."){
				avextlengthcount = avextlengthcount + 1
			}
		}
	}
}
avextlength ()
console.log("avextlengthcount = " + avextlengthcount)

function checkinput(){
	var	inputdata = document.getElementById("searchDomDomainInput").value
	var	inputdataarray = inputdata.split(".")
	var newli = document.createElement("li")
	var theul = document.getElementById("extlist")
	console.log("run")
	for(i=0;i<avext.length;i++){
		console.log("loop" + [i])
		if(inputdataarray.length > 3){
			
			document.getElementById("output001").innerHTML = "invalid input extension"
		}
		else if(inputdataarray[1].charAt(0) == avext[i].charAt(0)){
			document.getElementById("output001").innerHTML = " "
			//theul.removeChild(theul.lastChild)
			theul.appendChild(newli).setAttribute("class","ulli")
			theul.lastChild.innerHTML = avext[i]
			
			console.log("avext[" + i + "].charAt(0) =" + avext[i].charAt(0))
			console.log("avext[" + i + "] =" + avext[i])
		
		}
	}


	//if(inputdataarray[1].charAt(0)
}

