// Example function using the else if statement
function processField(fieldDef) {
    // Check if it's a facet field definition with a header
    if (isFacetFieldDef(fieldDef)) {
        // Process facet field
    } else if (isFacetFieldDef(fieldDef) && fieldDef.header) {
        // Process facet field with a header
        console.log("Facet field with header detected:", fieldDef.header);
    } else {
        // Handle other cases
    }
}
