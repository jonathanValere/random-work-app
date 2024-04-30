import Logo from "../assets/images/logo.jpeg";

export default function Title({ name }) {
  return (
    <header className="flex flex-row items-center bg-white mb-8">
      <img
        src={Logo}
        title="Logo Université de Guyane"
        alt="Logo de l'Université de Guyane"
        width={70}
      />
      <p className="ml-6 uppercase font-sans">{name}</p>
    </header>
  );
}
