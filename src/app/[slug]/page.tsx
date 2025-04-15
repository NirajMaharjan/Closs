// this will be a server side component but there is a separate image section to change the images on click
// so separate client side compinent ProductImages

import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Add from "@/components/Add"



const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="h-[2px] bg-gray-100"></div>

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$50</h3>
          <h2 className="font-medium text-2xl">$45.5</h2>
        </div>

        <div className="h-[2px] bg-gray-100"></div>

        <CustomizeProducts></CustomizeProducts>
        <Add />

      </div>
    </div>
  );
};

export default SinglePage;
