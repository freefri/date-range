# date-range
An easy date-range [AngularJS](https://angularjs.org/) directive based on [Pikaday](https://github.com/dbushell/Pikaday) and [pikaday-angular](https://github.com/nverba/pikaday-angular)

## Usage
Install with bower 
```
"date-range": "https://github.com/freefri/date-range.git#^0.1.1"
```

Load the following js files:
```
'bower_components/pikaday/pikaday.js',
'bower_components/pikaday-angular/pikaday-angular.js',
'bower_components/date-range/src/date-range.js',
'bower_components/date-range/dist/date-range.tpl.js',
```
Load pikaday style file (choose between css or sass):
```
'bower_components/pikaday/css/pikaday.css'
'bower_components/pikaday/scss/pikaday.scss'
```

 Include the module as a dependency.

```
angular.module('YourApp', ['ct.date-range']);
```

Then add the date-range element (on-change callback function will be called when date has changed).

```html
<date-range on-change="requestHttp"></date-range>
```
