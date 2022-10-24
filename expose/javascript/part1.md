1. values added: 20
2. final result: 20
3. values added: 20
4. Error because the result variable is only within the scope of the if statement. So, when you access result in line 13, it is out of scope.
5. Error because in line 7, result tries to be reinitialized but it can't be since thee const keyword is used to initialize result so it can't be reintialized
6. Eerror because the result variable is only within the scope of the if statement and it also tries to be reassigned in the if statement which is not possible. 