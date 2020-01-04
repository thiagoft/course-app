import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher/Dispatcher";

const CHANGE_EVENT = "change";

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const store = new CourseStore();

// The Dispatcher isn't part of the logic of the CourseStore api, so
// we can reclare it out of the class.
Dispatcher.register(action => {
  switch (action.actionType) {
  }
});

export default store;
