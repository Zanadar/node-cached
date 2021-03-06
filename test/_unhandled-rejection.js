/* eslint no-console:0 */
import Bluebird from 'bluebird';

const unhandledRejections = [];
Bluebird.onPossiblyUnhandledRejection(error => {
  console.error('Possibly unhandled rejection:', error.stack);
  unhandledRejections.push(error);
});

after('Check for unhandled rejections', () => {
  if (unhandledRejections.length) {
    console.error('Found %d unhandled rejections', unhandledRejections.length);
    throw unhandledRejections[0];
  }
});
