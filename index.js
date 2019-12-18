import { NativeModules } from 'react-native';
import * as WeChat from './lib';
const { RnWechatModule } = NativeModules;

export default RnWechatModule;
export {
    WeChat
};
