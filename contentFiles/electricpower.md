---
layout : calc4
title : Electric output of motor
param1 : Current
param2 : Voltage
param3 : Power factor
param4 : Motor efficiency
unit1 : A
unit2 : V
unit3 : factor
unit4: number
resultUnit : kW
---


<details>
<summary>
Electric power of three phase motor is given by the formula 1.73* VI cosφ where cosφ is power factor of circuit.
</summary>
Electric power is the rate of doing work or transferring energy, measured inwatts (W), kilowatts (kW) or horsepower (hp).  
One watt is equal to one joule per second or one newton-meter per second. One horsepower is equal to 746 watts or 550 foot-pounds per second. 

In an electric motor, the mechanical power output is defined as the product of the rotational speed (in revolutions per minute or RPM) and the torque (in pound-feet or newton-meters).  

The torque is the twisting force that makes the motor run and is active from 0% to 100% operating speed.  

The power output depends on the speed of the motor and is zero at 0% speed and normally at its maximum at operating speed.  

The efficiency of an electric motor is the ratio of the mechanical power output to the electrical power input.

The electrical power input is the product of the voltage, current and power factor of the motor.

The efficiency of a motor indicates how well it converts electrical energy into mechanical energy. The higher the efficiency, the less energy is wasted as heat and the lower the operating cost.
</details>

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
      const v3= parseFloat(document.getElementById('param3').value) || 0;
      const v4= parseFloat(document.getElementById('param4').value) || 0;      
     
      const result = (v1 * v2 * v3* v4 * 1.73 / 1000)      
      document.getElementById('result').value = result.toFixed(2);
    }
</script>



