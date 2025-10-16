---
layout : calc2
title : Critical speed
param1 : Out side dia
param2 : Roll deflection
unit1 : m
unit2 : m
resultUnit : m/sec
---

Critical  speed is the speed at which dynamic forces causes a shaft or rotor to vibrate  at its natural frequency and can result in resonant vibration in the entire machinery.
### Other reference
[Wikipedia](https://en.wikipedia.org/wiki/Critical_speed)



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
      const outsideDia = parseFloat(document.getElementById('param1').value) || 0;
      const deflection = parseFloat(document.getElementById('param2').value) || 0;
      
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = ((93.96 * outsideDia) / Math.sqrt(deflection))
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>