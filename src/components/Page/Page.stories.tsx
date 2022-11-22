import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Page } from "./Page";

export default {
  title: "Components/Page",
  component: Page,
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
