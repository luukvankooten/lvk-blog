import Outlet from '@lvk-blog/components/Outlet';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Outlet',
  component: Outlet,
  parameters: {
    layout: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Outlet>;

const Template: ComponentStory<typeof Outlet> = () => <Outlet />;

export const DefaultOutlet = Template.bind({});
