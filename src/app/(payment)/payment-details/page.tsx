"use client"

import { useState } from "react";
import { Wallet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PaymentDetails = () => {
  const [selectedToken, setSelectedToken] = useState<string>("usdt");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("ethereum");

  const coursePrice = 49.99;
  const networkFee = 2.5;
  const totalAmount = coursePrice + networkFee;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
            <Wallet className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Payment Details</h1>
          <p className="text-muted-foreground">Review and confirm your payment</p>
        </div>

        {/* Course Info */}
        <div className="bg-card rounded-xl p-4 mb-6 flex items-center gap-4" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Blockchain fundamental</h3>
            <p className="text-sm text-muted-foreground">by Steve Jobs</p>
          </div>
        </div>

        {/* Network Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">Network</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedNetwork("ethereum")}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                  selectedNetwork === "ethereum" 
                    ? "bg-foreground text-background" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                Ethereum
              </button>
              <button
                onClick={() => setSelectedNetwork("polygon")}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-secondary text-accent hover:bg-secondary/80 transition-all"
              >
                Polygon
              </button>
            </div>
          </div>
        </div>

        {/* Token Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-3">Payment Token</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedToken("usdt")}
              className={cn(
                "p-4 rounded-xl border-2 transition-all",
                selectedToken === "usdt"
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card hover:border-accent/50"
              )}
            >
              <div className="text-center">
                <div className="font-semibold text-foreground">USDT</div>
                <div className="text-xs text-muted-foreground">USD Coin</div>
              </div>
            </button>
            <button
              onClick={() => setSelectedToken("usdc")}
              className={cn(
                "p-4 rounded-xl border-2 transition-all",
                selectedToken === "usdc"
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card hover:border-accent/50"
              )}
            >
              <div className="text-center">
                <div className="font-semibold text-foreground">USDT</div>
                <div className="text-xs text-muted-foreground">Tether</div>
              </div>
            </button>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-card rounded-xl p-5 mb-6" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Course Price:</span>
              <span className="text-foreground font-medium">${coursePrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Network Fee:</span>
              <span className="text-foreground font-medium">-${networkFee}</span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Amount to Pay:</span>
                <span className="font-bold text-lg text-foreground">{totalAmount.toFixed(2)} USDC</span>
              </div>
            </div>
          </div>
        </div>

        <Button 
          className="w-full h-12 text-base font-semibold mb-6"
          style={{ background: 'var(--gradient-primary)' }}
        >
          Pay {totalAmount.toFixed(2)} USDC
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg">
          <ShieldCheck className="w-4 h-4" />
          <p>Payment will be processed through a secure smart contract.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
