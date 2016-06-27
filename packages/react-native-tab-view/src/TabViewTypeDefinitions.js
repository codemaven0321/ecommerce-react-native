/* @flow */

import { Animated } from 'react-native';

export type Route = {
  title?: string;
  key: string;
}

export type NavigationState = {
  index: number;
  routes: Array<Route>;
}

export type SceneRendererProps = {
  width: number;
  navigationState: NavigationState;
  position: Animated.Value;
  updateIndex: (index: number) => void;
}
