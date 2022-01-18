// import { expect } from 'chai'
// import * as api from '../src'
// import Web3 from 'web3';
import * as BN from 'bn.js'
const Web3I = require('web3')
import { Contracts, ContractsWrapper, createConfig } from '../src/contract'

describe('Positive tests', () => {
  
  const backendAddress = "0xE17CC5ae092F4523baf35B42cAa0f4B448d15523"
  const backendPrivate = "3b8b5c7574bfd66a16cabe83cba938f92039872a5f3bd8049ecae9cd2762b07b"
  
  let web3
  let tokenId
  let orderId

  let wrapper: ContractsWrapper
  
  before(() => {
    web3 = new Web3I(new Web3I.providers.HttpProvider("https://data-seed-prebsc-2-s2.binance.org:8545/"))
    const account = web3.eth.accounts.privateKeyToAccount('0x' + backendPrivate);
    web3.eth.accounts.wallet.add(account)
    web3.eth.defaultAccount = account.address

    console.log('DFRTFRT: ', web3.eth.defaultAccount)

    const contracts = new Contracts(createConfig(false, 1), web3)

    wrapper = new ContractsWrapper(58, contracts)    
  })

  // it('create new NFT', async () => {
  //   const ids = await wrapper.createNewNFT(backendAddress, 1)
  //   console.log(ids)
  // }).timeout(60000)

  // it('transfer NFT', async () => {
  //   const prevOwner = await api.getTokenOwner(web3, api.NFT_FACTORY_ADDRESS, tokenId)

  //   await api.transferFromNFT(
  //     web3, 
  //     api.NFT_FACTORY_ADDRESS, 
  //     backendAddress,
  //     tokenId,
  //     api.NFT_MARKETPLACE_ADDRESS,
  //     backendPrivate)

  //   const newOwner = await api.getTokenOwner(web3, api.NFT_FACTORY_ADDRESS, tokenId)
  //   expect(newOwner).to.be.not.equal(prevOwner)
  //   expect(newOwner).to.be.equal(api.NFT_MARKETPLACE_ADDRESS)
  // }).timeout(60000)

  // it('approve wbnb', async () => {
  //   await api.approveWBNB(web3, backendAddress, new BN(10000), api.NFT_FACTORY_ADDRESS) // or any other address
  //   const approval = await api.getWBNBApproval(web3, backendAddress, api.NFT_FACTORY_ADDRESS)
  //   expect(Number(approval)).to.be.equal(10000)
  // }).timeout(60000)

  // it('approve nft', async () => {
  //   await api.approveNFT(web3, api.NFT_FACTORY_ADDRESS, backendAddress, new BN(1), api.WBNB_ADDRESS)
  //   const isApproved = await api.isNFTApproved(web3, api.NFT_FACTORY_ADDRESS, api.WBNB_ADDRESS, new BN(1))
  //   expect(isApproved).to.be.true
  // }).timeout(60000)

  // it('get balance', async () => {
  //   const balance = await api.getBalanceOf(web3, api.WBNB_ADDRESS, backendAddress)
  //   expect(balance).to.be.a('number')
  //   console.log(balance)
  // }).timeout(60000)

  // it('Order check', async () => {
  //   // Create NFT
  //   console.log('create nft')
  //   const ids = await wrapper.createNewNFT(backendAddress, 1)
  //   const tokenId = ids[0]
  //   const tokenPrice = new BN(100)

  //   // Approve NFT
  //   console.log('approve nft')
  //   await wrapper.approveNFT(backendAddress, new BN(tokenId), wrapper.getMarketplaceAddress())

  //   // Approve WBNB
  //   console.log('approve tokens')
  //   await wrapper.approveTokens(backendAddress, tokenPrice, wrapper.getMarketplaceAddress())

  //   // // Тут мы используем web3 с уже добавленным аккаунтом backendAddress
  //   // // Buyer sig
  //   // console.log('create buyer sig')
  //   // const buyer = await api.createBuyerSignature(web3, backendAddress, true, new BN(0), new BN(0), new BN(0), api.NFT_FACTORY_ADDRESS)
  //   // console.log(buyer)

  //   // // Seller sig
  //   // console.log('create seller sig')
  //   // const seller = await api.createSellerSignature(web3, backendAddress, true, new BN(0), new BN(0), api.NFT_FACTORY_ADDRESS)

  //   // // Match
  //   // console.log('match order')
  //   // await api.atomicMatch(
  //   //   web3,
  //   //   backendAddress,
  //   //   backendAddress,
  //   //   backendAddress,
  //   //   true,
  //   //   tokenPrice,
  //   //   new BN(0),
  //   //   new BN(tokenId),
  //   //   api.NFT_FACTORY_ADDRESS, 
  //   //   seller, 
  //   //   buyer, 
  //   //   backendAddress, 
  //   //   backendPrivate
  //   // )

  // }).timeout(600000)
})