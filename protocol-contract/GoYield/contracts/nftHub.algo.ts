/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { Contract } from "@algorandfoundation/tealscript";

class nftHub extends Contract {
  balance = GlobalStateKey<uint64>();

  nftAppId = GlobalStateKey<uint64>();

  vrfAppId = GlobalStateKey<uint64>();

  claimed = GlobalStateKey<StaticArray<uint64, 3>>();

  createApplication(nftAppId: uint64, vrfAppId: uint64): void {
    this.claimed.value = [1001, 1001, 1001];
    this.nftAppId.value = nftAppId;
    this.vrfAppId.value = vrfAppId;
  }

  depositToFolk(value: uint64): void {
    assert(this.txn.sender === this.app.creator);

    const prevBalance = this.balance.value;

    this.balance.value = prevBalance + value;
  }

  checkWinner(tokenId: uint64, value: uint64): void {
    const nftAppId = this.nftAppId.value;
    const vrfAppId = this.vrfAppId.value;
    const prevBalance = this.balance.value;

    const data = sendMethodCall<[uint64], Address>({
      name: 'arc72_ownerOf',
      applicationID: Application.fromID(nftAppId),
      methodArgs: [tokenId],
    });

    const dataWinner = sendMethodCall<[], StaticArray<uint64, 3>>({
      name: 'getWinners',
      applicationID: Application.fromID(vrfAppId),
      methodArgs: [],
    });

    if (this.txn.sender === data) {
      let indexWinner = 1001;
      for (let i = 0; i < 3; i = i + 1) {
        if (tokenId === dataWinner[i]) {
          indexWinner = i;
        }
      }
      if (this.claimed.value[indexWinner] === 1001) {
        this.balance.value = prevBalance - value;
        this.claimed.value[indexWinner] = dataWinner[indexWinner];
      } else throw Error('not a winner');
    } else throw Error('not nft owner');
  }
}
