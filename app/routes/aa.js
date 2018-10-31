import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  actions: {
    willTransition(transition) {
      transition.abort();
      this.intermediateTransitionTo('cc');
      later(transition, transition.retry, 3000);
    }
  }
});
