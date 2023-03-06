<<<<<<< Updated upstream
//import statement
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
=======
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";

import Container from 'react-bootstrap/Container';
>>>>>>> Stashed changes

import "./index.scss";

const App = () => {
<<<<<<< Updated upstream

  return(
     <MainView />
//   <div className="my-flix">
//   <div>Good morning</div>
// </div>
  )
=======
  return (

    <Container style={{ border: "1px solid red" }}>
      <MainView />
    </Container>

  );
>>>>>>> Stashed changes
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
