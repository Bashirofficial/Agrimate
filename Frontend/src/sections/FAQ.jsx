import React, { useState} from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { pattern }from '../assets/icons'

export const FAQ = () => {
 const  [openQuestionIndex, setOpenQuestionIndex] = useState(null);
 const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
    <img 
        src={ pattern }
        className="absolute z-0"
      />
      <div className='relative z-50'>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
          Your Questions, Our Expertise
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => toggleQuestion(0)}
            >
              <span className="flex text-lg font-semibold text-black">How do I connect with an agriculture expert on Agrimate?</span>

              {openQuestionIndex === 0 ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openQuestionIndex === 0 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                     To connect with an agriculture expert, simply sign up or log in to your Agrimate account. Navigate to the "Discussion" section, where you can post your queries and receive expert advice. 
                     You can also browse through the profiles of our agriculture experts and connect with them directly.
                    </p>
                </div>
            )}
          </div>
          
            <div   
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleQuestion(1)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                Is Agrimate free to use?
                </span>
                {openQuestionIndex === 1 ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
              </button>
              {openQuestionIndex === 1 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                    Yes, Agrimate is free to use for farmers. We offer free access to connect with experts, browse resources, and participate in discussions.
                    </p>
                </div>
                )}
            </div>

            <div   
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleQuestion(2)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                How do I ask a question on Agrimate?
                </span>
                {openQuestionIndex === 2 ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
              </button>
              {openQuestionIndex === 2 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                    To ask a question, log in to your Agrimate account and go to the "Discussion" section. Type your question in the provided field, select a relevant category, and click "Submit." Expert will respond to the same.
                    </p>
                </div>
                )}
            </div>

            <div   
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleQuestion(3)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                How can I contribute to the Agrimate community?
                </span>
                {openQuestionIndex === 3 ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
              </button>
              {openQuestionIndex === 3 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">
                    You can contribute by sharing your own experiences, tips, and insights in our discussion forums. You can also answer questions from other farmers if you have relevant knowledge, helping to build a strong and supportive community.
                    </p>
                </div>
                )}
            </div>
          
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-black hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  )
}

export default FAQ