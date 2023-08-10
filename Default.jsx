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
        </body>
    </html>
)
};

module.export = Def;