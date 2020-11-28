import Bugsnag from '@bugsnag/expo';

const log = error => __DEV__ ? console.log(error) : Bugsnag.notify(error);

const start = () => __DEV__ ? null : Bugsnag.start();

export default { log, start };