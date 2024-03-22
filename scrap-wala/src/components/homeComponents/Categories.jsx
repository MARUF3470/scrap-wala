import { TbHomeSearch } from "react-icons/tb";
import { PiFactoryDuotone } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
const Categories = () => {
  return (
    <div className="py-20 bg-base-200">
      <h4 className="text-center text-3xl font-semibold">Choose Category</h4>
      <div className="flex gap-20 mx-auto w-fit mt-14">
        <div>
          <TbHomeSearch className="text-8xl" />
          <p className="text-center">Home</p>
        </div>
        <div>
          <HiOutlineBuildingOffice2 className="text-8xl" />
          <p className="text-center">Commercial</p>
        </div>
        <div>
          <PiFactoryDuotone className="text-8xl" />
          <p className="text-center">Industry</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
