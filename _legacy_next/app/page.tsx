'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Github, Linkedin, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Simulated config from legacy config.yml
const profile = {
  name: "Gauransh Kumar",
  role: "MS in Comp. Sci. @ UdeM",
  bio: "I am a researcher interested in ...", // We might want to fetch this or hardcode a short version
  avatar: "/img/photo_gruv.jpeg",
  socials: [
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=JXxRHAsAAAAJ', icon: Search },
    { name: 'GitHub', url: 'https://github.com/gauranshkumar', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gauranshk21', icon: Linkedin },
    { name: 'Email', url: 'mailto:gauransh.kumar@umontreal.ca', icon: Mail },
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill // Use fill for responsive container
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {profile.role}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {profile.socials.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <social.icon size={24} />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/about">
            <Button size="lg" className="gap-2">
              About Me <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/publications">
            <Button variant="outline" size="lg" className="gap-2">
              Publications <FileText size={16} />
            </Button>
          </Link>
          {/* Add Resume link if needed */}
          <Link href="/resume/Gauransh_Kumar_Resume.pdf" target="_blank">
            <Button variant="ghost" size="lg">
              CV
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
