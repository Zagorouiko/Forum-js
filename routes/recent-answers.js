Forum.RecentAnswersRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('answer');
  }
});
