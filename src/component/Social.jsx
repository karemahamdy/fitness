import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,

} from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Social() {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-4">BeFit</h3>
      <p className="text-gray-400">
        Transform your life through expert-guided fitness and nutrition programs.
        Join our community and achieve your health goals today.
      </p>
      <div className="flex space-x-4">
        <Link className="hover:text-red-500 transition-colors" aria-label="Facebook">
          <Facebook className="w-6 h-6" />
        </Link>
        <Link className="hover:text-red-500 transition-colors" aria-label="Twitter">
          <Twitter className="w-6 h-6" />
        </Link>
        <Link className="hover:text-red-500 transition-colors" aria-label="Instagram">
          <Instagram className="w-6 h-6" />
        </Link>
        <Link className="hover:text-red-500 transition-colors" aria-label="Youtube">
          <Youtube className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}
