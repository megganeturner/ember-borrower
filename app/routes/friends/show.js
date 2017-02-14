import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(friend) {
      console.log('trying to delete: ', friend)
      friend.destroyRecord().then(() => {
        this.transitionToRoute('friends.index');
      })
    }
  }
});
