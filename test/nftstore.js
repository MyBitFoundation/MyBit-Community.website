const NFTStore = artifacts.require("NFTStore");

contract("NFTStore", accounts => {
  it("...should mint a NFT in the form of a badge.", async () => {
    const nftStoreInstance = await NFTStore.deployed();
    const badgeMintingTx = await nftStoreInstance.mintBadge(
        'https://ipfs.io/ipfs/QmXzkMxnH3AUWxNmEc5jWmyF8woRJyawGNxvicnuohDdvf',
        { from: accounts[0] }
    );
    const secondBadgeMintingTx = await nftStoreInstance.mintBadge(
        'https://ipfs.io/ipfs/QmXzkMxnH3AUWxNmEc5jWmyF8woRJyawGNxvicnuohDdvf',
        { from: accounts[0] }
    );
    const [ firstBadgeLog ] = badgeMintingTx.logs;
    const [ secondBadgeLog ] = secondBadgeMintingTx.logs;
    
    assert.equal(Number(firstBadgeLog.args.tokenId), 0, "First Token ID should be 0");
    assert.equal(Number(secondBadgeLog.args.tokenId), 1, "Second Token ID should be 1");
  });
});
