"use client"
import { useState, useEffect } from 'react';
import { ShoppingBag, Truck, CreditCard, Bitcoin, Store, User, ChevronDown, ChevronUp, Check, DollarSign, Clock, Shield, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Feature = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={48} className="text-green-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const CTAButton = ({ children, primary }) => (
  <motion.button 
    className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${primary ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white text-green-500 border-2 border-green-500 hover:bg-green-50'}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 py-4"
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(236, 253, 245, 1)" : "rgba(255, 255, 255, 1)" }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PricingTier = ({ name, price, features, recommended }) => (
  <motion.div 
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${recommended ? 'border-4 border-green-500' : ''}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {recommended && (
      <div className="bg-green-500 text-white text-center py-2 font-semibold">
        Recommended
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-500">/mo</span></p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <CTAButton primary={recommended}>Choose Plan</CTAButton>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md text-center"
    whileHover={{ scale: 1.05 }}
  >
    <Icon size={40} className="text-green-500 mx-auto mb-4" />
    <h3 className="text-3xl font-bold mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md max-w-md"
    whileHover={{ scale: 1.05 }}
  >
    <p className="text-gray-600 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <img src="https://cdn.dribbble.com/users/2698916/screenshots/13934288/delivery_concept_illustration._delivery_by_scooter_concept_illustration-01_4x.jpg"alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Section = ({ id, className, children }) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
          <img
                src="/images/logo/logo.png"
                className="block  h-8 w-auto"
                alt="Workflow"
              />

            {/* <a href="#" className="text-2xl font-bold text-green-500">PayNDeliver</a> */}
            <div className="hidden md:flex space-x-6">
              {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-green-500">{item}</a>
              ))}
            </div>
            <CTAButton primary>Get Started</CTAButton>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionize Your Delivery Business</h1>
              <p className="text-xl mb-6">List your products, reach more customers, and accept both crypto and fiat payments.</p>
              <div className="space-x-4">
                <CTAButton primary>Get Started</CTAButton>
                <CTAButton>Learn More</CTAButton>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/api/placeholder/600/400" alt="Delivery illustration" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </header>

      <Section className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard icon={Store} value="10,000+" label="Businesses Onboarded" />
          <StatCard icon={ShoppingBag} value="1M+" label="Orders Delivered" />
          <StatCard icon={User} value="5M+" label="Happy Customers" />
          <StatCard icon={DollarSign} value="$500M+" label="Total Sales" />
        </div>
      </Section>

      <Section id="features">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PayNDeliver?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Store, title: "Easy Business Onboarding", description: "Create an account and start listing your products in minutes." },
            { icon: ShoppingBag, title: "Expand Your Reach", description: "Connect with a wider customer base and boost your sales." },
            { icon: Truck, title: "Efficient Delivery", description: "Streamlined logistics to ensure quick and reliable deliveries." },
            { icon: CreditCard, title: "Fiat Payments", description: "Accept traditional payment methods for customer convenience." },
            { icon: Bitcoin, title: "Crypto Payments", description: "Embrace the future with cryptocurrency payment options." },
            { icon: User, title: "User-Friendly Experience", description: "Intuitive interface for both businesses and customers." }
          ].map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">How PayNDeliver Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          {[
            { icon: Store, title: "1. List Your Products", description: "Create your store and add your products to our platform." },
            { icon: ShoppingBag, title: "2. Receive Orders", description: "Customers place orders through our user-friendly app." },
            { icon: Truck, title: "3. Deliver Products", description: "Our efficient delivery network ensures timely product delivery." }
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4 mx-auto">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="pricing">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Starter"
            price={29}
            features={[
              "List up to 50 products",
              "Basic analytics",
              "Standard support",
              "5% transaction fee"
            ]}
          />
          <PricingTier
            name="Growth"
            price={79}
            features={[
              "List up to 500 products",
              "Advanced analytics",
              "Priority support",
              "3% transaction fee"
            ]}
            recommended={true}
          />
          <PricingTier
            name="Enterprise"
            price={199}
            features={[
              "Unlimited products",
              "Custom analytics",
              "24/7 dedicated support",
              "1% transaction fee"
            ]}
          />
        </div>
      </Section>

      <Section id="testimonials" className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          <TestimonialCard
            quote="PayNDeliver has transformed our business. The ability to accept both crypto and fiat payments has opened up new markets for us."
            author="Sarah Johnson"
            role="Local Café Owner"
          />
          <TestimonialCard
            quote="As a customer, I love the variety of payment options. It's so convenient to use my preferred payment method for every purchase."
            author="Mark Thompson"
            role="Regular User"
          />
          <TestimonialCard
            quote="The analytics provided by PayNDeliver have helped us optimize our delivery routes and significantly reduce costs."
            author="Emily Chen"
            role="Logistics Manager"
          />
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: DollarSign, title: "Increased Revenue", description: "Expand your customer base and boost sales with our platform." },
            { icon: Clock, title: "Time Savings", description: "Streamline your operations with our efficient delivery system." },
            { icon: Shield, title: "Secure Transactions", description: "Enjoy peace of mind with our robust payment security measures." },
            { icon: Star, title: "Customer Satisfaction", description: "Improve customer experience with reliable and fast deliveries." }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <benefit.icon size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      <Section id="faq" className="bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "How do I sign up as a business?",
              answer: "Signing up is easy! Click the 'Get Started' button, choose 'Business Account', and follow the simple registration process. You'll be able to list your products in no time."
            },
            {
              question: "What cryptocurrencies do you support?",
              answer: "We currently support Bitcoin, Ethereum, and several other major cryptocurrencies. We're always working on expanding our supported currencies."
            },
            {
              question: "How does the delivery process work?",
              answer: "Once an order is placed, you'll receive a notification. You can then prepare the order and our system will match it with an available delivery driver in your area."
            },
            {
              question: "Are there any transaction fees?",
              answer: "We charge a small transaction fee on each order. The exact fee depends on your chosen plan. Check our pricing section for more details."
            },
            {
              question: "Can I integrate PayNDeliver with my existing e-commerce platform?",
              answer: "Yes, we offer API integrations for popular e-commerce platforms. Our team can assist you with the integration process to ensure a smooth transition."
            }
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join our platform today and take your delivery business to the next level.</p>
          <CTAButton>Sign Up Now</CTAButton>
        </div>
      </Section>

      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">PayNDeliver</h3>
              <p>Revolutionizing the delivery industry</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              {['About', 'Contact', 'Terms', 'Privacy', 'Blog', 'Careers'].map((item) => (
                <a key={item} href="#" className="hover:text-green-400">{item}</a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} PayNDeliver. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}