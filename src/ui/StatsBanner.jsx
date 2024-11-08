import { StatCard } from "../component/Card";
import { stats } from "../data/States";


const StatsBanner = () => {

  return (
    <div className="w-full  py-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;