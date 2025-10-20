---
title : Head box flow rate
param1 : Jet Velocity
param2 : Slice Opening
param3 : Orifice Coefficient
unit1 : mpm
unit2 : mm
unit3 : No.
resultUnit : l/mim/meter
layout: calc
---

Head box Flow/unit width is equal to slice opening multiplied by jet velocity and coefficient of geometry of slice.  
For nozzle it is about 0.95 for low angle it is about 0.75.

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
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;      
     
      const result =  (v1 * v2 * v3)
      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>
