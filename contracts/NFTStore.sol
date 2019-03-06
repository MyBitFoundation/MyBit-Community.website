pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract NFTStore is ERC721Full {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    Counters.Counter private tokenId;

    event LogBadgeMinted(uint256 _tokendId, address _owner);

    constructor(string memory name, string memory symbol)
        ERC721Full(name, symbol)
        public
    {}

    function mintBadge(
        string memory tokenURI
    )
        public
        returns (uint256)
    {
        uint256 badgeTokenId = tokenId.current();
        _mint(msg.sender, badgeTokenId);
        _setTokenURI(badgeTokenId, tokenURI);
        emit LogBadgeMinted(badgeTokenId, msg.sender);
        return badgeTokenId;
    }
}