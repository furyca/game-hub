const MetacriticRate = ({ rate }: { rate: number }) => {
  const setColor = () => {
    if (rate > 69) {
      return { textColor: "text-[#6dc849]", borderColor: "border-[#6dc84966]" };
    } else if (rate > 49) {
      return { textColor: "text-[#fdca52]", borderColor: "border-[#fdca5266]" };
    }
    return { textColor: "text-[#fc4b37]", borderColor: "border-[#fc4b3766]" };
  };
  return (
    <span
      className={`inline-block text-sm py-[2px] font-bold border rounded min-w-8 text-center leading-normal ${
        setColor().textColor
      } ${setColor().borderColor}`}
    >
      {rate}
    </span>
  );
};

export default MetacriticRate;
