import React from 'react';
import {ActivityIndicator, View, Platform, StyleSheet} from 'react-native';

const ActivityIndicatorCustomized = (props: any) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={Platform.OS === 'android' ? 'green' : undefined}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default ActivityIndicatorCustomized;
