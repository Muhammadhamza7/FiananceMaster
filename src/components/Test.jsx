import React from 'react'
import  landingPageData from "./constants/WebData"

const Test = () => {
  return (
    <section className="text-gray-600 body-font">
    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            FinanceMaster Reviews
          </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {landingPageData.testimonials.map((data)=>(
          <div key={data.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={data.avatar}
              />
              <p className="leading-relaxed line-clamp-2">
               {data.feedback}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {data.name}
              </h2>
              <p className="text-gray-500">{data.post}</p>
            </div>
          </div>
           ))}
          
        </div>
      </div>
    </section>
    
  )
}

export default Test