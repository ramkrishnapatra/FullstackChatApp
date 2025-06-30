import { useState } from "react";
import { Mail, Send, Users, Zap, ShieldCheck, Lock } from "lucide-react";
import Marquee from "react-fast-marquee";

const LandingPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-base-content">
      {/* Header */}
      <header className="bg-base-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Talkify</h1>
          <a
            href="/signup"
            className="btn btn-primary rounded-full px-6 text-white hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

        
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Real-Time Chat, Built for You</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Talkify is a modern chat app designed to connect people instantly. Built by passionate students from MCKV College.
        </p>
        <a
          href="#features"
          className="btn btn-accent text-base-100 font-semibold px-6 py-2 rounded-full hover:brightness-110"
        >
          Explore Features
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Why Choose Talkify?</h3>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Zap className="mx-auto text-primary" size={40} />
              <h4 className="text-xl font-semibold mt-4">Real-Time Messaging</h4>
              <p className="mt-2 text-sm">Experience blazing-fast communication using socket.io & WebSockets.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Mail className="mx-auto text-primary" size={40} />
              <h4 className="text-xl font-semibold mt-4">Secure & Reliable</h4>
              <p className="mt-2 text-sm">Your messages are protected with end-to-end security.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <ShieldCheck className="mx-auto text-primary" size={40} />
              <h4 className="text-xl font-semibold mt-4">Built for Students</h4>
              <p className="mt-2 text-sm">Crafted by dedicated students as a proud representation of MCKV College.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Lock className="mx-auto text-primary" size={40} />
              <h4 className="text-xl font-semibold mt-4">JWT Authentication</h4>
              <p className="mt-2 text-sm">Keep your sessions safe and secure using JSON Web Tokens (JWT).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Meet the Developers</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Soham Sarkar", role: "Backend & UX Designer", img: "https://randomuser.me/api/portraits/men/1.jpg" },
              { name: "Ramkrishna Patra", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/2.jpg" },
              { name: "Ankan Das", role: "Backend Developer", img: "https://randomuser.me/api/portraits/men/3.jpg" },
              { name: "Abhijit Dey", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/4.jpg" },
              { name: "Shevani Nandi", role: "React Developer", img: "https://randomuser.me/api/portraits/women/1.jpg" },
              { name: "Arkadip Ghosh", role: "Database Manager", img: "https://randomuser.me/api/portraits/men/5.jpg" },
              { name: "Sougata Bhattacharya", role: "Database Manager", img: "https://randomuser.me/api/portraits/men/6.jpg" },
              { name: "Dwaipayan Chanda", role: "Database Manager", img: "https://randomuser.me/api/portraits/men/7.jpg" },
            ].map((dev, idx) => (
              <div key={idx} className="w-64 p-6 rounded-xl shadow bg-base-200 hover:scale-105 transition duration-300">
                <img src={dev.img} alt={dev.name} className="rounded-full w-20 h-20 mx-auto mb-4" />
                <h4 className="text-xl font-semibold">{dev.name}</h4>
                <p className="text-sm text-base-content/70">{dev.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-base-content/50">Project by students of MCKV Institute of Engineering</p>
        </div>
      </section>

      {/* Tech Stack - Animated Logos */}
      <section className="py-20 bg-neutral text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Tech Stack</h3>
          <Marquee gradient={false} speed={50} pauseOnHover>
            <div className="flex gap-20 items-center">
              {[{
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg", alt: "Socket.io" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JWT" },
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="h-12 hover:scale-110 transition duration-300 cursor-pointer"
                    title={tech.alt}
                  />
                  <span className="text-sm mt-1">{tech.alt}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-base-100">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              rows={4}
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              <Send size={16} className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-200 text-center py-6 text-sm text-base-content/60">
        &copy; {new Date().getFullYear()} Talkify. Built with ❤️ by MCKV College Team.
      </footer>
    </div>
  );
};

export default LandingPage;
