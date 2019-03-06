pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract NFTStore is ERC721Full, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    Counters.Counter internal tokenId;

    event LogBadgeMinted(uint256 _tokendId, address _user);

    constructor(string memory name, string memory symbol)
        ERC721Full(name, symbol)
        public
    {
        address payable owner = msg.sender;
    }

    function mintBadge(
        string calldata tokenURI,
        address user
    )
        external
        onlyOwner
        returns (bool)
    {
        uint256 badgeTokenId = tokenId.current();
        tokenId.increment();
        _mint(user, badgeTokenId);
        _setTokenURI(badgeTokenId, tokenURI);
        emit LogBadgeMinted(badgeTokenId, user);
        return true;
    }
}