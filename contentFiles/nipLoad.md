---
title : Nip load
param1 : Roll weight
param2 : Roll diameter
param3 : Nip Width
unit1 : Kg
unit2 : cm
unit3 : cm
resultUnit : kg/cm
layout: calc
---
Nip load is expressed as pressure per unit length,if pressure is applied on top roll it is added to weight and if applied to bottom roll it is
subtracted. 

It is calculated as
$$   
\text{Nip load} = \frac {2π}{4\times d^2 \times Pressure}+- \text {Roll  weight}.
$$

<script>  
    const inputs = document.querySelectorAll('input');    
    inputs.forEach(input => {   
      input.addEventListener('input', () => {
        
        calculate();
      });      
      // Check on page load
      if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    });
    // Calculate function 
    function calculate() {
      const v1 = parseFloat(document.getElementById('param1').value) || 0;
      const v2 = parseFloat(document.getElementById('param2').value) || 0;      
      const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;    
      const result =  ((2 * (3.14 / 4) * v2*v2 + v1) / v3)
      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

