import React, { useState} from 'react'
import Navbar from '../../../components/Layout/Navbar'
import Footer from '../../../components/Layout/Footer'
import HomeSection4 from '../../../components/Layout/HomeSection4'

const AddPortfolioForm = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const stepsLabels = [
        'Title',
        'Job Description',
        'Skills',
        'Budget',
        // Add more step labels as needed
    ];

  return (
    <>
            <Navbar />
            
            <div className="p-8">
                {/* Display the current step at the top */}
                <h2 className="text-xl mb-4">{`Step ${step}/3: Add ${stepsLabels[step - 1]}`}</h2>

                {step === 1 && (
                    <div>
                        <input className="border p-2 w-full mb-4" type="text" placeholder="Enter job title" />
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <textarea className="border p-2 w-full" rows="4" placeholder="Describe the work to be done"></textarea>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <input className="border p-2 w-full mb-4" type="text" placeholder="E.g., JavaScript, React.js, Frontend Development" />
                    </div>
                )}
                {/* {step === 4 && (
                    <div>
                        <input className="border p-2 w-full mb-4" type="text" placeholder="Enter budget details" />
                    </div>
                )} */}
                {/* ... continue with other steps similarly */}
                <div className="flex justify-between mt-4">
                    {step > 1 && <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Back</button>}
                    {step < 3 && <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next: {stepsLabels[step]}</button>}
                    {/* Replace '5' with the number of your last step */}
                </div>
            </div>
            <Footer />
        </>
  )
}

export default AddPortfolioForm
