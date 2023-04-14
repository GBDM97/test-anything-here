import React from 'react'

type DArgs = {
    C: React.ComponentType<any>;
    s: string;
  };

const D = ({C, s}:DArgs) => {
    console.log(s)
    return ({ children }:any) => (
    <div>
    <span>Foo</span>
    <C>{children}</C>
    </div>
    );
};
    
    class MyClass extends React.Component {
    render () {
    const { children }:any = this.props;
    return <span> {children}</span>};
    }

    const s = "world";
    
    const X = D({ C: MyClass, s });

const XTag = () => {
    
    return(<><X>Hello</X></>)
}

export default XTag