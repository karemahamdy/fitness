

export const StatCard = ({ value, label, subtitle }) => (

  <div className="flex flex-col items-center text-center ">
    <div className="flex items-baseline">
      {value.startsWith('+') ? (
        <>
          <span className="text-orange-500 text-3xl font-bold">{value.charAt(0)}</span>
          <span className="text-3xl font-bold text-orange-500">{value.slice(1)}</span>
          <div className="text-white font-medium mt-1 mx-2">{label}</div>
        </>
      ) : (
          <>
          <span className="text-3xl font-bold text-red-500">{value}</span>
            <div className="text-white font-medium mt-1 mx-2">{label}</div>
          </>
      )}
    </div>
  
    <div className="text-gray-400 text-sm mt-1">{subtitle}</div>
  </div>
);

