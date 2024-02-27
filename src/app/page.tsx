import Social, { SocialProps } from "@/components/Social"
import Image from "next/image"

import Dribbble from "@/icons/dribbble.svg"
import Github from "@/icons/github.svg"
import Instagram from "@/icons/instagram.svg"
import Twitter from "@/icons/twitter-alt.svg"
import Youtube from "@/icons/youtube.svg"

const socials: SocialProps[] = [
  {
    href: "https://dribbble.com/ynssenem",
    icon: Dribbble,
    label: "Dribbble",
  },
  {
    href: "https://github.com/ynssenem",
    icon: Github,
    label: "Github",
  },
  {
    href: "https://instagram.com/ynssenem",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@ynssenem",
    icon: Youtube,
    label: "Youtube",
  },
  {
    href: "https://twitter.com/ynssenem",
    icon: Twitter,
    label: "Twitter",
  },
]

export default function Home() {
  return (
    <>
      <div className="w-full h-20 flex flex-row justify-between items-center">
        <p className="text-xl">
          <span className="font-bold">yns</span>senem.
        </p>
        <div className="flex gap-2">
          <p className="emphasis">say hello</p>
          <a href="mailto: me@ynssenem.com" className="hover:opacity-50">
            📨 me@ynssenem.dev
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-row gap-[50px] justify-between items-center">
        <div className="w-2/3 flex flex-col gap-[50px]">
          <h1 className="text-[92px] capitalize leading-[98px]">
            😎 Full Stack Developer & UI Designer
          </h1>
          <p className="text-lg">
            Hello, I am Yunus Senem; an experienced Full Stack Developer and UI/UX Designer. I offer
            custom web and mobile solutions using React, Node.js, and React Native, while also
            contributing to the community through open-source projects and educational YouTube
            content.
          </p>
        </div>
        <div>
          <Image src={"/stock.png"} width={750} height={750} alt="He" />
        </div>
      </div>
      <div className="flex justify-between h-20 items-center gap-10">
        {socials.map((social, index) => (
          <Social key={index} {...social} />
        ))}
      </div>
    </>
  )
}
