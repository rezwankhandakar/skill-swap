

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import HeroSlider from '../Component/HeroSlider';


// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="bg-gray-50 text-gray-800">

//       <HeroSlider></HeroSlider>

//       {/* Popular Skills Section */}
//       <section className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//           Popular Skills
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* Skill Card */}
//           {[
//             { id: 1, img: "https://i.postimg.cc/wxZsckw2/webdev.png", title: "Web Development", rating: 4.8, price: 25 },
//             { id: 2, img: "https://i.postimg.cc/4dmRxpVR/graphicdesign.png", title: "Graphic Design", rating: 4.6, price: 20 },
//             { id: 3, img: "https://i.postimg.cc/6QZxN9y7/digitalmarketing.png", title: "Digital Marketing", rating: 4.7, price: 15 },
//             { id: 4, img: "https://i.postimg.cc/fT4dkQpf/photography.png", title: "Photography", rating: 4.9, price: 30 },
//             { id: 5, img: "https://i.postimg.cc/T2v4Mg1X/guitar.png", title: "Guitar Lessons", rating: 4.5, price: 10 },
//             { id: 6, img: "https://i.postimg.cc/Qts3zyZp/english.png", title: "Spoken English", rating: 4.6, price: 12 }
//           ].map(skill => (
//             <div key={skill.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in">
//               <img src={skill.img} alt={skill.title} className="w-24 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{skill.title}</h3>
//               <p className="text-center text-gray-500 mb-3">Rating: ⭐ {skill.rating}</p>
//               <p className="text-center text-blue-600 font-semibold mb-3">${skill.price} / session</p>
//               <Link to={`/skills/${skill.id}`} className="block text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Top Rated Providers Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-700 mb-10">Top Rated Providers</h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "Alex Martin", skill: "Guitar Lessons", rating: 4.9, img: "https://i.postimg.cc/43nD1FZr/user1.png" },
//               { name: "Sara Hossain", skill: "Spoken English", rating: 4.8, img: "https://i.postimg.cc/7hb9TvXG/user2.png" },
//               { name: "John Lee", skill: "Photography", rating: 4.9, img: "https://i.postimg.cc/0jZ9jv2n/user3.png" }
//             ].map((p, i) => (
//               <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition" data-aos="fade-up">
//                 <img src={p.img} alt={p.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
//                 <h3 className="font-semibold text-lg">{p.name}</h3>
//                 <p className="text-gray-500">{p.skill}</p>
//                 <p className="text-yellow-500 font-semibold mt-2">⭐ {p.rating}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="max-w-6xl mx-auto px-6 py-16 text-center">
//         <h2 className="text-3xl font-bold text-blue-700 mb-10">How It Works</h2>
//         <div className="grid md:grid-cols-4 gap-8">
//           {[
//             { step: "1️⃣", title: "Sign Up", text: "Create your SkillSwap account for free." },
//             { step: "2️⃣", title: "Browse Skills", text: "Explore hundreds of local and online skills." },
//             { step: "3️⃣", title: "Book Session", text: "Pick a slot and connect with a provider." },
//             { step: "4️⃣", title: "Learn & Teach", text: "Share knowledge and grow together!" }
//           ].map((item, index) => (
//             <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-up">
//               <h3 className="text-4xl mb-3">{item.step}</h3>
//               <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
//               <p className="text-gray-500">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Extra Section: Testimonials */}
//       <section className="bg-blue-50 py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Users Say</h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-right">
//               <p className="text-gray-600 italic">“SkillSwap helped me learn guitar in just a month! The platform is super easy to use.”</p>
//               <h4 className="mt-4 font-semibold text-blue-700">— Rafi Khan</h4>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-left">
//               <p className="text-gray-600 italic">“I started teaching English here and met so many amazing learners!”</p>
//               <h4 className="mt-4 font-semibold text-blue-700">— Sarah Ahmed</h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="max-w-5xl mx-auto text-center px-6" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-4">Ready to Exchange Your Skills?</h2>
//           <p className="text-blue-100 mb-6">Join thousands of learners and mentors on SkillSwap today!</p>
//           <Link to="/register" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
//             Get Started
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import HeroSlider from '../Component/HeroSlider';

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // JSON থেকে ডেটা লোড
    fetch('/SkillListing.json')
      .then(res => res.json())
      .then(data => {
        setSkills(data);

        // Top Rated Providers হিসেবে আলাদা করি
        const topProviders = data.map(skill => ({
          name: skill.providerName,
          skill: skill.skillName,
          rating: skill.rating,
          img: skill.image
        }));
        setProviders(topProviders);
      })
      .catch(err => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">

      <HeroSlider />

      {/* Popular Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Popular Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(skill => (
            <div key={skill.skillId} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in">
              <img src={skill.image} alt={skill.skillName} className="w-24 h-24 mx-auto mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{skill.skillName}</h3>
              <p className="text-center text-gray-500 mb-3">Rating: ⭐ {skill.rating}</p>
              <p className="text-center text-blue-600 font-semibold mb-3">${skill.price} / session</p>
              <Link to={`/details/${skill.skillId}`} className="block text-center bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
  View Details
</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Providers Section */}
<section className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-blue-700 mb-10">Top Rated Providers</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {providers.slice(0, 3).map((p, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition" data-aos="fade-up">
          <img src={p.img} alt={p.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg">{p.name}</h3>
          <p className="text-gray-500">{p.skill}</p>
          <p className="text-yellow-500 font-semibold mt-2">⭐ {p.rating}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* বাকি অংশ যেমন How It Works, Testimonials, CTA এখানে আগের মতো রাখবে */}
      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
       <h2 className="text-3xl font-bold text-blue-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
           {[
            { step: "1️⃣", title: "Sign Up", text: "Create your SkillSwap account for free." },
            { step: "2️⃣", title: "Browse Skills", text: "Explore hundreds of local and online skills." },
            { step: "3️⃣", title: "Book Session", text: "Pick a slot and connect with a provider." },
            { step: "4️⃣", title: "Learn & Teach", text: "Share knowledge and grow together!" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-up">
              <h3 className="text-4xl mb-3">{item.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section: Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Users Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-right">
              <p className="text-gray-600 italic">“SkillSwap helped me learn guitar in just a month! The platform is super easy to use.”</p>
              <h4 className="mt-4 font-semibold text-blue-700">— Rafi Khan</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-left">
              <p className="text-gray-600 italic">“I started teaching English here and met so many amazing learners!”</p>
              <h4 className="mt-4 font-semibold text-blue-700">— Sarah Ahmed</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Exchange Your Skills?</h2>
          <p className="text-blue-100 mb-6">Join thousands of learners and mentors on SkillSwap today!</p>
          <Link to="/register" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;



