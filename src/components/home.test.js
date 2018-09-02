import React from 'react';
import { shallow, mount } from 'enzyme';
import { PageHeader } from 'react-bootstrap';

import Home from './home';
import GroupList from './groupList';
import SingleList from './singleList';
import FormControlComponent from './formControl';

describe('initial tasks list loading', () => {
    const wrapper = shallow(<Home />)
    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });
    it('should render Page Header component', () => {
        expect(wrapper.find(PageHeader).length).toBe(1);
    });
    it('should render FormControlComponent component', () => {
        expect(wrapper.find(FormControlComponent).length).toBe(1);
    });
    it('should render GroupList component', () => {
        expect(wrapper.find(GroupList).length).toBe(1);
    });
    it('should render SingleList component', () => {
        expect(wrapper.find(SingleList).length).toBe(1);
    });
    it('should have task id 0', () => {
        expect(wrapper.state().currentSelectedTask.id).toBe(0);
    });
    it('should have task title Do thing at home', () => {
        expect(wrapper.state().currentSelectedTask.title).toBe('Do thing at work');
    });
    it('should have 2 task todo', () => {
        expect(wrapper.state().currentSelectedTask.tasks.length).toBe(2);
    });

});

describe('creating new task', () => {
    const wrapper2 = shallow(<Home />)
    wrapper2.instance().createTask('I am new task')

    it('should have 4 task', () => {
        expect(wrapper2.state().data.length).toBe(4);
    })

    it('should have new task called I am new task and id to be 3', () => {
        
        expect(wrapper2.state().data[3].title).toBe('I am new task');
        expect(wrapper2.state().data[3].id).toBe(3);
    });
    
    it('should have 0 tasks to do with checkbox', () => {
        expect(wrapper2.state().data[3].tasks.length).toBe(0);
    });
    const wrapper21 = shallow(<Home />)
    wrapper21.instance().createTask('')
    it('should not create task if nothing pass to createtask function', () => {
        expect(wrapper21.state().data.length).toBe(3);
    });

    it('should have add and made the id 0 if there is no tasks in grouplist', () => {
        const wrapper22 = shallow(<Home />)
        wrapper22.instance().removeTask(2)
        wrapper22.instance().removeTask(1)
        wrapper22.instance().removeTask(0)
        wrapper22.instance().createTask('sdsdsd');
        expect(wrapper22.state().data.length).toBe(1);
        expect(wrapper22.state().data[0].title).toBe('sdsdsd');
        expect(wrapper22.state().data[0].id).toBe(0);    
    })
});

describe('select another task', () => {
    const wrapper3 = shallow(<Home />)
    wrapper3.instance().updateCurrentSelectedTask(wrapper3.state().data[1])

    it('should have task id 1', () => {
        expect(wrapper3.state().currentSelectedTask.id).toBe(1);
    })

    it('should have title Do thing at home', () => {
        expect(wrapper3.state().currentSelectedTask.title).toBe('Do thing at home');
    })
    it('should have 3 tasks todo ', () =>{
        expect(wrapper3.state().currentSelectedTask.tasks.length).toBe(3);
    })
});

describe('remove 1st task and current task should be empty', () => {
    const wrapper4 = shallow(<Home />)
    wrapper4.instance().removeTask(0)

    it('should have 2 task left', () => {
        expect(wrapper4.state().data.length).toBe(2);
    })
    it('should have empty current task', () => {
        expect(wrapper4.state().currentSelectedTask).toEqual({});
    })

});

describe('remove 2nd task and current task should not be empty', () => {
    const wrapper5 = shallow(<Home />)
    wrapper5.instance().removeTask(1)

    it('should have 2 task left', () => {
        expect(wrapper5.state().data.length).toBe(2);
    })
    it('should have current task', () => {
        expect(wrapper5.state().currentSelectedTask.id).toBe(0);
        expect(wrapper5.state().currentSelectedTask.title).toBe('Do thing at work');
    })

});

describe('update the todo tasks with checkbox', () => {
    const wrapper6 = shallow(<Home />)
    wrapper6.instance().updateCheckBox(wrapper6.state().currentSelectedTask,0)

    it('should have checkbox checked first todo in current selected task', () => {
        expect(wrapper6.state().currentSelectedTask.tasks[0].isDone).toBe(true);
    })


});

describe('add todo task to current task', () => {
    const wrapper7 = shallow(<Home />)
    wrapper7.instance().addTask('new to do');

    it('should have 3 todo task inside current task', () => {
        expect(wrapper7.state().currentSelectedTask.tasks.length).toBe(3);
    });
    it('should have the todo task name inside current task', () =>{
        expect(wrapper7.state().currentSelectedTask.tasks[2].task).toBe('new to do');
    });
    it('should have uncheck for the checkbox for new todo task', () =>{
        expect(wrapper7.state().currentSelectedTask.tasks[2].isDone).toBe(false);
    });

    const wrapper71 = shallow(<Home />)
    wrapper71.instance().addTask('');

    it('should not add task if nothing passed', () => {
        expect(wrapper71.state().currentSelectedTask.tasks.length).toBe(2);
    });

});
