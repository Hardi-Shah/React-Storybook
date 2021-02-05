import { addDecorator,addParameters} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
addDecorator(withKnobs)
addParameters({
  viewport:{
    viewports:INITIAL_VIEWPORTS
  }
})