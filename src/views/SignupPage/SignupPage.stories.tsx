import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { SignupPage } from "./SignupPage";

export default {
  title: "Views/SignupPage",
  component: SignupPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onSignup: () => console.log("Signed up!"),
  },
} as ComponentMeta<typeof SignupPage>;

const Template: ComponentStory<typeof SignupPage> = (args) => <SignupPage {...args} />;

export const Default = Template.bind({});
