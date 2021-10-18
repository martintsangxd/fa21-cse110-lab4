1. `values added:  20`
2. `final result:  20`
3. `values added:  20`
4. `ReferenceError: result is not defined`:  This is because result is decalred in block scope with the `let` keyword, meaning it can't be accessed outside of the block.
5. `TypeError: Assignment to constant variable.`: Variables declared with the `const` keyward cannot be changed after it's assigned in runtime.
6. `ReferenceError: result is not defined`: `let` keyword is also block scope, Therefore can't be accessed outside the block.