---
title : Head box flow rate
param1 : Density of material
param2 : Length of Roll
param3 : Outside dia. of roll
param4 : Inside dia. of roll
unit1 : "kg/m\u00B3"
unit2 : meter
unit3 : meter
unit4 : meter
resultUnit : "kg/cm\u00B2"
layout: calc
---
Moment of inertia express a body's tendency to resist angular acceleration.  
It is equal to sum of product of mass of each particle  and square of its distance from axis of rotation.  

It determines how much torque is required for angular acceleration similar to how mass determines how much force is required for linear
acceleration.
### Reference
[Wikipedia](https://en.wikipedia.org/wiki/Moment_of_inertia)

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
      const v4 = parseFloat(document.getElementById('param4').value) || 0;   
     
      const result =   ( 0.09817 * v1 * v2 * (Math.pow(v3, 4) - Math.pow(v4, 4)))      
      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>

