import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import { StyleSheet, View, Text, SafeAreaView,Image } from "react-native";




function CustomDrawerContent(props: DrawerContentComponentProps){
    const {getProfileQuery} = useAuth();
    const {email, nickname, imageUri, kakaoImageUri} = (getProfileQuery.data || {}) as {
        email?: string;
        nickname?: string;
        imageUri?: string;
        kakaoImageUri?: string;
    };

    return (
    <SafeAreaView style = {styles.container}>
        <DrawerContentScrollView 
            {...props}
            scrollEnabled={false} 
            contentContainerStyle={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
            <View style={styles.userImageContainer}>
                {imageUri === null && kakaoImageUri === null && (
                    <Image 
                        source={require('@/assets/user-default.png')}
                        style={styles.userImage} />)}
                {imageUri === null && !!kakaoImageUri && (
                    <Image 
                        source={{uri: kakaoImageUri}}
                        style={styles.userImage} />)}
                {imageUri !== null && (
                    <Image 
                        source={{uri: imageUri}}
                        style={styles.userImage} />)}
            </View>
            <Text style={styles.nameText}>{nickname ?? email}</Text>
                
        </View>


        <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: colors.WHITE,
    },
    userInfoContainer: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 30,
        marginHorizontal: 15,
    },
    nameText: {
        color: colors.BLACK,
    },
    userImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 35,
        marginBottom: 16,
    },
    userImage: {
        width: "100%",
        height: "100%",
        borderRadius: 35,
    },
    
});

export default CustomDrawerContent;