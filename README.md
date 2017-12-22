# with-safe-area
make SafeAreaView can be used in iOS version pre-11 (eg: iOS 9 and iOS 10)

### how to use
```
$ yarn add with-safe-area
```
### example
```
// @flow
import * as React from 'react';
import WithSafeArea from 'with-safe-area';
import AppRouter from './AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <WithSafeArea>
        <AppRouter />
      </WithSafeArea>
    );
  }
}
```
