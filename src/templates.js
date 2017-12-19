//replace array with back ticks
//Foo is dynamic
let name = 'Bar';
//if spacing is an issue you can call any string methods on the variable
let template = `
    <div class="Alert">,
        <p>${name}</p>,
    </div>`.trim();
//can also be applied in vue
console.log(template);