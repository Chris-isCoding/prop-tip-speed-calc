import { round } from './utilities';

function tipSpeedCalculator(
  diameter: number,
  volts: number,
  kVolts: number,
  airspeed: number = 0
) {
  const circumferenceInches: number = diameter * Math.PI;
  const circumferenceMM: number = circumferenceInches * 25.4;
  const rpm: number = volts * kVolts;

  const millimetersPerMinute: number = circumferenceMM * rpm;
  const metersPerMinute: number = millimetersPerMinute / 1000;

  const kilometersPerHour: number = round((metersPerMinute / 1000) * 60);
  const milesPerHour = round(kilometersPerHour * 0.62137119224);

  return [milesPerHour + airspeed, kilometersPerHour + airspeed];
}

/*
  RPM = V * kV
  circIn = dia * PI
  inPerMin = RPM * circIn
  miPerMin = inPerMin / 63360
  MPH = miPerMin / 60

  */

console.log(tipSpeedCalculator(6, 22.2, 2400));
/*
  milesPerHour: 951.0457760412737
  kilometersPerHour: 1530.5598133973676
*/
console.log(tipSpeedCalculator(5, 25, 1800));
/*
  milesPerHour: 669.3734347137342
  kilometersPerHour: 1077.25212091594
*/

export default tipSpeedCalculator;
