const ScalePrefix = '%';

function formatValue(value) {
    return value + ScalePrefix;
}

console.log(formatValue(50)); // Output: '50%'
