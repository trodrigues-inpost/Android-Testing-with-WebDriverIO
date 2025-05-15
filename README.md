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

### Recommended VSCode Extensions
- Better Comments
- JavaScript and TypeScript Nightly

#

### What you should **NOT USE**
- **PowerShell** (PS)

### Configurations you should **NOT** have (`wdio.conf.ts`)
```ts
maxInstances: 10, //! Too many Instances
```

### Configurations I recommend (`wdio.conf.ts`)
```ts
maxInstances: 1,
```


## After cloning the repository, **you should**:

### SetUp the WDIO Environment

1. **Run `npm init wdio`** inside the repository directory.

2. Update the `.env` file with `DEVICE_NAME` and `PLATFORM_VERSION` according to your needs. *(Check the `wdio.conf.ts` file)*

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
- `./test/specs/login.spec.ts`
- `./test/specs/test1.ts`
- `./test/specs/test123.ts`

**Altough, it depends on your set up.**
```ts
specs: [
    './test/specs/**/*.ts'
],
```

### Page Objects
Page Objects can be where you want, but they should be in the `pageobjects` folder.
- `./test/pageobjects/login.page.ts`
- `./test/pageobjects/pageobject.ts`

When importing a page object:
```ts
import LoginPage from '../pageobjects/login.page.ts';
```


## Run tests

To run tests you use `npx wdio run wdio.conf.ts`.

If something fails, check the bottom of the readme, there are commands that can help.


# Useful Commands (you might need)

### Check if you have Appium installed
- `appium`

### Installing Appium
- `npm install --save-dev @wdio/appium-service appium`

### Installing UIAutomator2
- `appium driver install uiautomator2` (You need Appium installed first)

# `.env` File Preset
```ini
          ANDROID_HOME = C:\Users\YOUR-USER-NAME\AppData\Local\Android\sdk
           DEVICE_NAME = A12B345CD6E
      PLATFORM_VERSION = 12.0
              APP_PATH = apk/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
          WAIT_TIMEOUT = 10000
  WAIT_TIMEOUT_ELEMENT = 5000
                  WAIT = 1000
         STANDARD_USER = standard_user  # Check the SauceLabs Sample application
STANDARD_USER_PASSWORD = secret_sauce
```