'use client'

export default function TrustedClients() {
  return (
    <div className="mt-6">
      <h2 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        They trusted me
      </h2>
      <div className="relative overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {/* logos */}
            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            {/* Deuplicated logos */}

            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            <img src="/static/images/logos/airbus.svg" alt="Airbus" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/veracyte.png" alt="Veracyte" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/IBM.png" alt="IBM" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/AMU.jpg" alt="AMU" className="h-10 opacity-80 transition mx-8" />
            <img src="/static/images/logos/neurosys.jpg" alt="Neuro-Sys" className="h-10 opacity-80 transition mx-8" />

            
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
          will-change: transform;
        }
        div[overflow-hidden] {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
