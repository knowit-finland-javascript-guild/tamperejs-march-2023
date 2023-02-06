import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";

export default {
  title: "Components/Page",
  component: Page,
  args: {
    header: "This is a default header",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});

export const Page1 = Template.bind({});
Page1.args = {
  header: "Page1",
  children: (
    <>
      <p>Test</p>
    </>
  ),
};

export const WelcomePage = Template.bind({});
WelcomePage.args = {
  header: "Welcome",
  children: (
    <>
      <p>Welcome content</p>
    </>
  ),
};

export const PageLoading = Template.bind({});
PageLoading.args = {
  header: "Done loading",
  children: (
    <>
      <p>The content has been loaded</p>
    </>
  ),
  loading: true,
};

export const PageLoadingError = Template.bind({});
PageLoadingError.args = {
  header: "Oh no error",
  children: (
    <>
      <p>Error solved!</p>
    </>
  ),
  loading: true,
  error: {
    errorText: "Oh no a network error has happened",
  },
};

export const PageError = Template.bind({});
PageError.args = {
  header: "Oh no error",
  children: (
    <>
      <p>Error solved!</p>
    </>
  ),
  loading: false,
  error: {
    errorText: "Oh no a network error has happened",
  },
};
