pragma solidity ^0.4.18;

contract EventEmitter {

    event LogEvent(bytes32 indexed message);

    function emitEvent(bytes32 _message) public {
        LogEvent(_message);
    }

}

