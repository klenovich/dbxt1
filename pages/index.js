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
        <h1 className=" text-5xl font-bold text-center">Inv</h1>

        
          <div className="text-center">
            <a
              className="text-gray-500 text-base"
              href="https://www.youtube.com/watch?v=BsRWLwo0YWk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-md my-5 h-48 hover:text-white text-[#1976d2] hover:bg-[#1976d2]">
                <div className="my-4  w-full overflow-hidden">
                  <div className="px-6 py-4">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ fontSize: 30 }}
                      className="pb-4"
                    ></FontAwesomeIcon>{" "}
                    <div className="font-bold text-xl mb-2 ">Youtube Video</div>
                    Check out the youtube showcase video of the app
                  </div>
                </div>
              </div>
            </a>
          </div>{" "}
          <div className="text-center">
            <a
              className="text-gray-500 text-base"
              href="https://clientapi.altogic.com/v1.3.1/modules.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-md my-5 h-48 hover:text-white text-[#1976d2] hover:bg-[#1976d2]">
                <div className="my-4 w-full overflow-hidden">
                  <div className="px-6 py-4">
                    <FontAwesomeIcon
                      icon={faBook}
                      style={{ fontSize: 30 }}
                      className="pb-4"
                    ></FontAwesomeIcon>{" "}
                    <div className="font-bold text-xl mb-2 ">
                      Altogic Client API Reference
                    </div>
                    Learn more about Altogic Client Library
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}
