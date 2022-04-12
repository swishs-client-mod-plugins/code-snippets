/* The below source code is licensed under MIT. */

import TS from './TS';
import JS from './JS';
import JSX from './JSX';
import CSS from './CSS';
import SASS from './SASS';

export default ({ extension }: { extension: string; }) => {
  switch (extension) {
    case 'ts': return <TS />;
    case 'js': return <JS />;
    case 'css': return <CSS />;
    case 'jsx': return <JSX />;
    case 'scss': return <SASS />;

    // Return fragment so it doesn't error
    default: return <></>;
  }
};