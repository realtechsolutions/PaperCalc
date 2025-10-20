---
title : BOD
layout: calc3
param1 : Initial DO
param2 : Final DO
param3 : mFraction of sample used
unit1 : mg/l
unit2 :  mg/l
unit3 : fraction
resultUnit : mg/l
---
BOD or Biochemical oxygen demand of polluted water is the amount of oxygen required for the biological
decomposition of dissolved organic matter under aerobic condition usually at 20\u2070 in 5 days.  

Biochemical oxygen demand is an important water quality parameter because it provides an index to assess the effect, discharged wastewater
will have on the receiving  environment.  

Depletion of DO causes stress on aquatic organisms, making the environment unsuitable for life.
BOD is similar to COD, however BOD is more specific since it measures organic matter that can be oxidised biologically.  

The BOD is used in measuring waste loadings to treatment plants and measuring efficiency of treatment plants in terms of BOD.

### Other reference
[Wikipedia](https://en.wikipedia.org/wiki/Biochemical_oxygen_demand)

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
      const v1 = parseFloat(document.getElementById('param1').value) || 0;
      const v2 = parseFloat(document.getElementById('param2').value) || 0;
      const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = ((v1 - v2) / v3)
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>