import { FC } from "react";

interface LineGradientProps {
  width: string;
}

const LineGradient: FC<LineGradientProps> = ({ width }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;
