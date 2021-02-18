var square = "2";
var four = "4";
var three = "3";
var zero = "0";
//object Array creation
var calc = []
function Calc(name, param1, param2, param3, param4, param5, param6, unit1, unit2, unit3, unit4, unit5, unit6, definition, details) {
  this.name = name;
  this.param1 = param1;
  this.param2 = param2;
  this.param3 = param3;
  this.param4 = param4;
  this.param5 = param5;
  this.param6 = param6;
  this.unit1 = unit1;
  this.unit2 = unit2;
  this.unit3 = unit3;
  this.unit4 = unit4;
  this.unit5 = unit5;
  this.unit6 = unit6;
  this.definition = definition;
  this.details = details;
  this.calculate1 = function(){}
}

const Alkalanity = new Calc("Alkalinity", "Burette Reading", "Normality of Hcl", "Sample Volume", "", "", "",
  "ml", "N", "ml", "", "", "ppm", `Alkalanity is the capacity  of water to  resist changes in pH that would make water more acidic.
 </br> </br>It is measured by titrating sample with a acid until pH changes abruptly. 
 </br> Alkalinity is expressed as phenolphthalin alkalinity or total alkalinity. </br> </br> Phenolphthalin alkalinity measures the hydroxides and half of \
   the carbonates at ph 8.3, Phenolphthalin indicator is used in titration. </br> </br> Total alkalinity measures all carbonate,bicarbonate and hydroxide \
   alkalinity at ph 4.5 , Methyl Orange indicator is used in this titration.   </br> </br> <b> Test Procedure: </b></br>  First fill beurette 
   with 0.1N Hcl then take about  50 ml sample  in conical flask and add few a drops of phenolphthalin indicator . The color of solution turns
   pink now titrate it with 0.1 N HCl by adding HCl drop by drop till pink color disappears. </br> <img src= "https://upload.wikimedia.org/wikipedia/commons/8/8c/Titolazione.gif"> </br> image source Wikipedia
     </br> Note the beurette reading and calculate alkalinity   according to formula given below </br>   Formula for calculation of Alkalinity =  A*N*50000/Sample Volume, where A is beurette reading and N
  is normality of acid.`, "https://en.wikipedia.org/wiki/Alkalinity")
  Alkalanity.calculate = function () {  value6.value = (v1 * v2* 50000 / v3).toFixed(2);}      
  //Acidity
const Acidity = new Calc("Acidity", "Burette Reading", "Normality of NaOH", "Sample Volume", "", "", "", "ml", "N", "ml", "", "",
  "ppm", `Acidity is the capacity  of water to  resist changes in pH that would make water more alkaline.
</br>It is measured by titrating sample  with a alkali until pH changes abruptly indicated by color change of phenolphthalin or methyl orange indicator.\
 </br> </br>Generally methyl orange acidity and phenolphthaline acidity are measured. </br> <b> Test Method: </b> </br> Take 50-100 ml sample in conical
 flask add few drops of phenolphthalin or methyl orange indicator and titrate with 0.5N NaOH solution till colour of solution changes.
</br> </br>Formula for calculation of Acidity =  A*N*50000/Sample Volume, where A is beurette reading and N is normality of Alkali solution.`,
  "https://en.wikipedia.org/wiki/Acidity_function")
Acidity.calculate = function () { value6.value = (v1 * v2 * 50000 / v3).toFixed(2) };
//Ash Retention
const Ash_retention = new Calc("First Pass Ash Retention", "H/B Ash", "B/W Ash", "", "", "", "", "%", "%", "", "", "", "%",
  `First pass retention and ash retention are important process parameters for wet-end control of paper machine.\
 </br> </br>Low values of FPR and ash retention results in inefficient use of costly furnish components.\
 </br> </br> <strong> Test Method:  </strong></br>  Take Head box and tray water sample at the same time then calculate Ash in Head box sample and back water
 sample and then calculate Ash retention  as per formula. </br>Unretained furnish components like fillers,fibers and additives can create collection,disposal 
 and deposits problems.`)
Ash_retention.calculate = () => value6.value =  ((v1 - v2) * 100 / v1).toFixed(2)
//Alkali Loss
var Alkali_Loss = new Calc("Alkali loss", "Burette Reading", "Normality of Hcl", "Sample Weight", "", "", "", "ml",
  "N", "g", "", "", "kg/T", "Alkali Loss is the amount of residual alkali in pulp after washing of pulp.\
 </br>It is measured by titrating with a acid until pH changes abruptly. \
 </br>Formula for calculation  Alkali Loss = A*N*40/Sample weight where A is beurette reading and N is normality of acid." )
Alkali_Loss.calculate = function () { value6.value = (v1 * v2 * 142 / v3).toFixed(2) };
// automatic process control 
const Automatic_control = {name:'Automatic Process Control',definition:` To achieve a certain level of economy,safety and consistency 
almost all continuous process plants use some kind of automatic process control method.
 </br>It enables small number of operators to manage complex processes. Its application ranges
from temperature,level control of single process to control of entire plant with thousands of control loop.</br> The fundamental
block of any control system is control loop which controls one process.Large process plants can have thousands of
control loop independant or interacting with other loops.</br> A control loop consists of a process sensor,controller mechanism,
and final control element. </br> <a title="GYassineMrabetTalk✉, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Auxostat_schematic.svg"><img width="256" alt="Auxostat schematic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Auxostat_schematic.svg/256px-Auxostat_schematic.svg.png"></a> 
</br>  Example of level control system image source Wikipedia </br>  In the example above a controller compares level of tank
as given by sensor with set point and then based on error  send signal to valve to keep the level at set point.
Commonly used controllers are PLC, DCS etc .</br>Also see PID controller tuning,PLC, DCS.`}

calc.push(Automatic_control)

//bod
const BOD = new Calc("BOD", "Initial DO", "Final DO", "fraction of sample used  for titration", "", "", "", "mg/l", "mg/l",
  "", "", "", "mg/l", " BOD or Biochemical oxygen demand of polluted water is the amount of oxygen required for the biological\
 decomposition of dissolved organic matter under aerobic condition usually at 20 degree centigrade in 5 days.</Br>Biochemical\
  oxygen demand is an important water quality parameter because it provides an index to assess the effect discharged\
   wastewater will   have on the receiving  environment. Depletion of DO causes stress on aquatic organisms, making the environment\
    unsuitable for life.</Br> BOD is similar to COD anlaysis. However BOD is more specific since it measures organic matter that can be oxidised\
     biologically. The BOD is used in measuring waste loadings to treatment plants and measuring efficiency of tratment plants \
     in terms of BOD. ", " https://en.wikipedia.org/wiki/Biochemical_oxygen_demand")     
        
BOD.calculate = () => value6.value = ((v1 - v2) / v3).toFixed(2);
const Breaking_Length = new Calc("Breaking Length", "Tensile strength", "GSM", "", "", "", "", "kN/m", "g/m2", "", "", " ", "meters",
  `Breaking length is calculated length of paper beyond which if paper  is suspended at one end it will break of its own weight.\
</br> </br> Breaking length is calculated from Tensile strength by formula  BL = 102000(T/R) where T is tensile 
strength in kN/m and R is paper gsm. </br>  <strong> Test method: </strong> </br> First paper sample is cut in
 pieces of 25 mm wide and then clamped in Tensile testing machine. the machine is then started
 and the load at which paper breaks is noted down as Tensile strength in KN/meter. `  )
Breaking_Length.calculate = function () { value6.value = (102000 * v1 / v2).toFixed(2) }
//brightness whiteness and shade
const brightness_whiteness_shade = {
  name: "Brightness,Whiteness and Shade", definition: "Brightness is a measurement of\
 reflectance of blue light  of wavelength 457nm,Tappi standard and ISO standards are commonly used for brightness\
  measurement. A 95  bright paper reflects more light than an 85 bright paper, therefore appearing brighter.  \
 </br> </br> Using the specific blue light to measure this reflection ignores longer wavelengths, including green and red. Because of this, \
  two types of paper with the same brightness can visually appear very different, even though their “brightness” is the same.\
    </br> </br>Whiteness measures  reflectance of all wavelengths of light across visible spectrum, Because of this, the whiteness measure is more in line with our visual\
     perception. The most common whiteness measure, D65 illumination, represents outdoor daylight. This standard is called CIE Whiteness and was developed by the French-based International Commission on Illumination \
     (also abbreviated CIE).  </br> </br>Shade is measurement of  color of paper.</br>  CIE L*a*b model is used for color measurement.\
  L value is a measure of lightness along black white axis,a is measure of red/ green and b is a measure of blue/yellow. "}
//burst factor
const Bursting_strength = {
  name: "Bursting Strength", definition: `Bursting strength is measured as the maximum hydrostatic pressure \
required to rupture the sample by constantly increasing the pressure applied through a rubber diaphgram on 30.5 mm diameter sample. \
 </br> </br>Bursting strength tells how much pressure a paper can tolerate before rupture.</br> </br> Equipment used for testing Burst factor is\
 is called Mullen Tester. </br> </br>Burst factor is given by the expression BF = Bursting Strength
 /GSM where Bursting strength unit is g/ cm<sup>2 </sup>
 and gsm is g per sq meter. </br> </br>Burst factor is an important parameter for packaging grades of paper. Bursting strength indicates a composite of \
 strength and toughness.Hence it is useful in packaging grades of paper where paper is subjected to a stress similar to that exerted in Burst test.\
 After every 100 readings equipment is calibrated using aluminum foil and after every 500 readings  or six months whichever is earlier \
 diaphragm  is replaced. </br> <strong> Test Method:</strong>  </br> First condition paper at 27 degree centigrade and
 65% Relative humidity . Place the sample over diaphgram and clamp start the equipment and record pressure at which paper ruptured
 Calculate BF as per formula given above. `}

// Conditioning of paper
const Conditioning = {
  name: "Conditioning of Paper", definition: `Paper is hygroscopic in nature  ie it is capable of absorbing water from \
surroundings atmosphere. Amount of absorbed water depends on humidity and temperature of air in contact with paper, hence even slight changes in \
humidity and temperature affect test results . So it is necessary to maintain standard conditions during testing of paper. </br> </br>
Under Tappi standard all tests are carried out at 23 ${zero.sup()}C+- 1 and \
50+2 % relative humidity.</br> Also see Relative Humidity.  `}
//cobb
var Cobb = {
  name: "Cobb", definition: "Cobb test measures amount of water absorbed in to the surface \
of a sized paper by exposing  paper surface to fixed amount of water for a certain period usually 45 sec.</br> Test method\
 </Br> First weigh sample paper and then put it in cobb tester and then pour 100 ml water . After 45 sec remove the\
  water and take out paper sample and again weigh it. Cobb value is difference of two weights. ",
  details: ""
}
// change in crown of rolls
var change_in_crown = new Calc("Change in crown of two rolls", "Nip width at ends", "Nip width at center",
  "Top roll diameter", "Bottom roll diameter", "", "", "mm", "mm", "mm", "mm", "", "mm", "Roll crowing is common method to reduce nip variations\
 caused by roll deflection. Roll crowing is calculated from Nip impression or deflection of roll. " )
change_in_crown.calculate = function () { let result = ((Math.pow(v1, 2) - Math.pow(v2, 2)) * -(-v3 - v4)) / (2 * v3 * v4)
value6.value = result.toFixed(2) }
//critical speed of a roll
const critical_speed = new Calc("Critical Speed of a roll", "Outside dia. of roll", "roll deflection", "", ""
  , "", "", "m", "m", "", "", "", "m/min", "Critical speed is the speed at which dynamic  forces causes a shaft or rotor to vibrate\
 at its natural frequency and can result in resonant vibration in the entire machinary.")
critical_speed.calculate = () =>( 93.96 * v1 / Math.sqrt(v2)).toFixed(2)
// Dissolved oxygen
const Dissolved_oxygen = {
  name: "Dissolved Oxygen of Water", definition: `Dissolved Oxygen of Water is ml of Sodium thiosulphate of 0.025N consumed for \
titrating 200 ml of sample.The test is known as Winkler  test method.
 </br> <strong>Test Method:  </strong> </br>
1. Take sample in a 300 ml BOD bottle.</br>
2.Add 2ml MnSO<sub>4</sub> and 2 ml Alkali iodide azide solution to precipipate dissolved oxygen.</br>
3.Shake bottles and add 2 ml Conc sulphuric acid to dissolve precipitates</br>
4. Take 201 ml solution in to a conical flask from 300 ml bottle. </br>
5. Titrate this solution with standard sodium thiosulphate(0.025N) using starch indicator  till color change
</br>6. DO = ml of Sodium thiosulphate consumed.` 
 
}
calc.push(Dissolved_oxygen)
const Degree_sr = {
  name: "Degree SR of Pulp", definition: `The Schopper degree test is designed to provide a measure of the rate \
 at which a dilute suspension of pulp may be dewatered. One 0SR corresponds to 10 ml of water.</br> </br><strong> Test Method:
  </strong> </br>  Take 2 g  pulp and dilute to 1000 ml  with stirring. The pulp suspension is then poured in drainage tester
  the pulp slurry is then  drained and drained water is taken in a graduated cylinder and amount of water drained is
 expressed as degree SR.`}
calc.push(Degree_sr)


const Dandy_dia = new Calc("Dandy Diameter", "M/c Speed", "Max.rpm", "", "", "", "", "mpm", "number", "", "", "", "m",
  "For high speed machines bigger diameter of dandy roll is necessary to avoid damage to web because at high speed dandy roll throws water.")
Dandy_dia.calculate = () =>  value6.value = (v1 / (3.14 * v2)).toFixed(2)
calc.push(Dandy_dia)
// defects in paper
const Paper_defects = {
  name: "Defects in Paper", definition: `For solving paper defect problems, first type of defect is confirmed
 like holes,cracks,spots etc,then frequency is observed like if appearing continuously then it is a likely a problem of machine\
 pumps rolls,wire,felt etc if appering occasionall then it could be a problem of additives preparation system. Following are most\
 common defects. </br> <b> Air Bubbles: </b>  Caused by too much water in paper </br> <b> Bursts: </b> Bursts in a reel are caused\
 by high web  tension between rolls during winding </br>  <b> Blistering: </b> It is caused when water vapour can not escape\
 fast enough through coating layers </br> <b> Calander mark: </b>  It is caused by some extrenous material present in nips or \
 faulty calander surfaces  </br> <b> Cockling: </b> Paper haswave like pattern </br> <b> Crush: </b> It is caused by too much\
 pressure or moisture inpress section </br> <b> Dandy Mark: </B> caused by fibers picking by Dandy roll from wet web </br> \
 <b> Felt Mark:  </b> A spot or thin area caused by dirty or poor surface of felt </br> <b>  Foam spots: </b> Spots or holes caused\
 by foam at the wet-end side </Br> <b> Holes: </b> Holes in paper are caused by many reasons. Holes caused by wire are clean holes\
 holes are also caused by dirt and slimes.</br> <b> Pin holes: </b> Pin holes are small hlles caused by foreign particles\
 </br> <b> piping: </b> Defects in reels consists of ridges due to moisture take up by surface layers </br> <b> Wrinkles: </b>\
 Wrinkles are narrow folds caused by uneven tension profile. wrinkles can happen in press,dryer or calander or in rewinder.`}
calc.push(Paper_defects)



//Dose calculation batch
var Dose_batch = new Calc("Dosing(Batch)", "Total Volume", "Ingradient quantity", "Ingradient purity(100 for as such basis)", "", "", "", "Liters", "g",
  "%", "", "", "g/l", "Generally amount of an ingradient present in total volume or weight is calculated in \
percentage,gpl,or ppm.   </br> </br> gpl = 10 X percentage, </br>  ppm = 1000 X gpl. ")
Dose_batch.calculate = function () { value6.value = (v2 * v3 / 100) / v1 }
calc.push(Dose_batch);
// Dose calculation continuous
var Dose_continuous = new Calc("Dosing(Continuous)", "Thruput ", "Ingradient Flow", "Ingradient purity(100 for as such basis)", "", "", "", "T/hr",
  "lpm", "%", "", "", "kg/T", "Dosing calculation is same as in batch, total volume becomes total flow rate and \
ingradient amount becomes ingradient flow. ")
Dose_continuous.calculate = function () { value6.value = ((v2 * 60 * v3 / 100) / v1).toFixed(2) }
calc.push(Dose_continuous);
//DCS
const DCS = {name:'DCS',definition:`A PLC is used to control an individual machine or process and a DCS is used to control
the entire plant. It is a computerised control system  with many control loops and controllers distributed throughout 
the system with no central  supervisory control system.DCS advantage is that all plant processes can be controlled from 
from a single place  `}
calc.push(DCS)

//Drying Rate
var Drying_Rate = new Calc("Drying Rate", "Initial Dryness", "Final Dryness", "Production/Hr", "Dryer surface area",
  "No. of Dryers", "", "%", "%", "T/hr", `m<sup>2</sup>`, "No", `Kg/hr/m<sup>2</sup> `, "Drying Rate is defined  as kg water removed per hour per\
 unit surface area."
)

Drying_Rate.calculate = function () { let result = (((v2 / v1) - 1) * v3) / v4 * v5
  value6.value= result.toFixed(2) }
calc.push(Drying_Rate);
//motor power
const Electric_power = new Calc("Electric output power of motor", "Current ", "Voltage", "Power factor", "Motor efficiency",
  "", "", "A", "v", "factor", "number", "", "KW", "Electric power of three phase motor is given by the formula 1.73* VI cosφ where cosφ\
 is power factor of circuit.")
Electric_power.calculate = () => value6.value = (v1 * v2 * v3 * 1.73 / 1000).toFixed(2)
calc.push(Electric_power)

//FPR
var FPR = new Calc("First Pass Retention", "Head Box Cy", "B/W cy", "", "", "", "", "%", "%", "", "", "", "%", `First pass retention\
 or FPR is calculated by formula FPR = (Head box Cy%- B/W cy% ) / H/B Cy%  multiplied by 100. FPR is an important parameter for\
 papermachine operation. Its value should remain steady and high enough  to avoid deposit and drainage problems. </br> <strong>
 Test Method: </strong> </br> Take headbox and tray water samples at the same time.Measure headbox and backwater consistencies. Calculate 
 FPR as per formula given above,     `  )
FPR.calculate = function () { value6.value = ((v1 - v2) * 100 / v1 ).toFixed(2)}
calc.push(FPR);

//Hardness of water
const Hardness = new Calc('Hardness of Water',"Burette Reading", "Normality of EDTA", "Sample Volume", "", "", "",
"ml", "N", "ml", "", "", "ppm",`Total hardness is defined as sum of calcium and magnesium concentrations expressed
as CaCO<sub>3</sub> in mg/l  </br> <strong> Test method:</strong> </br> Take 100 ml sample in conical flask add 2-3 drops Erichrome
black indicator and titrate with 0.5 N EDTA solution Total hardness is calculated as V*N*50000/Sample volume , where
V is beurette reading,and N is normality of EDTA solution.`)
Hardness.calculate = ()=> value6.value = (v1*v2*50000/v3).toFixed(2)
calc.push(Hardness)
// Headbox pressure
var Headbox_Pressure = new Calc("HeadBox Pressure", "Jet Velocity", "", "", "", "", "", "mpm", "", "", "", "",`m H<sub>2</sub>O`,
  `Head box prsessure of gravity feed headbox or pressurised headbox is given by expression  H = v<sup>2</sup>/2g. Frictional losses\
 are not included in this formula.`  )
Headbox_Pressure.calculate = function () { value6.value = (v1 * v1 / 70610).toFixed(2) }
calc.push(Headbox_Pressure);
// kappa no of pulp
const kappa_number = {name:"Kappa Number", definition: `Kappa number is volume (in ml) of 0.1 N potassium permagnate solution 
  consumed by 1 g of pulp. </br> <strong> Test Method: </strong> </br> Take 2 g OD pulp in a beaker  disintegrate it in 
  about 500 ml water, place it on water bath and make total volume 800 ml then add 100ml KMnO<sub>4</sub>+100ml sulphuric acid
  make total volume 1000 ml  </br>
  after 10 minutes stop reaction by adding  20 ml KI and titrate free iodine with sodium thiosulphate solution using starch
  indicator</br> Carry out a blank test without pulp.</Br>
    calculate Kappa number k = p*f/w </br>
    
p=( b-a)*N/0.1 here f is correction factor which is 1.0 when consumption of permegnate is 50%.,b is amount of thiosulphate
consumed in blank   a is thiosulphate consumed by sample N is normality of thiosulphate. 

` }
calc.push(kappa_number)

//Machine Draw
var Machine_Draw = new Calc("Machine Production Rate", "Machine Speed", "Machine Deckle", "Paper GSM", "", "", "", "mpm", "m",
  `g/m<sup>2</sup>`, "", "", "T/hr", "Paper machine thruput is calculated by the formula Production Rate = Machine Speed in mpm*gsm*Deckle*60/1000000.")

Machine_Draw.calculate = function () { value6.value =( v1 * v2 * v3 * 60 / 1000000).toFixed(2) };
calc.push(Machine_Draw);
//Nip load
const Nipload = new Calc('Nip Load', 'Roll weight', 'Roll diameter', 'Pressure', 'Nip width', '', '', 'Kg', 'cm', 
`kg/cm<sup>2</sup>`, 'cm', '', 'kg/cm'  , `Nip load is expressed as pressure per unit length ,if pressure is applied on top 
roll it is added to weight or if applied to bottom roll it is substracted. It is calculated as 
Nip load = 2*&#120529;/4*d ${square.sup()}*Pressure+- Roll weight.`)

Nipload.calculate = () => value6.value  = ((2 * (3.14 / 4) * v2 ** 2 + v1) / v4).toFixed(2)
calc.push(Nipload)
// opacity
const Opacity = {
  name: "Opacity of Paper", definition: `Opacity of paper indicates resistance of paper to passage of light. \
<br> </br>This property is useful in book printing where both sides  of the paper are printed. </br> <strong>
Test Method: </strong> </break>  First  measure brightness of paper by backing paper sample with blacksheet of paper. </br>
Then measure brightness of paper by backing  paper sample with thick pile of same paper.</br> Opacity is the ratio of these figures.` }
calc.push(Opacity);



//Pump basics
const Pump_basic = {
  name: 'Pump Basics', definition: `A pump can be defined as a machine that increases the total energy of a liquid this means that
pump transfers mechanical energy to a fluid  and converts it to pressure energy of fluid.</br> Generally pumps are of two types 
Centrifugal pump and positive displacement pumps.</br></br> Centrifugal pumps are suitable for low pressure high liquid flow rate application
and positive displacement pumps are suitable for high pressure low flow rate applications.</br></br> Centrifugal pumps require 
priming whereas PD pumps dont require priming.</Br></br>All pumps have three parts</br> 1. Suction </br>2.Pump casing
 </br> 3. Delivery.</br> </br> In centrifugal pumps pump casing contains an impeller which rotates at very high rpm and inncrease the kinetic energy
of liquid in the outer side of pump casing,this creates a partial vacuum at the center of casing and fluid is sucked 
n through suction pipe.The increased kinetic energy in converted to pressure in the oulet pipe of pump. </br>
</br> 
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Centrifugal_Pump.png" alt="Centrifugal Pump.png" height = "250px" width = "250px">
</br> Centrifugal Pump image source Wikipedia </br></br> In Positive displacement pump, there are two valves one on
suction side and one on delivery side.The pump casing has a mechamism to suck liquid from suction side and deliver to 
delivery side,the mechanism is different in reciprocating PD pump and rotating PD pump.</br> </br>
  In reciprocating pump 
the mechanism include one cylinder and piston connected to motor by a connecting rod. in one cycle the piston 
movement create  suction pressure and liquid is sucked in othee cycle movement of piston  compress the liquid and 
the is discharged through delivery pipe. </Br> </br>
In rotary PD pump the mechanism consists of rotating gears in case of gear pumps and rotating screw in case of
 screw pumps.</br> </br><a title="Petteri Aimonen, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Pcp-thumb.gif"><img width="128" alt="Pcp-thumb" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Pcp-thumb.gif"></a>
</br> Progressive Cavity pump image source Wikipedia `}
calc.push(Pump_basic)
//Pump output power
var Pump_output_power = new Calc("Pump output power", "Flow rate ", "Developed Head", "Density of fluid", "", "", "",
 `m<sub>3 </sub>/hr`,  "meter", `kg/m<sub>3 </sub>`, "", "", "KW", "Pump output power is useful work done by pump and is given by the expression\
 Power = Flow rate X Head developed X Density of fluid X g.")
Pump_output_power.calculate = function () { value6.value = (v1 * v2 * v3 * 9.81 / 3600000).toFixed(2) }
calc.push(Pump_output_power);
//pump power
const Pump_Power = new Calc("Pump Power", "Flow Rate", "Total head", "efficiency of pump and motor", "", "", "",
  `meter<sup>3</sup>/hr`, "meters", "fraction", "", "", "HP", "Pump power depends on total head (developed+frictional),flow rate \
and pump+motor efficiency.",)
Pump_Power.calculate = () =>  value6.value= ((v1 * v2) / (75 * v3)).toFixed(2)
calc.push(Pump_Power)


//PID controller
const PID_controller=  {name:'PID Controller' , definition:`The most basic control system is on/off control but this cotrol system
is not very useful because of its oscillatory natue.To contol the output to a desired setpoint three control actions are
necessary,these are proprtional,integral and derivative.</br> If we use only proportional control a steady state error is generated
beacause feedback controller works only on the error and if there is no error it will not work. To reduce this steady state
error integral action is required. Proportional and integral actions create oscillations in the system, to make the systen
stable derivative action is used .In PID controller we have all these three control actions.PID controller maintains the output such 
that there is zero error between the process variable and setpoint/ desired output by closed-loop operations.
<a title="Arturo Urquizo, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:PID_en.svg"><img width="512" alt="PID en" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/PID_en.svg/512px-PID_en.svg.png"></a>
 </br> Working of  PID Controller Image source Wikipedia</Br> Tuning Of controller </br> There are several methods to set proportional
 integral and derivates gains.(K</sub>p</sub>, K</sub>i</sub> and K</sub>d</sub>).Manual setting and Zeigller mrthod are 
 common method to set controler parameters. Im manual method first K</sub>p</sub> is set keeping derivative and integral constants
 zero and it is increased till system oscillates. then K</sub>i</sub> and K</sub>d</sub> are set </br>
 <p><a href="https://commons.wikimedia.org/wiki/File:PID_Compensation_Animated.gif#/media/File:PID_Compensation_Animated.gif"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/PID_Compensation_Animated.gif" alt="PID Compensation Animated.gif" height="300" width="400"></a><br>
  PID Controller tuning image source Wikipedia`
 }
calc.push(PID_controller)
//plc
const PLC = {name:'PLC',definition:`PLC is short form of Programmable Logic Controller. A PLC is a computer 
specially designed to operate reliably under harsh industrial environments. PLCs are used to automate industrial
processes.PLCs are like personal computer. They both have a power supply, a CPU (Central Processing Unit), inputs 
and outputs (I/O), memory, and operating software (although it’s a different operating software).

The biggest differences between a PLC and a PC is that PLC can accepts  continuous inputs but  a PC cannot , and a PLC
is much better suited to rough industrial environments. PLCs play a crucial role in the field of automation, using 
forming part of a larger SCADA system. A PLC can be programmed according to the operational requirement of the
process.</br> <a title="MakeMagazinDE, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Siemens_sps_logo_8_12-24_RCE-03.jpg"><img width="512" alt="Siemens sps logo 8 12-24 RCE-03" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens_sps_logo_8_12-24_RCE-03.jpg/512px-Siemens_sps_logo_8_12-24_RCE-03.jpg"></a> </br> Image source Wikipedia
</br> PLC are generalyy programmed in ladder logic and C language. `}
calc.push(PLC)
// Porosity
const Porosity = {
  name: "Porosity of Paper", definition: ` Porosity is air resistance of paper . It is indirect measure of\
 fluid premeability in to paper and other structural parameters.</br> </br> This method measures amount of time required for a certain\
 volume of air to pass through a  test specimen. The air pressure is generated by a gravity loaded cylinder that captures \
 an air volume within a chamber using a liquid seal. The pressurised volume of air is passed through the paper to 
 atmosphere. </br> <strong> Test Method:</strong> 1.First prepare sample for testing </br> 2. place sample in Gurley
 tester between cylinder and gasket</br>3.Lift the cylinder</br> 4. Set the timer</Br> 5.As the cylinder falls down note
 down the time till  cylinder reaches from 150 ml mark to 250 ml mark. `}
calc.push(Porosity)


//Pump NPSH 
const NPSH = new Calc('Pump NPSHA', 'Atmospheric pressure (10.33)', ' Liquid level above/below pump (- in case below)', 'frictional pressure loss approx 2 meters'
  , 'Vapour pressure of liquid', 'velocity head approx 2-2.5 m ', '', 'meter', 'meter', 'meter', 'meter', 'meter',
  'meter', `Pump Net positive suction pressure should be above vapour pressure of liquid otherwise liquid will start
boiling and will create cavitation problem in pump.`)
NPSH.calculate = () => value6.value  = (v1 + v2 - v3 - v4 - v5).toFixed(2)

calc.push(NPSH)
//ream weight
const Ream_Calculation = new Calc("Ream Calculation(500 Sheets)", "Length", "Width", "GSM", "", "", "Ream Weight", "cm", "cm", `g/m<sup>2</sup>`, "", "", "kg",
  "Forrmula for calculation of ream weight is Length x width x gsm *0.5  ")
Ream_Calculation.calculate = function () {}
 Ream_Calculation.calculate1 = function() {   
if(!value6.value && v1&&v2&&v3) { v6 = ((v1 / 100) * (v2 / 100) * v3 * 0.5);
value6.value=v6.toFixed(2)}
if(!value1.value&&v2&&v3&&v6) { v1 = ((v6*20000) / (v2* v3));
value1.value=v1.toFixed(2)}
if(!value2.value&&v1&&v3&&v6) { v2 = ((v6*20000) / (v1* v3));
value2.value=v2.toFixed(2)}
if(!value3.value&&v1&&v2&&v6) { v3 = ((v6*20000) / (v2* v1));
value3.value=v3.toFixed(2)}

console.log((!value6.value && v1&&v2&&v3),(!value1.value&&v2&&v3&&v6),(!value2.value&&v1&&v3&&v6),(!value3.value&&v1&&v2&&v6))
}
calc.push(Ream_Calculation);
// v notch flow
var V_notch_flow = new Calc("V Notch Flow Rate", "Head above notch apex", "Notch angle(90 or 60)", "", "", "", "", "mm", "Degrees", "",
  "", "", "m3/hr", "Triangular weir notches are sharp crested  V shaped thin plates. These plates are installed at the exit of channel\
 for measuring real time flow. The flow of water is directly proportionl to the head of water at weir."  )
V_notch_flow.calculate = function () { if (v2 == "90") { value6.value = (Math.pow(v1, 2.5) * 1.3466 * 3.6).toFixed(2) }
 else { value6.value = (Math.pow(v1, 2.5) * 0.7666).toFixed(2) } }
calc.push(V_notch_flow);
// Reel Calculation

const Reel_Calculation = new  Calc ("Reel Calculations","Reel Size",'Reel Weight','GSM','','','Length of paper',
'cm','Kg',`g/m<sup>2 </sup>`,'','','meter', `Approx Reel weight can be calculated by formula  π/4(d${square.sup()}-di${square.sup()}*size of reel/Bulk of paper `)
Reel_Calculation.calculate = function() {}
Reel_Calculation.calculate1 = function() { 
  if(!value6.value && v1&&v2&&v3) { v6 = (v2*100000/(v1*v3))
  value6.value=v6.toFixed(2) }
  if(!value1.value&&v2&&v3&&v6) { v1 = (v2*100000/(v6*v3))
  value1.value = v1.toFixed(2)}
  if(!value2.value&&v1&&v3&&v6) { v2 = (v6*v1*v3/100000);
  value2.value  =   v2.toFixed(2)}
  if(!value3.value&&v1&&v2&&v6) { v3 = (v2*100000/(v1*v6))
  value3.value = v3.toFixed(2)}

  console.log(v1+v2)
}
calc.push(Reel_Calculation)
// pH of solution

var pH_of_Solution = {
  name: "pH of Solution", details: "https://en.wikipedia.org/wiki/PH",
  definition: "pH is a scale used  to specify acidity or basicity\
 of an aqueous solution.Acidic Solutions have pH less than 7 and basic solutions have pH more than 7.\
 </br> </br> The pH scale is logarithamic and inversely indicate the hydrogen ion concentration.\
 It is expressed as pH = - log [H+]. </br>  pH of any solution is temperature dependant so  if pH of\
 a solution is 7 at 25 degree celcius at will be less than 7 at higher temperature. "  }
calc.push(pH_of_Solution);
//viscosity of pulp
const viscosity_pulp = new Calc("Viscosity Of Pulp", "Viscometer Constant", "effux time", "", "", "",
  "", "number", "sec", "", "", "", "cP", `Pulp solution viscosity gives an indication of  degree of polymerisation of cellulose.\
</Br> </br>Therefore it gives indication of degradation of cellulose resulting from pulping and bleaching 
operations. </br> <strong> Test Method: </strong> </br> Take 0.250g  OD pulp in a dissolving bottle and add 25 ml distt.
water shake the bottle to mix the pulp. </Br> Add 25 ml of cupriethylenediamine solution.</br> purge with nitrogen for 
one minute and shake for about 15 minutes. </br>Place the solution in viscometer and measure time in sec. </br>
Calculate viscosity by formula V = Ctd  Where V is viscosity in cP C is viscometer constt. and t is effux time. `)

viscosity_pulp.calculate = function () { value6.value = (v1 * v2).toFixed(2) }
calc.push(viscosity_pulp)
// Pressure drop in stock pipe
const pressure_drop = new Calc("Pressure Drop in Pipes", "Flow Rate", "Pipe inside diameter",
  "", "Fluid viscosity", "Pipe Length", "", `m${three.sup()}/sec`, "meter",
  `kg/m${three.sup()}`, `N-s/m${square.sup()}`, `m`, `N/m${square.sup()}`
  , `Pressure drop in a pipe is given by the formula\
 P1-P2 = 128µLQ/πD${four.sup()}. The above formula is derived from Poiseuille equation.`)
pressure_drop.calculate = function () { value6.value = ((128 * v4 * v1 * v5) / (3.14 * v2 * v2 * v2 * v2)).toFixed(2) }
calc.push(pressure_drop);
// Residual chlorine
var R_chlorine = new Calc("Residual Chlorine", "Burette Reading", "Normality of Sodium Thiosulphate", "Sample Volume", "", "", "", "ml", "N", "g", "",
  "", "ppm", `Residual chlorine is low amount of chlorine left in pulp  after washing of pulp.\
    </br>It is measured by titrating with a Sodium thiosulphate using starch iodine titration method until color changes.   \
    </br> </br>Formula for calculation  of residual chlorine = V*N* 35.5/Sample volume, where V is beurette reading
     and N is normality of sodium thiosulphate. </br> <strong> Test Method: </strong> </br>   squeeze the pulp and take about 100 ml water 
     sample in a beaker add 5 ml acetic acid + 1-2 g KI powder.</br>  colour will become yellow and then titrate with sodium thiosulphate
     till yellow color fades. Now add 1-2 ml strach solution  the colour will become blue and again titrate with sodium thiosulphate till
     blue colour disappears. Note down the beurette reading.`)
R_chlorine.calculate = function () { value6.value = (v1 * v2 * 35.5 / v3).toFixed(2) };
calc.push(R_chlorine);


//moment of inertia roll
const moment_inertia = new Calc("Moment of Inertia of a roll", "Density of material", "Length of roll", "outside dia. of roll", "inside dia.of roll",
  "", "", `kg/m${three.sup()}`, "meter", "meter", "meter", "", `kg.m${square.sup()}`, "Moment of inertia express a body,s\
 tendency to resist angular acceleration. It is equal to sum of product of mass of each particle  and square of its distance from\
 axis of roation.</Br> It determines how much torque is required for angular acceleration similar to how mass determines\
 how much force is required for linear acceleration.",)
moment_inertia.calculate = () =>  value6.value = ( 0.09817 * v1 * v2 * (Math.pow(v3, 4) - Math.pow(v4, 4))).toFixed(2)
calc.push(moment_inertia)
//head box flow rate
const Headbox_flow = new Calc("Headbox Flow Rate", "Jet Velocity", "Slice Opening", "Orifice cofficient", "", "", "",
  "mpm", "mm", "number", "", "", "L/min/m", "Head box Flow/unit width is equal to slice opening multiplied by jet  velocity and \
 coefficient of geometry of slice, for nozzle it is about 0.95 for low angle it is about 0.75.")
Headbox_flow.calculate = () => value6.value =    (v1 * v2 * v3).toFixed(2)
calc.push(Headbox_flow)


const Tearing_strength = new Calc("Tearing Factor", "Tearing Strength", "Basis Weight", "", "", "", "", "mN",
 "gram/ meter <sup>2</sup.", "",  "", "", `mN/g/m${square.sup()} `, `Tearing Strength of paper is resistance of paper to tearing force it is subjected to.\
 It is a basic physical property of paper and paperboard. It is measured in both machine  and cross directions.</br> \
 </br>Tear factor of paper is calculated as Tearing strength per unit basis weight. </Br> <strong> Test method:</strong>
 </br>Clamp 8-16 no. of plies of paper in Elemendrof tester. </br> Start the tester. </Br> Note down the scale reading.
 </br> Calculate tearing strength in mN = 16*avg scale reading/ no. of plies.` )
Tearing_strength.calculate = () => value6.value =   (v1 / v2).toFixed(2);
calc.push(Tearing_strength);

const Total_active_effective_alkali = new Calc("Total active and effective alkali", "Buerette Reading", "Normality of Hcl",
  "Sample Volume", "", "", "", "ml", "N", "ml", "", "", "gpl as NaOH", `Total alkali is total concentration of alkaline
  constituents in the liquor. </br> Active Alkali is total concentration of alkaline constituents except carbonates. </br> 
  Effective alkali is concentration of strongly alkaline constituents mainly hydroxyl ions.</br> <strong> Test Method:</strong>
  </br> Take 5 ml liquor in a 200 ml conical flask dilute with 30 ml distt. water and add 20 ml barium chloride </br>
  titrate immediately with  with Hcl using thymolphthalin indictor to pH 9.5 note the reading as<b> a </b>,</break>
  Formaldehyde is then added to convert hydrogen sulphide to   strong base and  titration is then continued  to pH 8.0 using
  phenolphthalin indicator note the reading as <b> b </b>, finally total  alkali is determined by continuing titration to pH 
  4.0 using bromophenol blue indicator note the reading as<b> c </b> . </br> </br> Formula for 
  calculation is </br> Effective alkali = am/v/ </br>active alkali = bm/v </br>/total alkali =cm/v.</br> where </br>
  a= HCl consumed using thymopthaline indicator </br> b is consumption of HCl using phenolphthalin indicator</Br>
   c is consumption of HCl using bromophenol indicator </b> m is molar concentration of HCl </br> v is volume of 
   sample in ml. `, "https://en.wikipedia.org/wiki/White_liquor")

Total_active_effective_alkali.calculate = () => value6.value = (v1 * v2 * 40 / v3).toFixed(2);
calc.push(Total_active_effective_alkali)

const Relative_humadity = new Calc("Relative Humidity", "Dry Bulb Temperature", "Wet Bulb temperature", "", "", "", "",
  "Celcius", "Celcius", "", "", "", "%", " Relative humidity is the amount of water vapourpresent in air expressed as the percentage of amount\
 needed for saturation at the same temperature.</br> </br> Humidity an important parameters in printing industry,because paper\
 is a hygroscopic material and absorbs moisture from atmosphere. Humidity is calculated by noting dry and wet bulb temperatures\
 and using psychrometric charts.</br> </br> It can be calculated as RH(%)= Ew-N(1+0.00115*Tw)*(Td-Tw)/*100/Ed  where Ew is 6.112*exp((17.502+Td)/240.97+Tw) and Ed is\
 6.112*exp((17.502+Td)/240.97+Tw) )), Td is dry bulb temperature and Tw is wet bulb temperature.")
Relative_humadity.calculate = () => value6.value = 
((6.112 * Math.exp((17.502 * v2) / (240.97 + v2))) - 0.6687 * (1 + 0.00115 * v1) * (v1 - v2)) * 100 / (6.112 * Math.exp((17.502 * v1) / (240.97 + v1)))

calc.push(Relative_humadity);
// steam condensate system
const Steam_condensate = {name: 'Steam Condensate System',definition:`About 1.1-1.4 kg water per kg of paper is removed
in the dryer section of Papermachine. Steam consumption ranges from 1.5 kg -2.5 kg steam/kg paper.</br>Paper is dried
 in cast iron cylinders which is a type of pressure vessel where steam is pushed and condensate water is removed through 
 siphoning mechanism. Syphons are of two types  stationary and rotating.</br> Condensate water coming out of dryers also
contains some amount of steam.There are three types of condensate removal systems </br> Trap Based </br> Cascade 
system </br> Thermocompressor based blow thru systems.</br>In trap based system steam traps are installed in the 
cylinder. Thsese traps are not suitable for high speed machines with rotary siphons and high differential pressure. 
</br>Cascade system is installed in medium to high speed machines. In this system blow through steam of one section 
is cascaded to previous dryer section. in this system steam pressure in dryer sections is dependant on header 
pressure. Dryer group pressure depends on other group pressures.</br> </br> In thermocompressor based systems low
pressure flash steam is boosted using thermocompressor system. recompressed steam is recirculated in the dryers.In
this system each dryer section is operated independantly depeding on temperature profile of group. ` }
calc.push(Steam_condensate)

// Smoothness bendtsen
const Smoothness = {
  name: "Smoothness of Paper", definition: `Smoothness is measure of ml of air escaping per minute\
 through the hills and valleys of surface of  paper.</br>  </br>Higher the value,rougher is the surface. This is mostly used for\
 uncoated paper. This test is used to predict flexographic printability. </br> <strong> Test Method:</strong> </br>
 Place the speciman sample on glass plate of Bandtsen smoothness tester</br> turn on compressed air supply</br> Place 
 measuring head on test piece </br> Note down the rading of rotameter after 5 sec of placing of measuring head.  `}
calc.push(Smoothness)
const Stiffness = {
  name: "Stiffness of Paper", definition: `Stiffness is a mesure of flexural rigidity of paper.\
 It is bending moment(g-cm or mNm) required to deflect the free end of a 1.5 inch wide vertically clamped sample \
 150 from its center line when load is applied 50 mm away from the clamp. </br>It is measured in MD and CD.
 </br> </br> <strong> Test Method:</strong> </break> Place the conditioned sample in the vise of tester. </br> Align the sample
 with the centerline of pendulam of equipment. </br> Start the  motor to deflect sample to 15<sup>0</sup> mark in the left side. </br>
 Stop the motor and record scale reading. </br> Take similar reading by deflecting sample to the right side.</br> Calculate bending moment
 as avearge of above two readings. `}
calc.push(Stiffness)

const Tensile = new Calc("Tensile Index", "Tensile Strength", "Basis Weight", "", "", "", "", "N/m", "g/m2", "", "", "", "Nm/g",
  `Tensile strength is maximum stress to break a paper sheet. It is one of the most important physical properties of paper\
 and paperboard . Generally tensile strength of materials is expressed in terms of load per unit area but in case of paper\
 it is generally expressed as load per unit width of speciman. there are several types of tensile testers used in paper industry\
 but the basic principle of all is same. </br> <strong> Test method: </strong> </br> First paper sample is cut in 
 pieces of 25 mm wide and then clamped in Tensile testing machine. the machine is then started and the load at which
  paper breaks is noted down as Tensile strength in KN/meter.`, "https://en.wikipedia.org/wiki/Ultimate_tensile_strength")

 Tensile.calculate = () =>  value6.value =(v / v2).toFixed(2)
calc.push(Alkalanity,Acidity,Ash_retention,Alkali_Loss,BOD,Breaking_Length,brightness_whiteness_shade,Bursting_strength,change_in_crown,
  critical_speed,Cobb,Conditioning,Tensile,Bursting_strength)
 
// Vacum pump capacity
const vacuum_pump = new Calc("Vacuum Pump Capacity", "Leak Rate", "System Pressure", "", "", "", "",
  "Torr liter/sec", "Torr", ",", "", "", `m<sup>3</sup>/hr`, " Vaccum pump capacity is calculated my measuring leakage rate ie increase of pressure\
 after attaining vacuum level in certain time and expressed in units of Pressure.Vol/sec.</Br> So by multiplying Leakage with Vacuum level\
 required we can determine vaccum pump capacity in meter cube per hour. ", "https://www.ippta.co/Misc.Publication/DIY_Guidelines_for_Optimization_of_Wire_Vacuum.pdf")
vacuum_pump.calculate = () =>  value6.value= (v1 * 3.6 / v2).toFixed(2)
calc.push(vacuum_pump)

function defaultView() {index = JSON.parse(localStorage.getItem('index'));
let trem = document.getElementById("term")
trem.value = calc[index].name

fillData()
}
 



  
