import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="py-2">
      <div className="min-h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8  ">
        <h1 className=" text-5xl font-bold text-center">RM</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Reminder System</h2>
            <p className="text-gray-600">
              Welcome to our reminder system! We provide a user-friendly platform to help you stay organized and never miss an important task or event again. With our intuitive interface and customizable features, you can easily create, manage, and prioritize your reminders.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Customizable Reminders</h2>
            <p className="text-gray-600">
              Our reminder system allows you to customize your reminders according to your preferences. Set due dates, add descriptions, assign tags, and choose notification preferences to ensure that you never forget an important task or event.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Collaboration</h2>
            <p className="text-gray-600">
              Collaborate with your team or share reminders with friends and family. Our reminder system allows you to invite others to join your projects, assign tasks, and keep everyone on the same page. Stay connected and work together seamlessly.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Intuitive Interface</h2>
            <p className="text-gray-600">
              Our reminder system features an intuitive and user-friendly interface. With easy navigation, clear visuals, and simple controls, you can quickly access and manage your reminders. Stay organized and focused with our streamlined design.
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Mobile-Friendly</h2>
            <p className="text-gray-600">
              Access your reminders on the go with our mobile-friendly platform. Whether you're using a smartphone or tablet, our responsive design ensures that you can stay connected and manage your tasks from anywhere, at any time.
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
    
  );
}
