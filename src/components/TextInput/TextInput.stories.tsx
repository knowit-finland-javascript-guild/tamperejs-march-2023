import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    onChange: { action: true },
  },
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

const staticArgs = {
  label: "Label",
  id: "label-1",
  value: "Test value",
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = staticArgs;

export const PasswordType = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordType.args = { ...staticArgs, type: "password" };

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = { ...staticArgs, error: true };

export const Emoji = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Emoji.args = { ...staticArgs, emoji: "💖" };

export const EmojiAndError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmojiAndError.args = { ...staticArgs, emoji: "💖", error: true };

export const EmojiAndPassword = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmojiAndPassword.args = { ...staticArgs, emoji: "💖", type: "password" };

export const ErrorAndPassword = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorAndPassword.args = { ...staticArgs, error: true, type: "password" };

export const ErrorAndPasswordAndEmoji = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorAndPasswordAndEmoji.args = { ...staticArgs, error: true, type: "password", emoji: "💖" };
