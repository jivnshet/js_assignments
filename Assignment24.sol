// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract structure{

    struct Book{
        string title;
        string author;
        uint bookID;
        uint price;
    }

    // define a struct- name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book= Book("Blokchain for beginners","Ineuron",4,1000);
    }

    function getBookTitle() public view returns(string memory){
        return book.title;
    }

    function getBookAuthor() public view returns(string memory){
        return book.author;
    }

    function getBookId() public view returns(uint){
        return book.bookID;
    }

    function getBookPrice() public view returns(uint){
        return book.price;
    }

}

// TypeError: Return argument type string storage ref is not implicitly convertible to expected type (type of first return variable) string calldata.

// Detailed gas cost report:
// Using memory keyword for storing the string variables:

// Total gas required for contract deployment:
// 388565 gas
// Transaction/execution cost: 
// 337882 gas

// Gas used for initialising book object:
// 127417 gas
// Transaction/execution cost: 
// 110797 gas

// For triggering getBookAuthor function:
// execution cost: 24599 gas

// For triggering getBookId function:
// execution cost: 23529 gas

// For triggering getBookPrice function:
// execution cost: 23485 gas

// For triggering getBookTitle function:
// execution cost: 24533 gas
