import { powerLimits } from '../constants/initialValues';

export const getColorPowerstat = (value) => {
    let colorPowerstat = ""

    if(value >= powerLimits.max[0] && value<=powerLimits.max[1]) {
        colorPowerstat = "max"    
    }
    if(value>=powerLimits.good[0] && value<=powerLimits.good[1]) {
        colorPowerstat = "good"    
    }
    if(value>=powerLimits.medium[0] && value<=powerLimits.medium[1]){
        colorPowerstat = "medium"
    }
    if(value>=powerLimits.bad[0] && value<=powerLimits.bad[1]){
        colorPowerstat = "bad"
    }
    if(value>=powerLimits.poor[0] && value<=powerLimits.poor[1]){
        colorPowerstat = "poor"
    }

    return colorPowerstat
}