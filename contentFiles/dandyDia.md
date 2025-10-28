---
layout : calc
title : Dandy diameter
param1 : M/C speed
param2 : Max. rpm
unit1 : m/sec
unit2 : no
resultUnit : meter
---

For high speed machines bigger diameter of dandy roll is necessary to avoid damage to web because at high speed dandy roll throws water.

Dandy roll is a hollow wire covered roll that rides on the paper machine wire and compacts the newly formed wet web to improve the
formation and if required to impart watermark.

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
      const speed = parseFloat(document.getElementById('param1').value) || 0;
      const rpm = parseFloat(document.getElementById('param2').value) || 0;      
     
      const result = (speed / (3.14 * rpm))
      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>