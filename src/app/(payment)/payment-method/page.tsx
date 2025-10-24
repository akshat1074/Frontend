"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Building2, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentOption } from "@/components/PaymentOptions";

import Image from "next/image";

const PaymentMethod = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string>("bank");

  const handleNext = () => {
    if (selectedMethod === "crypto") {
      router.push("/connect-wallet");
    } else if (selectedMethod === "card") {
      router.push("/card-payment");
    } else {
      router.push("/payment-details");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Illustration */}
        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elevated)' }}>
           <Image
            src="/crypto-illustration.jpeg"
            alt="null"
            width={25}
            height={25}/>
            <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-sm p-6 rounded-xl" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h2 className="text-2xl font-bold text-foreground mb-2">COURSE DETAILS</h2>
              <p className="text-muted-foreground">Web3 Identity and Decentralized Authentication</p>
            </div>
          </div>
        </div>

        {/* Right side - Payment selection */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <CreditCard className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Choose payment method</h1>
            <p className="text-muted-foreground">Select how you'd like to complete your purchase</p>
          </div>

          <div className="space-y-4 mb-8">
            <PaymentOption
              icon={<CreditCard className="w-6 h-6 text-accent" />}
              title="Card payment"
              description="Pay with debit/credit card"
              selected={selectedMethod === "card"}
              onClick={() => setSelectedMethod("card")}
            />

            <PaymentOption
              icon={<Building2 className="w-6 h-6 text-accent" />}
              title="Bank Transfer"
              description="Pay with bank transfer"
              selected={selectedMethod === "bank"}
              onClick={() => setSelectedMethod("bank")}
            />

            <PaymentOption
              icon={<Bitcoin className="w-6 h-6 text-accent" />}
              title="Crypto payment"
              description="Pay with USDC or USDT stablecoins"
              selected={selectedMethod === "crypto"}
              onClick={() => setSelectedMethod("crypto")}
            />
          </div>

          <Button 
            onClick={handleNext}
            className="w-full h-12 text-base font-semibold"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;