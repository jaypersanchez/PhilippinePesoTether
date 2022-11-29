const Phpt = artifacts.require('./contracts/PhilippinePesoTether')
//const PhptStake = artifacts.require('./contracts/PhptStake');

module.exports = async function deployer(deployer, network, accounts) {

    const _owner = "0x8dec968568eE16221BCDE1f81cd7a9A14aBA6535";
   const _mintable = true;
   const _name = "Philippine Peso Tether";
   const _symbol = "PHPT";
   const _decimals = 18;
   const _initialSupply = 100_000_000;

    await deployer.deploy(Phpt, _name, _symbol, _decimals, _initialSupply, _mintable, _owner);
    const _Phpt = await Phpt.deployed();

    /*await deployer.deploy(PhptStake, _Phpt.address);
    const _PhptStake = await PhptStake.deployed();*/
};