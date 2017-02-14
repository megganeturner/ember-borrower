import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('friend');
  },
  actions: {
    delete(friend) {
      console.log('trying to delete', friend);
      friend.destroyRecord();
    }
  }
});
