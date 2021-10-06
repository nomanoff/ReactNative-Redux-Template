import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from './Text';
import { ThemeProvider, lightTheme as theme } from '../../theme';

const styles = {
  customText: {
    fontFamily: 'Roboto',
    color: 'green',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '600',
  },
};

storiesOf('Text', module)
  .addDecorator(getStory => (
    <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => <Text>Hello I am a default text!</Text>)
  .add('default with bold', () => (
    <Text bold>Hello I am a bold default text!</Text>
  ))
  .add('heading', () => <Text type="heading">Hello I am a heading text!</Text>)
  .add('heading with bold', () => (
    <Text type="heading" bold>
      Hello I am a bold heading text!
    </Text>
  ))
  .add('subHeading', () => (
    <Text type="subheading">Hello I am a subHeading text!</Text>
  ))
  .add('subHeading with bold', () => (
    <Text type="subheading" bold>
      Hello I am a bold subHeading text!
    </Text>
  ))
  .add('body', () => <Text type="body">Hello I am a body text!</Text>)
  .add('body with bold', () => (
    <Text type="body" bold>
      Hello I am a bold body text!
    </Text>
  ))
  .add('custom style text', () => (
    <Text type="subheading" bold style={styles.customText}>
      Hello I am a custom styled text, with fontFamily = Roboto, color = green,
      fontSize = 28, fontStyle = italic and fontWeight 600
    </Text>
  ));
