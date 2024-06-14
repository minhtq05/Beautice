import { createGlobalStyle } from "styled-components"
import tw, { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = createGlobalStyle({
    body: {
        // WebkitTapHighlightColor: theme`colors.purple`,
        ...tw`antialiased`,
    },
})

const GlobalStyles = () => (
    <div>
        <BaseStyles />
        <CustomStyles />
    </div>
)

export default GlobalStyles