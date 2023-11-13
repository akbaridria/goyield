import { Check, Spinner } from "@/components/Icons";
import { Modal } from "@/components/Modal";
import { MouseEventHandler } from "react";

interface PropsModalTx {
  open: boolean;
  txId: string;
  closeModal: MouseEventHandler
}
export const ModalSuccessTx = ({ open, txId, closeModal }: PropsModalTx) => {
  const algorandExplorer = 'https://testnet.algoexplorer.io/tx/'

  return (
    <Modal width="450px" open={open}>
      <div className="">
        <div className="p-6 grid grid-cols-1 gap-6 items-center">
          <Check customClass="w-24 h-24 fill-green-600 justify-self-center stroke-white" />
          <div>
            <div className="text-center font-bold text-xl">
              Transaction Success
            </div>
            <div className="text-center opacity-[0.5]">
              You can take a look the transaction at algorand explorer{" "}
              <span className="underline"><a href={`${algorandExplorer + txId}`} target="_blank">here</a></span>
            </div>
          </div>
        </div>
        <button onClick={closeModal} className="w-full hover:bg-pink-500 p-3 border-t-[1px] border-greyHalf font-bold transition-all">Close</button>
      </div>
    </Modal>
  );
};

export default ModalSuccessTx;
