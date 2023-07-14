import { StyleSheet } from "react-native"
import gStyles, { COLOR_TERNARY, PAGE_PADDING } from "@gStyle"

const lStyles = StyleSheet.create({
    logoCont: {
        backgroundColor: COLOR_TERNARY,
        width: '100%',
        paddingHorizontal: PAGE_PADDING,
        paddingVertical: PAGE_PADDING * 3,
        borderBottomRightRadius: PAGE_PADDING,
        borderBottomLeftRadius: PAGE_PADDING,
        position: "absolute",
        
    },
    logo: {
        width: '100%',
        height: 50,
        resizeMode: "contain"

    },
    scrollSect: {
        height: '100%',
        
        paddingTop: 90
    }
})

export { gStyles, lStyles }
export default lStyles
