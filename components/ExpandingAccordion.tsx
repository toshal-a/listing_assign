import React, { ComponentType, PropsWithChildren, useState } from 'react';
import {
    Image,
    LayoutAnimation,
    Platform,
    StyleSheet,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import { COLORS } from '../utils/constants';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

type ExpandingAccordionProps = PropsWithChildren<{
    NonExpandedChildren: ComponentType;
    ExpandedChildren: ComponentType;
}>;

const ExpandingAccordion = ({
    ExpandedChildren,
    NonExpandedChildren
}: ExpandingAccordionProps) => {
    const [ expanded, setExpanded ] = useState(false);

    function toggleItem() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prevState) => !prevState);
    };
  
    const imagePath = expanded ? require("../assets/chevron_down.png") : require("../assets/chevron_up.png");

    return (
        <View style={styles.accordContainer}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={ toggleItem }
            >
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.iconStyle}
                        source={imagePath}
                    />
                </View>
                { expanded ? <ExpandedChildren />  : null }
                {
                    NonExpandedChildren ?  <NonExpandedChildren /> : null
                }
            </TouchableOpacity>
        </View>
    );
}

export default ExpandingAccordion

const styles = StyleSheet.create({
    accordContainer: {
        flex: 1,
    },
    iconStyle: {
        resizeMode: 'contain',
        height: 24,
        width: 24,
    },
    iconContainer: {
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.grey30,
    }
});