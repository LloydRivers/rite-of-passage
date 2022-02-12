import React from "react";

function Services() {
  return (
    <div className="grid service global-width j-c-s-b col-3">
      <div className="m-auto mt-8 max-w-sm  rounded-lg overflow-hidden shadow-lg p-4">
        <img
          className="wp-full"
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <div px-6 py-4>
          <h1 className="font-bold text-xl mb-2">Patient care.</h1>
          <p className="text-grey-700 text-base">
            Patient care refers to the prevention, treatment, and management of
            illness and the preservation of physical and mental well-being
            through services offered by health professionals.
          </p>
        </div>
      </div>
      <div className="m-auto mt-8 max-w-sm  rounded-lg overflow-hidden shadow-lg p-4">
        <img
          className="wp-full"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        />
        <div px-6 py-4>
          <h1 className="font-bold text-xl mb-2">Clinical Research.</h1>
          <p className="text-grey-700 text-base line-clamping">
            Clinical research is a branch of healthcare science that determines
            the safety and effectiveness (efficacy) of medications, devices,
            diagnostic products and treatment regimens...
          </p>
        </div>
      </div>
      <div className="m-auto mt-8 max-w-sm  rounded-lg overflow-hidden shadow-lg p-4">
        <img
          className="wp-full"
          src="https://images.unsplash.com/photo-1557825835-a526494be845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <div px-6 py-4>
          <h1 className="font-bold text-xl mb-2">Patient data</h1>
          <p className="text-grey-700 text-base">
            Patient data is medical information held about an individual
            patient. Patient data may include information relating to their past
            and current health or illness
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
