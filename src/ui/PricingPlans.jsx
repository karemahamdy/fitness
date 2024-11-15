import Tabs from '../component/Tabs';
import PlansCard from './PlansCard';



export  function PricingPlans() {

  return (
    <setion className="container" id="plans">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Our <span className="text-red-600">Plans</span>
          </h2>
          <p className="text-gray-400">
            Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
          </p>
         <Tabs/>
        </div>
      <PlansCard/>
      </setion>
  
  );
};

export default PricingPlans;