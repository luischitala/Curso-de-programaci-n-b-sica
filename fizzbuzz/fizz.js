var numeros = 100;
var divisible = false;
for(var i = 1; i<=100; i++)
{
	divisible = false;
	if(i % 3 == 0)
	{
		document.write("Fizz");
		divisible = true;
	}
	if(i % 5 == 0 )
	{
		document.write("buzz");	
		divisible = true;
	}
	if(!divisible)
	{
		document.write(i);
	}
	document.write("<br/>");
}