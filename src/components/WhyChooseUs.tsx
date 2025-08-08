const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl flex lg:flex-nowrap flex-wrap items-center gap-4 mx-auto  sm:items-start w-full">
        <h1 className="text-left lg:w-auto w-full leading-snug lg:text-5xl text-3xl  font-bold mr-2 mb-3">
          Why Choose Us
        </h1>
        {/* <h1 className="lg:text-6xl text-3xl w-full font-bold lg:hidden block">
          Why Choosing Us
        </h1> */}
        <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6">
          {/* item 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Luxury facilities</h3>
            <p className="text-gray-500">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
            <button className="cursor-pointer text-primary flex gap-2 items-center">
              More info
              <span className="text-sm text-primary">→</span>
            </button>
          </div>
          {/* item 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Affordable Price</h3>
            <p className="text-gray-500">
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <button className="cursor-pointer text-primary flex gap-2 items-center">
              More info
              <span className="text-sm text-primary">→</span>
            </button>
          </div>
          {/* item 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Many Choices</h3>
            <p className="text-gray-500">
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <button className="cursor-pointer text-primary flex gap-2 items-center">
              More info
              <span className="text-sm text-primary">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
