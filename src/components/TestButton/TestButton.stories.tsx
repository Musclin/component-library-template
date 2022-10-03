import React from "react";
import { Story, Meta } from '@storybook/react';
import { TestButton, TestButtonProps } from "./TestButton";

export default {
  title: "Test/TestButton",
  component: TestButton,
} as Meta<typeof TestButton>;

const Template: Story<TestButtonProps> = args => <TestButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
