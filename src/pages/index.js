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
  ExpCard
} from "@/components"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Diego Mamani | System Engenier</title>
        <meta
          name="description"
          content="Discover my expertise in creating dynamic web experiences using technologies such as React, JavaScript, HTML and CSS. Dive into my projects that reflect my dedication, creativity and continuous learning as a development student."
        />
        <meta name="author" content="Diego F. Mamani Q." />
        <meta name="theme-color" content="#3F275C" />
        
        <meta name="googlebot" content="notranslate" />
         
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
          <ExpCard/>        
          <TimeCard />
          <Skills />  
        </div>
      </motion.div>
    </>
  );
}
