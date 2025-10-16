---
layout : calc4
title : Change in crown of two rolls
param1 : "Nip width at ends
param2 : "Nip width at center
param3 : Top roll dia.
param4 : Bottom roll Dia
unit1 : mm
unit2 : mm
unit3 : mm
unit4: mm
resultUnit : mm
---



Roll crowning is  a common method to reduce nip variations caused by roll deflection.  

Roll crowning is calculated from Nip impression or deflection of roll.

<script>  
    const inputs = document.querySelectorAll('.outlined-field input:not([readonly])');    
    inputs.forEach(input => {
      // Check on input
      input.addEventListener('input', () => {
        if (input.value) {
          input.closest('.outlined-field').classList.add('has-content');
        } else {
          input.closest('.outlined-field').classList.remove('has-content');
        }        
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
      const nipWidthEnd = parseFloat(document.getElementById('param1').value) || 0;
      const nipWidthCenter = parseFloat(document.getElementById('param2').value) || 0;
      const topDia = parseFloat(document.getElementById('param3').value) || 0;
      const bottomDia= parseFloat(document.getElementById('param4').value) || 0;
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      ((v1.pow(2.0) - v2.pow(2.0)) * -(-v3 - v4) / (2 * v3 * v4))
      const result = ((Math.pow(nipWidthEnd, 2) - Math.pow(nipWidthCenter, 2)) * -(-topDia - bottomDia)) / (2 * topDia * bottomDia)
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>