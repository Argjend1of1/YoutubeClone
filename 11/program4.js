const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function()
{
  if(mycheckbox.checked)
  {
    subresult.textContent = "You are subcribed!";
  }
  else
  {
    subresult.textContent = "You are NOT Subscribed";
  }
  if(visabtn.checked)
  {
    paymentresult.textContent = "You are paying with Visa";
  }
  else if(mastercardbtn.checked)
  {
    paymentresult.textContent = "You are paying with Mastercard!"
  }
  else if(paypalbtn.checked)
  {
    paymentresult.textContent = "You are paying with PayPal";
  }
  else
  {
    paymentresult.textContent = "Please select one!"
  }


}
