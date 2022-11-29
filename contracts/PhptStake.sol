pragma solidity >=0.4.22 <0.9.0;

import './PhilippinePesoTether.sol';

contract PhptStake {
    string public name = 'Phpt Stake';
    address public owner;
    PhilippinePesoTether public phpt;
    address[] public stakers;
    mapping(address => uint256) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaked;

    constructor(PhilippinePesoTether _phpt) {
        phpt = _phpt;
    }

    function depositPhpt(uint256 amount) public {
        require(amount > 0, 'amount must be greater than zero');
        //transfer tether tokens to this contract address for staking
        phpt.transferFrom(msg.sender, address(this), amount);
        //Update staking balance
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + amount;

        //determine if hasStaked
        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }
        //update staking balance
        isStaked[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

}

