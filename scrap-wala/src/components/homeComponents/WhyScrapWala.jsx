import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import { TbStars } from "react-icons/tb";
const WhyScrapWala = () => {
  return (
    <div className="py-10">
      <h4 className="text-center text-4xl font-semibold mb-10">
        Why ScrapWala?
      </h4>
      <div className="w-2/3 mx-auto grid grid-cols-2 gap-10">
        <div className="rounded-sm bg-gray-100 flex items-center p-5 gap-5 text-gray-600">
          <HiOutlineUserGroup className="w-48 h-48" />
          <div>
            <h4 className="text-3xl font-bold">Expart Team</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officia.
            </p>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100 flex items-center p-5 gap-5 text-gray-600">
          <BiSupport className="w-48 h-48" />
          <div>
            <h4 className="text-3xl font-bold">Dedicated Agent</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officia.
            </p>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100 flex items-center p-5 gap-5 text-gray-600">
          <GiPayMoney className="w-48 h-48" />
          <div>
            <h4 className="text-3xl font-bold">Instant Payment</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officia.
            </p>
          </div>
        </div>
        <div className="rounded-sm bg-gray-100 flex items-center p-5 gap-5 text-gray-600">
          <TbStars className="w-48 h-48" />
          <div>
            <h4 className="text-3xl font-bold">Rating</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyScrapWala;
