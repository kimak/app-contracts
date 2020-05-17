Expo demo app with a quick Design System approach. Using react-native-paper and react-navigation.

## Setup

### Prerequisite

1. Follow [Expo installation guide](https://docs.expo.io/versions/latest/get-started/installation)
1. [Setup an Android emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/)
1. [Setup an iOS simulator](https://docs.expo.io/versions/latest/workflow/ios-simulator/)

### Install

1. Install node modules

    ```shell
    yarn install
    ```

1. Start iOS

    ```shell
    expo start --ios
    ```

1. Start android

    ```shell
    expo start --android
    ```

> To start the design system change the `App.tsx` import

```
// import { App } from './src'
import App from './storybook'
```

### Publish

```
expo publish --target managed
```

-   [Open the project in expo client app](https://expo.io/@kimak/contracts)
-   [Open the Design System in expo client app](https://expo.io/@kimak/contracts?release-channel=designsystem)
