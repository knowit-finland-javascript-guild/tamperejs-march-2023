import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { SignupPageWithState } from "./SignupPageWithState";

export default {
  title: "Views/SignupPageWithState",
  component: SignupPageWithState,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    onSignup: { action: true },
  },
} as ComponentMeta<typeof SignupPageWithState>;

const Template: ComponentStory<typeof SignupPageWithState> = (args) => <SignupPageWithState {...args} />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Submitted = Template.bind({});
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("username-input"), "hi@example.com");
  await userEvent.type(canvas.getByTestId("password1-input"), "supersecret");
  await userEvent.type(canvas.getByTestId("password2-input"), "supersecret");
  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalled());
};

export const DuplicateUsername = Template.bind({});
DuplicateUsername.args = {
  duplicateUsername: true,
};

DuplicateUsername.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("username-input"), "hi@example.com");
  await userEvent.type(canvas.getByTestId("password1-input"), "supersecret");
  await userEvent.type(canvas.getByTestId("password2-input"), "supersecret");
  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalledTimes(0));
  await expect(canvas.getByText("There already exists an user with that name")).toBeInTheDocument();
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  error: true,
};

ErrorMessage.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("username-input"), "hi@example.com");
  await userEvent.type(canvas.getByTestId("password1-input"), "supersecret");
  await userEvent.type(canvas.getByTestId("password2-input"), "supersecret");
  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSignup).toHaveBeenCalledTimes(0));
  await expect(canvas.getByText("Oh no something went wrong. Please try again later")).toBeInTheDocument();
};
