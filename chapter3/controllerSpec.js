/**
 * Created by Venkat on 3/9/2016.
 */

describe('Controller: ListCtrl', function() {
    // instantiate a new version of my module before each unit test
    beforeEach(module('notesApp'));

var ctrl;

// Before each unit test, instantiate a new instance of the controller
beforeEach(inject(function($controller)
    ctrl = $controller('ListCtrl');
}));

it('should have items available on load'), function() {
    expect(ctrl.items).toEqual([
        {id: 1, label: 'First', done: true},
        {id: 2, label: 'Second', done: false}
    ]);
});

it('should have highlight items based on state', function() {
    var item = {id: 1, label: 'First', done: true};

    var actualClass = ctrl.getDoneClass(item);
    expect(actualClass.finished).toBeTruthy();
    expect(actualClass.unfinished).toBeFalsy();

    item.done = false;
    actualClass = ctrl.getDoneClass(item);
    expect(actualClass.finished).toBeFalsy();
    expect(actualClass.unfinshed).toBeTruthy();

    )};
)};