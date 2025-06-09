import { join } from 'path';
import { config as sharedConfig } from 'wdio.conf';
import * as dotenv from 'dotenv';

dotenv.config();

sharedConfig.specs = ['../test/specs/**'];

exports.config = {
    ...sharedConfig,
    ...{
        services: [
            [
                'appium',
                {
                    args: {
                        port: parseInt(process.env.PORT_ANDROID || '4724', 10)
                    },
                    command: 'appium'
                }
            ]
        ],
        capabilities: [
            {
                platformName: 'Android',
                'appium:disableIdLocatorAutocompletion': false,
                'appium:autoGrantPermissions': true,
                'appium:deviceName': process.env.DEVICE_NAME_ANDROID || 'Galaxy S21 FE 5G',
                'appium:platformVersion': process.env.PLATFORM_VERSION_ANDROID || '15.0',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'UiAutomator2',
                'appium:app': join(
                    process.cwd(),
                    process.env.APP_PATH_ANDROID || './apk/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'
                ),
                'appium:appWaitActivity': 'com.swaglabsmobileapp/com.swaglabsmobileapp.MainActivity',
                'appium:noReset': false,
                'appium:newCommandTimeout': 240,
                'appium:disableWindowAnimation': true
            }
        ]
    }
};
