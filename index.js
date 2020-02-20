

const butts=document.querySelector(".button");
function sub() {
    var n1 = parseInt(document.getElementById("num1").value);
    console.log(n1);
    var n2 = parseInt(document.getElementById("num2").value);
    console.log(n2);
    var oper = document.getElementById("operator").value;

        if(isNaN(n1)||isNaN(n2))
        {
          console.error("Enter valid number");
        }

        else if (oper === "+") {
          document.getElementById("result").value = n1 + n2;
          console.log(n1+n2);
        } else if (oper === "-") {
          document.getElementById("result").value = n1 - n2;
          console.log(n1-n2);
        } else if (oper === "/") {

          if(n2=='0'&& n1=='0'||n2=='0')
          {
            alert("Unable to divide");
          }
          else
          {
          document.getElementById("result").value = n1 / n2;
          console.log(n1/n2);
          }
        } 
    
        else if (oper === "*") {
          document.getElementById("result").value = n1 * n2;
          console.log(n1*n2);
        }
        
            else if(oper==='%')
            {
                modulus(n1,n2);
            }
        }
      
        function modulus(n1,n2)
        {            
            var aa=n1%n2;
            document.getElementById("ans").innerHTML= `The modulus of ${n1} and ${n2} is ${aa}`;
            console.log("This is modulus");
        }
    
        
        butts.addEventListener('click',sub);

    
