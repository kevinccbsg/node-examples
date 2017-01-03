# tv-maze

## Usage

```js
var tvmaze = require('tv-maze');

var client = tvmaze.createClient();

client.shows(function(err, shows) {
  // do somethig shows
});

client.search('', function(err, show) {
  // do something show
});
```