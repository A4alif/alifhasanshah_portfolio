import React from "react";

const ContactInfoCard = () => {
  return (
    <div>
      <div className="container mx-auto px-6 mt-24 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <img
                  className="w-24 h-24"
                  src="https://i.postimg.cc/KYfQxVLZ/home3d.png"
                  alt=""
                />
              </h2>
              <p className="text-lg  mt-6">Bashundhara Residentail Area,</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <img
                  className="w-24 h-24"
                  src="https://i.postimg.cc/7LwmvD5s/gmail3d.png"
                  alt=""
                />
              </h2>
              <p className="text-lg  mt-6">
                Email:{" "}
                <span className="font-semibold ">
                  alifhasanshah.dev@gmail.com
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <img
                  className="w-24 h-24"
                  src="https://i.postimg.cc/RVBtpqrt/Whatsapp.png"
                  alt=""
                />
              </h2>
              <p className="text-lg  mt-6">
                Whatsapp: <span className="font-semibold">+880 1860557666</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-9 md:space-y-0 space-x-8 mt-24">
          <div className="w-full md:w-5/12">
            <div className="card  ">
              <div className="card-body">
                <img
                  className=" w-full h-full md:w-[450px] md:h-[450px] lg:w-[660px] lg:h-[550px]"
                  src="https://i.postimg.cc/pdNH10cY/contact-us.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body ">
                <form>
                  <div className=" w-full px-9 md:px-0 md:w-8/12">
                    <label
                      className="block text-xl mb-4 font-semibold"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="bg-gray-200 w-full px-4 py-2 rounded-xl  focus:outline-none
                        "
                      type="text"
                      name="name"
                      id="name"
                      placeholder="your name"
                    />
                  </div>
                  <div className="w-full px-9 md:px-0 md:w-8/12 mt-9">
                    <label
                      className="block text-xl mb-4 font-semibold"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="bg-gray-200 w-full px-4 py-2 rounded-xl  focus:outline-none
                        "
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your email"
                    />
                  </div>
                  <div className=" w-full px-9 md:px-0 md:w-8/12 mt-9">
                    <label
                      className="block text-xl mb-4 font-semibold"
                      htmlFor="email"
                    >
                      Message
                    </label>
                    <textarea
                      className="bg-gray-200 w-full h-36 focus:outline-none px-4 py-4"
                      name="Message"
                      id="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className=" ml-9 md:ml-0 mt-9">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
