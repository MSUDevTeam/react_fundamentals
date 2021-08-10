/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TextTutorial from './TextTutorial';
import TapGestureTutorial from './TapGestureTutorial';
import LifeCycle from './LifeCycle';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
