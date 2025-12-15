
import { User, Phone, Mail, MapPin } from "lucide-react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ chat }) => (
  <div className="bg-white rounded-lg p-4 mb-4">
    <div className="text-center mb-4">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto mb-2">
        {chat.avatar}
      </div>
      <h3 className="font-bold text-gray-900">{chat.name}</h3>
      <p className="text-sm text-gray-500">WhatsApp899</p>
    </div>

    <div className="space-y-3 text-sm">
      <div className="flex items-start gap-2">
        <User className="w-4 h-4 text-gray-400 mt-0.5" />
        <div className="flex-1">
          <p className="text-gray-500">ID</p>
          <p className="text-gray-900">{chat.studentId}</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
        <div className="flex-1">
          <p className="text-gray-500">Phone number</p>
          <p className="text-gray-900">{chat.phone}</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
        <div className="flex-1">
          <p className="text-gray-500">Email</p>
          <p className="text-gray-900">{chat.email}</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
        <div className="flex-1">
          <p className="text-gray-500">Address</p>
          <p className="text-gray-900 text-xs">{chat.address}</p>
        </div>
      </div>
    </div>

    <button className="w-full mt-4 text-blue-500 text-sm hover:underline">
      + Add new attribute
    </button>
  </div>
);

export default ContactInfoCard;