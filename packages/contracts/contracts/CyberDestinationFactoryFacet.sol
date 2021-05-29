// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

//import "hardhat/console.sol";
import '@solidstate/contracts/token/ERC1155/IERC1155.sol';
import "./ERC1155URI/ERC1155URI.sol";
import "./BaseRelayRecipient/BaseRelayRecipient.sol";

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./Diamond/LibDiamond.sol";
import "./BaseRelayRecipient/BaseRelayRecipientStorage.sol";
import "./libraries/LibAppStorage.sol";

contract CyberDestinationFactoryFacet is BaseRelayRecipient, ERC1155URI {

  using ECDSA for bytes32;
  using Counters for Counters.Counter;

  event Minted(address indexed account, uint256 indexed tokenId, uint256 indexed amount);

  function initialize(string memory _uri, address _manager, address _trustedForwarder, address _opensea, address _oncyber, uint256 _oncyberShare) public {

    require(LibDiamond.diamondStorage().contractOwner == msg.sender, "NO");

    BaseRelayRecipientStorage.layout().trustedForwarder = _trustedForwarder;
    LibDiamond.diamondStorage().supportedInterfaces[type(IERC1155).interfaceId] = true;
    setURI(_uri);
    LibAppStorage.layout().manager = _manager;
    LibAppStorage.layout().opensea = _opensea;
    LibAppStorage.layout().oncyber = _oncyber;
    LibAppStorage.layout().oncyberShare = _oncyberShare;

  }

  function totalSupply() public view returns (uint256) {

    return LibAppStorage.layout().totalSupply.current();

  }

  function manager() public view returns (address) {

    return LibAppStorage.layout().manager;

  }

  function oncyber() public view returns (address) {

    return LibAppStorage.layout().oncyber;

  }

  function oncyberShare() public view returns (uint256) {

    return LibAppStorage.layout().oncyberShare;

  }

  function minterNonce(address _minter) public view returns (uint256){

    return LibAppStorage.layout().minterNonce[_minter].current();

  }

  function mint(string memory _uri, uint256 _amount, bytes memory _signature) public returns (uint256 _tokenId) {

    address sender = _msgSender();
    uint256 nonce = minterNonce(sender);

    bytes memory _message = abi.encodePacked(_uri, _amount, nonce, sender);
    address _recoveredAddress = keccak256(_message).toEthSignedMessageHash().recover(_signature);
    require(_recoveredAddress == LibAppStorage.layout().manager, "NM");

    require(_amount * LibAppStorage.layout().oncyberShare % 100 == 0, "IA");
    uint256 oncyberAmount = _amount * LibAppStorage.layout().oncyberShare / 100;

    // Mint token
    _tokenId = LibAppStorage.layout().totalSupply.current();
    setTokenURI(_tokenId, _uri);
    LibAppStorage.layout().totalSupply.increment();
    LibAppStorage.layout().minterNonce[sender].increment();
    _safeMint(sender, _tokenId, _amount, "");
    _safeTransfer(sender, sender, LibAppStorage.layout().oncyber, _tokenId, oncyberAmount, "");

    emit Minted(sender, _tokenId, _amount);

    if(!isApprovedForAll(sender, LibAppStorage.layout().opensea) ){

      setApprovalForAll(LibAppStorage.layout().opensea, true);

    }

    return _tokenId;

  }

}
