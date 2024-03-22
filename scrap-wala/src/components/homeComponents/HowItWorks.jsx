import { GiTakeMyMoney } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCardPickup } from "react-icons/gi";
const HowItWorks = () => {
  return (
    <div className="py-20 bg-base-200">
      <h4 className="text-center text-3xl font-semibold">Choose Category</h4>
      <div className="flex gap-36 mx-auto w-fit mt-14">
        <div>
          <GiCardPickup className="text-8xl" />
          <p className="text-center">Pick Up</p>
        </div>
        <div>
          <CiDeliveryTruck className="text-8xl" />
          <p className="text-center">Garbage Collector</p>
        </div>
        <div>
          <GiTakeMyMoney className="text-8xl" />
          <p className="text-center">Payment</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
