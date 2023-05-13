import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Image src="/mds-logo.png" width={40} height={40} alt="Logo" />
      <p>Test</p>
    </div>
  );
}
