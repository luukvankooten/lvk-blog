import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../components/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card />;

export const DefaultCard = Template.bind({});
