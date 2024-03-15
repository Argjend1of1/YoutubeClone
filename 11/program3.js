const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement")

let age;
mysubmit.onclick = function()
{
    age = mytext.value;
    age = Number(age);
    if(age>=18)
    {
      
      resultelement.textContent = "You are old enough to enther this site!"
    }
    else
    {
      
      resultelement.textContent = "You must be 18+ to enter this site!"
    }
}