
import { ArrowRight } from 'lucide-react';
import { FooterLinks } from '../data/Links';

export default function FooterLink() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {FooterLinks.map((item) => (
          <li className="flex items-center text-gray-400 hover:text-red-500 transition-colors" key={item}>
            <ArrowRight className="w-4 h-4 mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
