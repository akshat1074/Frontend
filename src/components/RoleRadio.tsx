import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const RoleRadio = () => {
  return (
    <div>
      <p className='text-base pb-2'>Select your role</p>
    <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Learner</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Educator</Label>
    </div>
  </RadioGroup>
  </div>
  )
}

export default RoleRadio