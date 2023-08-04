const React = require('react');
const Def = require('./Default');

function Index({ places }) {
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                { places.map(place =>(
                    <div>
                        <h2>{ place.pic }</h2>
                        <img src={ place.pic } alt={ place.name } />
                    </div>
                ))}
            </main>
        </Def>
    )
}

      module.exports = Index;