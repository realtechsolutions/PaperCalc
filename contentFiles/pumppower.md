---
title : Pump power
param1 : Flow Rate
param2 : Total head
param3 : Efficiency of pump and motor
unit1 : "m\u00b3/hr"
unit2 : meter
unit3 : fraction
resultUnit : HP
layout: calc
---

Pump power depends on total head (developed+frictional),flow rate and pump+motor efficiency.

<script>  
    const inputs = document.querySelectorAll('.input');    
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
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result =   ((v1 * v2) / (75 * v3))      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

 