# Appium Bootstrap

This project is the base to start automating mobile apps. 


## Table of contents 

* [First steps](#first-steps)
  + [Installing node](#installing-node)
  + [Install dependencies](#install-dependencies)
  + [Emulators](#emulators)
  + [Setting environment](#setting-environment)
  + [Configurations](#configurations)
	  + [Wdio configs](#wdio-configs)
	  + [Env](#env)
* [Development](#development)
* [Tech stack](#tech-stack)
* [Running](#running)
* [Contributing](#contributing)
* [About](#about)
* [License](#license)

## First steps

### Installing node
Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm)
Nvm approach is preferred.

### Install dependencies
Run `yarn install` from rootpath of the project.

### Emulators
+ Android: Follow [this](https://developer.android.com/studio/install) guide to install Android studio
+ Xcode: Install xcode from Appstore.

### Setting environment
To check if everything is ready to run the tests, [Appium doctor](https://github.com/appium/appium-doctor) can be used to check missing configurations or dependencies.

Probably this things will be needed:
- Install carthage(Just for ios:  `brew install carthage`)
- Set environment variables in your pc. (*)
- In mac, give permissions to appium (https://support.apple.com/en-us/HT202491)
- Run the following commands to set xcrum:` sudo xcode-select -s /Applications/Xcode.app`
- Run `sudo xcode-select --reset`

(*) Example for environment variables:

 .zsh: 

 ` export JAVA_HOME=$(/usr/libexec/java_home) `
 
 ` export ANDROID_SDK=$HOME/Library/Android/sdk `
 
 ` export ANDROID_HOME=$HOME/Library/Android/sdk `
 
 ` export PATH=$PATH:$ANDROID_HOME/emulator `
 
 ` export PATH=$PATH:$ANDROID_HOME/tools `
 
 ` export PATH=$PATH:$ANDROID_HOME/tools/bin ` 
 
 ` export PATH=$PATH:$ANDROID_HOME/platform-tools ` 
 
## Configurations


### Wdio configs
In the file `/config/wdio.shared.conf.js` are the common configs for webdriver. Info about how to use the can be found [here](https://webdriver.io/docs/options.html). This file is common to Android and iOS.

*Desired Capabilities:* They are set in the files `/config/wdio.[android/ios].conf.js`. More info about capabilities can be found [here](http://appium.io/docs/en/writing-running-appium/caps/index.html)

### Env
`.env` file must have the following keys: 

    ANDROID_APP: path/to/android/.apk file
    IOS_APP: path/to/ios/.app file 


## Development
Use [Appium gui](http://appium.io/) to inspect elements and test selectors. 

Use [Page object](https://webdriver.io/docs/pageobjects.html) pattern for each screen. 


## Tech stack
+ [Webdriverio](https://webdriver.io/)
+ [Appium](http://appium.io/)
+ [Babel](https://babeljs.io/)
+ [Node](https://nodejs.org/en/)

## Running

 `yarn android.app` Runs tests in android device. Config is taken from `config/wdio.android.app.conf.js`
 
 `yarn ios.app` Runs tests in ios devices. Config is taken from `config/wdio.ios.app.conf.js`

For aditional information about running :
http://appium.io/docs/en/writing-running-appium/running-tests/


## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project is maintained by [Wolox](https://github.com/wolox) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## License

**Appium Bootstrap** is available under the MIT [license](LICENSE.md).

    Copyright (c) 2019 Wolox

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.