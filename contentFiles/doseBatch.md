---
title : Dosing Batch calculation
layout: calc
param1 : Total volume
param2 : Ingredient Volume
param3 : Ingredient Purity\n(100 for as such)
unit1 : Liter
unit2 : g
unit3 : "%"
resultUnit : g/l
---
Generally amount of an ingredient present in total volume or weight is calculated in percentage,gpl,or ppm.  

gpl = 10 X percentage   
ppm = 1000 X gpl

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
      const totalVol = parseFloat(document.getElementById('param1').value) || 0;
      const ingradientVol = parseFloat(document.getElementById('param2').value) || 0;
      
      const ingradientPurity= parseFloat(document.getElementById('param3').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = (ingradientVol * ingradientPurity / 100) / totalVol
      
      document.getElementById('result').innerText = result.toFixed(2);
    }

</script>