import { Text } from "react-native"

interface Props {
    text: string
    styles?: any
    weight?: "regular" | "bold" | "black"
    center?: boolean
    size?: "xs" | "sm" | "base" | "lg"
    color?: string
}

export default function Typography({
    size = "base",
    text,
    styles,
    color = "black",
    weight = "regular",
}: Props) {
    const weightMap = {
        regular: "LatoRegular",
        bold: "LatoBold",
        black: "LatoBlack",
    }

    const colorMap = {
        white: "#fff",
        black: "#000",
    }

    const sizeMap = {
        xs: 9,
        sm: 12,
        base: 16,
        lg: 20,
    }

    return (
        <Text
            style={{
                fontFamily: weightMap[weight],
                fontSize: sizeMap[size],
                color: colorMap[color] || color,
                ...styles,
            }}
        >
            {text}
        </Text>
    )
}
