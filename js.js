// hi this is my first page i have to do three dynamic change let us do it 

// change 1 : pop up massage with HELLO MOTHER 

alert("Autism is part of my child, it’s not everything he is. My child is so much more than a diagnosis    S.L. Coelho, author");

// nice! change 2 : 



var autism=prompt("relationship to autism")

console.log(autism)



var donate =prompt('would like to donate?');

while ( donate !="yes" && donate!= "no"){donate = prompt("please answer the question first") }

if (donate=="yes")

{alert (" we will lead you to page to donate ")
   window.location = "https://www.autismspeaks.org/?form=donate"}

else
{ document.write('<img src="https://pbs.twimg.com/media/Eqf1WzpXAAEhRa1.jpg">')}

var usfull =prompt("how much do you find our page usefull from 1 to 3 (3 good and 1 bad )");


for (var i=0;i<usfull;i++){  if (i==3){i=usfull+1}
else {
  document.write('<img src="https://www.clipartmax.com/png/middle/437-4371898_tumblr-heart-transparent-love-transparent-background-heart-png.png" width="50px">')}
 
}







