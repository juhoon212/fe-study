import {CORE_CONCEPTS} from "./data";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";
import { EXAMPLES } from './data'

function App() {
    console.log("app실행")

    const [selectedTopic, setSelectedTopic] = useState('components');

    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                <h2>Time to get started!</h2>
                <ul>
                    <CoreConcept {...CORE_CONCEPTS[0]}/>
                    <CoreConcept {...CORE_CONCEPTS[1]}/>
                    <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]}/>
                </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;