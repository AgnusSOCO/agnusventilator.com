import React from 'react';
import { Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    title: 'Phone',
    details: [
      '+1 (555) 123-4567',
      '+1 (555) 987-6543'
    ]
  },
  {
    icon: <Mail className="w-5 h-5 text-blue-600" />,
    title: 'Email',
    details: [
      'contact@agnus.com',
      'support@agnus.com'
    ]
  },
  {
    icon: <MapPin className="w-5 h-5 text-blue-600" />,
    title: 'Address',
    details: [
      '222 Park Avenue',
      'Midtown Manhattan',
      'New York, NY 10017'
    ]
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    title: 'Hours',
    details: [
      'Mon-Fri: 9:00 AM - 6:00 PM',
      'Sat: 9:00 AM - 1:00 PM'
    ]
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for product inquiries,
            technical support, or collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Office Location */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6" />
                <h4 className="text-lg font-semibold">Headquarters</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Our headquarters is located in the heart of New York City,
                from where we provide service and support across the United States.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>New York, NY, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;