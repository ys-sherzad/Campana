import React, { useEffect } from 'react';
import {
    View
} from 'react-native';
import Bell from '../../assets/bell.svg';
import useBellAnimation from '../hooks/useBellAnimation';
import Animated from 'react-native-reanimated';

const BELL_DEFAULT_SIZE = 140;

const Campana = ({
    run,
}) => {
    const [showDot, setShowDot] = React.useState(false);

    const {
        runAnimation,
        rotationStyle,
        scaleStyle
    } = useBellAnimation();

    useEffect(() => {
        runAnimation(Boolean(run));
        setShowDot(true);
    }, [run]);

    const defaultStyle = {
        height: BELL_DEFAULT_SIZE,
        width: BELL_DEFAULT_SIZE
    };

    return (
        <Animated.View style={rotationStyle}>
            <Animated.View style={[defaultStyle, scaleStyle]}>
                <Bell
                    height={'100%'}
                    width={'100%'}
                    fill={'black'}
                />
                {showDot && (<View
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 16,
                        height: 26,
                        width: 26,
                        borderRadius: 99,
                        backgroundColor: 'red'
                    }}
                />)}
            </Animated.View>
        </Animated.View>
    );
};

export default Campana;
