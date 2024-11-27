import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function DirectionsStatusScreen() {
    return (
        <View style={styles.container}>
            {/* 상단 위치 카드 */}
            <View style={styles.locationCard}>
                <MaterialIcons name="location-on" size={20} color="#4285F4" />
                <View style={styles.locationInfo}>
                    <Text style={styles.locationTitle}>현재 위치</Text>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFill} />
                    </View>
                    <View style={styles.locationDetail}>
                        <Text style={styles.locationText}>서천군 장항읍</Text>
                        <Text style={styles.distanceText}>목적지까지 3.7km</Text>
                    </View>
                </View>
                <MaterialIcons name="location-on" size={24} color="#F44336" style={styles.icon_finish} />
            </View>

            {/* 지도 영역 */}
            <View style={styles.mapPlaceholder}>
                <MaterialIcons name="image" size={48} color="#ddd" />
            </View>

            {/* 하단 네비게이션 카드 */}
            <View style={styles.bottomCard}>
                <View style={styles.navigationInfo}>
                    <View style={styles.directionIconContainer}>
                        <MaterialIcons name="arrow-forward" size={24} color="#fff" />
                    </View>
                    <View style={styles.directionTextContainer}>
                        <Text style={styles.directionText}>직진 후 우회전</Text>
                        <Text style={styles.distanceDetail}>500m 앞</Text>
                    </View>
                    <TouchableOpacity style={styles.pauseButton}>
                        <MaterialIcons name="pause" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.timeInfo}>
                    <Text style={styles.remainDistance}>남은 거리: 3.7km</Text>
                    <Text style={styles.estimatedTime}>예상 도착: 14:15</Text>
                </View>
            </View>

            {/* 하단 버튼 영역 */}
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.endButton}>
                    <MaterialIcons name="close" size={20} color="#fff" />
                    <Text style={styles.endButtonText}>안내 종료</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 16,
    },
    locationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    locationInfo: {
        flex: 1,
        marginLeft: 12,
    },
    locationTitle: {
        fontSize: 14,
        color: '#666',
    },
    progressBar: {
        height: 4,
        backgroundColor: '#E0E0E0',
        borderRadius: 2,
        marginVertical: 8,
    },
    progressFill: {
        width: '30%',
        height: '100%',
        backgroundColor: '#4285F4',
        borderRadius: 2,
    },
    locationDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    locationText: {
        fontSize: 16,
    },
    icon_finish: {
        color: '#F44336',
        marginLeft: 12,
    },
    distanceText: {
        fontSize: 14,
        color: '#666',
    },
    mapPlaceholder: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomCard: {
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 12,
        padding: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    navigationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    directionIconContainer: {
        backgroundColor: '#4285F4',
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    directionTextContainer: {
        flex: 1,
        marginLeft: 12,
    },
    directionText: {
        fontSize: 16,
        fontWeight: '500',
    },
    distanceDetail: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    pauseButton: {
        padding: 8,
    },
    timeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    remainDistance: {
        fontSize: 14,
        color: '#666',
    },
    estimatedTime: {
        fontSize: 14,
        color: '#666',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 4,
    },
    endButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF4444',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    endButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 4,
    },
});

export default DirectionsStatusScreen;