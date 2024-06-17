// Code from https://medium.com/front-end-weekly/loading-components-asynchronously-in-react-app-with-an-hoc-61ca27c4fda7
// Optimizes performance with asynchronous loading

import{ Component } from 'react';

const AsyncComponent = (importComponent) => {
    return class extends Component {
        static displayName = 'AsyncComponent';
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
};

export default AsyncComponent;