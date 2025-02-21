import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);

    const API_URL = "https://my-cpp-api.herokuapp.com/bfhl"; // Change this

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            const res = await axios.post(API_URL, parsedData);
            setResponse(res.data);
            setError('');
        } catch (err) {
            setError("Invalid JSON or API Error");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Bajaj Finserv Health Dev</h1>
            <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} rows={5} cols={50} />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
        </div>
    );
}
