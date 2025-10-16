---
layout: calc3
param1 : Thruput
param2 : Ingredient flow
param3 : Ingredient Purity\n(100 for as such)
unit1 : lpm
unit2 : lmp
unit3 : "%"
resultUnit : kg/T
---

Dosing calculation is same as in batch,total volume becomes total flow rate and ingredient amount becomes ingredient flow.


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
      const thruput = parseFloat(document.getElementById('param1').value) || 0;
      const ingradientFlow = parseFloat(document.getElementById('param2').value) || 0;
      
      const ingradientPurity= parseFloat(document.getElementById('param3').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = (ingradientFlow * ingradientPurity / 100) / thruput
      
      document.getElementById('result').value = result.toFixed(2);
    }

</script>