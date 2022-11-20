// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Problem{

    uint[] public arr=[1,2,3,4,5];

    function remove(uint _index) public{ 
        require(_index<arr.length, "Index out of bound");
        for(uint i=_index; i<arr.length-1; i++){
            arr[i]=arr[i+1];
        }
        arr.pop();
    }

}
