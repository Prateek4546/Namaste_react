import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";


//JSX => Parcel(Bable) React.createElement => JS Object => HTML Element(Render)

const App = () => {
   return (
      <div>
          <Header/>
      </div>
   )
}


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);

