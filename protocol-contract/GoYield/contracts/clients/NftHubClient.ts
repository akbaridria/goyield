/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import type { TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createApplication(uint64,uint64)void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "depositToFolk(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "setClaimedDefault()void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "setwinAmount(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "checkWinner(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "balance": {
          "type": "uint64",
          "key": "balance"
        },
        "nftAppId": {
          "type": "uint64",
          "key": "nftAppId"
        },
        "vrfAppId": {
          "type": "uint64",
          "key": "vrfAppId"
        },
        "claimed": {
          "type": "bytes",
          "key": "claimed"
        },
        "winAmount": {
          "type": "uint64",
          "key": "winAmount"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 4
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNjAuMQovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGNyZWF0ZUFwcGxpY2F0aW9uKHVpbnQ2NCx1aW50NjQpdm9pZAphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CgkvLyB2cmZBcHBJZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gbmZ0QXBwSWQ6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgY3JlYXRlQXBwbGljYXRpb24odWludDY0LHVpbnQ2NCl2b2lkCgljYWxsc3ViIGNyZWF0ZUFwcGxpY2F0aW9uCglpbnQgMQoJcmV0dXJuCgpjcmVhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDIgMAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czoxNwoJLy8gdGhpcy5jbGFpbWVkLnZhbHVlID0gWzEwMDEsIDEwMDEsIDEwMDFdCglieXRlIDB4NjM2YzYxNjk2ZDY1NjQgLy8gImNsYWltZWQiCglieXRlIDB4MDAwMDAwMDAwMDAwMDNlOTAwMDAwMDAwMDAwMDAzZTkwMDAwMDAwMDAwMDAwM2U5CglhcHBfZ2xvYmFsX3B1dAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czoxOAoJLy8gdGhpcy5uZnRBcHBJZC52YWx1ZSA9IG5mdEFwcElkCglieXRlIDB4NmU2Njc0NDE3MDcwNDk2NCAvLyAibmZ0QXBwSWQiCglmcmFtZV9kaWcgLTEgLy8gbmZ0QXBwSWQ6IHVpbnQ2NAoJYXBwX2dsb2JhbF9wdXQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MTkKCS8vIHRoaXMudnJmQXBwSWQudmFsdWUgPSB2cmZBcHBJZAoJYnl0ZSAweDc2NzI2NjQxNzA3MDQ5NjQgLy8gInZyZkFwcElkIgoJZnJhbWVfZGlnIC0yIC8vIHZyZkFwcElkOiB1aW50NjQKCWFwcF9nbG9iYWxfcHV0CglyZXRzdWIKCi8vIGRlcG9zaXRUb0ZvbGsodWludDY0KXZvaWQKYWJpX3JvdXRlX2RlcG9zaXRUb0ZvbGs6CglieXRlIDB4IC8vIHB1c2ggZW1wdHkgYnl0ZXMgdG8gZmlsbCB0aGUgc3RhY2sgZnJhbWUgZm9yIHRoaXMgc3Vicm91dGluZSdzIGxvY2FsIHZhcmlhYmxlcwoKCS8vIHZhbHVlOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCgkvLyBleGVjdXRlIGRlcG9zaXRUb0ZvbGsodWludDY0KXZvaWQKCWNhbGxzdWIgZGVwb3NpdFRvRm9sawoJaW50IDEKCXJldHVybgoKZGVwb3NpdFRvRm9sazoKCXByb3RvIDIgMAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czoyMwoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hcHAuY3JlYXRvcikKCXR4biBTZW5kZXIKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcENyZWF0b3IKCWFzc2VydAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czoyNQoJLy8gcHJldkJhbGFuY2UgPSB0aGlzLmJhbGFuY2UudmFsdWUKCWJ5dGUgMHg2MjYxNmM2MTZlNjM2NSAvLyAiYmFsYW5jZSIKCWFwcF9nbG9iYWxfZ2V0CglmcmFtZV9idXJ5IC0yIC8vIHByZXZCYWxhbmNlOiB1aW50NjQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MjcKCS8vIHRoaXMuYmFsYW5jZS52YWx1ZSA9IHByZXZCYWxhbmNlICsgdmFsdWUKCWJ5dGUgMHg2MjYxNmM2MTZlNjM2NSAvLyAiYmFsYW5jZSIKCWZyYW1lX2RpZyAtMiAvLyBwcmV2QmFsYW5jZTogdWludDY0CglmcmFtZV9kaWcgLTEgLy8gdmFsdWU6IHVpbnQ2NAoJKwoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gc2V0Q2xhaW1lZERlZmF1bHQoKXZvaWQKYWJpX3JvdXRlX3NldENsYWltZWREZWZhdWx0OgoJLy8gZXhlY3V0ZSBzZXRDbGFpbWVkRGVmYXVsdCgpdm9pZAoJY2FsbHN1YiBzZXRDbGFpbWVkRGVmYXVsdAoJaW50IDEKCXJldHVybgoKc2V0Q2xhaW1lZERlZmF1bHQ6Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MzEKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIgPT09IHRoaXMuYXBwLmNyZWF0b3IpCgl0eG4gU2VuZGVyCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCglhc3NlcnQKCT09Cglhc3NlcnQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MzIKCS8vIHRoaXMuY2xhaW1lZC52YWx1ZSA9IFsxMDAxLCAxMDAxLCAxMDAxXQoJYnl0ZSAweDYzNmM2MTY5NmQ2NTY0IC8vICJjbGFpbWVkIgoJYnl0ZSAweDAwMDAwMDAwMDAwMDAzZTkwMDAwMDAwMDAwMDAwM2U5MDAwMDAwMDAwMDAwMDNlOQoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gc2V0d2luQW1vdW50KHVpbnQ2NCl2b2lkCmFiaV9yb3V0ZV9zZXR3aW5BbW91bnQ6CgkvLyB2YWx1ZTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBzZXR3aW5BbW91bnQodWludDY0KXZvaWQKCWNhbGxzdWIgc2V0d2luQW1vdW50CglpbnQgMQoJcmV0dXJuCgpzZXR3aW5BbW91bnQ6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MzYKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIgPT09IHRoaXMuYXBwLmNyZWF0b3IpCgl0eG4gU2VuZGVyCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglhcHBfcGFyYW1zX2dldCBBcHBDcmVhdG9yCglhc3NlcnQKCT09Cglhc3NlcnQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6MzcKCS8vIHRoaXMud2luQW1vdW50LnZhbHVlID0gdmFsdWUKCWJ5dGUgMHg3NzY5NmU0MTZkNmY3NTZlNzQgLy8gIndpbkFtb3VudCIKCWZyYW1lX2RpZyAtMSAvLyB2YWx1ZTogdWludDY0CglhcHBfZ2xvYmFsX3B1dAoJcmV0c3ViCgovLyBjaGVja1dpbm5lcih1aW50NjQpdm9pZAphYmlfcm91dGVfY2hlY2tXaW5uZXI6CglieXRlIDB4OyBkdXBuIDUgLy8gcHVzaCBlbXB0eSBieXRlcyB0byBmaWxsIHRoZSBzdGFjayBmcmFtZSBmb3IgdGhpcyBzdWJyb3V0aW5lJ3MgbG9jYWwgdmFyaWFibGVzCgoJLy8gdG9rZW5JZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBjaGVja1dpbm5lcih1aW50NjQpdm9pZAoJY2FsbHN1YiBjaGVja1dpbm5lcgoJaW50IDEKCXJldHVybgoKY2hlY2tXaW5uZXI6Cglwcm90byA3IDAKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6NDEKCS8vIG5mdEFwcElkID0gdGhpcy5uZnRBcHBJZC52YWx1ZQoJYnl0ZSAweDZlNjY3NDQxNzA3MDQ5NjQgLy8gIm5mdEFwcElkIgoJYXBwX2dsb2JhbF9nZXQKCWZyYW1lX2J1cnkgLTIgLy8gbmZ0QXBwSWQ6IHVpbnQ2NAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo0MgoJLy8gdnJmQXBwSWQgPSB0aGlzLnZyZkFwcElkLnZhbHVlCglieXRlIDB4NzY3MjY2NDE3MDcwNDk2NCAvLyAidnJmQXBwSWQiCglhcHBfZ2xvYmFsX2dldAoJZnJhbWVfYnVyeSAtMyAvLyB2cmZBcHBJZDogdWludDY0CgoJLy8gY29udHJhY3RzL25mdEh1Yi5hbGdvLnRzOjQ0CgkvLyBkYXRhID0gc2VuZE1ldGhvZENhbGw8W3VpbnQ2NF0sIEFkZHJlc3M+KHsKCS8vICAgICAgIG5hbWU6ICdhcmM3Ml9vd25lck9mJywKCS8vICAgICAgIGFwcGxpY2F0aW9uSUQ6IEFwcGxpY2F0aW9uLmZyb21JRChuZnRBcHBJZCksCgkvLyAgICAgICBtZXRob2RBcmdzOiBbdG9rZW5JZF0sCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCWludCBhcHBsCglpdHhuX2ZpZWxkIFR5cGVFbnVtCgltZXRob2QgImFyYzcyX293bmVyT2YodWludDY0KWFkZHJlc3MiCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo0NgoJLy8gYXBwbGljYXRpb25JRDogQXBwbGljYXRpb24uZnJvbUlEKG5mdEFwcElkKQoJZnJhbWVfZGlnIC0yIC8vIG5mdEFwcElkOiB1aW50NjQKCWl0eG5fZmllbGQgQXBwbGljYXRpb25JRAoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo0NwoJLy8gbWV0aG9kQXJnczogW3Rva2VuSWRdCglmcmFtZV9kaWcgLTEgLy8gdG9rZW5JZDogdWludDY0CglpdG9iCglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwoKCS8vIEZlZSBmaWVsZCBub3Qgc2V0LCBkZWZhdWx0aW5nIHRvIDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIFN1Ym1pdCBpbm5lciB0cmFuc2FjdGlvbgoJaXR4bl9zdWJtaXQKCWl0eG4gTnVtTG9ncwoJaW50IDEKCS0KCWl0eG5hcyBMb2dzCglleHRyYWN0IDQgMAoJZnJhbWVfYnVyeSAtNCAvLyBkYXRhOiBhZGRyZXNzCgoJLy8gY29udHJhY3RzL25mdEh1Yi5hbGdvLnRzOjUwCgkvLyBkYXRhV2lubmVyID0gc2VuZE1ldGhvZENhbGw8W10sIFN0YXRpY0FycmF5PHVpbnQ2NCwgMz4+KHsKCS8vICAgICAgIG5hbWU6ICdnZXRXaW5uZXJzJywKCS8vICAgICAgIGFwcGxpY2F0aW9uSUQ6IEFwcGxpY2F0aW9uLmZyb21JRCh2cmZBcHBJZCksCgkvLyAgICAgICBtZXRob2RBcmdzOiBbXSwKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJaW50IGFwcGwKCWl0eG5fZmllbGQgVHlwZUVudW0KCW1ldGhvZCAiZ2V0V2lubmVycygpdWludDY0WzNdIgoJaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6NTIKCS8vIGFwcGxpY2F0aW9uSUQ6IEFwcGxpY2F0aW9uLmZyb21JRCh2cmZBcHBJZCkKCWZyYW1lX2RpZyAtMyAvLyB2cmZBcHBJZDogdWludDY0CglpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uSUQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6NTMKCS8vIG1ldGhvZEFyZ3M6IFtdCgkvLyBGZWUgZmllbGQgbm90IHNldCwgZGVmYXVsdGluZyB0byAwCglpbnQgMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglpdHhuIE51bUxvZ3MKCWludCAxCgktCglpdHhuYXMgTG9ncwoJZXh0cmFjdCA0IDAKCWZyYW1lX2J1cnkgLTUgLy8gZGF0YVdpbm5lcjogdWludDY0WzNdCgoJLy8gaWYwX2NvbmRpdGlvbgoJLy8gY29udHJhY3RzL25mdEh1Yi5hbGdvLnRzOjU2CgkvLyB0aGlzLnR4bi5zZW5kZXIgPT09IGRhdGEKCXR4biBTZW5kZXIKCWZyYW1lX2RpZyAtNCAvLyBkYXRhOiBhZGRyZXNzCgk9PQoJYnogaWYwX2Vsc2UKCgkvLyBpZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL25mdEh1Yi5hbGdvLnRzOjU3CgkvLyBpbmRleFdpbm5lciA9IDEwMDEKCWludCAxMDAxCglmcmFtZV9idXJ5IC02IC8vIGluZGV4V2lubmVyOiB1aW50NjQKCgkvLyBjb250cmFjdHMvbmZ0SHViLmFsZ28udHM6NTgKCS8vIGkgPSAwCglpbnQgMAoJZnJhbWVfYnVyeSAtNyAvLyBpOiB1aW50NjQKCmZvcl8wOgoJZnJhbWVfZGlnIC03IC8vIGk6IHVpbnQ2NAoJaW50IDMKCTwKCWJ6IGZvcl8wX2VuZAoKCS8vIGlmMV9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo1OQoJLy8gdG9rZW5JZCA9PT0gZGF0YVdpbm5lcltpXQoJZnJhbWVfZGlnIC0xIC8vIHRva2VuSWQ6IHVpbnQ2NAoJZnJhbWVfZGlnIC01IC8vIGRhdGFXaW5uZXI6IHVpbnQ2NFszXQoJc3RvcmUgMCAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIC03IC8vIGk6IHVpbnQ2NAoJaW50IDgKCSogLy8gYWNjICogdHlwZUxlbmd0aAoJKwoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWludCA4CglleHRyYWN0MwoJYnRvaQoJPT0KCWJ6IGlmMV9lbmQKCgkvLyBpZjFfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL25mdEh1Yi5hbGdvLnRzOjYwCgkvLyBpbmRleFdpbm5lciA9IGkKCWZyYW1lX2RpZyAtNyAvLyBpOiB1aW50NjQKCWZyYW1lX2J1cnkgLTYgLy8gaW5kZXhXaW5uZXI6IHVpbnQ2NAoKaWYxX2VuZDoKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo1OAoJLy8gaSA9IGkgKyAxCglmcmFtZV9kaWcgLTcgLy8gaTogdWludDY0CglpbnQgMQoJKwoJZnJhbWVfYnVyeSAtNyAvLyBpOiB1aW50NjQKCWIgZm9yXzAKCmZvcl8wX2VuZDoKCS8vIGlmMl9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo2MwoJLy8gdGhpcy5jbGFpbWVkLnZhbHVlW2luZGV4V2lubmVyXSA9PT0gMTAwMQoJYnl0ZSAweDYzNmM2MTY5NmQ2NTY0IC8vICJjbGFpbWVkIgoJYXBwX2dsb2JhbF9nZXQKCXN0b3JlIDAgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAtNiAvLyBpbmRleFdpbm5lcjogdWludDY0CglpbnQgOAoJKiAvLyBhY2MgKiB0eXBlTGVuZ3RoCgkrCglsb2FkIDAgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDgKCWV4dHJhY3QzCglidG9pCglpbnQgMTAwMQoJPT0KCWJ6IGlmMl9lbHNlCgoJLy8gaWYyX2NvbnNlcXVlbnQKCS8vIGNvbnRyYWN0cy9uZnRIdWIuYWxnby50czo2NAoJLy8gdGhpcy5jbGFpbWVkLnZhbHVlW2luZGV4V2lubmVyXSA9IGRhdGFXaW5uZXJbaW5kZXhXaW5uZXJdCglieXRlIDB4NjM2YzYxNjk2ZDY1NjQgLy8gImNsYWltZWQiCglhcHBfZ2xvYmFsX2dldAoJc3RvcmUgMCAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIC02IC8vIGluZGV4V2lubmVyOiB1aW50NjQKCWludCA4CgkqIC8vIGFjYyAqIHR5cGVMZW5ndGgKCSsKCWxvYWQgMCAvLyBmdWxsIGFycmF5Cglzd2FwCglmcmFtZV9kaWcgLTUgLy8gZGF0YVdpbm5lcjogdWludDY0WzNdCglzdG9yZSAwIC8vIGZ1bGwgYXJyYXkKCWludCAwIC8vIGluaXRpYWwgb2Zmc2V0CglmcmFtZV9kaWcgLTYgLy8gaW5kZXhXaW5uZXI6IHVpbnQ2NAoJaW50IDgKCSogLy8gYWNjICogdHlwZUxlbmd0aAoJKwoJbG9hZCAwIC8vIGZ1bGwgYXJyYXkKCXN3YXAKCWludCA4CglleHRyYWN0MwoJYnRvaQoJaXRvYgoJcmVwbGFjZTMKCWJ5dGUgMHg2MzZjNjE2OTZkNjU2NCAvLyAiY2xhaW1lZCIKCXN3YXAKCWFwcF9nbG9iYWxfcHV0CgliIGlmMl9lbmQKCmlmMl9lbHNlOgoJZXJyIC8vICdub3QgYSB3aW5uZXInCgppZjJfZW5kOgoJYiBpZjBfZW5kCgppZjBfZWxzZToKCWVyciAvLyAnbm90IG5mdCBvd25lcicKCmlmMF9lbmQ6CglyZXRzdWIKCmNyZWF0ZV9Ob09wOgoJbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbih1aW50NjQsdWludDY0KXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJkZXBvc2l0VG9Gb2xrKHVpbnQ2NCl2b2lkIgoJbWV0aG9kICJzZXRDbGFpbWVkRGVmYXVsdCgpdm9pZCIKCW1ldGhvZCAic2V0d2luQW1vdW50KHVpbnQ2NCl2b2lkIgoJbWV0aG9kICJjaGVja1dpbm5lcih1aW50NjQpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV9kZXBvc2l0VG9Gb2xrIGFiaV9yb3V0ZV9zZXRDbGFpbWVkRGVmYXVsdCBhYmlfcm91dGVfc2V0d2luQW1vdW50IGFiaV9yb3V0ZV9jaGVja1dpbm5lcgoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "nftHub",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [
          {
            "name": "nftAppId",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "vrfAppId",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "depositToFolk",
        "args": [
          {
            "name": "value",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "setClaimedDefault",
        "args": [],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "setwinAmount",
        "args": [
          {
            "name": "value",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "checkWinner",
        "args": [
          {
            "name": "tokenId",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the NftHub smart contract.
 */
export type NftHub = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createApplication(uint64,uint64)void' | 'createApplication', {
      argsObj: {
        nftAppId: bigint | number
        vrfAppId: bigint | number
      }
      argsTuple: [nftAppId: bigint | number, vrfAppId: bigint | number]
      returns: void
    }>
    & Record<'depositToFolk(uint64)void' | 'depositToFolk', {
      argsObj: {
        value: bigint | number
      }
      argsTuple: [value: bigint | number]
      returns: void
    }>
    & Record<'setClaimedDefault()void' | 'setClaimedDefault', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
    & Record<'setwinAmount(uint64)void' | 'setwinAmount', {
      argsObj: {
        value: bigint | number
      }
      argsTuple: [value: bigint | number]
      returns: void
    }>
    & Record<'checkWinner(uint64)void' | 'checkWinner', {
      argsObj: {
        tokenId: bigint | number
      }
      argsTuple: [tokenId: bigint | number]
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'balance'?: IntegerState
      'nftAppId'?: IntegerState
      'vrfAppId'?: IntegerState
      'claimed'?: BinaryState
      'winAmount'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type NftHubSig = keyof NftHub['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends NftHubSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the NftHub smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends NftHubSig> = NftHub['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the NftHub smart contract to the method's return type
 */
export type MethodReturn<TSignature extends NftHubSig> = NftHub['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type NftHubCreateCalls = (typeof NftHubCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type NftHubCreateCallParams =
  | (TypedCallParams<'createApplication(uint64,uint64)void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type NftHubDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: NftHubCreateCalls) => NftHubCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class NftHubCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the nftHub smart contract using the createApplication(uint64,uint64)void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication(uint64,uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication(uint64,uint64)void' as const,
          methodArgs: Array.isArray(args) ? args : [args.nftAppId, args.vrfAppId],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the depositToFolk(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static depositToFolk(args: MethodArgs<'depositToFolk(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'depositToFolk(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.value],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the setClaimedDefault()void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setClaimedDefault(args: MethodArgs<'setClaimedDefault()void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setClaimedDefault()void' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the setwinAmount(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static setwinAmount(args: MethodArgs<'setwinAmount(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'setwinAmount(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.value],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the checkWinner(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static checkWinner(args: MethodArgs<'checkWinner(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'checkWinner(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.tokenId],
      ...params,
    }
  }
}

/**
 * A client to make calls to the nftHub smart contract
 */
export class NftHubClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `NftHubClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof NftHub['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the nftHub smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: NftHubDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(NftHubCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the nftHub smart contract using the createApplication(uint64,uint64)void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication(uint64,uint64)void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication(uint64,uint64)void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(NftHubCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the nftHub smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the depositToFolk(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public depositToFolk(args: MethodArgs<'depositToFolk(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftHubCallFactory.depositToFolk(args, params))
  }

  /**
   * Calls the setClaimedDefault()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setClaimedDefault(args: MethodArgs<'setClaimedDefault()void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftHubCallFactory.setClaimedDefault(args, params))
  }

  /**
   * Calls the setwinAmount(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public setwinAmount(args: MethodArgs<'setwinAmount(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftHubCallFactory.setwinAmount(args, params))
  }

  /**
   * Calls the checkWinner(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public checkWinner(args: MethodArgs<'checkWinner(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(NftHubCallFactory.checkWinner(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<NftHub['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get balance() {
        return NftHubClient.getIntegerState(state, 'balance')
      },
      get nftAppId() {
        return NftHubClient.getIntegerState(state, 'nftAppId')
      },
      get vrfAppId() {
        return NftHubClient.getIntegerState(state, 'vrfAppId')
      },
      get claimed() {
        return NftHubClient.getBinaryState(state, 'claimed')
      },
      get winAmount() {
        return NftHubClient.getIntegerState(state, 'winAmount')
      },
    }
  }

  public compose(): NftHubComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      depositToFolk(args: MethodArgs<'depositToFolk(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.depositToFolk(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      setClaimedDefault(args: MethodArgs<'setClaimedDefault()void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setClaimedDefault(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      setwinAmount(args: MethodArgs<'setwinAmount(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.setwinAmount(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      checkWinner(args: MethodArgs<'checkWinner(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.checkWinner(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as NftHubComposer
  }
}
export type NftHubComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the depositToFolk(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  depositToFolk(args: MethodArgs<'depositToFolk(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): NftHubComposer<[...TReturns, MethodReturn<'depositToFolk(uint64)void'>]>

  /**
   * Calls the setClaimedDefault()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setClaimedDefault(args: MethodArgs<'setClaimedDefault()void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): NftHubComposer<[...TReturns, MethodReturn<'setClaimedDefault()void'>]>

  /**
   * Calls the setwinAmount(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  setwinAmount(args: MethodArgs<'setwinAmount(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): NftHubComposer<[...TReturns, MethodReturn<'setwinAmount(uint64)void'>]>

  /**
   * Calls the checkWinner(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  checkWinner(args: MethodArgs<'checkWinner(uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): NftHubComposer<[...TReturns, MethodReturn<'checkWinner(uint64)void'>]>

  /**
   * Makes a clear_state call to an existing instance of the nftHub smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): NftHubComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): NftHubComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<NftHubComposerResults<TReturns>>
}
export type NftHubComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
