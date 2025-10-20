---
title : First pass  retention
param1 : Head Box Cy
param2: Back water Cy
unit1 : "%"
unit2 : "%"
resultUnit : "%"
layout: calc2
---

First pass retention or FPR is calculated by formula,
$$
 FPR = {\frac { \text {H/B Cy % - B/W Cy % } } {\text {H/B  Cy %}}} \times100
$$ 


FPR is an important parameter for paper machine operation.
Its value should remain steady and high enough to avoid deposit and drainage problems.  
### Test Method:
- Take headbox and tray water samples at the same time.
- Measure headbox and backwater consistencies.
- Calculate FPR as per formula given above.  

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
          if (input.value) {
        input.closest('.outlined-field').classList.add('has-content');
      }
    }); 
    function calculate() {
      const headBoxCy = parseFloat(document.getElementById('param1').value) || 0;
      const backWaterCy = parseFloat(document.getElementById('param2').value) || 0;
     
    const retention = (headBoxCy - backWaterCy)/headBoxCy   
      document.getElementById('result').value = retention.toFixed(2);
    }
</script>