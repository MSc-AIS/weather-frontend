import { WiMoonAltFull, WiCloudDown, WiDaySunny,
    WiNightCloudy, WiRaindrops, WiCloud, WiDayCloudyHigh,
    WiDayRainMix, WiRain, WiThunderstorm, WiSnow, WiFog,
    WiDirectionUp, WiDirectionDownLeft, WiDirectionDownRight,
    WiDirectionDown, WiDirectionLeft, WiDirectionRight,
    WiDirectionUpLeft, WiDirectionUpRight } from 'weather-icons-react';

/**
 * @author Stavros Labrinos [stalab at linuxmail.org] on 28/01/21.
 */

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

const style = {
    color: '#116149',
};

export const mapIconsToDescription = (desc, size) => {
    switch (desc) {
        case 'scattered clouds': return <WiCloudDown style={style} size={size} />;
        case 'overcast clouds': return <WiDayCloudyHigh style={style} size={size} />;
        case 'clear sky': return <WiDaySunny style={style} size={size} />;
        case 'broken clouds': return <WiNightCloudy style={style} size={size} />;
        case 'few clouds': return <WiCloud style={style} size={size} />;
        case 'light rain': return <WiRaindrops style={style} size={size} />;
        case 'shower rain': return <WiDayRainMix style={style} size={size} />;
        case 'rain': return <WiRain style={style} size={size} />;
        case 'thunderstorm': return <WiThunderstorm style={style} size={size} />;
        case 'snow': return <WiSnow style={style} size={size} />;
        case 'mist': return <WiFog style={style} size={size} />;
        default: return <WiMoonAltFull style={style} size={size} />;
    }
};

const windStyle = {
    fontSize: 30,
    paddingLeft: 10
};

export const mapIconsToWindDirection = direction => {
    switch (direction) {
        case 'NORTH': return <WiDirectionUp style={windStyle} />;
        case 'NORTH_NORTH_EAST': return <WiDirectionUp style={windStyle} />;
        case 'NORTH_EAST': return <WiDirectionUpRight style={windStyle} />;
        case 'EAST_NORTH_EAST': return <WiDirectionUpRight style={windStyle} />;
        case 'EAST': return <WiDirectionRight style={windStyle} />;
        case 'EAST_SOUTH_EAST': return <WiDirectionRight style={windStyle} />;
        case 'SOUTH_EAST': return <WiDirectionDownRight style={windStyle} />;
        case 'SOUTH_SOUTH_EAST': return <WiDirectionDownRight style={windStyle} />;
        case 'SOUTH': return <WiDirectionDown style={windStyle} />;
        case 'SOUTH_SOUTH_WEST': return <WiDirectionDown style={windStyle} />;
        case 'SOUTH_WEST': return <WiDirectionDownLeft style={windStyle} />;
        case 'WEST_SOUTH_WEST': return <WiDirectionDownLeft style={windStyle} />;
        case 'WEST': return <WiDirectionLeft style={windStyle} />;
        case 'WEST_NORTH_WEST': return <WiDirectionLeft style={windStyle} />;
        case 'NORTH_WEST': return <WiDirectionUpLeft style={windStyle} />;
        case 'NORTH_NORTH_WEST': return <WiDirectionUpLeft style={windStyle} />;
        default: return <WiDirectionUp style={windStyle} />;
    }
};