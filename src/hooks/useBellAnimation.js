import React, { useState } from 'react';
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';

const useBellAnimation = () => {
    const [initialValue] = useState(0);

    const animation = useSharedValue(initialValue);

    const runAnimation = (value) => {
        animation.value = withTiming(value, { duration: 700 });
    };

    const rotationStyle = useAnimatedStyle(() => {
        const rotate = interpolate(
            animation.value,
            [0, .2, .4, .6, .8, 1],
            [0, 30, -15, 30, -20, 0],
            Extrapolate.CLAMP
        );

        return {
            transform: [{
                rotate: `${rotate}deg`,
            }],
        };
    });

    const scaleStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            animation.value,
            [0, .2, .4, .6, .8, 1],
            [1, 1.2, 1.5, 1.3, 1.2, 1],
            Extrapolate.CLAMP
        );

        return {
            transform: [{
                scale: scale
            }]
        };
    });

    return {
        runAnimation,
        rotationStyle,
        scaleStyle
    };
};

export default useBellAnimation;
