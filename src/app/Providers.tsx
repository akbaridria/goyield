
'use client'

import React from 'react'
import { WalletProvider, useInitializeProviders, PROVIDER_ID } from '@txnlab/use-wallet'
import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'

export function Providers({ children }: { children: React.ReactNode }) {
  const providers = useInitializeProviders({
    providers: [
      { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
      { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
      { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    ],
    nodeConfig: {
      network: "",
      nodeServer: "https://testnet-api.algonode.cloud",
    }
  })

  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return <WalletProvider value={providers}>{mounted && children}</WalletProvider>
}