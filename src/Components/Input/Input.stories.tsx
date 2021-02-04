import React from 'react'
import {Input,InputProps} from './Input'
import {Meta,Story} from '@storybook/react/types-6-0'

export default {
    title: 'Form/Input',
    component: Input,
    argTypes:{
        backgroundColor:{control:'color'}
    },
} as Meta;

const Template: Story<InputProps>= (args)=> <Input  {...args}/>

export const Small = Template.bind({});
Small.args = {
    size:'small',
    placeholder:'Small',
    title:'Small'
};

export const Medium = Template.bind({});
Medium.args = {
    size:'medium',
    placeholder:'Medium',
    title:'Medium'
}

export const Large = Template.bind({});
Large.args = {
    size:'large',
    placeholder:'Large',
    title:'Large'
}

// export const Small = () => <Input size='small' placeholder='Small size'/>
// export const Medium = () => <Input size='medium' placeholder='Medium size'/>
// export const Large = () => <Input size='large' placeholder='Large size'/>

// Small.storyName='Small Input'