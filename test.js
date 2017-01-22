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
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//****************STRING****************//
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
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//****************NUMBERS****************//
	/*
		var myNumber = 128;
		myNumber.toString(16);     // returns 80  шеснадцатиричная
		myNumber.toString(8);      // returns 200  восьмиричная
		myNumber.toString(2);      // returns 10000000  двоичная

		Infinity, -Infinity  -  число после выхода за возможный предел
		typeof Infinity;        // returns "number"

		NaN - число в случае проведения недопустимых операций между числами и строками
		typeof NaN; 					// returns "number"

		*******METHODS*******
		1. isNaN() - определяет является ли число NaN(Not a Null)
		2. toExponential() - возвращает строку с округлённым число на указанное количество знаков и записывает с использованием экспоненциалой
		3. toFixed() - возвращает строку с округлённым числом на указанное количество знаков
		4. toPrecision() - возвращает строку с округлённым числом и длинной на указанное количество знаков
		5. ValueOf() - конвертирует число как объект в примитивное число
		6. Numbers() - используется для конвертации переменной в число
		7. ParseInt() - парсит строку и возвращает первое найденное целое число, если числа небылло найдено, то возвращает NaN
		8. ParseFloat() - парсит строку и возвращает первое найденное целое или дробное число, если число небыло найдено,то возвращает NaN
		9. MAX_VALUE - воззвращает максимально возможное число
		10. MIN_VALUE - возвращает минимально возможное число
		11. NEGATIVE_INFINITY - представляет негативный Infinity
		12. NaN - представляет Not a Null
		13. POSITIVE_INFINITY - представляет Infinity
	*/
	//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////
	//****************MATH****************//
	/*
		
	*/
}
