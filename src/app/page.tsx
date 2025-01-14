import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import GitHubStars from '../components/GitHubStars';
import SubstackEmbed from '../components/SubstackEmbed';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white flex flex-col">
      <Header />
      <div className="border-t-4 border-rust-orange"></div> {/* Orange line */}
      <main className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center space-x-2">
          <a href="https://github.com/FrancescoXX/rustcrab" target="_blank" rel="noopener noreferrer">
            Rustcrab
          </a>
          <Image src="/rust_lgo_720.png" alt="Rust Logo" width={50} height={50} />
        </h1>
        <p className="text-xl">
          the non-crap repo for Rust Developers.
        </p>
        <GitHubStars repo="FrancescoXX/rustcrab" />
        <SubstackEmbed /> {/* Embedding Substack iframe */}
      </main>
      <Footer />
    </div>
  );
}
