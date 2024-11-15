import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function ContctUs() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
          <span className="text-gray-400">
            123 Fitness Street, Workout City, SP 12345
          </span>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-red-500" />
          <span className="text-gray-400">+1 (555) 123-4567</span>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-red-500" />
          <span className="text-gray-400">info@fitnesspro.com</span>
        </li>
      </ul>
    </div>
  )
}
