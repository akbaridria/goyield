/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { Contract } from "@algorandfoundation/tealscript";

class ConsumeVRF extends Contract {
  round = GlobalStateKey<uint64>();

  oracleApp = GlobalStateKey<uint64>();

  totalSupply = GlobalStateKey<uint64>();

  winnerNumbers = GlobalStateKey<StaticArray<uint64, 3>>();

  createApplication(randomOracleApp: uint64, _round: uint64): void {
    this.oracleApp.value = randomOracleApp;
    this.round.value = _round;
  }

  // read methods

  getRound(): uint64 {
    return this.round.value;
  }

  getWinners(): StaticArray<uint64, 3> {
    return this.winnerNumbers.value;
  }

  // write methods

  getRandomBytes(): StaticArray<uint64, 3> {
    const round = this.round.value;
    const data = sendMethodCall<[uint64, bytes], bytes>({
      name: 'must_get',
      methodArgs: [round, ""],
      applicationID: Application.fromID(this.oracleApp.value),
      fee: 0,
      onCompletion: 'NoOp',
    });

    // let randNumbers = btobigint(data);
    const result: StaticArray<uint64, 3> = [0, 0, 0];
    let x: uint64 = extract_uint64(data, 8);

    for (let i = 0; i < 3; i = i + 1) {
      result[i] = x % 1000;
      x = x / 1000;
    }
    this.round.value = round + 100_000;
    this.winnerNumbers.value = result;
    return result;
  }

  upateRound(value: uint64): void {
    assert(this.txn.sender === this.app.creator);
    this.round.value = value;
  }
}
