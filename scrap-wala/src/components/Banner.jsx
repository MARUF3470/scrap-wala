import img from "../assets/ruined-vehicles-russian-s-war-ukraine.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={img} className="w-full h-screen" alt="Scrap Banner" />
      </div>
      <div className="absolute top-80 right-[355px]">
        <h1 className="text-5xl font-bold text-white">
          Your Scrap is Our Treasure
        </h1>
        <p className="text-white text-center mt-4">
          Buys and Sells scrap materials like paper, plastic, metals, and other
          recyclable items
        </p>
      </div>
    </div>
  );
};

export default Banner;
