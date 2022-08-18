import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "../pages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Home",
  component: Home,
  parameters: {
    layout: 'fullscreen'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const DefaultHome = Template.bind({});