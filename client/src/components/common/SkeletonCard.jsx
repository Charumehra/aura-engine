const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
      <div className="h-4 w-28 bg-gray-200 rounded"></div>
      <div className="h-10 w-40 bg-gray-200 rounded mt-4"></div>
    </div>
  );
};

export default SkeletonCard;