import './styles/DisplayResults.css'


export default function DisplayResult(props: any) {

  const temperature = (props.units === 'imperial') ? `${props.wxTempF}f` : `${props.wxTempC}c`;
  const pressure = (props.units === 'imperial') ? `${props.wxPressureIn}"Hg` : `${props.wxPressureMb}mb`;


  return (
    <div className='outputs'>

      {(props.location) &&
      <div className='weather'>
        <span>City: {props.location} | </span>
        <span>Current: {props.wxConditions} | </span>
        <span>Temp: {temperature} | </span>
        <span>Humidity: {props.wxHumidity}% | </span>
        <span>Pressure: {pressure}</span>
      </div>}

      <div className='output-value'>
        {props.units === 'imperial' && <span>{props.valueImperial}</span>}
        {props.units === 'metric' && <span>{props.valueMetric}</span>}
        <span> {props.units === 'imperial' ? 'MPH' : 'KPH'}</span>
      </div>

      {(props.mach1Km !== 0 && props.location) &&
      <div className='local-mach-1'>
        {props.units === 'imperial' ? <span>Local Mach 1: {props.mach1Mi}MPH</span> : <span>Local Mach 1: {props.mach1Km}KPH</span>}
      </div>}

    </div>
  )
}
