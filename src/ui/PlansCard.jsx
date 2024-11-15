import { Plans } from '../data/Plans';

export default function PlansCard() {
  return (

    <div className="grid md:grid-cols-3 gap-8">

      {Plans.map((plan) => (
        <div
          key={plan.name}
          className="relative  rounded-lg p-8 border border-orange-700  flex flex-col h-full"
        >
          <div className="text-center flex-1 flex flex-col justify-between">
            <div className="text-red-400 mb-4">Package</div>
            <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
            <p className="text-gray-100 text-sm mb-6">{plan.description}</p>

            <div className="text-white text-4xl font-bold mb-6">
              {plan.price}$
              <span className="text-red-400 text-sm font-normal">/USD</span>
            </div>

            <div className="text-red-400 mb-4">Features</div>
            <ul className="text-sm text-red-400 space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-lg text-white font-medium ${plan.color} hover:opacity-90 transition-opacity`}>
              Choose This Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
