import React from 'react';
import { mount, shallow } from 'enzyme';
import {MyComp} from "./MyComp"; 
import { withContext, createContext } from 'shallow-with-context';

describe("MyComp", () => {


    it.skip("Renders without failing", () => {


        const comp = shallow(<MyComp/>, {nested: {bish: "test"}}); //Doesn't work
    }); 

        it("Renders without failing - shallow with context", () => {

        const context = createContext({nested: {bish: "test"}}); 

        const compWithContext = withContext(MyComp, context); 
        const comp = shallow(<compWithContext/>, {context}); 
    }); 
})