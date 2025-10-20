---
layout : calc2
title : Breaking length
param1 : Tensile strength
param2 : gsm
unit1 : kN/m
unit2 : "g/m <sup> 2</sup>"
resultUnit : meter
---

Breaking length is calculated length of paper beyond which if paper is suspended at one end it will break of its own weight.  

Breaking length is calculated from Tensile strength by formula  BL = 102000(T/R) where T is tensile strength in kN/m and R is paper gsm.  

Breaking length is a term used in the paper industry to describe the strength of paper. 

The breaking length is a measure of the tensile strength of paper and is used to compare the inherent strength of different types of paper.  

The breaking length of paper is affected by several factors, including the type of fiber used, the degree of refining, the beating process, and the drying process.  

The breaking length is an important factor in determining the quality and strength of paper.
It is used to classify paper into different grades, such as bond, book, and cover.
The breaking length is also used to determine the suitability of paper for different applications, such as printing, packaging, and tissue production.

### Test Method:   
First paper sample is cut in pieces of 25 mm wide and then clamped in Tensile testing machine.   
The machine is then started and the load at which paper breaks is noted down as Tensile strength in kN/meter.

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
     
      //const param4 = parseFloat(document.getElementById('param4').value) || 0;
      //const param5 = parseFloat(document.getElementById('param5').value) || 0;
      
      // Example calculation: sum of all parameters
      // Replace this with your actual formula
      const result = (102000 * v1 / v2)
      
      document.getElementById('result').value = result.toFixed(2);
    }


</script>