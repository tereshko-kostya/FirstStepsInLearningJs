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
		if(m<=5){
			z+=x;
		}
		else{
			z+=y;
		}
	}

	document.getElementById("NanaBitch").innerHTML = z;

	window.alert(typeof "ass");

	typeof undefined           // undefined
	typeof null                // object
	null === undefined         // false
	null == undefined          // true

	//onchange - An HTML element has been changed
	//onclick -	The user clicks an HTML element
	//onmouseover	- The user moves the mouse over an HTML element
	//onmouseout -	The user moves the mouse away from an HTML element
	//onkeydown	- The user pushes a keyboard key
	//onload -	The browser has finished loading the page

	var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var sln = txt.length;

	// \b	Backspace
	// \r	Carriage Return
	// \f	Form Feed
	// \t	Horizontal Tabulator
	// \v	Vertical Tabulator

	var str = "Please locate where 'locate' occurs!";
	var pos = str.indexOf("locate");

	var str = "Please locate where 'locate' occurs!";
	var pos = str.lastIndexOf("locate");

	/*
	******METHODS******

	1. length - используется для получения данных  длинне строки
  2. indexOf() - используется для получения номера первго вхождения указанного слова в строке
	3. lastIndexOf() - используется для получения номера последнего символа указанного слова в строке
 	4. search() - возвращает позицию начала указанного слова в строке
	5. slice(start,end) - возвращает часть строки с указанными индексами начала и конца
	6. substring(start,end) - аналогично slice, только без возможности использовать негативные значения
	7. substr(start,length) - возвращает часть строки с указанием начала и длинны
	8. replace("str1","str2") - заменяет, в строке, указанное слово(str1) на указанное(str2)
	9. toUpperCase() - изменяет все символы с низким регистром в высокий
	10. toLowerCase() - изменяет все символы с высоким регистром на низкий
	11. concat(" ",str2) - объединяет две строки
	12. charAt() - возвращает символ в строке по указанному индексу
	13. charCodeAt() - возвращает юникод символа в строке по указанному индекссу
	14. fromCharCode() - конвертирует юникод в символ
	15. split() - конвертирует строку в массив
	----------------------
	indexOf() и lastIndexOf() возвращают -1 если текст небыл найден
	search() = indexOf()
	*/
}
