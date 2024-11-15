import React, { useState } from 'react';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'PRO PLAN',
      description: 'Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!',
      price: '99',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Advanced, Personalized Workout Plans',
        'Comprehensive Nutrition Coaching',
        'Access To Advanced Workout Programs',
        'Body Composition Analysis'
      ],
      color: 'bg-orange-600'
    },
    {
      name: 'CUSTOM PLAN',
      description: 'Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.',
      price: '149',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Fully Customized Workout And Nutrition Plan',
        'Weekly Check-Ins With Your Trainer',
        'Access To All Platform Features',
        'Exclusive Gear Discounts'
      ],
      color: 'bg-red-600'
    },
    {
      name: 'BEGINNER PLAN',
      description: 'Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.',
      price: '49',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Personalized Workout Plans',
        'Basic Nutrition Guidance',
        'Access To Group Fitness Classes'
      ],
      color: 'bg-orange-600'
    }
  ];

  return (
    <setion className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Our <span className="text-red-600">Plans</span>
          </h2>
          <p className="text-gray-400">
            Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
          </p>

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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
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
                  <span className="text-red-400 text-sm font-normal">/USD{billingCycle === 'annually' ? 'Y' : 'T'}</span>
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
      </setion>
  
  );
};

export default PricingPlans;