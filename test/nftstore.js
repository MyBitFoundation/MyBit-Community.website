const NFTStore = artifacts.require("NFTStore");

contract("NFTStore", accounts => {
  it("...should mint a NFT in the form of a badge.", async () => {
    const nftStoreInstance = await NFTStore.deployed();
    const nftStoreTokenId = await nftStoreInstance.mintBadge.call(
        'https://ipfs.io/ipfs/QmXzkMxnH3AUWxNmEc5jWmyF8woRJyawGNxvicnuohDdvf',
        { from: accounts[0] }
    );
    assert.equal(nftStoreTokenId, 0, "Token ID should start at 0");
  });
});
