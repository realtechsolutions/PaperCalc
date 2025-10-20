---
title : Pump output power
param1 : Flow Rate
param2 : Developed head
param3 : Density of fluid
unit1 : "m\u00B3/hr"
unit2 : Meter
unit3 : "Kg/m\u00B3"
resultUnit : kW
layout: calc
---
Pump output power is useful work done by pump and is given by the expression,
$$  
Power = \text{Flow rate}\times \text{Head developed }\times \text{Density of fluid} \times g.
$$

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
      const result =   (v1 * v2 * v3 * 9.81 / 3600000)
      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>

 