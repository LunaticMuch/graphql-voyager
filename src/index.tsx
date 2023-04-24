import * as ReactDOM from 'react-dom';

import { Voyager, VoyagerProps } from './components';

export function init(element: HTMLElement, options: VoyagerProps) {
  ReactDOM.render(<Voyager {...options} />, element);
}

export { Voyager } from './components';
// FIXME: remove in next breaking version
export { Voyager as GraphQLVoyager };

export { voyagerIntrospectionQuery } from './utils/introspection-query';
