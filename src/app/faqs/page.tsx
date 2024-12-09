import { Plus } from "lucide-react";

export default function Faqs() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-10">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-customBlue text-center pt-14">
          Questions Looks Here
        </h1>
        <p className="text-center pt-3 lg:pt-4 text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia
          incidunt, reiciendis.
        </p>
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-row-6 lg:grid-rows-3 lg:grid-cols-2 lg:gap-x-6 lg:pt-10 justify-center">
            {/* 1 */}
            <div className="container  bg-customGray px-5 py-5  my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  What types of chairs do you offer?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
            {/* 2 */}
            <div className="container  bg-customGray px-5 py-5 my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  How can we get in touch with you?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
            {/* 3 */}
            <div className="container bg-customGray px-5 py-5 my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  Do your Chairs come with a warranty?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
            <div className="container bg-customGray px-5 py-5  my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  What will be delivered? And when?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
            <div className="container bg-customGray px-5 py-5  my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  Can I try a chair before purchasing?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
            <div className="container bg-customGray px-5 py-5 my-10 rounded-md">
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl lg:text-2xl lg:font-bold">
                  How do I clean and maintain my comforty chair?
                </h1>
                <Plus />
              </div>
              <p className="text-gray-500 text-sm pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                recusandae aperiam quae est modi. Non recusandae consequatur
                aperiam ab iure delectus, facere harum debitis earum modi,
                nesciunt, molestiae sint officia! Dolores, nulla fuga, ex a ea
                beatae quos suscipit distinctio aliquam error magnam, veniam
                sint animi enim recusandae illo perspiciatis at unde optio omnis
                mollitia provident? Fuga rem ratione nobis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
