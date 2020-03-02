import React from "react"; 

export const SomeContext = React.createContext({
  foo: "foo",
  bar: "bar", 
  nested: {
      bish: "bang"
  }
});