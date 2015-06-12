Forum.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        name: this.get('name'),
        question: this.get('question')
      });

      newQuestion.save();
      this.transitionToRoute('questions')
    }
  }
});
