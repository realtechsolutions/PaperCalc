---
title : Head box pressure
param1 : Jet Velocity
unit1 : mpm
resultUnit : "m H\u2082O"
layout: calc
---

Head box pressure of gravity feed head-box or pressurised head-box is given by expression.  

$$ 
H = \frac {v^2} {g} 
$$

Frictional losses are not included in this formula.

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
      //const v2 = parseFloat(document.getElementById('param2').value) || 0;      
     // const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;   
      const result =   (v1 * v1 / 70610)      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>

