
import Counter from "../components/Counter";
import Text from "../components/Text"

export function Home() {
    return (
        <div className="app">
            <Text 
                renderAs="h1" 
                content="New Cinema"
            />
            <Counter />
        </div>
  );
}


