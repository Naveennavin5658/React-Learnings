const header= React.createElement("h1",{},"Namaste Everyone from React!");//innerHTML, parameters of tag like id, class & innerText
const root1 = ReactDOM.createRoot(document.getElementById("root"));
const heading_1 = React.createElement('h2',{},'This is heading2 from react');
const heading_2 = React.createElement('h3',{},'This is heading3 from react');
const container = React.createElement('div',{'id':'container'},[heading_1,heading_2])
//passing react element inside the root1
root1.render(container); // render replaces or overrides the content inside the root id. or modifies DOM
//createElement is not user friendly hence this lead to the usage ofJSX