import React from 'react'
import landingPageData from './constants/WebData'
const Features = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
        FinanceMaster Features
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
      Easily log and categorize expenses while tracking personalized savings targets to manage your finances efficiently.
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      {landingPageData.features.map ((data)=>(
      <div  key={data.id} className="p-2 items-center before: sm:w-1/2 w-full">
        <div  className="bg-gray-300 rounded-full flex p-4 h-full items-center ">
         {data.icon}
          <span className="title-font font-medium">
           {data.title}
          </span>
        </div>
      </div>
      ))}
     </div>
  </div>
</section>
  )
}

export default Features