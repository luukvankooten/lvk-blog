import Nodes from '@lvk-blog/components/Post/Nodes';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { remark } from 'remark';

import markdown from './example.md';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Post/Nodes',
  component: Nodes,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Nodes>;

const Template: ComponentStory<typeof Nodes> = (args) => <Nodes {...args} />;

export const DefaultNodes = Template.bind({});
DefaultNodes.args = {
  nodes: remark().parse(markdown).children
};
