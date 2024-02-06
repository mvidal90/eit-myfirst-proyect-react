import Counter from "./components/Counter";
import MoviesWrapper from "./components/MoviesWrapper";
import Text from "./components/Text"

import './styles/App.css';

export function App() {

    return (
        <div className="app">
            <Text 
                renderAs="h1" 
                content="Hello World!!"
            />
            <Counter />
            <MoviesWrapper />
        </div>
  );
}


