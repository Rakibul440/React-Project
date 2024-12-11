const mainContainer = document.querySelector("#root")

function coustomRender(reactElement, container){ 
    /*
    //create a element 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    //palced the element into container
    container.appendChild(domElement)
    */

   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;

    // const props = reactElement.props
    for (let prop in reactElement.props){        
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.co.in/',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

coustomRender(reactElement,mainContainer)

console.log(mainContainer);

