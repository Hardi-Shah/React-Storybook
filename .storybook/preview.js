import { CSSReset, theme, ThemeProvider, ChakraProvider } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators=[
  (Story) => (
  <ChakraProvider theme={theme}>
    <Story/>
    {/* <Box m='4'><Center>{story()}</ Center></Box> */}
    <CSSReset/>
  </ChakraProvider>
  )
]