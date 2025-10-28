---
title : Reel length
param1 : Reel size
param2 : Reel Weight
param3 : GSM
unit1 : cm
unit2 : Kg
unit3 : "g/m\u00B2"
resultUnit : meter
layout: calc
---

Approx Reel weight can be calculated by formula,
$$  π/4 \frac {d^2-di^2 \times \text{size of reel}} {\text{Bulk of paper}}  $$

<script>  
    const inputs = document.querySelectorAll('input');    
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
      const result =    (v2 * 100000 / (v1 * v3))
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

 