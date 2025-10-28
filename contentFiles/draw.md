---
title : Machine draw
layout: calc
param1 : Machine speed
param2 : Paper gsm
param3 : machine Deckle
unit1 : mpm
unit2 :  gram/square meter
unit3 : meter
resultUnit : T/hr
---

Paper machine throughput is calculated by the formula   

$$ \text {Production Rate} = \frac {\text {Machine Speed }\times  gsm \times Deckle \times 60}{1000000} $$

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {
      // Check on input
      input.addEventListener('input', () => {
           
        // Auto-calculate on every input change
        calculate();
      });      
      // Check on page load
      if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    });

    // Calculate function 
    function calculate() {
      const machineSpeed = parseFloat(document.getElementById('param1').value) || 0;
      const gsm = parseFloat(document.getElementById('param2').value) || 0;
      
      const deckle = parseFloat(document.getElementById('param3').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = ( machineSpeed * gsm * deckle * 60 / 1000000)
      
      document.getElementById('result').innerText = result.toFixed(2);
    }

</script>