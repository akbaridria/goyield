import { Contract } from '@algorandfoundation/tealscript';

/* eslint-disable max-len */
// # list methods                      | readonly ? | args                                             | return type
// # --------------------------------------------------------------------------------------------------------------------
// # - arc72_ownerOf                   | true       | (tokenId: number)                                | address
// # - arc72_transferFrom              | false      | (from: address, to: address, tokenId)            | void
// # - arc72_tokenURI                  | true       | (tokenId: number)                                | byte[256]
// # - arc72_approve                   | false      | (approved: address, tokenId: number)             | void
// # - arc72_setApprovalForAll         | false      | (operator: address, approved: boolean)           | void
// # - arc72_getApproved               | true       | (tokenId: number)                                | address
// # - arc72_isApprovedForAll          | true       | (owner: address, operator: address)              | bool
// # - arc72_balanceOf                 | true       | (owner: address)                                 | uint256
// # - arc72_tokenByIndex              | false      | (index: uint256)                                 | uint256
// # - arc72_custom_name               | true       | ()                                               | string
// # - arc72_custom_symbol             | true       | ()                                               | string
// # - arc72_custom_getAllTokensByAddr | true       | (owner: address)                                 | uint256[]
// # - arc72_custom_getTokenDetail     | true       | (tokenId: uint256)                               | Token
/* eslint-disable max-len */

// eslint-disable-next-line no-unused-vars

type Token = { owner: Address; tokenUri: string; image: string; control: Address };

// eslint-disable-next-line no-unused-vars
class GoYieldNFT extends Contract {
  // variables
  counter = GlobalStateKey<uint64>();

  name = GlobalStateKey<string>();

  symbol = GlobalStateKey<string>();

  svgTemplate = BoxMap<uint64, string>({ prefix: 'template' });

  tokenBox = BoxMap<uint64, Token>();

  ownerBox = BoxMap<Address, uint64[]>();

  approveAllBox = BoxMap<StaticArray<Address, 2>, bytes>();

  // constructor
  createApplication(_name: string, _symbol: string): void {
    this.name.value = _name;
    this.symbol.value = _symbol;
  }

  // private functions
  private updateTransfer(_from: Address, _to: Address, _tokenId: uint64): void {
    let index: uint64 = 0;
    let i: uint64 = 0;
    const length: uint64 = this.ownerBox(_from).value.length;

    for (i; i < length; i = i + 1) {
      if (this.ownerBox(_from).value[i] === _tokenId) {
        index = i;
      }
    }
    this.ownerBox(_from).value.splice(index, 1);
    if (this.ownerBox(_to).exists) {
      this.ownerBox(_to).value.push(_tokenId);
    } else {
      this.ownerBox(_to).value = [_tokenId];
    }
  }

  private transferTo(_to: Address, _tokenId: uint64): void {
    assert(this.tokenBox(_tokenId).exists);
    this.tokenBox(_tokenId).value.owner = _to;
    this.tokenBox(_tokenId).value.control = globals.zeroAddress;
  }

  // read methods
  arc72_ownerOf(_tokenId: uint64): Address {
    assert(this.tokenBox(_tokenId).exists);
    return this.tokenBox(_tokenId).value.owner;
  }

  arc72_tokenURI(_tokenId: uint64): string {
    return this.tokenBox(_tokenId).value.tokenUri;
  }

  arc72_getImage(_tokenId: uint64): string {
    return this.tokenBox(_tokenId).value.image;
  }

  arc72_totalSupply(): uint64 {
    return this.counter.value;
  }

  arc72_getApproved(_tokenId: uint64): Address {
    return this.tokenBox(_tokenId).value.control;
  }

  arc72_isApprovedForAll(_owner: Address, _operator: Address): boolean {
    const control: StaticArray<Address, 2> = [_owner, _operator];
    if (this.approveAllBox(control).exists) return true;
    return false;
  }

  arc72_balanceOf(_owner: Address): uint64 {
    assert(this.ownerBox(_owner).exists);
    return this.ownerBox(_owner).value.length;
  }

  arc72_custom_getAllTokenIdsByAddr(_owner: Address): uint64[] {
    assert(this.ownerBox(_owner).exists);
    return this.ownerBox(_owner).value;
  }

  arc72_custom_getTokenDetail(_tokenId: uint64): Token {
    assert(this.tokenBox(_tokenId).exists);
    return this.tokenBox(_tokenId).value;
  }

  // write methods
  udpdateTemplate(_template: string): void {
    // only admin
    assert(this.txn.sender === this.app.creator);
    this.svgTemplate(0).value = _template;
  }

  arc72_approve(_approved: Address, _tokenId: uint64): void {
    assert(this.tokenBox(_tokenId).exists);
    assert(this.txn.sender === this.tokenBox(_tokenId).value.owner);

    this.tokenBox(_tokenId).value.control = _approved;
  }

  arc72_setApprovalForAll(_operator: Address, _approved: boolean): void {
    const control: StaticArray<Address, 2> = [this.txn.sender, _operator];
    assert(this.approveAllBox(control).exists);

    if (_approved) this.approveAllBox(control).value = '';
    else this.approveAllBox(control).delete();
  }

  arc72_transferFrom(_from: Address, _to: Address, _tokenId: uint64): void {
    const ownerNft = this.tokenBox(_tokenId).value.owner;
    const control: StaticArray<Address, 2> = [ownerNft, this.txn.sender];
    // make sure that particular user has access the owner of nfts to move the nft.
    if (this.txn.sender === this.tokenBox(_tokenId).value.owner || this.tokenBox(_tokenId).value.control === this.txn.sender || this.approveAllBox(control).exists) {
      this.transferTo(_to, _tokenId);
      this.updateTransfer(_from, _to, _tokenId);
    } else throw Error('not authorize');
  }

  mint(backgroundColor: string, objectColor: string, translateX: string, translateY: string, to: Address): void {
    assert(this.counter.value < 1000);

    verifyTxn(this.txnGroup[0], { typeEnum: TransactionType.Payment });
    verifyTxn(this.txnGroup[0], { amount: { greaterThanEqualTo: 100_000 } });
    verifyTxn(this.txnGroup[0], { receiver: this.app.creator });

    verifyTxn(this.txnGroup[1], { typeEnum: TransactionType.Payment });
    verifyTxn(this.txnGroup[1], { receiver: this.app.address });
    verifyTxn(this.txnGroup[1], { amount: { greaterThanEqualTo: 1_000_000 } });

    const template: string = this.svgTemplate(0).value;

    const token: Token = {
      owner: to,
      tokenUri: 'https://github.com/algorandfoundation/ARCs',
      image: concat(concat(concat(concat(concat(substring3(template, 0, 205), backgroundColor), concat(substring3(template, 205, 238), translateX)), concat(' ', translateY)), concat(substring3(template, 239, 568), objectColor)), substring3(template, 568, 587)),
      control: globals.zeroAddress,
    };

    this.tokenBox(this.counter.value).value = token;
    if (this.ownerBox(to).exists) {
      this.ownerBox(to).value.push(this.counter.value);
    } else {
      this.ownerBox(to).value = [this.counter.value];
    }
    this.counter.value = this.counter.value + 1;
  }
}
