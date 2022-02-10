import {ThreeDots} from 'react-loader-spinner';

function Loading({type, color, height, width, time, visible}){
    return(
        <ThreeDots type={type} color={color} height={height} width={width} timeout={time} visible={visible}/>
    )
}

export default Loading;