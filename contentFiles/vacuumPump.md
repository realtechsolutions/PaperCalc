---
title: Vacuum pump capacity
param1 : Leak Rate
param2 : System Pressure
unit1 : Torr liter/sec
unit2 : Torr
resultUnit : "m\u00B3/hr"
layout: calc
---
Vacuum pump capacity is calculated by measuring leakage
rate, ie increase of pressure after attaining vacuum level in certain time and expressed in units of Pressure.Vol/sec.   

So by multiplying Leakage with Vacuum level required we can determine vacuum pump capacity. 

A vacuum pump is a device that removes gas or vapor from a sealed container, creating a partial or complete vacuum.    
The capacity of a vacuum pump is a measure of how fast it can evacuate a given volume at a certain pressure.  
  
The capacity depends on the type of pump, the application, and the leakage rate of the system.  

There are different ways to calculate the capacity of a vacuum pump, depending on the units and the assumptions used.   
One common method is to use the equation.


$$ C = \frac { V \times ln \text { (p0/pf)}} {t} $$

<!-- $$   
\frac {V \times ln(p_0/p_f)}{t} 
$$  -->

where C is the capacity in L/s, V is the volume of the container in L, p0 is the initial pressure in Torr, pf is the final pressure in Torr, and t is the time in seconds.  

This equation assumes that the pump has a constant capacity and that the ultimate pressure of the pump is much lower than the final pressure.  

Another method is to use the equation:
C=p/Q
where C is the capacity in m3/h, Q is the flow rate in m3/h, and p is the pressure in bar.
This equation assumes that the flow rate is proportional to the pressure and that the pump operates in the rough vacuum region.

The capacity of a vacuum pump can also be determined experimentally by measuring the time it takes to evacuate a known volume to a certain pressure.


The capacity can then be calculated using either of the equations above, depending on the units and the pressure range.

The capacity of a vacuum pump is an important parameter for selecting and sizing a vacuum system.

The capacity should be sufficient to overcome the leakage rate of the system and to achieve the desired vacuum level in a reasonable time.

The capacity should also match the requirements of the vacuum process, such as the amount of gas or vapor released or the operating pressure.

Some examples of vacuum pumps and their typical capacities are:

- Water ring pump: 
  - Operating pressure 20 - 30 Torr,
  - With booster  2 - 5 Torr 
  - capacity 10 - 20 m3/h
- Rotary vane oil pump: 
   - Operating pressure 0.01 - 0.001 Torr
   - with booster  0.001 - 0.0001 Torr  capacity 100 m3/h
- Diffusion pump: 
  - Operating pressure 10^-3 - 10^-7 Torr,   
  -  capacity 10 - 1000 L/s


### Reference

[Ippta](https://www.ippta.co/Misc.Publication/DIY_Guidelines_for_Optimization_of_Wire_Vacuum.pdf)

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
      //const v3 = parseFloat(document.getElementById('param3').value) || 0;
      //const v4= parseFloat(document.getElementById('param5').value) || 0;    
      const result = (v1 * 3.6 / v2)

      document.getElementById('result').innerText = result.toFixed(2);
    }
</script>
 
