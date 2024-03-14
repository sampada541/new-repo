import React from 'react';
import Layout from '../components/Layout/Layout';

const ScheduleAppointment = () => {
  return (
    <Layout>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/raj788257/doctor-1"
        style={{
          minWidth: '320px',
          height: '700px',
          margin: '0 auto',
          padding: '20px',
          background: 'linear-gradient(180deg, #0047ab, #000f5e)', // Deep blue ocean gradient
          borderRadius: '0px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <iframe title="Calendly Inline Widget" src="https://calendly.com/raj788257/doctor-1" style={{ width: '100%', height: '100%', border: '0', color: 'linear-gradient(180deg, #0047ab, #000f5e)'}}></iframe>
      </div>
    </Layout>
  );
};

export default ScheduleAppointment;
