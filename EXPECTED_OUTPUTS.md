# 📺 Expected Outputs

> What each lesson should print when you run it.
>
> Generated on 2026-08-08 by actually running every lesson on Node v24.18.1.
>
> If your output differs, check that you're running the latest version of the files (`git pull`).

## 00_hello_node.js

```
Hello, dunia!
Hello, dunia!
Hello, dunia!
This is not a comment
2
7
20
2.5
1
Nasi lemak sedap
I am 30 years old
```

## 01_variables_and_types.js

```
30
31
Aiman
number
number
string
boolean
object
undefined
object
object
29.700000000000003
29.7
Apa khabar?
5
H
e
o
true
false
true
false
I live in Kuala Lumpur, it's 33 degrees today!
I live in Kuala Lumpur, it's 33 degrees today!
```

## 02_operators_and_coercion.js

```
10
4
21
2.3333333333333335
1
49
15
12
24
6
2
true
false
true
false
true
false
true
false
true
false
true
false
true
false
false
false
false
false
false
true
true
true
true
false
true
false
false
true
hello
fallback
42
b
null
Guest
55
Total: 10
3
10
5
NaN
NaN
false
true
```

## 03_strings_and_template_literals.js

```
24
Hello, Kuala Lumpur!
  HELLO, KUALA LUMPUR!  
  hello, kuala lumpur!  
true
false
true
true
java
script
ipt
j
t
[ 'roti canai', 'teh tarik', 'nasi lemak' ]
roti canai | teh tarik | nasi lemak
Hi, I'm Aina, 25 years old, from Penang.
Hi, I'm Aina, 25 years old, from Penang.
2 + 2 = 4
Uppercase: HELLO
Line 1
Line 2
Line 1
Line 2
She said "hello"
She said "hello"
She said "hello"
Tab	here
New
line
Backslash: \
42
3.14
NaN
42
3.14
42
42
42
true
false
true
```

## 04_arrays.js

```
[ 'durian', 'rambutan', 'mangga' ]
3
durian
mangga
undefined
[ 'durian', 'ciku', 'mangga' ]
[ 'Aiman', 'Bala', 'Chong' ]
[ 'Aiman', 'Bala' ]
[ 'Zero', 'Aiman', 'Bala' ]
[ 'Aiman', 'Bala' ]
2
-1
true
false
Score: 70
Score: 85
Score: 90
Score: 55
Score: 88
[ 140, 170, 180, 110, 176 ]
[ 'Aiman', 'Bala', 'Chong' ]
[ 70, 85, 90, 88 ]
388
[ 1, 2, 3 ]
[ 1, 2, 3, 4, 5 ]
false
roti
teh
[ 'a', 'b', 'c' ]
[ 1, 10, 2, 22 ]
[ 1, 2, 10, 22 ]
[ 22, 10, 2, 1 ]
[ 1, 2 ]
[ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
[ 0, 4, 5 ]
```

## 05_objects_and_json.js

```
{ name: 'Aiman', age: 30, city: 'Kuala Lumpur', isStudent: false }
Aiman
Aiman
30
Aiman
31
Engineer
Bala
Nasi Lemak
7
5
6
Hello, I'm Chong
Aiman
31
Aiman
Kuala Lumpur
[ 'name', 'age', 'city', 'isStudent', 'job' ]
[ 'Aiman', 31, 'Kuala Lumpur', false, 'Engineer' ]
[
  [ 'name', 'Aiman' ],
  [ 'age', 31 ],
  [ 'city', 'Kuala Lumpur' ],
  [ 'isStudent', false ],
  [ 'job', 'Engineer' ]
]
Aiman
{"name":"Aiman","age":30}
{ name: 'Aiman', age: 30, city: 'KL' }
{ name: 'Aiman', age: 31 }
undefined
```

## 06_control_flow.js

```
C — ok lah
Bawa payung!
Hello, Guest
Boleh drive!
Tak payah kerja!
murah
Makan-makan!
Berjaya! Baki: RM50
Jumlah tak valid
Duit tak cukup!
Welcome, user!
```

## 07_loops.js

```
Iteration 0
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Energy: 100% — still running!
Energy: 70% — still running!
Energy: 40% — still running!
Energy: 10% — still running!
Attempt 1
Attempt 2
Attempt 3
Makan: nasi lemak
Makan: roti canai
Makan: teh tarik
name: Aiman
age: 30
city: KL
1
2
3
4
Found 5! Stop.
1
2
4
5
Score 1: 70
Score 2: 85
Score 3: 90
11 12 13 
21 22 23 
31 32 33 
forEach: 1
forEach: 2
forEach: 3
forEach: 4
forEach: 5
[ 2, 4, 6, 8, 10 ]
[ 2, 4 ]
15
```

## 08_functions.js

```
5
30
Hello, Aiman!
undefined
3
3
3
10
regular teh tarik
besar kopi o
11 100
[ 2, 4, 6 ]
20
30
6
15
Hello, I'm Aiman
Hello, I'm undefined
I run immediately!
```

## 09_scope_and_closures.js

```
I'm global
I'm local
inside braces
I escape the block!
I was hoisted
1
2
3
Deposited RM50. Balance: RM150
Withdrew RM30. Balance: RM120
Balance: RM120
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

## 10_error_handling.js

```
Something went wrong: unknownVariable is not defined
Program continues!
name: SyntaxError
message: Unexpected token 'o', "not json at all" is not valid JSON
stack: SyntaxError: Unexpected token 'o', "not json at all" is not valid JSON
    at JSON.parse (<anonymous>)
    at Object.<anonymous> (/tmp/node-fundamentals/lessons/10_error_handling.js:38:8)
    at Module._compile (node:internal/modules/cjs/loader:1871:14)
    at Object..js (node:internal/modules/cjs/loader:2002:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47
5
Error: Tak boleh bahagi dengan zero!
InsufficientFundsError
Baki RM50 tak cukup untuk RM100
50
Trying...
Caught: Boom!
Cleanup — always runs!
It's a syntax problem: Expected property name or '}' in JSON at position 1 (line 1 column 2)
```

## 11_async_javascript.js

```
Start
End
1. Sync code
4. More sync code
3. Promise microtask
2. Timer callback
User: Aiman
User: Aiman
Got: Aiman
User: Aiman | Posts: 2
Got user: Aiman
Resolved: Berjaya!
Posts: 2
Posts: 2
2 seconds later...
```

## 12_modules.js

```
5
6
15
50
Platform: linux
CPUs: 6
Home: /root
Path separator: /
Joined: a/b/c.txt
```

## 13_npm.js

```
```

## 14_file_system.js

```
File content: Hello from Lesson 14!

This prints BEFORE the async read finishes!
basename: sample.txt
dirname: /tmp/node-fundamentals/lessons
extname: .txt
isAbsolute: true
output.txt exists!
Files in this folder: [
  '00_hello_node.js',
  '01_variables_and_types.js',
  '02_operators_and_coercion.js',
  '03_strings_and_template_literals.js',
  '04_arrays.js',
  '05_objects_and_json.js',
  '06_control_flow.js',
  '07_loops.js',
  '08_functions.js',
  '09_scope_and_closures.js',
  '10_error_handling.js',
  '11_async_javascript.js',
  '12_modules.js',
  '13_npm.js',
  '14_file_system.js',
  '15_events.js',
  '16_streams_and_buffers.js',
  '17_http_and_servers.js',
  '18_cli_and_process.js',
  '19_capstone_todo_cli.js',
  'output.txt',
  'sample.txt',
  'temp_files'
]
File written!
Async content: Hello from Lesson 14!

Promise content: Hello from Lesson 14!

Final content: Overwritten with await!
Appended line!

```

## 15_events.js

```
Order received: 2x nasi lemak
Order received: 3x teh tarik
Order received: 1x roti canai
[kitchen] Start cooking roti canai!
Welcome, Aiman! (only once)
Temporary listener
☕ Order taken: kopi o
📝 Logging order: kopi o
Handled error: Something broke
🔔 kopi o is ready! Sila ambil!
Process exiting with code 0
```

## 16_streams_and_buffers.js

```
<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 4c 65 73 73 6f 6e 20 31 34 21 0a>
Hello from Lesson 14!

10
nasi lemak
Direct stream write!
Chunk received: Hello from Lesson 14!

Write stream finished!
--- Stream finished ---
File copied via pipe!
```

## 17_http_and_servers.js

```
(Server lesson — starts servers and keeps running. Press Ctrl+C to stop.)
```

## 18_cli_and_process.js

```
[
  '/root/.nvm/versions/node/v24.18.1/bin/node',
  '/tmp/node-fundamentals/lessons/18_cli_and_process.js'
]
Your args: []
HOME: /root
USER: root
NODE_ENV: (not set)
cwd: /tmp/node-fundamentals
__dirname: /tmp/node-fundamentals/lessons
Exiting with code 0
```

## 19_capstone_todo_cli.js

```
📭 No todos. Senang hati!
```

