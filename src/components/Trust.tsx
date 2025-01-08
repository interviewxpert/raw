import React from 'react'

const Trust = () => {
  return (
    <div>
      {/* Trust Section */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-center text-2xl text-gray-400 font-light mb-12">
        OVER 25,000 PROFESSIONALS TRUST INTERVIEWXPERT
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {[
          "Cambrian",
          "CommVault",
          "Crompton",
          "SecLock",
          "Software",
          "Qumni"
        ].map((company) => (
          <div key={company} className="flex items-center justify-center">
            <span className="text-gray-400 font-semibold">{company}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Trust
