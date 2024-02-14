import Image from "next/image";
import styles from "./Avatar.module.css";


type props = {
  name: string;
   otherStyles?: string;
}

export function Avatar( {name, otherStyles}: props) {
  return (
    <div className={`relative h-9 w-9 rounded-full ${otherStyles}`} data-tooltip={name}>
      <Image
            src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
            fill
            className="rounded-full"
            alt={name}
          />
    </div>
  );
}