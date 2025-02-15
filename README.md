## TypeScript Error: Property 'newProperty' is missing in type...

This repository demonstrates a common TypeScript error that occurs when adding a new required property to an interface. The error arises because the function that uses the interface doesn't handle the case where the object might not have the new property.  This can lead to runtime errors if not carefully managed.

The `bug.ts` file showcases the problematic code. The `bugSolution.ts` file provides a solution to address this issue.

**How to reproduce the error:**
1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).
3. Run the compiled JavaScript code. You'll observe an error related to the missing 'newProperty'.

**Understanding the solution:** The solution employs type guards or optional chaining to gracefully handle the scenario where the property might be missing. This prevents runtime errors and improves code robustness.