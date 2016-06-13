# REDUX CLEAN STATE

Sometimes you need to clean up your redux state after leaving a view. redux-clean-state helps you by creating a HoC that will clean up your state after triggering componentWillUnmount.

# usage
```
import cleanState from 'redux-clean-state';

import YourComponent from 'YourComponenet';

const Component = cleanState(Component, 'CLEAN_UP_ACTION');

class App extends React.Component {
    render() {
        return <Componenet />;
    }
}

```
