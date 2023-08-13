const React = require('react');

function Def(html) {
return (
    <html>
        <head>
            <title>Rest Rant</title>
            <link rel="stylesheet" href="/css/style.css"></link>
        </head>
        <body>
            { html.children }
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                    <a href='/places'>Places</a>
                    </li>
                    <li>
                    <a href='/places/new'>Add place</a>
                    </li>
                </ul>
            </nav>
        </body>
    </html>
)
};

module.export = Def;