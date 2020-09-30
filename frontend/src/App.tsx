import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        fetch("/api/test")
            .then(res => res.text())
            .then(text => setResponse(text))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            Azureapp1
            <br/>
            From server: {response}
        </div>
    )
}

export default App;
