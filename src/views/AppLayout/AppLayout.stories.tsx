import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { AppLayout } from "./AppLayout";

export default {
  title: "Views/AppLayout",
  component: AppLayout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    loading: false,
  },
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => <AppLayout {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  loading: true,
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole("button", { name: /Log in/i });
  await userEvent.click(loginButton);
};
