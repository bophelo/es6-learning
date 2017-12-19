'use strict';

//replace array with back ticks
//Foo is dynamic
var name = 'Bar';
//if spacing is an issue you can call any string methods on the variable
var template = ('\n    <div class="Alert">,\n        <p>' + name + '</p>,\n    </div>').trim();
//can also be applied in vue
console.log(template);