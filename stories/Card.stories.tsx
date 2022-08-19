import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/Card';

import image from '../public/DSCF0733.jpeg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} >Hello world</Card>;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  onClick: undefined,
};

export const ActionCard = Template.bind({});
ActionCard.args = {
  onClick: () => {},
  swap: false,
}

export const SwapedCard = Template.bind({});
SwapedCard.args = {
  swap: true,
  onClick: undefined
}

export const ImageCard = Template.bind({});
ImageCard.args = {
  swap: true,
  onClick: undefined,
  image,
}
