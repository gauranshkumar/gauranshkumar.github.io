import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-white/10 text-center text-sm text-gray-500">
            <div className="max-w-4xl mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Gauransh Kumar. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    {/* Add social links here if available in config, hardcoded for now or TODO */}
                    <Link href="https://github.com/gauranshkumar" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="https://linkedin.com/in/gauranshkumar" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="https://twitter.com/gauranshkumar" target="_blank" className="hover:text-white transition-colors">Twitter</Link>
                </div>
            </div>
        </footer>
    );
}
