import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { SignupPage, SignupPageProps } from "./SignupPage";

const defaultUsername = "username";
const defaultPassword = "password1";
const nonMatchingPassword = "password3";

const createProps = (passwordsMatch = true): Omit<SignupPageProps, "onSignup" | "setUsername" | "setPassword1" | "setPassword2"> => ({
  username: defaultUsername,
  password1: defaultPassword,
  password2: passwordsMatch ? defaultPassword : nonMatchingPassword,
});

export default {
  title: "Views/SignupPage",
  component: SignupPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    onSignup: { action: true },
    setUsername: { action: true },
    setPassword1: { action: true },
    setPassword2: { action: true },
  },
} as ComponentMeta<typeof SignupPage>;

const Template: ComponentStory<typeof SignupPage> = (args) => <SignupPage {...args} />;

export const Default = Template.bind({});

export const CorrectlyFilled = Template.bind({});
CorrectlyFilled.args = {
  ...createProps(),
};
CorrectlyFilled.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalled());
};

export const NonMatchingPasswords = Template.bind({});
NonMatchingPasswords.args = {
  ...createProps(false),
};
NonMatchingPasswords.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalledTimes(0));
};

export const Error = Template.bind({});
Error.args = {
  ...createProps(),
  error: true,
};
Error.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalledTimes(0));
};

export const DuplicateUsername = Template.bind({});
DuplicateUsername.args = {
  ...createProps(),
  duplicateUsername: true,
};
DuplicateUsername.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalledTimes(0));
};
