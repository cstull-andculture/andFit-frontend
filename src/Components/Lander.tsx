import * as React from 'react';

const liftsExampleUri = "http://localhost:8000/wellness/lifts/1"
const baseExampleUri  = "http://localhost:8000/wellness"
const badExampleUri   = "http://localhost:8000/wellness/bears/2"

const Lander: React.FC = () => {
    return (
        <div className="lander">
            <header className="lander__header">
                <p>Welcome to the andWellness App!</p>
                <h2>Try one of the following exemplary links.</h2>
                <ul>
                    <li><a href={liftsExampleUri}>Index Page</a></li>
                    <li><a href={baseExampleUri}>Example Lift</a></li>
                    <li><a href={badExampleUri}>Bad Path Example</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Lander;