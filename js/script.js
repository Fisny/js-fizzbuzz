for (var i=1; i <= 100; i++)
{
    if (i % 15 === 0)
        // console.log("FizzBuzz");
        document.getElementById('ciao').innerHTML += '<br> <font color="#E9967A"> FizzBuzz';
    else if (i % 3 === 0)
        // console.log("Fizz");
        document.getElementById('ciao').innerHTML += '<br> <font color="#000080"> Fizz';
    else if (i % 5 === 0)
        // console.log("Buzz");
        document.getElementById('ciao').innerHTML += '<br> <font color="#8B0000"> Buzz';
    else if (i % 2 === 0)
        // console.log("Ciao Ottavioooo!!!")
        document.getElementById('ciao').innerHTML += '<br> <font color="#008B8B"> Ciao Ottavioooo!!!';
    else
        // console.log(i);  
        document.getElementById('ciao').innerHTML += '<br> <h3>' + i ;
}