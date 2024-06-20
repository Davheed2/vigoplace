import { Skeleton } from "./ui/skeleton";
import { SkeletonPicsProps } from "@/Interface/Skeletons";

const SkeletonPics: React.FC<SkeletonPicsProps> = ({ width, height}) => {
  return (
    <div>
      <Skeleton
        className={`w-[${width}px] h-[${height}px]`}
        //style={{ width: `${width}px`, height: `${height}px` }} // Adding inline styles as a fallback
      />
    </div>
  );
};

export default SkeletonPics;
