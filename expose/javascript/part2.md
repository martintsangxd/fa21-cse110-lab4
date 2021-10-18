1. `3` is logged because after the for loop, `i` is still accessable because it's declared with the `var` keyword. And the value of `i` is the length of the `prices`.
2. `150` is logged because after the for loop, the `discountedPrice` variable is still accessible, and is set to the discounted value of the last entry in the array.
3. `150` is logged because the `finalPrice` variable is still in scope, and is set to the last value after the discount.
4. Returns an array of values representing the prices after the discount. Each entry is half of the value in the relative position of the array passed in.
5. `ReferenceError: i is not defined`: `i` variable is declared within the for loop with `let` keyword which is block scope, and now it's ouf of scope.
6. `ReferenceError: discountedPrice is not defined`: `discountedPrice` variable is declared within the for loop with `let` keyword which is block scope, and now it's ouf of scope.
7. `150` is logged, `finalPrice` variable is declared inside the function, and line 13 `finalPrice` is still in scope.
8. The function correctly returns an array of the discounted prices. This works because the `discounted` array is still in scope, and was set to the correct value in the for loop.
9. `ReferenceError: i is not defined`: `i` variable is declared within the for loop with `let` keyword which is block scope, and now it's ouf of scope.
10. `3`, which is the length of the prices array is logged. Because length variable is still in scope.
11. The function correctly returns, because even though `discounted` array is decalred with `const` keyword, it only means that `discounted` is going to be a constant reference to that array, the values in the array can still be manipulated.
12. 
    - A. `student.name`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher'].name`
    - E. `student.courseLoad[0]`
13. 
    - A. `32`, using `+` operator with int and string will convert integer into string and concatenates them together.
    - B. `1`, using `-` operator with int and string will convert string into number and numeric subtraction is performed.
    - C. `3`, `null` converts to numeric value is 0.
    - D. `3null`, `null` is converted into string and then concatenated.
    - E. `4`, numeric value of `true` is 1.
    - F. `0`, numeric value of both `false` and `null` are 0.
    - G. `3undefined`, the `undefined` keyword is converted into string and concatenated.
    - H. `NaN`, the `undefined` keyword is not a number, therefore can't produce numeric output.
14.     
    - A. `true`, string '2' is converted to the number 2
    - B. `false`, first character of '2' is greater than '12' in lexicographical order.
    - C. `true`, `0` and `'0'` have the same numeric value.
    - D. `false`, `===` operator check equality without type conversions.
    - E. `false`, numeric value of `true` is 1.
    - F. `true`, 2 is converted into boolean type which is equal to true.
15. `==` operator checks equality after attemping type conversion, while `===` operator is called strict equality operator immediately return false if the types do not match (no conversion involved in the process).
17. `[2, 4, 6]` is returned. Because `doSomething` function is passed into the `modifyArray` function as a parameter. And for each element in the array passed in, we pass that value to the callback function which is `doSomething` and obtain the return value, then it's pushed to the `newArr`.
19. 1 4 3 2
    