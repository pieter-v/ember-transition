import Route from '@ember/routing/route';
import {later} from '@ember/runloop';
import {inject} from '@ember/service';

export default Route.extend({
  init() {
    this._super(...arguments);
    // just to make sure the router service is loaded
    console.log(this.router.currentURL);
  },

  router: inject(),

  actions: {
    willTransition(transition) {
      transition.abort();
      this.intermediateTransitionTo('cc');
      later(transition, transition.retry, 3000);
    }
  }
});
