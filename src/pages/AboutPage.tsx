import React from 'react';
import { Award, Users, Globe, Truck } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize online shopping' },
    { year: '2019', title: '10K Customers', description: 'Reached our first major milestone of 10,000 happy customers' },
    { year: '2020', title: 'Global Expansion', description: 'Expanded operations to serve customers worldwide' },
    { year: '2021', title: 'Sustainability Focus', description: 'Launched our eco-friendly product line and carbon-neutral shipping' },
    { year: '2022', title: '1M Products Sold', description: 'Celebrated selling over 1 million products globally' },
    { year: '2023', title: 'Innovation Award', description: 'Received industry recognition for innovative e-commerce solutions' },
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Happy Customers' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: Truck, value: '99.9%', label: 'On-Time Delivery' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          About EStore
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We're passionate about creating exceptional shopping experiences that connect people 
          with products they love. Our mission is to make quality, sustainability, and innovation 
          accessible to everyone, everywhere.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Company Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Founded in 2018 with a simple yet powerful vision: to create an online shopping 
                experience that puts customers first. We started as a small team of passionate 
                individuals who believed that e-commerce could be more personal, more sustainable, 
                and more innovative.
              </p>
              <p>
                Today, we've grown into a global platform serving hundreds of thousands of 
                customers across 50+ countries. But our core values remain the same: quality 
                products, exceptional service, and a commitment to making a positive impact 
                on the world.
              </p>
              <p>
                We carefully curate every product in our catalog, working directly with 
                manufacturers and artisans who share our commitment to quality and sustainability. 
                From cutting-edge technology to timeless fashion, every item tells a story of 
                craftsmanship and care.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Our team working together"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The passionate individuals behind EStore who work tirelessly to bring you 
            the best shopping experience possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key milestones that have shaped our growth and commitment to excellence.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The principles that guide every decision we make and every interaction we have.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Customer First
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every decision we make starts with our customers. Their satisfaction and success is our top priority.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're committed to reducing our environmental impact and promoting sustainable practices.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We constantly push boundaries to create better shopping experiences through technology and creativity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;