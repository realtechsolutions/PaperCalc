---
title : Pressure drop in pipes
p param1 : Atmospheric pressure \n(10.33)
param2 : Liquid level above/\nbelow pump \n(- in case below)
param3 : Frictional pressure \nloss (approx 2 meters
param4 : Vapour pressure of \nliquid
param5 : Velocity head approx. \n2-2.5 m
unit1 : meter
unit2 : meter
unit3 : meter
unit4 : meter
unit5 : meter
resultUnit : meter
layout: calc
---

Pump Net positive suction pressure should be above vapour pressure of liquid otherwise liquid will start boiling and will create cavitation
problem in pump.

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
      const v4= parseFloat(document.getElementById('param4').value) || 0;    
      const result =  (v1 + v2 - v3 - v4 - v5)
      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

