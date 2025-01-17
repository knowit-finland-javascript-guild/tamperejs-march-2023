import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { InteractionsButton } from "./InteractionsButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/InteractionsButton",
  component: InteractionsButton,
} as ComponentMeta<typeof InteractionsButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InteractionsButton> = (args) => <InteractionsButton {...args} />;

const textAfterClicking = "Clicked";
const staticArgs = {
  initialLabel: "Not clicked",
  afterClickLabel: textAfterClicking,
};

export const WithoutInteractions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutInteractions.args = staticArgs;

export const Example1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example1.args = staticArgs;
// More about play: https://storybook.js.org/docs/react/essentials/interactions
Example1.play = async ({ canvasElement }) => {
  // More about canvas: https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId("button-to-click"));

  await expect(canvas.getByText(textAfterClicking)).toBeInTheDocument();
};

export const Example2 = Template.bind({});
Example2.args = staticArgs;
Example2.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByTestId("button-to-click"));

  await expect(canvas.getByText("Text after clicking")).toBeInTheDocument();
};
