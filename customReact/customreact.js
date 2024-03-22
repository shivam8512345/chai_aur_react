function customRender(ReactElement,container){
  /*const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;
  console.log(ReactElement.props.href)
  domElement.setAttribute('href',ReactElement.props.href);
  domElement.setAttribute('target', ReactElement.props.target)

  container.appendChild(domElement);
  */

  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;

  for(const prop in ReactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop,ReactElement.props[prop])
  }
  container.appendChild(domElement);
}


const ReactElement = {
    type : 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click here to move to google!"
}

const mainContainer = document.querySelector("#root");
customRender(ReactElement,mainContainer);