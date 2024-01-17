import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { facebook, x, instagram, youtube, linkedin, github, pinterest, snapchat } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // rm0e8RcDptTsyOBI4
    // template_3o6qksx
    // service_y6jngoq

    emailjs
      .send(
        'service_y6jngoq',
        'template_3o6qksx',
        {
          from_name: form.name,
          to_name: "Haseeb",
          from_email: form.email,
          to_email: "haseebdr01@gmail.com",
          message: form.message,
        },
        'rm0e8RcDptTsyOBI4'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          
          <div>
          <a href="https://www.facebook.com/profile.php?id=61555550106486" target="_blank">
          <img src={facebook} alt="FaceBook" className="display: inline-block w-9 h-9 object-contain mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>
         
          <a href="https://twitter.com/HaseebMoheb1" target="_blank">
          <img src={x} alt="X" className="display: inline-block w-9 h-9 object-contain mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          <a href="" target="_blank">
          <img src={instagram} alt="Instagram" className="w-9 h-9 object-contain display: inline-block mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          <a href="https://www.youtube.com/channel/UC1RSMw6xKNbA1grH0ZHrJDA" target="_blank">
          <img src={youtube} alt="YouTube" className="w-9 h-9 object-contain display: inline-block mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          <a href="https://www.linkedin.com/in/haseebullah-moheb-47b17b94/" target="_blank">
          <img src={linkedin} alt="Linkedin" className="display: inline-block w-9 h-9 object-contain mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>
         
          <a href="https://github.com/Haseeb-Moheb" target="_blank">
          <img src={github} alt="Github" className="display: inline-block w-9 h-9 object-contain mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          <a href="https://www.pinterest.com/haseeb1moheb/" target="_blank">
          <img src={pinterest} alt="Pinterest" className="w-9 h-9 object-contain display: inline-block mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          <a href="" target="_blank">
          <img src={snapchat} alt="Snapchat" className="w-9 h-9 object-contain display: inline-block mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></a>

          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
      <EarthCanvas />
      </motion.div>     
      </div>
  );
};

export default SectionWrapper(Contact, "contact");
