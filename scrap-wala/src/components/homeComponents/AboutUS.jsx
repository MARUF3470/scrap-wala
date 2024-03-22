import aboutImg from "../../assets/image.png";
const AboutUS = () => {
  return (
    <div className="flex items-center  p-10">
      <div className="w-1/2">
        <h3 className="font-semibold text-2xl">About Us</h3>
        <p className="my-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aliquid
          eius mollitia reiciendis tempore incidunt repellat fugit earum
          laboriosam voluptate. Aliquam, eaque temporibus earum excepturi ea
          nulla, iste impedit corporis eligendi quas placeat quia corrupti
          minus? Perferendis iure quia fuga error, quae explicabo eaque aliquam
          aspernatur corrupti iusto quasi iste.
        </p>
        <button className="btn btn-primary btn-wide">Read More</button>
      </div>
      <img className="w-1/2" src={aboutImg} alt="" />
    </div>
  );
};

export default AboutUS;
