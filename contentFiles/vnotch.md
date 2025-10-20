---
title: V notch flow rate
param1 : "Head above <br> notch apex"
param2 : "Notch angle <br>>(90 or 60)"
unit1 : mm
unit2 : degree
unit6 : "m\u00B3/hr"
layout: calc
---
Triangular weir notches are sharp crested  V shaped thin plates.

These plates are installed at the exit of channel for measuring real time flow.
           
The flow of water is directly proportional to the head of water at weir.

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
      //const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result = 
       v2 === 60.0
        ? Math.pow(v1, 2.5) * 0.7666
        : v2 === 90.0
            ? Math.pow(v1, 2.5) * 1.3466 * 3.6
            : 0.0;


      document.getElementById('result').value = result.toFixed(2);
    }
</script>
 
 Item(
        "V Notch Flow Rate",
        R.drawable.calculate,
        fileName = "vnotch.md",
        param1 = "Head above\nnotch apex",
        param2 = "Notch angle \n(90 or 60)",
        unit1 = "mm",
        unit2 = "degree",
        unit6 = "m\u00B3/hr"
    ) {
        if (v2 == 60.0) {
            (v1.pow(2.5) * 0.7666)
        } else if (v2 == 90.0) {
            (v1.pow(2.5) * 1.3466 * 3.6)
        } else {
            // Toast.makeText(LocalContext.current,"Incorrect angle",Toast.LENGTH_SHORT).show()
            0.0
        }
    },