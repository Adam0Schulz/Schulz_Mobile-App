import { StyleSheet } from "react-native"


export const COLOR_PRIMARY = "#007BF"
export const COLOR_SECONDARY = "#0D1C2D"
export const COLOR_TERNARY = "#08111C"
export const COLOR_TEXT = "#FFF"

export const TEXT_SIZE_REGULAR = 16
export const TEXT_SIZE_LARGE = 24
export const TEXT_SIZE_XLARGE = 64

export const PAGE_PADDING = 20


export default StyleSheet.create({
    main: {
        backgroundColor: COLOR_SECONDARY,
        flex: 1
    },
    section: {
        paddingTop: PAGE_PADDING
    },

    // Text
    regularText: {
        color: COLOR_TEXT,
        fontSize: TEXT_SIZE_REGULAR,
    },
    headingText: {
        color: COLOR_TEXT,
        fontSize: TEXT_SIZE_LARGE
    },
    pageHeadingText: {
        color: COLOR_TEXT,
        fontSize: TEXT_SIZE_XLARGE,
        //fontFamily: 
    }
})