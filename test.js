function myFunction(){
	//document.getElementById("NanaName").innerHTML = Date();
	//window.alert(20%9);//вызывает всплывающее окно с выполненым условием
	//document.write((2017-1998)*365);//заменяет все записи на запись с выполненым условием
	//console.log(228-133);//создаёт запись в консоли с выполненым условием
	document.getElementById("NanaName").innerHTML = "ass"+"bess";
	
	var x,y,z;
	x=1000;
	y=2000;
	z=0;
	for(var m=0;m < 10;m++){
		if(m<=5)
			z+=x;
		else
			z+=y;
	}
	document.getElementById("NanaBitch").innerHTML = z;
}