import banner from "./Vwazen.png";

const ThankYou = () => {
  return (
    <div className="relative isolate">
      <div>
        <h1 className="text-3xl font-bold text-center py-12 px-12">
          Thank you for contacting Studio Vwazen!
        </h1>
        <div className="text-center text-2xl pb-12 px-12">
          Lyndy will reach out to you as soon as possible. For all other
          inquires, send an email to lyndy@vwazen.com.
        </div>
        <img className="w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default ThankYou;
