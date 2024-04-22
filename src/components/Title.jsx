import Logo from "../assets/images/logo.jpeg";

export default function Title({ name }) {
  return (
    <div>
      <img
        src={Logo}
        title="Logo Université de Guyane"
        alt="Logo de l'Université de Guyane"
        width={100}
      />
      <p className="">{name}</p>
    </div>
  );
}
