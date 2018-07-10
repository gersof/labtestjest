import React from 'react'
import App from './App';
import {shallow} from 'enzyme'

describe('Counter component', ()=>{
    it('starts with a count of 0',()=>{
        const wrapper = shallow(<App />)
        const countState= wrapper.state().count;
        expect(countState).toEqual(0);
    })
})