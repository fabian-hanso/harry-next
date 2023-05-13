import Link from "next/link";
import "./ProfileCard.css";

export default function ProfileCard({ entry }) {
  return (
    <div className="ProfileCard">
      <p>{entry.name}</p>
      <Link href={"/caracter/" + entry.id}>Mehr</Link>
    </div>
  );
}
