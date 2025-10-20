---
title : Pressure drop in pipes
param1 : Flow Rate,
param2 : Pipe inside dia.,
param3 : Fluid viscosity,
param4 : Pipe length,
unit1 : "m\u00B3/sec"
unit2 : meter
unit3 : "N-s/m\u00B2"
unit4 : meter
resultUnit: "N/m\u00B2"
layout: calc
---
Pressure drop in a pipe is given by the formula,
$$ 
P1-P2 = \frac {128µLQ}{πD^4} 
$$
The above formula is derived from Poiseuille equation.
### Reference
[Wikipedia](https://en.wikipedia.org/wiki/Pressure_drop)  

<script>  
    const inputs = document.querySelectorAll('.outlined-field input:not([readonly])');    
    inputs.forEach(input => {   
      input.addEventListener('input', () => {
        if (input.value) {
          input.closest('.outlined-field').classList.add('has-content');
        } else {
          input.closest('.outlined-field').classList.remove('has-content');
        }   
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
      const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result = ((128 * v4 * v1 * v3) / (3.14 * v2 * v2 * v2 * v2))
      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>

 