const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.etch.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ from: accounts[0], gas: '1000000' })

});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});

/*
class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}


let car;

beforeEach(() => {
  car = new Car();
});

describe('Car', () => {
  it('car park', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('car drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
*/
