import babel from 'rollup-plugin-babel';

export default {
    input: 'src/modules.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ],
    output: {
        file: 'bundle.js',
        format: 'cjs'
    }
};

/*import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

rollup({
    entry: 'src/modules.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}).then(...)*/