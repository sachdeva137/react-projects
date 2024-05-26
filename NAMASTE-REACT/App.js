/***
 * <div id="parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 */
//1st arg - tag
//2nd arg - attributes
//3rd arg - "content", which is not but child. so we give array for rendering children

//Below code just creates object, return object
const parent =React.createElement("div",
                                 { id: "parent"},
                                  React.createElement("div", {id : "child"},
                                  [ React.createElement("h1", {}, "I'm an h1 tag"),  React.createElement("h2", {}, "I'm an h2 tag")]))
                                  //Above code is how we render children


const heading = React.createElement("h1", {
    id:"heading",
    xyz: "abc"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//This takes care of actually creating tags which browser will understand
root.render(parent);