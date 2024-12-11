import Head from "next/head";
import { motion } from "framer-motion";
import {
  AboutCard,
  BirthdayCard, 
  EmailCard,
  EnglishCard, 
  GithubCard,
  LanguagueCard,
  LinkedinCard, 
  ProjectsCard,
  Skills, 
  ThemeCard,
  TimeCard,
  TwitterCard,
<<<<<<< HEAD
  ExpCard
=======
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
} from "@/components"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Diego Mamani | System Engenier</title>
<<<<<<< HEAD
=======
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
        <meta
          name="description"
          content="Discover my expertise in creating dynamic web experiences using technologies such as React, JavaScript, HTML and CSS. Dive into my projects that reflect my dedication, creativity and continuous learning as a development student."
        />
<<<<<<< HEAD
        <meta name="author" content="Diego F. Mamani Q." />
        <meta name="theme-color" content="#3F275C" />
        
        <meta name="googlebot" content="notranslate" />
=======
        <meta name="googlebot" content="notranslate" />
        <meta name="author" content="Diego Mamani" />
        
        <meta name="creator" content="Diego Mamani" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />

        <meta property="og:title" content="Diego Mamani | System Engenier" />
        <meta
          property="og:description"
          content="Discover my expertise in creating dynamic web experiences using technologies such as React, JavaScript, HTML and CSS. Dive into my projects that reflect my dedication, creativity and continuous learning as a development student."
        />
        
        {/*         
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="DiegoFmq" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qwerty28" />
        <meta name="twitter:creator" content="@qwerty28" />
        <meta
          name="twitter:title"
          content="Diego Mamani | System Engenier"
        /> 
        */}
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
         
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutCard />
          <LanguagueCard />
          <ThemeCard />
          <BirthdayCard />
          <LinkedinCard />
          <ProjectsCard />          
          <GithubCard />
          <TwitterCard />
          <EmailCard />
          <EnglishCard />
<<<<<<< HEAD
          <ExpCard/>        
          <TimeCard />
          <Skills />  
=======
          <TimeCard />
          <Skills />          
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
        </div>
      </motion.div>
    </>
  );
}
