import { useState } from "react";

export default function Tabs() {

  const [billingCycle, setBillingCycle] = useState('monthly');
  
  return (
    <div className="mt-6 inline-flex items-center p-1 bg-gray-800 rounded-lg">
      <button
        onClick={() => setBillingCycle('monthly')}
        className={`px-4 py-2 rounded-md ${billingCycle === 'monthly'
          ? 'bg-red-600 text-white'
          : 'text-gray-400'
          }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingCycle('annually')}
        className={`px-4 py-2 rounded-md ${billingCycle === 'annually'
          ? 'bg-red-600 text-white'
          : 'text-gray-400'
          }`}
      >
        Annualy
      </button>
    </div>
  )
}
