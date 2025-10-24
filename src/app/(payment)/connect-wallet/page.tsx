"use client"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentOption } from "@/components/PaymentOptions";

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState<string>("walletconnect");

  const handleNext = () => {
    navigate("/payment-details");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
            <Wallet className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Connect Your Wallet</h1>
          <p className="text-muted-foreground">Choose a wallet to proceed with payment</p>
        </div>

        <div className="space-y-4 mb-8">
          <PaymentOption
            icon={
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
            }
            title="MetaMask"
            description="Connect using browser extension"
            selected={selectedWallet === "metamask"}
            onClick={() => setSelectedWallet("metamask")}
          />

          <PaymentOption
            icon={
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
            }
            title="WalletConnect"
            description="Scan QR code with mobile wallet"
            selected={selectedWallet === "walletconnect"}
            onClick={() => setSelectedWallet("walletconnect")}
          />

          <PaymentOption
            icon={
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
            }
            title="Coinbase Wallet"
            description="Connect with Coinbase Wallet"
            selected={selectedWallet === "coinbase"}
            onClick={() => setSelectedWallet("coinbase")}
          />
        </div>

        <Button 
          onClick={handleNext}
          className="w-full h-12 text-base font-semibold mb-6"
          style={{ background: 'var(--gradient-primary)' }}
        >
          Next
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg">
          <ShieldCheck className="w-4 h-4" />
          <p>Your wallet connection is secure and encrypted. We never store your private keys.</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
