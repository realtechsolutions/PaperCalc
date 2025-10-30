---
title : Drying rate
layout: calc
param1 : Initial dryness
param2 : Final dryness
param3 : Production t/hr
param4 : Dryer surface area
param5 : No of dryers
unit1 : "%"
unit2 : "%"
unit3 : T/hr
unit4 : "m<sup>2</sup> "
unit5 : No.
resultUnit : "Kg/hr/m<sup>2</sup> "
---

Drying Rate is defined as kg water removed per hour per unit surface area.

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
      const v1 = parseFloat(document.getElementById('param1').value) || 0;
      const v2 = parseFloat(document.getElementById('param2').value) || 0;      
      const v3= parseFloat(document.getElementById('param3').value) || 0;
      const v4= parseFloat(document.getElementById('param4').value) || 0;      
      const v5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = (((v2 / v1) - 1) * v3) / v4 * v5
      
      document.getElementById('result').innerText = result.toFixed(2);
    }

</script>


