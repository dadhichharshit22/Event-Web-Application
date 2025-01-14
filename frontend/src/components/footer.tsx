
import { Button } from './ui/button';

const footer = () => {
  return (
    <div className="bg-[#351952] text-white flex justify-between items-center h-1/2">
      <div className="p-4 h-full w-1/2 flex justify-between flex-col">
        <h1 className="font-meow text-6xl">AuraEvents</h1>

        <div className='space-x-4'>
          <Button variant={"circular"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle
                cx="17"
                cy="7"
                r="1.5"
                fill="currentColor"
                fill-opacity="0"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.3s"
                  dur="0.15s"
                  values="0;1"
                />
              </circle>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="72"
                  stroke-dashoffset="72"
                  d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="72;0"
                  />
                </path>
                <path
                  stroke-dasharray="28"
                  stroke-dashoffset="28"
                  d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.6s"
                    values="28;0"
                  />
                </path>
              </g>
            </svg>
          </Button>
          <Button variant={"circular"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <g fill="none">
                <g clip-path="url(#primeTwitter0)">
                  <path
                    fill="currentColor"
                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                  />
                </g>
                <defs>
                  <clipPath id="primeTwitter0">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center h-full w-1/2 p-4">
        <div >
          <h1 className='font-thin'>Info</h1>

          <div>About us</div>
          <div>Project</div>
          <div>News</div>
          <div>Partners</div>
        </div>
        <Button variant={"secondary"}> connect</Button>

      </div>
    </div>
  );
}   

export default footer
