const Router = artifacts.require('UniswapV2Router02.sol');
const WETH = artifacts.require('WETH.sol');

module.exports = async function (deployer, network) {
  let weth;
  //contract address of Factory from core
  const FACTORY_ADDRESS = '0x5cc12a3CB4B521d9700F7507A54eb7B4f8F271ab';

  if (network === 'mainnet') {
    //address of WETH from ether scan
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
