### Contract Events with 1 second block times in a PoA network

- setup
```
geth init nodes/event-tester.json --datadir nodes/data/validator1
geth --config nodes/validator1.toml --datadir nodes/data/validator1 --unlock <account> --mine
truffle migrate
```

- Run side by side
```
$ node caller.js
0x55a57be036208b3eeaaa082a07ae13b3473ab3323d4a575bbdb58b0643ac7af6 mined in block 3642

$ node listener.js
LogEvent: hello world
```