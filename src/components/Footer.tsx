"use client";

import { FaTwitter, FaLinkedin, FaYoutube, FaDiscord, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex justify-center space-x-6 p-4">
      <a href="https://x.com/FrancescoCiull4" target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/francesco-ciulla-roma/" target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        <FaLinkedin />
      </a>
      <a href="https://www.youtube.com/@francescociulla" target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        <FaYoutube />
      </a>
      <a href="https://discord.gg/4c-784142072763383858" target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        <FaDiscord />
      </a>
      <a href="https://www.instagram.com/francescociull4/" target="_blank" rel="noopener noreferrer" className="text-2xl text-rust-orange">
        <FaInstagram />
      </a>
    </footer>
  );
}
