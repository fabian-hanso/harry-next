import Navbar from "../../../components/Navbar/Navbar.jsx";

async function getData(id) {
  const res = await fetch("https://hp-api.onrender.com/api/character/" + id);

  return res.json();
}

export default async function Caracter({ params }) {
  const id = params.id;

  const data = await getData(id);

  const test = await data[0];

  return (
    <main>
      <Navbar />
      <section>
        <h1>{test.name}</h1>
        <p>{test.actor}</p>
      </section>
    </main>
  );
}
