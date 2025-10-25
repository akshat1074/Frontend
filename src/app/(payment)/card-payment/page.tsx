"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [oneTimePurchase, setOneTimePurchase] = useState(true);

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const masked = numbers.slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    return masked;
  };

  const formatExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + "/" + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(e.target.value);
    setExpiryDate(formatted);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, "");
    setCvv(numbers.slice(0, 3));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-foreground mb-8">Payment</h1>

        {/* Credit Card Visual */}
        <div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 mb-8 text-white"
          style={{ boxShadow: 'var(--shadow-elevated)' }}
        >
          <div className="flex justify-between items-start mb-8">
            <div className="text-sm font-medium">Credit Card</div>
            <div className="text-sm font-medium">Bank Name</div>
          </div>
          
          <div className="w-12 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded mb-6"></div>
          
          <div className="text-xl tracking-wider font-mono mb-1">
            {cardNumber || "1234 5678 9012 3456"}
          </div>
          <div className="text-xs text-gray-400 mb-4">0123</div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm">{customerName || "Name Surname"}</div>
            <div className="text-xs text-gray-400">
              VALID<br/>THRU •• {expiryDate || "01/80"}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="cardNumber" className="text-foreground mb-2 block">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="•••• •••• •••• ••••"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="bg-secondary border-0 h-12"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry" className="text-foreground mb-2 block">Expiry Date</Label>
              <Input
                id="expiry"
                placeholder="01/80"
                value={expiryDate}
                onChange={handleExpiryChange}
                className="bg-secondary border-0 h-12"
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-foreground mb-2 block">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                className="bg-secondary border-0 h-12"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="customerName" className="text-foreground mb-2 block">Customer Name</Label>
            <Input
              id="customerName"
              placeholder="Jennifer Jones"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="bg-secondary border-0 h-12"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="oneTime"
              checked={oneTimePurchase}
              onCheckedChange={(checked) => setOneTimePurchase(checked as boolean)}
            />
            <label
              htmlFor="oneTime"
              className="text-sm text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Make a one-time course purchase for a lifetime access
            </label>
          </div>

          <Button 
            className="w-full h-12 text-base font-semibold mt-8"
            style={{ background: 'linear-gradient(135deg, hsl(199, 89%, 48%), hsl(204, 94%, 61%))' }}
          >
            Pay $100
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
