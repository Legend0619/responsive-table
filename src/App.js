import Table from "react-bootstrap/Table";
import "./App.css";

function App() {
    return (
        <div className="p-3">
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;
