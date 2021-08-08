/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TextTutorial from './TextTutorial';
import TapGestureTutorial from './TapGestureTutorial';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TapGestureTutorial);
