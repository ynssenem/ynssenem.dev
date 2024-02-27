import Image from "next/image"

import { FC } from "react"

export type SocialProps = {
  label: string
  href: string
  icon: any
}

const Social: FC<SocialProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row gap-3 uppercase tracking-[3px] font-bold text-[10px] items-center hover:opacity-50"
    >
      <Image src={icon} priority alt={label} width={16} />
      <span>{label}</span>
    </a>
  )
}

export default Social
