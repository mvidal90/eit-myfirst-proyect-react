import Button from "./components/Button";
import Counter from "./components/Counter";
import Text from "./components/Text"

import './styles/App.css';

export function App() {

    return (
        <div className="app">
            <Text 
                renderAs="h1" 
                content="Hello World!!"
            />
            <Text 
                renderAs="p" 
                content="Un texto Random" 
                componentsProps={{ className: "italic", style: { color: "blue", justifyContent: "space-between" } }} 
            />
            <Button label="Clickme" action={() => console.log("Me han cliackeado!")} />
            <Counter />
        </div>
  );
}


