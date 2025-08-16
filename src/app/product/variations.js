import { useEffect } from "react";

const groupByType = (arr) =>
  arr.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

const VariationSection = ({
  type,
  values,
  activeVariations,
  setActiveVariations,
}) => {
  const isActive = (id) => activeVariations.includes(id);

  const handleSelect = (id, type) => {
    setActiveVariations((prev) => {
      const filtered = prev.filter((varId) => {
        const item = values.find((v) => v.id === varId);
        return item?.type !== type;
      });
      return [...filtered, id];
    });
  };

  if (type === "Color") {
    return (
      <div className="flex items-center">
        <h5 className="text-lg font-semibold me-2">{type}:</h5>
        <div className="space-x-2 flex">
          {values.map(({ id, value }) => {
            const active = isActive(id);
            const isBlackColor =
              value.toLowerCase() === "#000000" ||
              value.toLowerCase() === "black" ||
              value === "#000";
            const ringColor = active
              ? isBlackColor
                ? "ring-gray-400" // fallback ring if the color itself is black
                : "ring-black"
              : "ring-gray-200";
            return (
              <button
                key={id}
                onClick={() => handleSelect(id, type)}
                className={`size-8 rounded-full ring-2 transition-all duration-200 ${ringColor}`}
                title={value.charAt(0).toUpperCase() + value.slice(1)}
                style={{ backgroundColor: value }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Default (Size, Material, etc.)
  return (
    <div className="flex items-center mb-3">
      <h5 className="text-lg font-semibold me-2">{type}:</h5>
      <div className="space-x-1">
        {values.map(({ id, value }) => (
          <button
            key={id}
            onClick={() => handleSelect(id, type)}
            className={`px-3 py-1 rounded-md text-sm font-medium border transition-all duration-200 ${
              isActive(id)
                ? "bg-black text-white border-black"
                : "bg-orange-500/5 text-black hover:bg-black hover:text-white border-transparent"
            }`}
          >
            {value.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

const VariationsGrid = ({
  variations,
  activeVariations,
  setActiveVariations,
}) => {
  const groupedVariations = groupByType(variations);

  // Set default selected variation for each type
  useEffect(() => {
    const defaults = Object.values(groupedVariations).map(
      (group) => group[0]?.id
    );
    setActiveVariations(defaults);
  }, [variations]);

  return (
    <div className="grid grid-cols-1 gap-6 mt-4">
      {Object.entries(groupedVariations).map(([type, values]) => (
        <VariationSection
          key={type}
          type={type}
          values={values}
          activeVariations={activeVariations}
          setActiveVariations={setActiveVariations}
        />
      ))}
    </div>
  );
};

export default VariationsGrid;

// import Link from "next/link";

// const groupByType = (arr) =>
//   arr.reduce((acc, item) => {
//     if (!acc[item.type]) acc[item.type] = [];
//     acc[item.type].push(item);
//     return acc;
//   }, {});

// const VariationSection = ({ type, values }) => {
//   if (type === "Color") {
//     return (
//       <div className="flex items-center">
//         <h5 className="text-lg font-semibold me-2">{type}:</h5>
//         <div className="space-x-2">
//           {values.map(({ id, value }) => (
//             <Link
//               key={id}
//               href="#"
//               className={`size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 inline-flex align-middle`}
//               title={value.charAt(0).toUpperCase() + value.slice(1)}
//               style={{ backgroundColor: value }} // inline style for colors
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Default for Size, Material, Style
//   return (
//     <div className="flex items-center">
//       <h5 className="text-lg font-semibold me-2">{type}:</h5>
//       <div className="space-x-1">
//         {values.map(({ id, value }) => (
//           <Link
//             key={id}
//             href="#"
//             className="px-2 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-black text-black hover:text-white"
//           >
//             {value.toUpperCase()}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const VariationsGrid = ({ variations,activeVariations,setActiveVariations }) => {
//   const groupedVariations = groupByType(variations);

//   return (
//     <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
//       {Object.entries(groupedVariations).map(([type, values]) => (
//         <VariationSection key={type} type={type} values={values} />
//       ))}
//     </div>
//   );
// };

// export default VariationsGrid;
