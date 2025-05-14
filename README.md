# Android Automated Testing

This repository serves as a starter point for **Automated Testing** in Android Systems.
The tests in this repository were made with the [SauceLabs Example App](https://github.com/saucelabs/sample-app-mobile/releases/) in mind.

### Recommended Software
- **Android Studio**
- **Visual Studio Code**
- **Appium**
- **Appium Inspector**
- **Git Bash**

### Optional Stuff
- Emulated Devices

#

### What you should **NOT** to use
- **PowerShell** (PS)


## After cloning the repository, **you should**:

### SetUp the WDIO Environment

1. **Run `npm init wdio`** inside the repository directory.

2. Update the `.env` file with `DEVICE_NAME` and `PLATFORM_VERSION` according to your needs. *(Check the `wdio.conf.js` file)*

```ini
ANDROID_HOME=Path\to\your\android\sdk
DEVICE_NAME=YourDeviceName
PLATFORM_VERSION=TheAndroidVersionOfYourDevice #Example: 12.0
```

**Using an Emulator**
```ini
DEVICE_NAME=Android GoogleAPI Emulator
```

**Using a real android device**

Run `adb devices`
```ini
DEVICE_NAME=The Name of Your Device
# Example:  A12B345CD6E
```

**NOTE:** It is likely that the `npm init wdio` command asks you to install some missing files or components, you **should accept them**.


## Create tests

Create your own tests inside the `test` folder.

### Specs
Tests should be inside the `specs` folder, for example:
- `./test/specs/login.test.js`
- `./test/specs/test1.js`
- `./test/specs/test123.js`

**Altough, it depends on your set up.**
```js
specs: [
    './test/specs/**/*.js'
],
```

### Page Objects
Page Objects can be where you want, but they should be in the `pageobjects` folder.
- `./test/pageobjects/login.page.js`
- `./test/pageobjects/pageobject.js`

When importing a page object:
```js
import LoginPage from '../pageobjects/login.page.js';
```


## Run tests

To run tests you use `npx wdio run wdio.conf.js`.

If something fails, check the bottom of the readme, there are commands that can help.


# Useful Commands (you might need)

### Check if you have Appium installed
- `appium`

### Installing Appium
- `npm install --save-dev @wdio/appium-service appium`

### Installing UIAutomator2
- `appium driver install uiautomator2` (You need Appium installed first)